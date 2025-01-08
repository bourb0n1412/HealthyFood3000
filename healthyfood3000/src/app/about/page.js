import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Header */}
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

            {/* Main Content */}
            <main className="py-16 container mx-auto px-4 text-center">
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

                {/* Team Section */}
                <section className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Unser Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Member Card */}
                        {["Mitglied 1", "Mitglied 2", "Mitglied 3", "Mitglied 4"].map((member, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={`/pic/member${index + 1}.png`} // Ersetze mit den tatsächlichen Bildpfaden
                                    alt={`${member}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:invert transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-white rounded-lg">
                                    <h4 className="text-lg font-bold">{member}</h4>
                                    <p className="text-sm mt-2">Kurze Info über das Mitglied</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-600 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 HealthyFood3000. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
}
