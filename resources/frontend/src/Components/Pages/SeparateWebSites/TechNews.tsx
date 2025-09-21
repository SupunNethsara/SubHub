import { useNavigate } from "react-router-dom";

function TechNewsUI() {
    const navigate = useNavigate();
    const posts = [
        {
            id: 1,
            title: "New Tech Startup Incubator Opens",
            date: "3 days ago",
            excerpt: "A new initiative to support Sri Lankan tech entrepreneurs has launched with government backing...",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
                        <div className="w-3 h-10 bg-green-500 mr-3 rounded-full"></div>
                        <h1 className="text-3xl font-bold">TechNews.LK</h1>
                    </div>
                    <div className="ml-auto flex space-x-4">
                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition duration-300 flex items-center shadow-lg shadow-green-500/20">
                            Subscribe
                        </button>
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-300 flex items-center shadow-lg shadow-blue-500/20">
                            New Post
                        </button>
                    </div>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/30 p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">About TechNews.LK</h2>
                    <p className="text-gray-300 mb-4">
                        Your premier source for the latest technology news, reviews, and insights in Sri Lanka.
                    </p>
                    <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-4">https://technews.lk</span>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span>Active - Last updated 5 hours ago</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/20 p-6">
                    <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <div key={post.id} className="bg-gray-700/30 rounded-xl overflow-hidden border border-gray-600/20 hover:border-green-500/30 transition-all duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-medium mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">{post.date}</span>
                                        <button className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center">
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
        </div>
    );
}

export default TechNewsUI;
