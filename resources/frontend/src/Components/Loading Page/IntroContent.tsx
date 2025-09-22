import { EmailIcon, MultiWebsiteIcon } from "./Svgs/Svgs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function IntroContent() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleNavigate = () => {
        if (buttonRef.current) {
            buttonRef.current.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (buttonRef.current) {
                    buttonRef.current.style.transform = 'scale(1)';
                }
            }, 150);
        }

        setTimeout(() => navigate("/websites"), 300);
    };


    useEffect(() => {
        if (isVisible && !isHovered) {
            const pulseInterval = setInterval(() => {
                setIsPulsing(true);
                setTimeout(() => setIsPulsing(false), 1000);
            }, 4000);

            return () => clearInterval(pulseInterval);
        }
    }, [isVisible, isHovered]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        const currentRef = buttonRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

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

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                    ref={buttonRef}
                    onClick={handleNavigate}
                    onMouseEnter={() => {
                        setIsHovered(true);
                        setIsPulsing(false);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`
                        relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600
                        text-white font-semibold rounded-xl transition-all duration-500
                        transform shadow-2xl overflow-hidden group min-w-[200px]
                        ${isVisible ? 'animate-enter-from-bottom' : 'opacity-0 translate-y-10'}
                        ${isHovered
                        ? 'scale-105 shadow-2xl shadow-green-500/40 bg-gradient-to-r from-green-600 to-emerald-700'
                        : 'hover:scale-102'
                    }
                        ${isPulsing && !isHovered ? 'animate-gentle-pulse' : ''}
                    `}
                    style={{
                        background: isHovered
                            ? 'linear-gradient(135deg, #16a34a, #059669)'
                            : 'linear-gradient(135deg, #22c55e, #16a34a)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>

                    {isPulsing && !isHovered && (
                        <>
                            <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-ping-slow opacity-60"></div>
                            <div className="absolute inset-0 rounded-xl border-2 border-green-300 animate-ping-slower opacity-40"></div>
                        </>
                    )}

                    <div className="absolute inset-0 overflow-hidden">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                                style={{
                                    left: `${15 + i * 35}%`,
                                    top: '20%',
                                    animation: `float-particle ${3 + i}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.7}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    <span className="relative z-10 flex items-center justify-center">
                        <span className="group-hover:scale-105 transition-transform duration-200">
                            Get Started - It's Free
                        </span>

                    </span>

                    <span className="absolute inset-0 rounded-xl overflow-hidden">
                        <span className="ripple absolute bg-white/30 rounded-full transform scale-0 animate-ripple"></span>
                    </span>
                </button>

                <button
                    className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all duration-300 border border-gray-700 shadow-lg shadow-black/10 hover:scale-105 hover:shadow-xl"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    See How It Works
                </button>
            </div>

            <style>{`
                @keyframes enter-from-bottom {
                    0% {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes gentle-pulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
                    }
                    50% {
                        transform: scale(1.02);
                        box-shadow: 0 15px 40px rgba(34, 197, 94, 0.5);
                    }
                }

                @keyframes ping-slow {
                    0% {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    75%, 100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }

                @keyframes ping-slower {
                    0% {
                        transform: scale(1);
                        opacity: 0.4;
                    }
                    75%, 100% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                }

                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.4;
                    }
                    50% {
                        transform: translateY(-25px) translateX(15px) scale(1.2);
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.2;
                    }
                }

                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(34, 197, 94, 0.8);
                    }
                }

                .animate-enter-from-bottom {
                    animation: enter-from-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }

                .animate-gentle-pulse {
                    animation: gentle-pulse 2s ease-in-out;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s ease-out infinite;
                }

                .animate-ping-slower {
                    animation: ping-slower 4s ease-out infinite;
                }

                .animate-ripple {
                    animation: ripple 0.6s linear;
                }

                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }

                .scale-102 {
                    transform: scale(1.02);
                }

                /* Add ripple effect on click */
                button:active .ripple {
                    animation: ripple 0.6s linear;
                }
            `}</style>
        </div>
    );
}

export default IntroContent;
