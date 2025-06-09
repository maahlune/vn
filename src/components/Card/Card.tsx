import React from "react";
import { Link } from "react-router";
import { getStatusText } from "../../assets/data";

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

const Card: React.FC<VNProps> = ({
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
                return "bg-green-100 text-green-800";
            case "in-progress":
                return "bg-yellow-100 text-yellow-800";
            case "paused":
                return "bg-orange-100 text-orange-800";
            case "planned":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col h-full">
            {" "}
            {/* Card Image with Status Badge */}
            <div className="overflow-hidden flex-shrink-0 relative" style={{ aspectRatio: "92/43" }}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />{" "}
                {/* Status Badge positioned over image */}
                <span
                    className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full whitespace-nowrap ${getStatusColor()} shadow-sm`}
                >
                    {getStatusText(status)}
                </span>
            </div>
            {/* Card Content */}
            <div className="p-3 sm:p-4 flex-grow flex flex-col">
                {" "}
                {/* Title */}
                <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-indigo-900 font-serif line-clamp-2">{title}</h3>
                </div>
                {/* Description */}
                <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{description}</p>
                {/* Additional Info */}
                <div className="mt-auto space-y-1">
                    {/* Translator */}
                    {translator && (
                        <div className="flex items-center text-xs mb-2">
                            <span className="font-medium text-gray-700 mr-2">Tradutor:</span>
                            <span className="truncate">{translator}</span>
                        </div>
                    )}{" "}
                    {/* Genres */}
                    {genres && genres.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                            {genres.slice(0, 3).map((genre, index) => (
                                <span
                                    key={index}
                                    className="bg-purple-50 text-purple-700 text-xs px-1.5 py-0.5 rounded-md"
                                >
                                    {genre}
                                </span>
                            ))}
                            {genres.length > 3 && <span className="text-xs text-gray-500">+{genres.length - 3}</span>}
                        </div>
                    )}
                    {/* Platforms */}
                    {platforms && platforms.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                            {platforms.slice(0, 2).map((platform, index) => (
                                <span
                                    key={index}
                                    className="bg-indigo-50 text-indigo-700 text-xs px-1.5 py-0.5 rounded-md"
                                >
                                    {platform}
                                </span>
                            ))}
                            {platforms.length > 2 && (
                                <span className="text-xs text-gray-500">+{platforms.length - 2}</span>
                            )}
                        </div>
                    )}
                </div>
                {/* Action Button */}
                {downloadLink && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                            to={downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center justify-center"
                        >
                            Ver Tradução
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
