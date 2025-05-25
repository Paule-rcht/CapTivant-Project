<?php
session_start();
require_once 'config.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Vérifie si l'utilisateur est connecté
$estConnecte = isset($_SESSION['user_id']);
$favoris = [];

// Récupère la langue
$langue = $_COOKIE['langue'] ?? 'fr';

// Messages traduits
$messages = [
    'fr' => [
        'added' => "Ajouté aux favoris.",
        'added_local' => "Ajouté localement.",
        'exists' => "Déjà dans vos favoris."
    ],
    'en' => [
        'added' => "Added to favorites.",
        'added_local' => "Added locally.",
        'exists' => "Already in your favorites."
    ]
];

// Si ajout ou retrait depuis POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['id_bateau'])) {
        $idToAdd = (int) $_POST['id_bateau'];

        if ($estConnecte) {
            $user_id = $_SESSION['user_id'];

            $stmt = $pdo->prepare("SELECT COUNT(*) FROM favoris WHERE user_id = ? AND bateau_id = ?");
            $stmt->execute([$user_id, $idToAdd]);
            $existe = $stmt->fetchColumn();

            if ($existe == 0) {
                $stmt = $pdo->prepare("INSERT INTO favoris (user_id, bateau_id) VALUES (?, ?)");
                $stmt->execute([$user_id, $idToAdd]);
                echo $messages[$langue]['added'];
            } else {
                echo $messages[$langue]['exists'];
            }
        } else {
            $favoris = json_decode($_COOKIE['favoris'] ?? '[]', true);
            if (!in_array($idToAdd, $favoris)) {
                $favoris[] = $idToAdd;
                setcookie('favoris', json_encode($favoris), time() + 3600 * 24 * 30, "/");
                echo $messages[$langue]['added_local'];
            } else {
                echo $messages[$langue]['exists'];
            }
        }
        exit;
    }

    if (isset($_POST['retirer_id'])) {
        $idToRemove = (int) $_POST['retirer_id'];

        if ($estConnecte) {
            $user_id = $_SESSION['user_id'];
            $stmt = $pdo->prepare("DELETE FROM favoris WHERE user_id = ? AND bateau_id = ?");
            $stmt->execute([$user_id, $idToRemove]);
            header("Location: favoris.php");
            exit;
        } else {
            $favoris = json_decode($_COOKIE['favoris'] ?? '[]', true);
            if (($key = array_search($idToRemove, $favoris)) !== false) {
                unset($favoris[$key]);
                $favoris = array_values($favoris); // Réindexer
                setcookie('favoris', json_encode($favoris), time() + 3600 * 24 * 30, "/");
                $_COOKIE['favoris'] = json_encode($favoris); // Met à jour la superglobale
            }
            header("Location: favoris.php");
            exit;
        }
    }
}

