const bateaux = [
    {
        id: 1,
        titre: "Bateau Moteur - 2022",
        image1: "images/bateau1.png",
        image2: "images/bateau2.png",
        personnes: "3 personnes",
        cabines: "1 cabine",
        longueur: "6 mètres",
        prix: "1695€/semaine",
        port: "Vannes",
        categorie: "moteur",
    },
    {
        id: 2,
        titre: "Lagoon 42 - 2020",
        image1: "images/catamaran1.png",
        image2: "images/catamaran2.png",
        personnes: "12 personnes",
        cabines: "5 cabines",
        longueur: "21 mètres",
        prix: "3995€/semaine",
        port: "Brest",
        categorie: "voile",
    },
    {
        id: 3,
        titre: "Bateau à voile",
        image1: "images/bateau-voile1.png",
        image2: "images/bateau-voile2.png",
        personnes: "8 personnes",
        cabines: "3 cabines",
        longueur: "35 mètres",
        prix: "3695€/semaine",
        port: "Concarneau",
        categorie: "voile",
    },
    {
        id: 4,
        titre: "Bateau à moteur",
        image1: "images/moteur1.png",
        image2: "images/moteur2.png",
        personnes: "4 personnes",
        cabines: "2 cabines",
        longueur: "20 mètres",
        prix: "2185€/semaine",
        port: "Marseille",
        categorie: "moteur",
    },
    {
        id: 6,
        titre: "White Shark - 2021",
        image1: "images/whiteshark1.png",
        image2: "images/whiteshark2.jpg",
        personnes: "8 personnes",
        cabines: "1 cabine",
        longueur: "7 mètres",
        prix: "2695€/semaine",
        port: "Concarneau",
        categorie: "moteur",
    },
    {
        id: 7,
        titre: "Béténeau - 1985",
        image1: "images/Bénéteau1.png",
        image2: "images/Bénéteau2.png",
        personnes: "6 personnes",
        cabines: "2 cabines",
        longueur: "9 mètres",
        prix: "1500€/semaine",
        port: "Lorient",
        categorie: "voile",
    },
    {
        id: 8,
        titre: "Voilier - 2015",
        image1: "images/voilier1.png",
        image2: "images/voilier2.png",
        personnes: "8 personnes",
        cabines: "3 cabines",
        longueur: "11 mètres",
        prix: "2001€/semaine",
        port: "Marseille",
        categorie: "voile",
    },
    {
        id: 9,
        titre: "Dream 52 - 2002",
        image1: "images/dream1.png",
        image2: "images/dream2.png",
        personnes: "5 personnes",
        cabines: "2 cabines",
        longueur: "16 mètres",
        prix: "2240€/semaine",
        port: "Vannes",
        categorie: "voile",
    },
    {
        id: 10,
        titre: "Ocean Breeze 45 - 2010",
        image1: "images/oceanbreeze1.png",
        image2: "images/oceaanbreeze2.png",
        personnes: "6 personnes",
        cabines: "3 cabines",
        longueur: "14 mètres",
        prix: "1980€/semaine",
        port: "Bordeaux",
        categorie: "voile",
    },
    {
        id: 11,
        titre: "Speed Cruiser 38 - 2015",
        image1: "images/speedcruiser1.png",
        image2: "images/speedcruiser2.png",
        personnes: "4 personnes",
        cabines: "1 cabine",
        longueur: "12 mètres",
        prix: "2750€/semaine",
        port: "Bordeaux",
        categorie: "moteur",
    }
];

const bateauxEN = bateaux.map(b => ({
    ...b,
    personnes: b.personnes.replace("personnes", "people").replace("personne", "person"),
    cabines: b.cabines.replace("cabines", "cabins").replace("cabine", "cabin"),
    longueur: b.longueur.replace("mètres", "meters").replace("mètre", "meter"),
    prix: b.prix.replace("/semaine", "/week")
}));


const AProposFR = {
    titre: "À propos",
    banniere: "Équipage Cap'Tivant",
    paragraphes: [
        "Cap’Tivant est une plateforme de réservation de bateaux conçue pour rendre la navigation accessible à tous.",
        "Notre mission est de vous garantir une expérience fluide et agréable, tout en facilitant la mise en relation entre les propriétaires et les amateurs de navigation."
    ],
};

