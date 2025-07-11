import React, { useState } from "react";
import { NavLink } from "react-router";
import HomeCard from "../HomeCard/HomeCard";
import { translations } from "../../assets/data";
import { FaBookReader, FaUsers, FaLightbulb } from "react-icons/fa";

import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const Home: React.FC = () => {
    const [wallpaperIndex] = useState<number>(() => Math.floor(Math.random() * 16) + 1);
    const [avatarIndex] = useState<number>(() => Math.floor(Math.random() * 6) + 1);
    const [randomIndexes] = useState<number[]>(() => [
        Math.floor(Math.random() * translations.length),
        Math.floor(Math.random() * translations.length),
        Math.floor(Math.random() * translations.length)
    ]);
    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
                        style={{
                            backgroundImage: `url('vn/images/wallpaper${wallpaperIndex}.webp')`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-10 items-center">
                            {/* Left Side - Text */}
                            <div className="md:col-span-3 text-left">
                                <div className="inline-block mb-3">
                                    <span className="bg-purple-600 text-white text-sm font-medium py-1 px-3 rounded-full tracking-wide">
                                        Portal de traduções
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                                        Visual Novels
                                    </span>{" "}
                                    em Português
                                </h1>

                                <p className="text-xl mb-8 font-light text-neutral-200 leading-relaxed">
                                    Histórias interativas com múltiplos finais, <br /> personagens memoráveis e escolhas
                                    que importam, <br /> agora disponíveis em seu idioma.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <NavLink
                                        to="/traducoes"
                                        className="relative overflow-hidden group px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium text-lg"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Ver Traduções
                                            <MdKeyboardArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </NavLink>
                                </div>
                            </div>

                            {/* Right Side - Decorative Element */}
                            <div className="hidden md:block md:col-span-2 relative">
                                <div className="absolute w-64 h-64 rounded-lg bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 shadow-2xl transform rotate-6 -translate-x-1/4"></div>
                                <div className="absolute w-64 h-64 rounded-lg bg-purple-900/30 backdrop-blur-sm border border-purple-700/50 shadow-2xl transform -rotate-3 translate-x-1/4 translate-y-12"></div>
                                <div className="relative w-64 h-64 rounded-lg bg-neutral-800/80 backdrop-blur-md border border-neutral-700 shadow-2xl overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-60"
                                        style={{
                                            backgroundImage: `url('vn/images/avatar${avatarIndex}.gif')`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="w-10 h-1 bg-purple-500/80 mb-2 rounded-lg"></div>
                                        <p className="text-sm text-white font-medium">
                                            Experimente mundos ricos em narrativas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    {/* <p className="text-neutral-400 text-sm mb">Explorar</p> */}
                    <MdKeyboardArrowDown className="w-6 h-6 text-purple-500" />
                </div>
            </section>
            {/* About Project Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        {" "}
                        <div className="text-center mb-12 mt-5">
                            <h2 className="text-3xl font-bold text-white inline-block relative">
                                Sobre o Projeto
                                <span className="absolute top-10 left-0 w-full h-0.5 bg-purple-500 transform -translate-y-1"></span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            {/* Left Column - Mission and Community */}
                            <div className="h-[450px] space-y-8 bg-neutral-800/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-neutral-700">
                                <div className="flex items-start gap-4">
                                    <div className="text-purple-400 flex-shrink-0 pt-1">
                                        <FaBookReader size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-white">Nossa Missão</h3>
                                        <p className="text-neutral-300 leading-relaxed">
                                            A Lune VNs nasceu da paixão por visual novels e do desejo de tornar essas
                                            experiências únicas acessíveis para a comunidade brasileira. Centralizamos e
                                            organizamos as melhores traduções feitas por fãs, facilitando o acesso a
                                            histórias incríveis.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-pink-400 flex-shrink-0 pt-1">
                                        <FaUsers size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-white">Para a Comunidade</h3>
                                        <p className="text-neutral-300 leading-relaxed">
                                            Valorizamos o trabalho árduo dos tradutores voluntários e queremos dar
                                            visibilidade aos seus projetos. Aqui, cada tradução é tratada com respeito e
                                            reconhecimento merecido.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Why VNs */}
                            <div className="h-[450px] bg-neutral-800/80 backdrop-blur-md p-8 rounded-lg shadow-lg border border-neutral-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaLightbulb size={24} className="text-purple-500" />
                                    <h3 className="text-xl font-bold text-white">Por que Visual Novels?</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="border-l-2 border-purple-500/30 pl-4">
                                        <h4 className="font-medium text-neutral-200 mb-2">Narrativas</h4>
                                        <p className="text-neutral-400 text-sm">
                                            Histórias complexas e envolventes que exploram temas únicos
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-pink-500/30 pl-4">
                                        <h4 className="font-medium text-neutral-200 mb-2">Arte</h4>
                                        <p className="text-neutral-400 text-sm">
                                            Visuais deslumbrantes e trilhas sonoras memoráveis
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-purple-500/30 pl-4">
                                        <h4 className="font-medium text-neutral-200 mb-2">Escolhas</h4>
                                        <p className="text-neutral-400 text-sm">
                                            Decisões que realmente impactam o rumo da história
                                        </p>
                                    </div>

                                    <div className="border-l-2 border-pink-500/30 pl-4">
                                        <h4 className="font-medium text-neutral-200 mb-2">Gêneros</h4>
                                        <p className="text-neutral-400 text-sm">
                                            Romance, mistério, ficção científica e muito mais
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {" "}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white inline-block relative">
                                Traduções Aleatórias
                                <span className="absolute top-11 left-0 w-full h-0.5 bg-pink-500 transform -translate-y-1"></span>
                            </h2>
                            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                                Conheça algumas das nossas melhores traduções disponíveis para você experimentar
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Adicionando decoração */}
                            <div className="absolute -z-10 opacity-10 blur-3xl w-96 h-96 bg-purple-600/30 rounded-full top-1/4 -left-48"></div>{" "}
                            <HomeCard
                                title={translations[randomIndexes[0]].title}
                                image={translations[randomIndexes[0]].image}
                                description={translations[randomIndexes[0]].description}
                                status={translations[randomIndexes[0]].status}
                                translator={translations[randomIndexes[0]].translator}
                                genres={translations[randomIndexes[0]].genres}
                                platforms={translations[randomIndexes[0]].platforms}
                                downloadLink={translations[randomIndexes[0]].downloadLink}
                            />
                            <HomeCard
                                title={translations[randomIndexes[1]].title}
                                image={translations[randomIndexes[1]].image}
                                description={translations[randomIndexes[1]].description}
                                status={translations[randomIndexes[1]].status}
                                translator={translations[randomIndexes[1]].translator}
                                genres={translations[randomIndexes[1]].genres}
                                platforms={translations[randomIndexes[1]].platforms}
                                downloadLink={translations[randomIndexes[1]].downloadLink}
                            />
                            <HomeCard
                                title={translations[randomIndexes[2]].title}
                                image={translations[randomIndexes[2]].image}
                                description={translations[randomIndexes[2]].description}
                                status={translations[randomIndexes[2]].status}
                                translator={translations[randomIndexes[2]].translator}
                                genres={translations[randomIndexes[2]].genres}
                                platforms={translations[randomIndexes[2]].platforms}
                                downloadLink={translations[randomIndexes[2]].downloadLink}
                            />
                        </div>
                        <div className="mt-12 text-center">
                            <NavLink
                                to="/traducoes"
                                className="relative overflow-hidden group inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium text-lg shadow-lg shadow-purple-900/50"
                            >
                                <span className="relative z-10 flex items-center">
                                    Ver Todas as Traduções
                                    <MdKeyboardArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
