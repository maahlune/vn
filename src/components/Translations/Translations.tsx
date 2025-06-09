import React, { useState, useMemo } from "react";
import Card from "../Card/Card";
import { translations } from "../../assets/data";

const Translations: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");

    // Extract unique genres from all translations
    const allGenres = useMemo(() => {
        const genres = new Set<string>();
        translations.forEach((translation) => {
            translation.genres.forEach((genre) => genres.add(genre));
        });
        return Array.from(genres).sort();
    }, []);

    // Filter translations based on search and filters
    const filteredTranslations = useMemo(() => {
        return translations.filter((translation) => {
            const matchesSearch =
                translation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                translation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                translation.translator.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesGenre = selectedGenre === "all" || translation.genres.includes(selectedGenre);

            const matchesStatus = selectedStatus === "all" || translation.status === selectedStatus;

            return matchesSearch && matchesGenre && matchesStatus;
        });
    }, [searchTerm, selectedGenre, selectedStatus]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            {/* Header Section */}
            <section className="relative bg-black text-white h-80 flex items-center">
                <div className="absolute inset-0 opacity-30 bg-[url('https://sidearc.com/wp-content/uploads/2016/02/steinsgate4-e1456745446985-1088x300.jpg')] bg-cover bg-top bg-no-repeat"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Traduções Disponíveis</h1>
                        <p className="text-xl mb-8 text-neutral-300">
                            Explore nossa coleção completa de visual novels traduzidas para o português
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 inline-block">
                            <span className="text-neutral-200 font-medium">
                                {filteredTranslations.length} traduções encontradas
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar traduções..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <svg
                                    className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>

                            {/* Genre Filter */}
                            <div>
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="all">Todos os Gêneros</option>
                                    {allGenres.map((genre) => (
                                        <option key={genre} value={genre}>
                                            {genre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="all">Todos os Status</option>
                                    <option value="complete">Tradução Completa</option>
                                    <option value="in-progress">Em Progresso</option>
                                    <option value="paused">Pausada</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Translations Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {filteredTranslations.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="max-w-md mx-auto">
                                    <svg
                                        className="mx-auto h-16 w-16 text-gray-400 mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M3 20.194V5a2 2 0 012-2h14a2 2 0 012 2v15.194M3 20.194a1 1 0 00.553.894l4.447 2.224a1 1 0 001 0l4.447-2.224a1 1 0 001 0l4.447 2.224a1 1 0 00.553-.894z"
                                        />
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                        Nenhuma tradução encontrada
                                    </h3>
                                    <p className="text-gray-500 mb-4">Tente ajustar os filtros ou termos de busca</p>
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedGenre("all");
                                            setSelectedStatus("all");
                                        }}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        Limpar Filtros
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTranslations.map((translation) => (
                                    <Card
                                        key={translation.title}
                                        title={translation.title}
                                        image={translation.image}
                                        description={translation.description}
                                        status={translation.status}
                                        translator={translation.translator}
                                        genres={translation.genres}
                                        platforms={translation.platforms}
                                        downloadLink={translation.downloadLink}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8 text-indigo-900 font-serif">Estatísticas da Coleção</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">{translations.length}</div>
                                <div className="text-gray-600 font-medium">Total de Traduções</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    {translations.filter((t) => t.status === "complete").length}
                                </div>
                                <div className="text-gray-600 font-medium">Completas</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-purple-600 mb-2">{allGenres.length}</div>
                                <div className="text-gray-600 font-medium">Gêneros</div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="text-3xl font-bold text-orange-600 mb-2">
                                    {Array.from(new Set(translations.map((t) => t.translator))).length}
                                </div>
                                <div className="text-gray-600 font-medium">Tradutores</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Translations;
