"use client"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function AboutPage() {
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

            {/* Main Content */}
            <section className="py-16 container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Wer wir sind</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                    Wir bieten gesunde und nachhaltige Lebensmittel, die direkt zu Ihnen nach Hause geliefert werden.
                    Unser Ziel ist es, eine bessere Zukunft für Ernährung und Umwelt zu schaffen. Erleben Sie den Unterschied
                    mit frischen, lokal produzierten Zutaten – jeden Tag.
                </p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                    HealthyFood3000 ist mehr als nur ein Lebensmittel-Lieferdienst. Wir setzen auf Nachhaltigkeit, Qualität und
                    Frische – direkt aus der Region.
                </p>
            </section>

            {/* Team Section */}
            <section className="bg-gray-200 mt-4 py-16 container mx-auto px-4 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Unser Team</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Member Card */}
                    {["Timo Weber", "VinDePrinz", "TiBeWe", "KenyBoy"].map((member, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={`/pic/member${index + 1}.png`} // Ersetze mit den tatsächlichen Bildpfaden
                                alt={`${member}`}
                                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:invert transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-white rounded-lg">
                                <h4 className="text-lg font-bold">{member}</h4>
                                <p className="text-sm mt-2">Health Manager</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 HealthyFood3000. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
}
