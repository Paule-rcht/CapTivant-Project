# ⛵ Cap'Tivant — Plateforme de Location de Bateaux

https://paule-rcht.github.io/CapTivant-Project/MentionsLegales.html

**Cap'Tivant** est une application web front-end complète dédiée à la réservation et à la location de bateaux. Initialement conçue avec un back-end PHP/MySQL, l'application a été entièrement refondue en **application client-side 100 % statique** afin d'être hébergée gratuitement et de manière optimale sur **GitHub Pages**.

---

## 🌟 Fonctionnalités Principales

* **🧭 Navigation & Recherche Dynamique :** 
  * Recherche par port de départ, dates de réservation, type de navire (moteur / voile) et capacité de passagers.
  * Autocomplétion dynamique des ports.
* **🌐 Support Multilingue (FR / EN) :** 
  * Basculement instantané de la langue sur l'ensemble des pages via un sélecteur de drapeau, avec persistance dans le `localStorage`.
* **👤 Authentification Client-Side (`localStorage`) :**
  * Inscription dynamique avec validation de formulaire, masquage du mot de passe (œil interactif) et sécurité Captcha.
  * Connexion/Déconnexion locale et gestion dynamique des liens de menu ("Mon Compte" / "Connexion").
* **🗺️ Carte Interactive des Ports (Leaflet JS) :**
  * Visualisation cartographique des ports avec popups bilingues, liens vers les offres et filtrage automatique.
* **⭐ Avis & Évaluations :**
  * Calcul de la moyenne des notes par bateau.
  * Modale interactive permettant de consulter les commentaires déposés.
* **🛒 Favoris & Historique de Réservation :**
  * Ajout/Suppression de bateaux en favoris.
  * Conservation de l'historique de paiement et de réservation.
* **♿ Accessibilité & Audio d'ambiance :**
  * Mode contraste/accessibilité activable.
  * Fond sonore marin optionnel avec contrôle du volume.

---

## 📂 Structure du Projet

```text
CapTivant/
├── index.html              # Page d'accueil (Carrousel, carte d'aperçu, accessibilité)
├── location.html           # Page de recherche de bateaux avec filtres
├── offre.html              # Liste et carrousels des bateaux disponibles
├── info-bateau.html        # Fiche détaillée du bateau, carte Leaflet et avis
├── payement.html           # Formulaire de réservation, options et total
├── historique.html         # Historique des réservations effectuées
├── favoris.html            # Gestion du panier et des favoris
├── ports.html              # Carte interactive de l'ensemble des ports
├── a-propos.html           # Présentation de Cap'Tivant
├── faq.html                # Foire aux questions
├── Connexion.html          # Page de connexion
├── Inscription.html        # Formulaire d'inscription sécurisé (Captcha, toggle mdp)
├── mdp-oublier.html        # Réinitialisation de mot de passe
├── MentionsLegales.html    # Mentions légales conformes RGPD
├── Contact.html            # Page de contact
├── info-bateau.js          # Base de données JS des bateaux et traductions (FR/EN)
├── ports-info.js / ports.js# Données et scripts de la carte Leaflet
├── PageAccueil.css         # Styles globaux (Header, Footer, Menu Overlay)
└── images/                 # Visuels, icônes et drapeaux
