import { EmailIcon } from "./Svgs/Svgs.tsx";

function IntroImage() {
    return (
        <div className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
            <div className="relative w-full max-w-lg h-[500px]">
                <div className="absolute inset-0 bg-gray-900/40 rounded-3xl border border-gray-700/20 backdrop-blur-md transform rotate-1"></div>
                <div className="absolute inset-2 bg-gray-900/30 rounded-2xl border border-gray-700/10 backdrop-blur-sm transform -rotate-1"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-2xl overflow-hidden border-2 border-green-500/30 shadow-2xl shadow-green-500/20 rotate-3 z-20 group">
                    <div className="absolute -inset 2 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl transform -rotate-2 translate-y-1 blur-sm"></div>

                    <img
                        src="ManyPosts.webp"
                        alt="WebSubscribe Dashboard"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute bottom-5 right-5 w-44 bg-gray-900/90 rounded-lg border border-green-500/40 p-3 transform rotate-3 shadow-xl shadow-green-500/10 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <div className="h-2 bg-gray-700 rounded-full flex-1"></div>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full mb-1"></div>
                        <div className="h-2 bg-gray-700 rounded-full w-4/5"></div>
                        <div className="h-2 bg-green-500/30 rounded-full mt-2 w-1/3"></div>
                    </div>
                </div>

                <div className="absolute top-10 left-6 w-40 h-40 rounded-xl overflow-hidden border-2 border-green-500/20 shadow-xl shadow-green-500/15 -rotate-6 z-30 group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-green-500/5 to-transparent rounded-xl transform -rotate-3 translate-y-1 blur-sm"></div>

                    <img
                        src="designers-work.jpg"
                        alt="Analytics Dashboard"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

                    <div className="absolute top-3 right-3 w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                        {EmailIcon}
                    </div>
                </div>

                <div className="absolute bottom-10 right-6 w-40 h-40 rounded-xl overflow-hidden border-2 border-green-500/20 shadow-xl shadow-green-500/15 rotate-6 z-30 group">
                    <div className="absolute -inset-1 bg-gradient-to-bl from-green-500/5 to-transparent rounded-xl transform rotate-3 translate-y-1 blur-sm"></div>

                    <img
                        src="subscribe.jpg"
                        alt="Notification Interface"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    <div className="absolute bottom-3 left-3 w-7 h-7 bg-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/20">
                        {EmailIcon}
                    </div>
                </div>

                <div className="absolute top-16 right-16 w-28 h-28 bg-green-500/5 rounded-xl border border-green-500/10 transform rotate-12 blur-sm z-10"></div>
                <div className="absolute bottom-16 left-16 w-24 h-24 bg-green-500/5 rounded-xl border border-green-500/10 transform -rotate-12 blur-sm z-10"></div>

                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                >
                    <line
                        x1="20"
                        y1="25"
                        x2="45"
                        y2="45"
                        stroke="rgba(34, 197, 94, 0.4)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                    />
                    <line
                        x1="75"
                        y1="75"
                        x2="55"
                        y2="55"
                        stroke="rgba(34, 197, 94, 0.4)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                    />
                    <line
                        x1="25"
                        y1="75"
                        x2="45"
                        y2="55"
                        stroke="rgba(34, 197, 94, 0.4)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="absolute -top-6 -left-6 w-28 h-28 bg-green-500/15 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-green-700/8 rounded-full filter blur-xl"></div>
                <div className="absolute top-1/4 -right-8 w-20 h-20 bg-green-500/8 rounded-full filter blur-lg"></div>
                <div className="absolute bottom-1/3 -left-8 w-16 h-16 bg-green-400/10 rounded-full filter blur-lg"></div>
            </div>
        </div>
    );
}

export default IntroImage;
