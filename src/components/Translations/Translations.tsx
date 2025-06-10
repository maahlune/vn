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
    }, []); // Filter translations based on search and filters
    const filteredTranslations = useMemo(() => {
        return translations
            .filter((translation) => {
                const matchesSearch =
                    translation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    translation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    translation.translator.toLowerCase().includes(searchTerm.toLowerCase());

                const matchesGenre = selectedGenre === "all" || translation.genres.includes(selectedGenre);

                const matchesStatus = selectedStatus === "all" || translation.status === selectedStatus;

                return matchesSearch && matchesGenre && matchesStatus;
            })
            .sort((a, b) => a.title.localeCompare(b.title, "pt-BR", { sensitivity: "base" }));
    }, [searchTerm, selectedGenre, selectedStatus]);
    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://sidearc.com/wp-content/uploads/2016/02/steinsgate4-e1456745446985-1088x300.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>{" "}
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-3">
                            <span className="bg-emerald-600 text-white text-sm font-medium py-1 px-3 rounded-full tracking-wide">
                                Catálogo completo
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500">
                                Traduções
                            </span>{" "}
                            Disponíveis
                        </h1>

                        <p className="text-xl mb-8 font-light text-neutral-200 leading-relaxed">
                            Explore nossa coleção completa de visual novels <br />
                            traduzidas para o português
                        </p>

                        <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-3 inline-block border border-neutral-700/50">
                            <span className="text-neutral-200 font-medium">
                                {filteredTranslations.length} traduções encontradas
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Search and Filter Section */}
            <section className="py-12 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar traduções..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-neutral-800/80 border border-neutral-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-neutral-400 transition-all duration-300"
                                />
                                <svg
                                    className="absolute left-4 top-4.5 h-5 w-5 text-neutral-400"
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
                            </div>{" "}
                            {/* Genre Filter */}
                            <div>
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    className="w-full py-4 px-4 bg-neutral-800/80 border border-neutral-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white appearance-none cursor-pointer transition-all duration-300"
                                >
                                    <option value="all">Todos os Gêneros</option>
                                    {allGenres.map((genre) => (
                                        <option key={genre} value={genre} className="bg-neutral-800">
                                            {genre}
                                        </option>
                                    ))}
                                </select>
                            </div>{" "}
                            {/* Status Filter */}
                            <div>
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="w-full py-4 px-4 bg-neutral-800/80 border border-neutral-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white appearance-none cursor-pointer transition-all duration-300"
                                >
                                    <option value="all">Todos os Status</option>
                                    <option value="complete" className="bg-neutral-800">
                                        Tradução Completa
                                    </option>
                                    <option value="in-progress" className="bg-neutral-800">
                                        Em Progresso
                                    </option>
                                    <option value="paused" className="bg-neutral-800">
                                        Pausada
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* Translations Grid */}
            <section className="py-12 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {filteredTranslations.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="max-w-md mx-auto bg-neutral-800/50 backdrop-blur-md rounded-xl p-8 border border-neutral-700/50">
                                    {" "}
                                    <svg
                                        className="mx-auto h-16 w-16 text-emerald-400 mb-4"
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
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        Nenhuma tradução encontrada
                                    </h3>
                                    <p className="text-neutral-400 mb-6">Tente ajustar os filtros ou termos de busca</p>
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedGenre("all");
                                            setSelectedStatus("all");
                                        }}
                                        className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 font-medium shadow-lg shadow-emerald-900/50"
                                    >
                                        Limpar Filtros
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            {" "}
                            <h2 className="text-3xl font-bold text-white inline-block relative">
                                Estatísticas da Coleção
                                <span className="absolute top-10 left-0 w-full h-0.5 bg-emerald-500 transform -translate-y-1"></span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {" "}
                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <div className="text-3xl font-bold text-emerald-400 mb-2">{translations.length}</div>
                                <div className="text-neutral-300 font-medium">Total de Traduções</div>
                            </div>
                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <div className="text-3xl font-bold text-green-400 mb-2">
                                    {translations.filter((t) => t.status === "complete").length}
                                </div>
                                <div className="text-neutral-300 font-medium">Completas</div>
                            </div>
                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <div className="text-3xl font-bold text-lime-400 mb-2">{allGenres.length}</div>
                                <div className="text-neutral-300 font-medium">Gêneros</div>
                            </div>
                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <div className="text-3xl font-bold text-teal-400 mb-2">
                                    {Array.from(new Set(translations.map((t) => t.translator))).length}
                                </div>
                                <div className="text-neutral-300 font-medium">Tradutores</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Translations;
