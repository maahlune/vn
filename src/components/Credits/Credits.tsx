import React, { useMemo } from "react";
import { translations } from "../../assets/data";
import { FaHeart, FaUsers, FaAward, FaStar, FaGithub, FaGlobe } from "react-icons/fa";

interface TranslatorStats {
    name: string;
    totalTranslations: number;
    completedTranslations: number;
    inProgressTranslations: number;
    projects: string[];
    website?: string;
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
                };
            }

            stats[translatorName].totalTranslations++;
            stats[translatorName].projects.push(translation.title);

            if (translation.status === "complete") {
                stats[translatorName].completedTranslations++;
            } else if (translation.status === "in-progress") {
                stats[translatorName].inProgressTranslations++;
            }
        }); // Add website information
        const translatorWebsites: { [key: string]: string } = {
            "VNX+": "https://vnx.uvnworks.com/",
            "Zero Force": "https://zeroforcetranslations.wordpress.com/",
            "Knox Translations": "https://knox.fansub.com.br",
            "Taiyaki Club": "https://taiyakiclub.wordpress.com/",
            "Meow Works": "https://meowworks.gitlab.io/",
            "Hanabi Works": "https://hanabiworks.github.io/",
            EroMangá: "https://eromangatranslations.blogspot.com/",
        };

        // Add websites to stats
        Object.keys(stats).forEach((translator) => {
            if (translatorWebsites[translator]) {
                stats[translator].website = translatorWebsites[translator];
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
                        </div>{" "}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {translatorStats.map((translator) => (
                                <div
                                    key={translator.name}
                                    className="group bg-neutral-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neutral-700/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-center"
                                >
                                    {/* Animated background glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 rounded-xl"></div>
                                    </div>

                                    <div className="relative z-10">
                                        {/* Avatar */}
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">
                                                {translator.name.charAt(0)}
                                            </span>
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-lg font-bold text-white mb-3">{translator.name}</h3>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-purple-400">
                                                    {translator.totalTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Total</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-green-400">
                                                    {translator.completedTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Completas</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-yellow-400">
                                                    {translator.inProgressTranslations}
                                                </div>
                                                <div className="text-xs text-neutral-400">Progresso</div>
                                            </div>
                                        </div>

                                        {/* Website Link */}
                                        {translator.website && (
                                            <a
                                                href={translator.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-8 h-8 bg-purple-600/20 text-purple-400 hover:bg-purple-600/40 hover:text-purple-300 rounded-full transition-all duration-200"
                                            >
                                                <FaGlobe className="w-4 h-4" />
                                            </a>
                                        )}
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
