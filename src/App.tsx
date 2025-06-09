import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import type { ReactNode } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Translations from "./components/Translations/Translations";
import Credits from "./components/Credits/Credits";
import { FaDiscord, FaGithub } from "react-icons/fa";

// ScrollToTop component ensures scroll position returns to top on page change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// Layout component to ensure consistent structure
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            {" "}
            <Header />
            <main className="flex-grow">{children}</main>
            <footer className="bg-neutral-900 text-white py-16 mt-auto border-t border-neutral-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* About Section */}
                        <div className="bg-neutral-800/40 backdrop-blur-md p-6 rounded-xl border border-neutral-700 shadow-xl">
                            {" "}
                            <h3 className="text-xl font-bold mb-4 text-white inline-block relative">
                                MaahLune VN
                                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-purple-500"></span>
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                Centralizando as melhores traduções de Visual Novels feitas por fãs brasileiros para
                                toda a comunidade.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                                    aria-label="Discord"
                                >
                                    <FaDiscord size={24} />
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="bg-neutral-800/40 backdrop-blur-md p-6 rounded-xl border border-neutral-700 shadow-xl">
                            {" "}
                            <h3 className="text-xl font-bold mb-4 text-white inline-block relative">
                                Links Rápidos
                                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-pink-500"></span>
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/vn"
                                        className="text-neutral-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Início
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/vn/traducoes"
                                        className="text-neutral-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                                        Traduções
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-neutral-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Como Contribuir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-neutral-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div className="bg-neutral-800/40 backdrop-blur-md p-6 rounded-xl border border-neutral-700 shadow-xl">
                            {" "}
                            <h3 className="text-xl font-bold mb-4 text-white inline-block relative">
                                Apoie o Projeto
                                <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-purple-500"></span>
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                Ajude a manter este projeto vivo e apoie o trabalho dos tradutores que dedicam seu tempo
                                para trazer essas histórias até você.
                            </p>
                            <a
                                href="#"
                                className="relative overflow-hidden group inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium shadow-lg shadow-purple-900/50"
                            >
                                <span className="relative z-10 flex items-center">Quero Contribuir</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 pt-8 text-center">
                        <p className="text-neutral-300">
                            © {new Date().getFullYear()} MaahLune VN - Todas as traduções pertencem aos seus respectivos
                            tradutores
                        </p>
                        <p className="text-neutral-400 text-sm mt-3">
                            Feito com <span className="text-pink-500">❤️</span> para a comunidade brasileira de Visual
                            Novels
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/vn" element={<Home />} />
                    <Route path="vn/traducoes" element={<Translations />} />
                    <Route path="vn/creditos" element={<Credits />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
