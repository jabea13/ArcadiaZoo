import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html", "/js/script.js"),
    new Route("/connexion", "Connexion", "/pages/connexion.html", "/js/auth/connexion.js", "/js/script.js"),
    new Route("/contact", "Contact", "/pages/contact.html", "/js/auth/contact.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";