const AProposEN = {
    titre: "About",
    banniere: "Cap'Tivant Crew",
    paragraphes: [
        "Cap’Tivant is a boat booking platform designed to make sailing accessible to everyone.",
        "Our mission is to ensure a smooth and enjoyable experience while facilitating the connection between boat owners and sailing enthusiasts."
    ],
};

// ======== Menu de gauche ========
const CommunFR = {
    info: "À propos",
    compte: "Mon Compte",
    menu: ["LOCATION", "NOS PORTS", "MON COMPTE", "HISTORIQUE", "FAQ", "AVIS"],
    mentions: "Mentions légales",
    contact: "Contact",
};

const CommunEN = {
    info: "About",
    compte: "My account",
    menu: ["RENTAL", "OUR PORTS", "MY ACCOUNT", "HISTORY", "FAQ", "REVIEWS"],
    mentions: "Legal notice",
    contact: "Contact",
};

const AvisFR = {
    titre: "Avis",
    aucunAvis: "Aucun avis pour le moment.",
};

const AvisEN = {
    titre: "Reviews",
    aucunAvis: "No reviews yet.",
};

const ConnexionFR = {
    titre: "Connexion",
    email: "Entrez votre adresse mail",
    mdp: "Entrez votre mot de passe",
    bouton: "Se connecter",
    inscription: "Inscription",
    mdpOublie: "Mot de passe oublié"
};

const ConnexionEN = {
    titre: "Login",
    email: "Enter your email address",
    mdp: "Enter your password",
    bouton: "Log in",
    inscription: "Sign up",
    mdpOublie: "Forgot password"
};

const ContactFR = {
    titre: "Nous contacter",
    texte: "Pour toute question, veuillez nous contacter par mail à captivant@gmail.com ou via le formulaire de contact ci-dessous.",
    nom: "Nom",
    email: "E-mail",
    telephone: "Entrez votre téléphone",
    label: "Message",
    msg: "Entrez votre message",
    bouton: "Envoyer"
};

const ContactEN = {
    titre: "Contact us",
    texte: "For any questions, please contact us by email at captivant@gmail.com or via the form below.",
    nom: "Name",
    email: "Email",
    telephone: "Enter your phone",
    label: "Message",
    msg: "Enter your message",
    bouton: "Send"
};

const FAQFR = {
    titre: "Foire aux questions",
    questions: [
        {
            question: "Si je ne réserve pas et me déconnecte, ma réservation reste-t-elle ?",
            reponse: "Oui, votre liste de favoris est associée à votre compte. En vous reconnectant, vous la retrouverez..."
        },
        {
            question: "Y a-t-il des gilets de sauvetage dans le bateau ?",
            reponse: "Oui, chaque bateau est équipé de gilets pour adultes et enfants."
        },
        {
            question: "Peut-on annuler notre réservation en cas de mauvais temps ?",
            reponse: "Oui, en cas de conditions météo défavorables, une annulation sans frais est possible."
        }
    ]
};

const FAQEN = {
    titre: "Frequently Asked Questions",
    questions: [
        {
            question: "If I log out without booking, will my reservation remain?",
            reponse: "Yes, your favorites list is linked to your account. When you log back in, it will be there..."
        },
        {
            question: "Are there life jackets on the boat?",
            reponse: "Yes, each boat is equipped with life jackets for both adults and children."
        },
        {
            question: "Can we cancel our reservation in bad weather?",
            reponse: "Yes, in case of bad weather conditions, a cancellation without fees is possible."
        }
    ]
};

const FavorisFR = {
    titre: "Mon panier",
    aucun: "Aucun favori pour le moment.",
    voir: "Voir le bateau",
    retirer: "Retirer",
    note: "Note",
};

const FavorisEN = {
    titre: "My favorites",
    aucun: "No favorites at the moment.",
    voir: "See the boat",
    retirer: "Remove",
    note: "Rating",
};

