import React from "react";

// Mock data for featured visual novels
const featuredVNs = [
    {
        id: 1,
        title: "Fate/Stay Night",
        image: "https://s2.vndb.org/cv/52/24252.jpg",
        description: "Uma visual novel épica sobre a Guerra do Santo Graal",
        status: "Tradução Completa",
    },
    {
        id: 2,
        title: "Steins;Gate",
        image: "https://s2.vndb.org/cv/99/19599.jpg",
        description: "Uma história de viagem no tempo e escolhas difíceis",
        status: "Em Tradução",
    },
    {
        id: 3,
        title: "Clannad",
        image: "https://s2.vndb.org/cv/55/455.jpg",
        description: "Uma emocionante história sobre família e amizade",
        status: "Tradução Completa",
    },
];

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-indigo-900 text-white">
                <div className="absolute inset-0 opacity-30 bg-[url('https://pbs.twimg.com/media/FKsGQWcXIAUCVN3?format=jpg&name=900x900')] bg-cover bg-center bg-no-repeat"></div>
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Suas Visual Novels Favoritas em Português
                        </h2>
                        <p className="text-xl mb-8">
                            Centralizamos as melhores traduções de fãs para visual novels. Descubra histórias incríveis
                            em seu idioma.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/traducoes"
                                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Ver Traduções
                            </a>
                            <a
                                href="/sobre"
                                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-900 transition duration-300"
                            >
                                Sobre o Projeto
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900">Traduções em Destaque</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredVNs.map((vn) => (
                        <div
                            key={vn.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200"
                        >
                            <div className="h-56 overflow-hidden">
                                <img src={vn.image} alt={vn.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-indigo-900">{vn.title}</h3>
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${
                                            vn.status === "Tradução Completa"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}
                                    >
                                        {vn.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{vn.description}</p>
                                <a
                                    href={`/traducoes/${vn.id}`}
                                    className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                                >
                                    Ver detalhes
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