// Récupération des favoris
if ($estConnecte) {
    $user_id = $_SESSION['user_id'];
    $stmt = $pdo->prepare("SELECT b.* FROM bateaux b JOIN favoris f ON b.id = f.bateau_id WHERE f.user_id = ?");
    $stmt->execute([$user_id]);
    $favoris = $stmt->fetchAll();
} else {
    $favorisIds = json_decode($_COOKIE['favoris'] ?? '[]', true);
    if (is_array($favorisIds) && count($favorisIds) > 0) {
        $placeholders = implode(',', array_fill(0, count($favorisIds), '?'));
        $stmt = $pdo->prepare("SELECT * FROM bateaux WHERE id IN ($placeholders)");
        $stmt->execute($favorisIds);
        $favoris = $stmt->fetchAll();
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title id="page-title">Mon panier</title>
    <link rel="stylesheet" href="PageAccueil.css">
    <link rel="stylesheet" href="favoris.css">
    <link rel="stylesheet" href="nav-barre.css">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
    <script src="info-bateau.js" defer></script>
</head>
<body style="background-color: #c5d8d3;">
<div class="navbar-barre"></div>
<div class="top-left" onclick="toggleMenu()">
    <img src="images/menu.png" alt="Menu">
</div>
<div id="menu-overlay" class="menu-overlay">
    <div class="menu-content" id="menu-links"></div>
</div>
<div class="top-right">
    <div class="language-selector">
        <img id="current-lang" src="images/drapeau-francais.png" alt="Langue" onclick="toggleLangDropdown()" class="drapeau-icon">
        <div id="lang-dropdown" class="lang-dropdown"></div>
    </div>
    <a id="lien-apropos" class="lien-langue" data-page="a-propos" style="color: #e0e0d5; text-decoration: none;">À propos</a>
    <?php if ($estConnecte): ?>
        <a  href="MonCompte.php" style="color: #e0e0d5; font-weight: bold; margin-right: 15px; text-decoration: none;">
            <?= htmlspecialchars($_SESSION['first_name']) ?>
        </a>
    <?php else: ?>
        <a id="lien-compte" href="Connexion.php" style="color: #e0e0d5; text-decoration: none;">Mon Compte</a>
    <?php endif; ?>
</div>
<div class="top-center">
    <div class="logo-block">
        <a href="PageAccueil.php">
            <img src="images/logo.png" alt="Logo">
        </a>
        <p class="logo-slogan">Cap'Tivant</p>
        <h1 class="page-title" id="titre-page">Mon panier</h1>
    </div>
</div>
<div class="favoris-container" id="favoris-container">
    <?php if (count($favoris) === 0): ?>
        <p id="texte-aucun-favori" style="text-align:center; width: 100%; font-family: DM Serif Display; min-height: 2em; display: <?= count($favoris) === 0 ? 'block' : 'none' ?>;">
            Aucun favori enregistré.
        </p>
    <?php else: ?>
        <?php foreach ($favoris as $bateau): ?>
            <div class="favori-card" data-id="<?= $bateau['id'] ?>">
                <img class="image-bateau" src="images/<?= htmlspecialchars($bateau['image1']) ?>" alt="<?= htmlspecialchars($bateau['titre']) ?>">
                <h3 class="titre-bateau"><?= htmlspecialchars($bateau['titre']) ?></h3>
                <p class="infos-bateau"><?= htmlspecialchars($bateau['personnes']) ?> &bull; <?= htmlspecialchars($bateau['cabines']) ?></p>
                <a href="info-bateau.php?id=<?= $bateau['id'] ?>" class="btn-voir">Voir l'offre</a>
                <?php if ($estConnecte): ?>
                    <form method="post" action="favoris.php" onsubmit="return confirm('Retirer ce bateau des favoris ?');">
                        <input type="hidden" name="retirer_id" value="<?= $bateau['id'] ?>">
                        <button type="submit" class="btn-retirer lien-langue" data-key="retirer">Retirer</button>
                    </form>
                <?php else: ?>
                    <button class="btn-retirer lien-langue" data-key="retirer" onclick="retirerFavoriLocal(<?= $bateau['id'] ?>)">Retirer</button>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
<div class="bouton-bas">
    <a id="lien-mentions" class="bottom-text lien-langue" data-page="MentionsLegales" style="color: #577550">Mentions légales</a>
    <span class="bottom-text" style="color: #577550">&bull;</span>
    <a id="lien-contact" class="bottom-text lien-langue" data-page="Contact" style="color: #577550">Contact</a>
</div>
<script>
    function toggleMenu() {
        const menu = document.getElementById("menu-overlay");
        menu.classList.toggle("active");
    }
    function toggleLangDropdown() {
        const dropdown = document.getElementById("lang-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
    function changerLangue(langue) {
        localStorage.setItem("langue", langue);
        location.reload();
    }
    document.addEventListener("click", function(event) {
        const dropdown = document.getElementById("lang-dropdown");
        const icon = document.getElementById("current-lang");
        if (!dropdown.contains(event.target) && !icon.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const langue = localStorage.getItem("langue") || "fr";
        const commun = langue === "en" ? CommunEN : CommunFR;
        const favorisTxt = langue === "en" ? FavorisEN : FavorisFR;
        const bateauxData = langue === "en" ? bateauxEN : bateaux;

        document.title = favorisTxt.titre;
        document.getElementById("page-title").textContent = favorisTxt.titre;
        document.getElementById("titre-page").textContent = favorisTxt.titre;
        const firstName = <?= json_encode($_SESSION['first_name'] ?? '') ?>;
        const compteText = firstName ? `${commun.compte} (${firstName})` : commun.compte;
        document.getElementById("lien-compte").textContent = compteText;

        const aucunFavori = document.getElementById("texte-aucun-favori");
        if (aucunFavori) aucunFavori.textContent = favorisTxt.aucun;

        if (Array.isArray(bateauxData)) {
            document.querySelectorAll(".favori-card").forEach(card => {
                const id = parseInt(card.dataset.id);
                const bateau = bateauxData.find(b => b.id === id);
                if (bateau) {
                    card.querySelector(".image-bateau").src = bateau.image1;
                    card.querySelector(".image-bateau").alt = bateau.titre;
                    card.querySelector(".titre-bateau").textContent = bateau.titre;
                    card.querySelector(".infos-bateau").textContent = `${bateau.personnes} • ${bateau.cabines}`;
                }
            });
        }

        document.querySelectorAll(".btn-voir").forEach(el => {
            el.textContent = favorisTxt.voir;
        });
        document.querySelectorAll(".btn-retirer").forEach(el => {
            el.textContent = favorisTxt.retirer;
        });

        document.getElementById("lien-apropos").textContent = commun.info;
        document.getElementById("lien-mentions").textContent = commun.mentions;
        document.getElementById("lien-contact").textContent = commun.contact;
        document.getElementById("current-lang").src = langue === "en" ? "images/drapeau-anglais.png" : "images/drapeau-francais.png";

        const langDropdown = document.getElementById("lang-dropdown");
        langDropdown.innerHTML = langue === "en"
            ? `<img src="images/drapeau-francais.png" alt="Français" class="drapeau-option" onclick="changerLangue('fr')">`
            : `<img src="images/drapeau-anglais.png" alt="Anglais" class="drapeau-option" onclick="changerLangue('en')">`;

        const liens = ["location", "ports", "MonCompte", "historique", "faq", "avis"];
        const menuContent = document.getElementById("menu-links");
        menuContent.innerHTML = commun.menu.map((item, index) => `<a class="lien-langue" data-page="${liens[index]}">${item}</a>`).join('') + '<span onclick="toggleMenu()" class="close-menu">✕</span>';

        document.querySelectorAll(".lien-langue").forEach(lien => {
            const page = lien.getAttribute("data-page");
            lien.setAttribute("href", `${page}.php`);
        });




    });

    function retirerFavoriLocal(id) {
        let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");

        // Supprimer uniquement l'ID ciblé
        favoris = favoris.filter(fav => fav !== id);

        // Met à jour localStorage et cookie AVANT rechargement
        localStorage.setItem("favoris", JSON.stringify(favoris));
        document.cookie = "favoris=" + encodeURIComponent(JSON.stringify(favoris)) + "; path=/";

        // Supprime visuellement la carte sans rechargement
        const card = document.querySelector(`.favori-card[data-id="${id}"]`);
        if (card) card.remove();
        // Si plus aucun favori, afficher le message
        if (document.querySelectorAll(".favori-card").length === 0) {
            const texteAucun = document.getElementById("texte-aucun-favori");
            if (texteAucun) texteAucun.style.display = "block";
        }

    }
</script>
</body>
</html>
