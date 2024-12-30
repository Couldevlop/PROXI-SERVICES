import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-20 px-4 lg:px-16 mt-20">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Nous contacter</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-12">
        Chez <span className="font-semibold">Proxi-services</span>, nous sommes
        toujours à votre écoute. Que vous ayez une question, un besoin
        d'assistance ou que vous souhaitiez en savoir plus sur nos services,
        n'hésitez pas à nous contacter via les moyens suivants.
      </p>

      {/* Coordonnées */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Coordonnées
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <strong>Adresse :</strong> Rue des Services, Abidjan, Côte
              d’Ivoire
            </li>
            <li>
              <strong>Téléphone :</strong>{" "}
              <a
                href="tel:+2250123456789"
                className="text-blue-600 hover:underline"
              >
                +225 01 23 45 67 89
              </a>
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:contact@proxi-services.com"
                className="text-blue-600 hover:underline"
              >
                contact@proxi-services.com
              </a>
            </li>
            <li>
              <strong>Horaires :</strong> Lundi - Vendredi, 9h00 - 18h00
            </li>
          </ul>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Formulaire de contact
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Comment pouvons-nous vous aider ?"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Carte interactive */}
      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Notre emplacement
        </h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019574835091!2d-3.997120984672825!3d5.345605496137078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb8f8d7a0d9e38f%3A0x400d7139dd5f9eb3!2sAbidjan!5e0!3m2!1sen!2sci!4v1682581798456!5m2!1sen!2sci"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
            title="Localisation de Proxi-services sur la carte"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
