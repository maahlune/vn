import React from "react";
import { NavLink } from "react-router";
import Card from "../Card/Card";
import { translations } from "../../assets/data";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            {" "}
            {/* Hero Section */}
            <section className="relative bg-black text-white h-80 flex items-center">
                <div className="absolute inset-0 opacity-30 bg-[url('https://sidearc.com/wp-content/uploads/2016/02/steinsgate4-e1456745446985-1088x300.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                            Suas Visual Novels Favoritas em Português
                        </h2>
                        <p className="text-xl mb-8 font-normal text-neutral-300">
                            Centralizamos as melhores traduções de fãs para visual novels.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <NavLink
                                to="/traducoes"
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 font-medium"
                            >
                                Ver Traduções
                            </NavLink>
                            <NavLink
                                to="/sobre"
                                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition duration-300 font-medium"
                            >
                                Sobre o Projeto
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Section */}{" "}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 font-serif">
                    Traduções em Destaque
                </h2>{" "}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card
                        title={translations[0].title}
                        image={translations[0].image}
                        description={translations[0].description}
                        status={translations[0].status}
                        translator={translations[0].translator}
                        genres={translations[0].genres}
                        platforms={translations[0].platforms}
                        downloadLink={translations[0].downloadLink}
                    />
                    <Card
                        title={translations[1].title}
                        image={translations[1].image}
                        description={translations[1].description}
                        status={translations[1].status}
                        translator={translations[1].translator}
                        genres={translations[1].genres}
                        platforms={translations[1].platforms}
                        downloadLink={translations[1].downloadLink}
                    />
                    <Card
                        title={translations[2].title}
                        image={translations[2].image}
                        description={translations[2].description}
                        status={translations[2].status}
                        translator={translations[2].translator}
                        genres={translations[2].genres}
                        platforms={translations[2].platforms}
                        downloadLink={translations[2].downloadLink}
                    />{" "}
                </div>
            </section>
            {/* About Project Section */}
            <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 font-serif">
                            Sobre o Projeto
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-indigo-800 font-serif">Nossa Missão</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    O MaahLune VN nasceu da paixão por visual novels e do desejo de tornar essas
                                    experiências únicas acessíveis para a comunidade brasileira. Centralizamos e
                                    organizamos as melhores traduções feitas por fãs, facilitando o acesso a histórias
                                    incríveis.
                                </p>

                                <h3 className="text-2xl font-bold mb-4 text-indigo-800 font-serif">
                                    Para a Comunidade
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Valorizamos o trabalho árduo dos tradutores voluntários e queremos dar visibilidade
                                    aos seus projetos. Aqui, cada tradução é tratada com respeito e reconhecimento
                                    merecido.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold mb-6 text-indigo-800 font-serif text-center">
                                    Por que Visual Novels?
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg
                                                className="w-3 h-3 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Narrativas Profundas</h4>
                                            <p className="text-gray-600 text-sm">
                                                Histórias complexas e envolventes que exploram temas únicos
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg
                                                className="w-3 h-3 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Arte Impressionante</h4>
                                            <p className="text-gray-600 text-sm">
                                                Visuais deslumbrantes e trilhas sonoras memoráveis
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg
                                                className="w-3 h-3 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Escolhas Importantes</h4>
                                            <p className="text-gray-600 text-sm">
                                                Decisões que realmente impactam o rumo da história
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg
                                                className="w-3 h-3 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Diversidade de Gêneros</h4>
                                            <p className="text-gray-600 text-sm">
                                                Romance, mistério, ficção científica e muito mais
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                    <NavLink
                                        to="/traducoes"
                                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                                    >
                                        Explorar Traduções
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
