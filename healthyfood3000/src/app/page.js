"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  // State für das Hamburger-Menü
  const [isOpen, setIsOpen] = useState(false);

  // Funktion zum Umschalten des Menüs
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Navbar */}
      <header className="bg-green-600 text-white py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/pic/logobanner.png"
              alt="Logo Banner"
              width={200}
              height={50}
            />
          </Link>
          {/* Hamburger Button */}
          <div className="sm:hidden flex items-center" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Navbar Links */}
          <nav>
            <ul className={`sm:flex ${isOpen ? 'block' : 'hidden'} space-x-6`}>
              <li>
                <Link href="/" className="hover:underline hover:text-green-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline hover:text-green-400 transition duration-300">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline hover:text-green-400 transition duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline hover:text-green-400 transition duration-300">
                  Beratung
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <main>
        {/* Hero Section */}
        <section className="bg-cover bg-center text-white py-20 text-center relative transition-all duration-500 transform hover:scale-105" style={{ backgroundImage: `url(https://images.prismic.io/herohealth/ZvvkVLVsGrYSwN5v_veggies.jpeg?auto=format%2Ccompress&fit=max&w=4000&h=1957)` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto">
            <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Frisch, Gesund, Lecker</h2>
            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Erleben Sie die Zukunft der gesunden Ernährung mit HealthyFood3000.</p>
            <button className="mt-6 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg hover:bg-green-200 transition-all duration-300 transform hover:scale-105">
              <Link href="/about">Mehr erfahren</Link>
            </button>
          </div>
        </section>



        <section id="products" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Unsere Produkte
              <span className="text-xs text-white bg-orange-500 py-1 px-2 rounded-full inline-block -mb-4 transform scale-75">
                Favoriten
              </span>
            </h3>


            <p className="text-gray-600 mb-6">
              Entdecken Sie unser breites Sortiment an frischen, biologischen und nachhaltigen Lebensmitteln.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* FoodBox Common Item */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <div className="relative mb-4">
                  <Image
                    src="/pic/healthyfood_common.png"
                    alt="Normale FoodBox"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">Common FoodBox</h4>
                <p className="text-gray-600 mb-4">Frisch, gesund und nachhaltig – die perfekte Wahl für Ihre Ernährung.</p>
                <p className="text-green-600 text-xl font-semibold">20 CHF / Monat</p>
                <Link href={`/subscribe/CommonFoodBox`}>
                  <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    Abo abschliessen
                  </button>
                </Link>
              </div>

              {/* FoodBox medium Item */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <div className="relative mb-4">
                  <Image
                    src="/pic/healthyfood_medium.png"
                    alt="Medium FoodBox"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">Medium FoodBox</h4>
                <p className="text-gray-600 mb-4">Organisiert, Grössere Auswahl, Frisch, gesund und nachhaltig – die perfekte Wahl für organisierte Ernährung.</p>
                <p className="text-green-600 text-xl font-semibold">30 CHF / Monat</p>
                <Link href={`/subscribe/MediumFoodBox`}>
                  <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    Abo abschliessen
                  </button>
                </Link>
              </div>

              {/* FoodBox deluxe */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <div className="relative mb-4">
                  <Image
                    src="/pic/healthyfood_deluxe.png"
                    alt="Normale FoodBox"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">Deluxe FoodBox<span className="text-xs text-white bg-violet-500 py-1 px-2 rounded-full inline-block -mb-4 transform scale-75">
                  Favorit
                </span></h4>
                <p className="text-gray-600 mb-4">Wellness, Spa, Obst, gesunde Gerichte, alles was man sich vorstellen kann – die perfekte Wahl für langfristige Gesundheit.</p>
                <p className="text-green-600 text-xl font-semibold">100 CHF / Monat</p>
                <Link href={`/subscribe/DeluxeFoodBox`}>
                  <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    Abo abschliessen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Beratung</h3>
            <p className="text-gray-600 mb-4">
              Möchten sie eine persönliche Beratung für ihre Nährwerte haben oder haben Sie einfach Fragen? Kontaktieren Sie uns gerne!
            </p>
            <a
              href="mailto:info@healthyfood3000.com"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Email senden
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HealthyFood3000. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
