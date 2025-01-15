"use client"
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function Shop() {
    const products = [
        {
            id: "CommonFoodBox",
            title: "Common FoodBox",
            description: "Frisch, gesund und nachhaltig – die perfekte Wahl für Ihre Ernährung.",
            price: "20 CHF / Monat",
            image: "/pic/healthyfood_common.png",
        },
        {
            id: "MediumFoodBox",
            title: "Medium FoodBox",
            description: "Organisiert, Grössere Auswahl, Frisch, gesund und nachhaltig – die perfekte Wahl für organisierte Ernährung.",
            price: "30 CHF / Monat",
            image: "/pic/healthyfood_medium.png",
        },
        {
            id: "DeluxeFoodBox",
            title: "Deluxe FoodBox",
            description: "Wellness, Spa, Obst, gesunde Gerichte, alles was man sich vorstellen kann – die perfekte Wahl für langfristige Gesundheit.",
            price: "100 CHF / Monat",
            image: "/pic/healthyfood_deluxe.png",
        },
        {
            id: "Test",
            title: "Test",
            description: "Test",
            price: "0 CHF / Monat",
            image: "/pic/fruit.png",
        },
    ];

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
                            height={50} />
                    </Link>

                    {/* Hamburger Icon für kleine Bildschirme */}
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

                    {/* Navigation */}
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
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Shop</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Link href={`/subscribe/${product.id}`} key={product.id}>
                                    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl flex flex-col h-[28rem] w-80">
                                        <div className="relative mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={500}
                                                height={300}
                                                className="object-cover rounded-lg w-full h-40 transition-transform duration-500 ease-in-out transform hover:scale-110"
                                            />
                                        </div>
                                        <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                                        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                                        <p className="text-green-600 text-xl font-semibold">{product.price}</p>
                                        <div className="mt-4">
                                            <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                                                Details ansehen
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
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
