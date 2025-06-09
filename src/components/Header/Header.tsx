import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Header = () => {
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
                    </div>

                    {/* Mobile menu button - you can add mobile navigation later */}
                    <div className="md:hidden">
                        <button className="text-neutral-400 hover:text-white transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
