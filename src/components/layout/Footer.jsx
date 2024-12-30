import React from "react";
import { Link } from "react-router-dom";
import {
  /*  Meta, // Nouveau nom pour Facebook
  X, // Nouveau nom pour Twitter
   Instagram, // Instagram reste le même
   Linkedin, // LinkedIn reste le même mais avec un 'i' minuscule
  Mail, */
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 ml-4">À propos</h3>
            <p className="text-gray-400 mb-4 ml-3">
              Nous sommes spécialisés dans les services de nettoyage
              professionnel pour particuliers et entreprises, offrant des
              solutions sur mesure pour tous vos besoins.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Meta className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a> */}
            </div>
          </div>

          {/* Le reste du composant reste inchangé */}
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/residential"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nettoyage Résidentiel
                </Link>
              </li>
              <li>
                <Link
                  to="/services/commercial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nettoyage Commercial
                </Link>
              </li>
              <li>
                <Link
                  to="/services/industrial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nettoyage Industriel
                </Link>
              </li>
              <li>
                <Link
                  to="/services/special"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services Spécialisés
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Carrières
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">
                  123 Rue du Nettoyage, BP 1076 Abidjan 01
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a
                  href="tel:+33123456789"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +225 71 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                {/* <Mail className="w-5 h-5 text-blue-500" /> */}
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres
              spéciales.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
                         focus:ring-blue-500 bg-gray-800 text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition-colors duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Proxi-services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
