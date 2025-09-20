import { EmailIcon, MultiWebsiteIcon } from "./Svgs/Svgs.tsx";
import { useNavigate } from "react-router-dom";

function IntroContent() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/websites");
    };
    return (
        <div className="w-full lg:w-1/2 mx-auto space-y-6 mt-10 lg:mt-0 lg:ml-8">
            <div className="space-y-6">
                <div className="flex items-center">
                    <div className="w-3 h-10 bg-green-500 mr-3 rounded-full"></div>
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Web
                        <span className="text-green-500">Subscribe</span>
                    </h1>
                </div>

                <p className="text-xl text-gray-300 w-full leading-relaxed">
                    Never miss an update from your favorite websites.
                    WebSubscribe monitors content changes and delivers instant
                    notifications straight to your inbox, so you're always in
                    the loop.
                </p>
            </div>

            <div className="space-y-5 max-w-lg">
                <div className="flex items-start space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-lg flex-shrink-0 mt-1">
                        {EmailIcon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            Email Notifications
                        </h3>
                        <p className="text-gray-400 mt-1">
                            Get notified with post titles and descriptions
                            directly to your inbox
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-lg flex-shrink-0 mt-1">
                        {MultiWebsiteIcon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            Multi-Website Tracking
                        </h3>
                        <p className="text-gray-400 mt-1">
                            Monitor multiple websites simultaneously with a
                            single dashboard
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4 pt-2">
                <button
                    onClick={handleNavigate}
                    className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
                >
                    Get Started - It's Free
                </button>
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-300 border border-gray-700 shadow-lg shadow-black/10">
                    See How It Works
                </button>
            </div>
        </div>
    );
}

export default IntroContent;
