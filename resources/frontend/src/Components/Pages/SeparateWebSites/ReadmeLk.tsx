import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import SubscribeModal from "../Models/SubscribeModel.tsx";
import PostModal from "../Models/PostModel.tsx";
import type { Post } from "../../../Utils/PostTypes.ts";

function ReadMeUI() {
    const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { website_id } = location.state || { website_id: "1" };

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts', {
            headers: {
                'website_id': website_id
            }
        })
            .then(response => {
                if (response.data.success) {
                    setPosts(response.data.posts);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, [website_id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p>Loading posts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-8">
                    <div className="flex items-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="mr-4 p-2 bg-gray-700/50 hover:bg-gray-700 rounded-xl transition duration-300 flex items-center justify-center"
                            aria-label="Go back"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <div className="w-3 h-10 bg-blue-500 mr-3 rounded-full"></div>
                        <h1 className="text-3xl font-bold">ReadMe Sri Lanka</h1>
                    </div>
                    <div className="ml-auto flex space-x-4">
                        <button onClick={() => setIsSubscribeModalOpen(true)} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition duration-300 flex items-center shadow-lg shadow-blue-500/20">
                            Subscribe
                        </button>
                        <button onClick={() => setIsPostModalOpen(true)} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-300 flex items-center shadow-lg shadow-blue-500/20">
                            New Post
                        </button>
                    </div>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/30 p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">About ReadMe Sri Lanka</h2>
                    <p className="text-gray-300 mb-4">
                        Exploring the intersection of technology, culture, and innovation in Sri Lanka.
                        We bring you thought-provoking articles and insights about the digital revolution.
                    </p>
                    <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-4">http://readme.lk</span>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span>Active - {posts.length} posts available</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/20 p-6">
                    <h2 className="text-2xl font-semibold mb-6">Featured Articles ({posts.length})</h2>

                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No posts available yet.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map(post => (
                                <div key={post.id} className="bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.image_url}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-medium mb-2 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.content}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400">
                                                {new Date(post.created_at).toLocaleDateString()}
                                            </span>
                                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                                                Read More
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <SubscribeModal
                isOpen={isSubscribeModalOpen}
                website_id={website_id}
                onClose={() => setIsSubscribeModalOpen(false)}
            />
            <PostModal
                isOpen={isPostModalOpen}
                website_id={website_id}
                onClose={() => setIsPostModalOpen(false)}
            />
        </div>
    );
}

export default ReadMeUI;
