import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-[#fafafa] text-indigo-900 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-center items-center relative">
                <NavLink
                    to="/vn"
                    className="text-2xl md:text-3xl font-bold font-serif mb-2 md:mb-0 md:absolute md:left-8"
                >
                    MaahLune VN
                </NavLink>
                <nav className="flex items-center">
                    <ul className="flex space-x-8">
                        <li className="flex items-center">
                            <NavLink
                                to="/vn"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-2 border-purple-700 font-medium pb-1"
                                        : "hover:text-purple-500 transition-colors duration-200 font-normal pb-1"
                                }
                                end
                            >
                                Início
                            </NavLink>
                        </li>
                        <li className="flex items-center">
                            <NavLink
                                to="/traducoes"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-2 border-purple-700 font-medium pb-1"
                                        : "hover:text-purple-500 transition-colors duration-200 font-normal pb-1"
                                }
                            >
                                Traduções
                            </NavLink>{" "}
                        </li>
                    </ul>
                </nav>
                <FaGithub className="invisible md:visible md:absolute md:right-8" />
            </div>
        </header>
    );
};

export default Header;
