# ⛵ Cap'Tivant — Plateforme de Location de Bateaux

https://paule-rcht.github.io/CapTivant-Project/PageAccueil.html

**Cap'Tivant** est une application web front-end complète dédiée à la réservation et à la location de bateaux. Initialement conçue avec un back-end PHP/MySQL, l'application a été entièrement refondue en **application client-side 100 % statique** afin d'être hébergée gratuitement et de manière optimale sur **GitHub Pages**.

---

## 🌟 Fonctionnalités Principales

- **🧭 Navigation & Recherche Dynamique :**
  - Recherche par port de départ, dates de réservation, type de navire (moteur / voile) et capacité de passagers.
  - Autocomplétion dynamique des ports.
- **🌐 Support Multilingue (FR / EN) :**
  - Basculement instantané de la langue sur l'ensemble des pages via un sélecteur de drapeau, avec persistance dans le `localStorage`.
- **♿ Accessibilité & Mode Malvoyant :**
  - Mode d'accessibilité visuelle adapté avec contrastes renforcés et typographie agrandie.
  - Guide vocal interactif bilingue (FR/EN) déclenchant la lecture audio des éléments (`.mp3`) au survol de la souris pour accompagner les personnes malvoyantes sur la page d'accueil.
- **👤 Authentification Client-Side (`localStorage`) :**
  - Inscription dynamique avec validation de formulaire, masquage du mot de passe (émojis interactifs) et sécurité Captcha mathématique.
  - Connexion/Déconnexion locale et gestion dynamique des liens de menu ("Mon Compte" / "Connexion").
- **🗺️ Carte Interactive des Ports (Leaflet JS) :**
  - Visualisation cartographique des ports avec popups bilingues, liens vers les offres et filtrage automatique.
- **⭐ Avis & Évaluations :**
  - Calcul de la moyenne des notes par bateau.
  - Modale interactive permettant de consulter les commentaires déposés.
- **🛒 Favoris & Historique de Réservation :**
  - Ajout/Suppression de bateaux en favoris.
  - Conservation de l'historique de paiement et de réservation.

---

## 📂 Structure du Projet

```text
CapTivant/
├── index.html              # Page d'accueil (Carrousel, carte Leaflet, accessibilité & guide vocal au survol)
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
├── son/                    # Fichiers audio du guide vocal bilingue (.mp3)
└── images/                 # Visuels, icônes et drapeaux
```

------------------------------------------------------------------------------

# ⛵ Cap'Tivant — Boat Rental Platform

https://paule-rcht.github.io/CapTivant-Project/PageAccueil.html

**Cap'Tivant** is a full front-end web application dedicated to boat rentals and reservations. Originally built with a PHP/MySQL back-end, the application has been completely refactored into a **100% static client-side web app** for seamless, free hosting on **GitHub Pages**.

---

## 🌟 Key Features

- **🧭 Dynamic Navigation & Search:**
  - Search by departure port, reservation dates, vessel type (motorboat / sailboat), and passenger capacity.
  - Dynamic autocomplete for ports.
- **🌐 Bilingual Support (FR / EN):**
  - Instant language switching across all pages via a flag selector, with preference saved in `localStorage`.
- **♿ Accessibility & Visually Impaired Mode:**
  - Customized visual accessibility mode with high contrast and enlarged typography.
  - Interactive bilingual (FR/EN) voice guide triggering audio playback (`.mp3`) when hovering over page elements to assist visually impaired users on the home page.
- **👤 Client-Side Authentication (`localStorage`):**
  - Dynamic user registration with form validation, password visibility toggle (interactive emojis), and Math Captcha security.
  - Local Login/Logout with dynamic navigation menu updates ("My Account" / "Login").
- **🗺️ Interactive Map of Ports (Leaflet JS):**
  - Interactive map displaying ports with bilingual popups, links to available offers, and automatic filtering.
- **⭐ Reviews & Ratings:**
  - Average rating calculation per boat.
  - Interactive modal to view user feedback and comments.
- **🛒 Favorites & Booking History:**
  - Add or remove boats from your favorites.
  - Local storage of booking and payment history.

---

## 📂 Project Structure

```text
CapTivant/
├── index.html              # Homepage (Carousel, Leaflet map preview, accessibility & voice guide)
├── location.html           # Boat search page with filters
├── offre.html              # List and carousels of available boats
├── info-bateau.html        # Detailed boat specs, Leaflet map, and reviews
├── payement.html           # Booking form, options, and price total
├── historique.html         # User booking history
├── favoris.html            # Favorites and cart management
├── ports.html              # Interactive map of all ports
├── a-propos.html           # About Cap'Tivant
├── faq.html                # Frequently Asked Questions
├── Connexion.html          # Login page
├── Inscription.html        # Secure registration form (Captcha, password toggle)
├── mdp-oublier.html        # Password reset page
├── MentionsLegales.html    # GDPR-compliant legal notices
├── Contact.html            # Contact page
├── info-bateau.js          # JS Database of boats and translations (FR/EN)
├── ports-info.js / ports.js# Leaflet map data and scripts
├── PageAccueil.css         # Global styles (Header, Footer, Menu Overlay)
├── son/                    # Bilingual voice guide audio files (.mp3)
└── images/                 # Assets, icons, and flags