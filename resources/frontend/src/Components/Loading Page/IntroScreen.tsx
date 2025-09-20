import IntroHeader from "./IntroHeader.tsx";
import IntroContent from "./IntroContent.tsx";
import IntroImage from "./IntroImage.tsx";


const IntroScreen = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
            <IntroHeader />

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24">
                <IntroContent/>
                <IntroImage/>
            </div>
        </div>
    );
};

export default IntroScreen;