const HistoriqueFR = {
    titre: "Historique",
    vider: "Vider l'historique",
    vide: "Aucune réservation enregistrée pour le moment.",
    port: "Port",
    personnes: "Personnes",
    cabines: "Cabines",
    longueur: "Longueur",
    prix: "Prix",
    avis: "Laisser un avis",
    commentaire: "Commentaire",
    note: "Note",
    poste: "Posté le",
    popup_titre: "Merci pour votre réservation !",
    popup_texte: "Laissez-nous un avis sur votre expérience :",
    popup_commentaire: "Votre commentaire...",
    popup_label_note: "Note",
    popup_bouton_valider: "Valider l'avis",
    popup_bouton_fermer: "Fermer",
    laisserAvis: "Vous n'avez pas encore laissé d'avis pour ce bateau.",
    alerte_champs_vides: "Merci de remplir tous les champs.",
    alerte_succes: "Merci ! Votre avis a été enregistré.",
    alerte_erreur: "Une erreur est survenue lors de l’envoi de l’avis."
};

const HistoriqueEN = {
    titre: "History",
    vider: "Clear history",
    vide: "No bookings saved yet.",
    port: "Port",
    personnes: "People",
    cabines: "Cabins",
    longueur: "Length",
    prix: "Price",
    avis: "Leave a review",
    commentaire: "Comment",
    note: "Rating",
    poste: "Posted on",
    popup_titre: "Thank you for your booking!",
    popup_texte: "Leave us a review about your experience:",
    popup_commentaire: "Your comment...",
    popup_label_note: "Rating",
    popup_bouton_valider: "Submit review",
    popup_bouton_fermer: "Close",
    laisserAvis: "You have not given a review for this boat yet.",
    alerte_champs_vides: "Please fill in all fields.",
    alerte_succes: "Thank you! Your review has been submitted.",
    alerte_erreur: "An error occurred while submitting your review."
};

const InfoBateauFR = {
    reserver: "Réserver",
    favori: "Ajouter au panier",
    retour: "Offre"
};

const InfoBateauEN = {
    reserver: "Book now",
    favori: "Add to cart",
    retour: "Offer"
};

const InscriptionFR = {
    titre: "Inscription",
    nom: "Nom",
    prenom: "Prénom",
    email: "Entrez votre adresse mail",
    mdp: "Entrez votre mot de passe",
    confirmerMdp: "Confirmez votre mot de passe",
    conditions: "Accepter les conditions d'utilisations",
    bouton: "S'inscrire",
    lienConnexion: "Se connecter",
    newsletter: "Je souhaite m'inscrire à la newsletter",
    captcha: "Je ne suis pas un robot",
    champs: "Ce champs est obligatoire"
};

const InscriptionEN = {
    titre: "Sign up",
    nom: "Last name",
    prenom: "First name",
    email: "Enter your email address",
    mdp: "Enter your password",
    confirmerMdp: "Confirm your password",
    conditions: "Accept the terms of use",
    bouton: "Sign up",
    lienConnexion: "Log in",
    newsletter: "I want to subscribe to the newsletter",
    captcha: "I am not a robot",
    champs: "This field is required"
};

const LocationFR = {
    titre: "Location",
    depart: "Date de départ",
    arrive: "Date d'arrivée",
    lieu: "Lieu de location",
    moteur: "Moteur",
    voile: "À voile",
    personnes: "Nombre minimal de personnes",
    recherche: "Recherche"
};

const LocationEN = {
    titre: "Rental",
    depart: "Departure date",
    arrive: "Date of arrival",
    lieu: "Rental place",
    moteur: "Motor",
    voile: "Sailing",
    personnes: "Minimum number of people",
    recherche: "Search"
};

const MdpFR = {
    titre: "Réinitialiser votre mot de passe",
    placeholder: "E-mail lié au compte",
    bouton: "Recevoir le lien de connexion",
    retour: "Retour à la connexion",
    lien: "✔️ Un lien a été envoyé à l'adresse :"
};

const MdpEN = {
    titre: "Reset your password",
    placeholder: "Email linked to account",
    bouton: "Send login link",
    retour: "Back to login",
    lien: "✔️ A link has been sent to the address :"
};

const CompteFR = {
    titre: "Mon Compte",
    labelInfos: "Mes informations",
    labelAdresse: "Mon adresse",
    nom: "Nom",
    prenom: "Prénom",
    rue: "Rue",
    adresse: "Adresse",
    codePostal: "Code postal",
    email: "E-mail",
    ville: "Ville",
    pays: "Pays",
    telephone: "Numéro de téléphone",
    mdp: "Mot de passe",
    bouton: "Modifier",
    deconnexion: "Se déconnecter"
};

