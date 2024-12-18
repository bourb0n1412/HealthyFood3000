import Image from 'next/image'

export default function Home() {

  return (
    <div className="bg-gray-50 text-gray-800">

      <header className="bg-green-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">HealthyFood3000</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline hover:text-green-400 transition duration-300">Über uns</a></li>
              <li><a href="#products" className="hover:underline hover:text-green-400 transition duration-300">Produkte</a></li>
              <li><a href="#contact" className="hover:underline hover:text-green-400 transition duration-300">Kontakt</a></li>
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
              Mehr erfahren
            </button>
          </div>
        </section>

        <section id="about" className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold mb-6 text-shadow-md tracking-wide">Über HealthyFood3000</h3>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6 leading-relaxed">
              Wir bieten gesunde und nachhaltige Lebensmittel, die direkt zu Ihnen nach Hause geliefert werden.
              Unser Ziel ist es, eine bessere Zukunft für Ernährung und Umwelt zu schaffen. Erleben Sie den Unterschied
              mit frischen, lokal produzierten Zutaten – jeden Tag.
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              HealthyFood3000 ist mehr als nur ein Lebensmittel-Lieferdienst. Wir setzen auf Nachhaltigkeit, Qualität und
              Frische – direkt aus der Region.
            </p>
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:bg-green-200 transition-all duration-300 transform hover:scale-105">
              Mehr erfahren
            </button>
          </div>
        </section>



        <section id="products" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Unsere Produkte</h3>
            <p className="text-gray-600 mb-6">
              Entdecken Sie unser breites Sortiment an frischen, biologischen und nachhaltigen Lebensmitteln.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* FoodBox Item */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <div className="relative mb-4">
                  <Image
                    src="/pic/healthyfood_common.png"
                    alt="Normale FoodBox"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">FoodBox</h4>
                <p className="text-gray-600 mb-4">Frisch, gesund und nachhaltig – die perfekte Wahl für Ihre Ernährung.</p>
                <p className="text-green-600 text-xl font-semibold">20 CHF / Monat</p>
                <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                  Abo abschließen
                </button>
              </div>

              {/* Gemüse Item */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <h4 className="text-lg font-bold mb-2 text-gray-800">Gemüse</h4>
                <p className="text-gray-600">Direkt vom Feld.</p>
              </div>

              {/* Snacks Item */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-500 ease-in-out hover:shadow-xl">
                <h4 className="text-lg font-bold mb-2 text-gray-800">Snacks</h4>
                <p className="text-gray-600">Gesund und nachhaltig.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Kontakt</h3>
            <p className="text-gray-600 mb-4">
              Haben Sie Fragen? Kontaktieren Sie uns gerne!
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
