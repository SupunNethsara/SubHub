// components/HowItWorksModal.tsx
import { useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface HowItWorksModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const steps = [
        {
            number: 1,
            title: "Add Websites",
            description: "Enter the URLs of websites you want to monitor for updates",
            icon: "🌐",
            color: "from-blue-500 to-cyan-500"
        },
        {
            number: 2,
            title: "Configure Settings",
            description: "Set your notification preferences and update frequency",
            icon: "⚙️",
            color: "from-purple-500 to-pink-500"
        },
        {
            number: 3,
            title: "Get Notified",
            description: "Receive instant email notifications when content changes",
            icon: "📧",
            color: "from-green-500 to-emerald-500"
        },
        {
            number: 4,
            title: "Stay Updated",
            description: "Never miss important updates from your favorite sites",
            icon: "🚀",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div
                ref={modalRef}
                className="relative bg-gray-900/95 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
            >
                <div className="relative p-6 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                How WebSubscribe Works
                            </h2>
                            <p className="text-gray-300 mt-2">
                                Simple steps to stay updated with your favorite websites
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-800 rounded-xl transition-all duration-200 group"
                        >
                            <XMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-white" />
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">{/* Steps */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`relative flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">{step.icon}</span>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-gray-900">{step.number}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-gray-600"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            Key Features
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "🔍", title: "Smart Monitoring", desc: "Advanced algorithms detect meaningful content changes" },
                                { icon: "⚡", title: "Instant Alerts", desc: "Get notified within minutes of updates" },
                                { icon: "🔒", title: "Privacy First", desc: "Your data is secure and never shared" },
                                { icon: "📊", title: "Dashboard", desc: "Track all your monitored sites in one place" },
                                { icon: "🎯", title: "Customizable", desc: "Set specific keywords and filters" },
                                { icon: "💸", title: "Free Forever", desc: "Core features always free to use" }
                            ].map((feature, index) => (
                                <div key={index} className="text-center p-4 group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-300">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
        </div>
    );
}

export default HowItWorksModal;