const CompteEN = {
    titre: "My Account",
    labelInfos: "My Information",
    labelAdresse: "My Address",
    nom: "Last name",
    prenom: "First name",
    rue: "Street",
    adresse: "Address",
    codePostal: "Postal code",
    email: "Email",
    ville: "City",
    pays: "Country",
    telephone: "Phone number",
    mdp: "Password",
    bouton: "Update",
    deconnexion: "Log out"
};

const OffreFR = {
    titre: "Offres",
    aucunBateau: "Aucun bateau trouvé pour ce port."
};

const OffreEN = {
    titre: "Offers",
    aucunBateau: "No boats found for this port."
};

const AccueilFR = {
    titre: "Cap'Tivant - Accueil",
    textePrincipal: "Cap'Tivant",
    texteSecondaire: "Location de bateau"
};

const AccueilEN = {
    titre: "Cap'Tivant - Home",
    textePrincipal: "Cap'Tivant",
    texteSecondaire: "Boat rental"
};

// Texte multilingue pour la page Paiement
const PaiementFR = {
    titre: "Paiement",
    offre: "Offre",
    reservation: "Réservation",
    selectLabel: "Sélectionnez le nombre de personnes :",
    enfantLabel: "Enfant à bord",
    optionsTitre: "Options supplémentaires",
    skipper: "Skipper (+200€)",
    nettoyage: "Nettoyage final (+80€)",
    literie: "Literie et serviettes (+50€)",
    choisirNombre: "Choisissez un nombre",
    total: "Total à payer :",
    payer: "Payer",
    personneSingulier: " personne",
    personnePluriel: " personnes",
    dejaReserve: "Vous avez déjà réservé ce bateau.",
    merci: "Merci d'avoir réservé chez nous ! À bientôt",
    port: "Port :",
    personnes: "Nombre de personnes maximum :",
    cabines: "Cabines :",
    longueur: "Longueur :",
    prix: "Prix :",
    avis: "Avis :",
    date_debut: "Date de départ :",
    date_fin: "Date de retour :",
    champsObligatoires: "Veuillez remplir toutes les informations obligatoires.",
};

const PaiementEN = {
    titre: "Payment",
    offre: "Offer",
    reservation: "Booking",
    selectLabel: "Select the number of people:",
    enfantLabel: "Child on board",
    optionsTitre: "Additional options",
    skipper: "Skipper (+€200)",
    nettoyage: "Final cleaning (+€80)",
    literie: "Bedding and towels (+€50)",
    choisirNombre: "Choose a number",
    total: "Total to pay:",
    payer: "Pay",
    personneSingulier: " person",
    personnePluriel: " people",
    dejaReserve: "You have already booked this boat.",
    merci: "Thank you for booking with us! See you soon",
    port: "Port:",
    personnes: "Maximum number of people:",
    cabines: "Cabins:",
    longueur: "Length:",
    prix: "Price:",
    avis: "Reviews:",
    date_debut: "Departure date:",
    date_fin: "Date of arrival:",
    champsObligatoires: "Please fill in all required fields.",
};


const MessagesFR = {
    ajoute: "Ajouté aux favoris.",
    ajouteLocal: "Ajouté localement.",
    deja: "Déjà dans vos favoris.",
    erreur: "Une erreur est survenue."
};

const MessagesEN = {
    ajoute: "Added to favorites.",
    ajouteLocal: "Added locally.",
    deja: "Already in your favorites.",
    erreur: "An error occurred."
};

const PortsFR = {
    titre: "Nos Ports",
    disponible: "Bateau disponible",
    voirOffres: "Voir les offres"
}

const PortsEN = {
    titre: "Our Ports",
    disponible: "Boat available",
    voirOffres: "View offers",
}

const ReinitialisationFR ={
    titre: "Réinitialiser votre mot de passe",
    reinitialiser: "Réinitialisation pour : ",
    nv: "Nouveau mot de passe",
    valider: "Valider",
}

const ReinitialisationEN ={
    titre: "Reset your password",
    reinitialiser: "Reset for : ",
    nv: "New password",
    valider: "Confirm",
}