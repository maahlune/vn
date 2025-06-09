import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800/50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo with Avatar */}
                    <div className="flex items-center space-x-3">
                        <NavLink
                            to="/vn/"
                            className="text-xl md:text-2xl font-bold text-white hover:text-purple-400 transition-colors duration-200"
                        >
                            <img
                                src="https://i.pinimg.com/736x/3e/52/d9/3e52d938825d96c3d2deb91a23a93cdc.jpg"
                                alt="Avatar"
                                className="w-9 h-9 rounded-full border border-neutral-700 group-hover:border-purple-500 transition-colors duration-200 cursor-pointer"
                            />
                        </NavLink>
                    </div>
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/vn/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white font-medium border-b-2 border-purple-500"
                                    : "text-neutral-400 hover:text-white transition-colors duration-200"
                            }
                            end
                        >
                            Início
                        </NavLink>
                        <NavLink
                            to="vn/traducoes"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white font-medium border-b-2 border-lime-500"
                                    : "text-neutral-400 hover:text-white transition-colors duration-200"
                            }
                        >
                            Traduções
                        </NavLink>
                        <NavLink
                            to="vn/creditos"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white font-medium border-b-2 border-purple-500"
                                    : "text-neutral-400 hover:text-white transition-colors duration-200"
                            }
                        >
                            Créditos
                        </NavLink>
                    </nav>
                    {/* Right side - GitHub */}
                    <div className="flex items-center space-x-4">
                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/maahlune/vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>{" "}
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-neutral-400 hover:text-white transition-colors duration-200 relative z-50"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${
                                    isMobileMenuOpen ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>{" "}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className="bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800/50">
                    <nav className="container mx-auto px-6 py-4 space-y-4">
                        <NavLink
                            to="/vn/"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block py-2 px-4 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-purple-600/20 border-l-4 border-purple-500"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                                }`
                            }
                            end
                        >
                            Início
                        </NavLink>
                        <NavLink
                            to="vn/traducoes"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block py-2 px-4 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-lime-600/20 border-l-4 border-lime-500"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                                }`
                            }
                        >
                            Traduções
                        </NavLink>
                        <NavLink
                            to="vn/creditos"
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `block py-2 px-4 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-purple-600/20 border-l-4 border-purple-500"
                                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                                }`
                            }
                        >
                            Créditos
                        </NavLink>

                        {/* Mobile GitHub Link */}
                        <div className="pt-4 border-t border-neutral-800/50">
                            <a
                                href="https://github.com/maahlune/vn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 py-2 px-4 text-neutral-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-800/50"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
