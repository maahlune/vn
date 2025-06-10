import React from "react";
import { Link } from "react-router";
import { getStatusText } from "../../assets/data";
import { FaBookOpen, FaUserEdit, FaGamepad } from "react-icons/fa";

// Define the VN (Visual Novel) props type
interface VNProps {
    title: string;
    image: string;
    description: string;
    status: string;
    translator?: string;
    genres?: string[];
    platforms?: string[];
    downloadLink?: string;
}

const HomeCard: React.FC<VNProps> = ({
    title,
    image,
    description,
    status,
    translator,
    genres,
    platforms,
    downloadLink,
}) => {
    // Helper function to get status color
    const getStatusColor = () => {
        switch (status) {
            case "complete":
                return "bg-green-600/90 text-green-100 border border-green-500/50 backdrop-blur-sm";
            case "in-progress":
                return "bg-yellow-600/90 text-yellow-100 border border-yellow-500/50 backdrop-blur-sm";
            case "paused":
                return "bg-orange-600/90 text-orange-100 border border-orange-500/50 backdrop-blur-sm";
            case "planned":
                return "bg-blue-600/90 text-blue-100 border border-blue-500/50 backdrop-blur-sm";
            default:
                return "bg-neutral-600/90 text-neutral-100 border border-neutral-500/50 backdrop-blur-sm";
        }
    };

    return (
        <div className="group bg-neutral-800/80 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-neutral-700 flex flex-col h-full relative">
            {/* Backdrop glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 rounded-xl"></div>
            </div>{" "}
            {/* Card Image with Status Badge */}
            <div className="overflow-hidden flex-shrink-0 relative" style={{ aspectRatio: "920/430" }}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60"></div>{" "}
                {/* Status Badge positioned over image */}
                <span
                    className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap ${getStatusColor()} shadow-lg`}
                >
                    {getStatusText(status)}
                </span>
            </div>
            {/* Card Content */}
            <div className="p-5 flex-grow flex flex-col relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>

                {/* Description */}
                <p className="text-neutral-300 mb-4 line-clamp-2 text-sm">{description}</p>

                {/* Additional Info */}
                <div className="mt-auto space-y-3">
                    {/* Translator */}
                    {translator && (
                        <div className="flex items-center text-sm">
                            <FaUserEdit className="text-purple-400 mr-2 flex-shrink-0" />
                            <span className="text-neutral-200 truncate">{translator}</span>
                        </div>
                    )}

                    {/* Genres */}
                    {genres && genres.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            <FaBookOpen className="text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                            <div className="flex flex-wrap gap-1.5">
                                {genres.slice(0, 3).map((genre, index) => (
                                    <span
                                        key={index}
                                        className="bg-purple-900/50 text-purple-200 text-xs px-2 py-0.5 rounded-md border border-purple-700/50"
                                    >
                                        {genre}
                                    </span>
                                ))}
                                {genres.length > 3 && (
                                    <span className="text-xs text-neutral-400">+{genres.length - 3}</span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Platforms */}
                    {platforms && platforms.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            <FaGamepad className="text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                            <div className="flex flex-wrap gap-1.5">
                                {platforms.slice(0, 2).map((platform, index) => (
                                    <span
                                        key={index}
                                        className="bg-pink-900/50 text-pink-200 text-xs px-2 py-0.5 rounded-md border border-pink-700/50"
                                    >
                                        {platform}
                                    </span>
                                ))}
                                {platforms.length > 2 && (
                                    <span className="text-xs text-neutral-400">+{platforms.length - 2}</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                {downloadLink && (
                    <div className="mt-5 pt-4 border-t border-neutral-700/50">
                        <Link
                            to={downloadLink}
                            className="relative overflow-hidden group w-full bg-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium inline-flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center">
                                Ver Tradução
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeCard;
