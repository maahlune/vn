import { HashRouter as Router, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import type { ReactNode } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Translations from "./components/Translations/Translations";

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
            <footer className="bg-gray-900 text-white py-12 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Section */}{" "}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 text-white">MaahLune VN</h3>
                            <p className="text-gray-300 mb-4">
                                Centralizando as melhores traduções de Visual Novels feitas por fãs brasileiros.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    aria-label="Discord"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                </a>{" "}
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* Quick Links */}{" "}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 text-white">Links Rápidos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        Início
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/traducoes"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        Traduções
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        Como Contribuir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Support */}{" "}
                        <div>
                            <h3 className="text-xl font-bold font-serif mb-4 text-white">Apoie o Projeto</h3>
                            <p className="text-gray-300 mb-4">
                                Ajude a manter este projeto vivo e apoie os tradutores.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                                {/* Fazer Doação */}
                                Ainda não...
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-300">
                            © {new Date().getFullYear()} MaahLune VN - Todas as traduções pertencem aos seus respectivos
                            tradutores
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Feito com ❤️ para a comunidade brasileira de Visual Novels
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
                    <Route path="/" element={<Home />} />
                    <Route path="/vn" element={<Home />} />
                    <Route path="/traducoes" element={<Translations />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
