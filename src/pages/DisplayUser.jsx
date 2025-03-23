import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import BookSlot from "../components/BookSlot";

export default function DisplayUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const userFetched = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userFetched.current) {
            fetchUser();
            userFetched.current = true;
        }
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${id}`);
            if (!response.ok) throw new Error("User not found");
            const data = await response.json();
            setUser(data);
            toast.success("Data Fetched Successfully");
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showModal]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader className="animate-spin text-purple-600 w-12 h-12" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 mt-10">
                <h2 className="text-2xl font-semibold">Error: {error}</h2>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-300 dark:border-gray-800">
            <div className="flex items-center space-x-4">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-24 h-24 rounded-full border-2 border-purple-400"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{user.name || user.login}</h2>
                    <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
                </div>
            </div>

            {user.bio && (
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg italic">"{user.bio}"</p>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">{user.followers}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Followers</p>
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">{user.following}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Following</p>
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">{user.public_repos}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Repositories</p>
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300">{user.public_gists}</h3>
                    <p className="text-gray-600 dark:text-gray-300">Gists</p>
                </div>
            </div>

            <div className="mt-6 space-y-2">
                {user.location && (
                    <p className="text-gray-700 dark:text-gray-300">
                        📍 <strong>Location:</strong> {user.location}
                    </p>
                )}
                {user.blog && (
                    <p className="text-gray-700 dark:text-gray-300">
                        🔗 <strong>Website:</strong>{" "}
                        <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                            {user.blog}
                        </a>
                    </p>
                )}
            </div>

            <div className="mt-6 flex flex-row w-full justify-between text-center text-white space-x-4">
                <a
                    href={user.html_url}
                    target="_blank"
                    className="inline-block w-1/2 px-6 py-2 mt-2 bg-gradient-to-r from-purple-500 to-purple-600 shadow-sm  rounded-lg transition"
                >
                    View GitHub Profile
                </a>
                <button
                    type="button"
                    className="inline-block w-1/2 px-6 py-2 mt-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-purple-800 hover:shadow-lg shadow-smrounded-lg transition"
                    onClick={() => setShowModal(true)}
                >
                    Book a Meeting
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-lg bg-opacity-50 flex justify-center items-center">
                    <div ref={modalRef} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <BookSlot onClose={() => setShowModal(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}
