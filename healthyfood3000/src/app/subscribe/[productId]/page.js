"use client";

import Image from 'next/image';
import Link from "next/link";
import { useParams } from "next/navigation";

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
];

export default function SubscribePage() {
    const params = useParams(); // useParams liefert ein Objekt zurück
    const productId = params?.productId; // Extrahiere productId sicher
    const product = products.find((item) => item.id === productId); // Finde das Produkt

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-red-500">Produkt nicht gefunden!</h2>
                <Link href="/shop" className="text-green-600 hover:underline">
                    Zurück zum Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Navbar */}
            <header className="bg-green-600 text-white py-6 shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/pic/logobanner.png"
                            alt="Logo Banner"
                            width={200}
                            height={50} />
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
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

            <main className="pt-20">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="w-full md:w-1/2 px-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h2>
                            <p className="text-gray-600 mb-6">{product.description}</p>
                            <p className="text-green-600 text-2xl font-semibold mb-6">{product.price}</p>
                            <form className="mt-6">
                                <div className="mb-4">
                                    <label className="block text-left text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                        placeholder="Ihr Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-left text-gray-700">E-Mail-Adresse</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                        placeholder="Ihre E-Mail-Adresse"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300"
                                >
                                    Abonnement abschließen
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 HealthyFood3000. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
}
