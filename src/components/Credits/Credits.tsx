import React, { useMemo } from "react";
import { translations } from "../../assets/data";
import { FaHeart, FaUsers, FaAward, FaStar, FaGithub, FaGlobe } from "react-icons/fa";

interface TranslatorStats {
    name: string;
    totalTranslations: number;
    completedTranslations: number;
    inProgressTranslations: number;
    projects: string[];
    description: string;
    website?: string;
    specialization: string;
}

const Credits: React.FC = () => {
    // Calculate translator statistics
    const translatorStats = useMemo(() => {
        const stats: { [key: string]: TranslatorStats } = {};

        translations.forEach((translation) => {
            const translatorName = translation.translator;

            if (!stats[translatorName]) {
                stats[translatorName] = {
                    name: translatorName,
                    totalTranslations: 0,
                    completedTranslations: 0,
                    inProgressTranslations: 0,
                    projects: [],
                    description: "",
                    specialization: "",
                };
            }

            stats[translatorName].totalTranslations++;
            stats[translatorName].projects.push(translation.title);

            if (translation.status === "complete") {
                stats[translatorName].completedTranslations++;
            } else if (translation.status === "in-progress") {
                stats[translatorName].inProgressTranslations++;
            }
        });

        // Add detailed descriptions and specializations
        const translatorDetails: { [key: string]: { description: string; website?: string; specialization: string } } =
            {
                "VNX+": {
                    description:
                        "O maior grupo de tradução de Visual Novels do Brasil, responsável por algumas das traduções mais icônicas da comunidade, incluindo Steins;Gate e toda a série Nekopara.",
                    website: "https://vnx.uvnworks.com/",
                    specialization: "Visual Novels mainstream e títulos populares",
                },
                "Zero Force": {
                    description:
                        "Grupo veterano especializado em traduções de alta qualidade, conhecido por trabalhos como Clannad, Narcissu e várias visual novels clássicas.",
                    website: "https://zeroforcetranslations.wordpress.com/",
                    specialization: "Clássicos e títulos emocionalmente intensos",
                },
                "Knox Translations": {
                    description:
                        "Especialistas em mystery novels complexas, responsáveis pela tradução da aclamada série Umineko When They Cry.",
                    website: "https://knox.fansub.com.br",
                    specialization: "Mystery novels e narrativas complexas",
                },
                "Taiyaki Club": {
                    description:
                        "Focados em visual novels da Key Corporation, trazendo experiências emocionais únicas como Planetarian e Kanon para o público brasileiro.",
                    website: "https://taiyakiclub.wordpress.com/",
                    specialization: "Visual novels da Key Corporation",
                },
                "Meow Works": {
                    description:
                        "Responsáveis por projetos ambiciosos como Rewrite, demonstrando dedicação a narrativas longas e complexas.",
                    website: "https://meowworks.gitlab.io/",
                    specialization: "Projetos de grande escala",
                },
                "Hanabi Works": {
                    description:
                        "Especialistas em adaptações de animes populares para PSP e projetos em desenvolvimento ativo, incluindo Tsukihime Remake.",
                    website: "https://hanabiworks.github.io/",
                    specialization: "Adaptações de anime e títulos para PSP",
                },
                EroMangá: {
                    description:
                        "Focados em visual novels de conteúdo adulto, oferecendo traduções especializadas para este nicho específico.",
                    website: "https://eromangatranslations.blogspot.com/",
                    specialization: "Visual novels de conteúdo adulto",
                },
            };

        // Merge descriptions with stats
        Object.keys(stats).forEach((translator) => {
            if (translatorDetails[translator]) {
                stats[translator].description = translatorDetails[translator].description;
                stats[translator].website = translatorDetails[translator].website;
                stats[translator].specialization = translatorDetails[translator].specialization;
            }
        });

        return Object.values(stats).sort((a, b) => b.totalTranslations - a.totalTranslations);
    }, []);

    const totalTranslations = translations.length;
    const totalTranslators = translatorStats.length;
    const completedCount = translations.filter((t) => t.status === "complete").length;

    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/af/8b/52/af8b52b2e4e5b8e0be51b0c9e2e8b8a9.jpg')] bg-cover bg-center bg-fixed opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-3">
                            <span className="bg-purple-600 text-white text-sm font-medium py-1 px-3 rounded-full tracking-wide">
                                Reconhecimento
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                                Créditos
                            </span>{" "}
                            & Agradecimentos
                        </h1>

                        <p className="text-xl mb-8 font-light text-neutral-200 leading-relaxed">
                            Homenageando os tradutores que dedicam seu tempo <br />
                            para trazer essas histórias incríveis ao Brasil
                        </p>

                        <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-3 inline-block border border-neutral-700/50">
                            <span className="text-neutral-200 font-medium">
                                {totalTranslators} grupos de tradução • {totalTranslations} projetos catalogados
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white inline-block relative">
                                Estatísticas da Comunidade
                                <span className="absolute top-10 left-0 w-full h-0.5 bg-purple-500 transform -translate-y-1"></span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <FaUsers className="text-4xl text-purple-400 mb-3 mx-auto" />
                                <div className="text-3xl font-bold text-white mb-2">{totalTranslators}</div>
                                <div className="text-neutral-300 font-medium">Grupos Ativos</div>
                            </div>

                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <FaAward className="text-4xl text-green-400 mb-3 mx-auto" />
                                <div className="text-3xl font-bold text-white mb-2">{completedCount}</div>
                                <div className="text-neutral-300 font-medium">Traduções Completas</div>
                            </div>

                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <FaStar className="text-4xl text-yellow-400 mb-3 mx-auto" />
                                <div className="text-3xl font-bold text-white mb-2">{totalTranslations}</div>
                                <div className="text-neutral-300 font-medium">Projetos Totais</div>
                            </div>

                            <div className="bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 text-center">
                                <FaHeart className="text-4xl text-pink-400 mb-3 mx-auto" />
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-neutral-300 font-medium">Trabalho Voluntário</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Translators Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white inline-block relative">
                                Nossos Heróis
                                <span className="absolute top-10 left-0 w-full h-0.5 bg-pink-500 transform -translate-y-1"></span>
                            </h2>
                            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                                Cada tradutor aqui listado dedica horas incontáveis de trabalho voluntário para tornar
                                visual novels acessíveis à comunidade brasileira
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {translatorStats.map((translator) => (
                                <div
                                    key={translator.name}
                                    className="group bg-neutral-800/80 backdrop-blur-md rounded-xl p-8 shadow-lg border border-neutral-700/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Animated background glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 rounded-xl"></div>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-lg">
                                                        {translator.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{translator.name}</h3>
                                                    <p className="text-sm text-purple-400">
                                                        {translator.specialization}
                                                    </p>
                                                </div>
                                            </div>

                                            {translator.website && (
                                                <a
                                                    href={translator.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-200"
                                                >
                                                    <FaGlobe className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-neutral-300 mb-6 leading-relaxed text-sm">
                                            {translator.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-purple-400">
                                                    {translator.totalTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Total</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-400">
                                                    {translator.completedTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Completas</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-yellow-400">
                                                    {translator.inProgressTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Em Progresso</div>
                                            </div>
                                        </div>

                                        {/* Popular Projects */}
                                        <div>
                                            <h4 className="text-sm font-medium text-neutral-200 mb-2">
                                                Projetos Principais:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {translator.projects.slice(0, 3).map((project, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-purple-900/50 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-700/50"
                                                    >
                                                        {project}
                                                    </span>
                                                ))}
                                                {translator.projects.length > 3 && (
                                                    <span className="text-xs text-neutral-400 px-2 py-1">
                                                        +{translator.projects.length - 3} mais
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank You Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-neutral-800/80 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-neutral-700/50">
                            <FaHeart className="text-6xl text-pink-500 mb-6 mx-auto" />

                            <h2 className="text-3xl font-bold text-white mb-6">Muito Obrigado!</h2>

                            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                                Este projeto existe graças ao trabalho incansável de cada tradutor listado aqui. Sem sua
                                dedicação e paixão pelas visual novels, a comunidade brasileira não teria acesso a essas
                                histórias maravilhosas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://github.com/maahlune/vn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-neutral-700 text-white rounded-xl hover:bg-neutral-600 transition-all duration-300 font-medium"
                                >
                                    <FaGithub className="mr-2" />
                                    Contribuir no GitHub
                                </a>
                            </div>

                            {/* <p className="text-sm text-neutral-400 mt-8">
                                "A verdadeira magia das visual novels está nas conexões humanas que elas criam."
                                <br />
                                <span className="text-purple-400">— Comunidade MaahLune VN</span>
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Credits;
