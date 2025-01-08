'use client'
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubscribePage() {
    const { productId } = useParams(); // Produkt-ID aus der URL

    return (
        <div className="bg-gray-50 text-gray-800">
            <header className="bg-green-600 text-white py-6 shadow-md">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/"><h1 className="text-3xl font-bold tracking-wide">HealthyFood3000</h1></Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/about" className="hover:underline hover:text-green-400 transition duration-300">Über uns</Link></li>
                            <li><a href="#products" className="hover:underline hover:text-green-400 transition duration-300">Produkte</a></li>
                            <li><a href="#contact" className="hover:underline hover:text-green-400 transition duration-300">Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="py-16 container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Produkt: {productId}</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Sie haben sich entschieden, das Produkt <strong>{productId}</strong> zu abonnieren. Füllen Sie bitte die folgenden Informationen aus, um den Abschluss zu tätigen.
                </p>
                <form className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
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
            </main>
            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 HealthyFood3000. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
}
