import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import SubscribeModal from "../Models/SubscribeModel.tsx";
import PostModal from "../Models/PostModel.tsx";

function ReadMeUI() {
    const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { website_id } = location.state || {};

    const posts = [
        {
            id: 1,
            title: "Exploring the Digital Transformation in Sri Lankan Education",
            date: "1 day ago",
            excerpt: "How technology is reshaping the educational landscape in Sri Lanka with innovative solutions...",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];

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
                            <span>Active - Last updated 1 day ago</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/20 p-6">
                    <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <div key={post.id} className="bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/20 hover:border-blue-500/30 transition-all duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-medium mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{post.date}</span>
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
                </div>
            </div>
            <SubscribeModal
                isOpen={isSubscribeModalOpen}
                website_id={String(website_id)}
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
