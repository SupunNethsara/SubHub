import { useState } from 'react';
import type {SubscribeModalProps} from "../../../Utils/PropTypes.ts";
import  axios from "axios";


function SubscribeModal({ isOpen, onClose , website_id } : SubscribeModalProps) {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        try {
            setIsSubmitting(true);

            const response = await axios.post('http://localhost:8000/api/subscription', {
                email,
                website_id: website_id,
            });

            console.log(response);
            setIsSubmitting(false);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
                onClose();
            }, 2000);

        } catch (error: any) {
            console.error("Subscription failed:", error);

            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }

            setIsSubmitting(false);
        }

    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl shadow-green-500/10 w-full max-w-md overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl"></div>

                {!isSubmitted ? (
                    <div className="relative z-0 p-8">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                            <p className="text-gray-400">Subscribe to get notified about new content and updates</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500 transition-all duration-300"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'bg-green-700 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Subscribe Now
                                    </>
                                )}
                            </button>
                            {errorMessage && (
                                <div className="bg-red-600/70 text-white px-4 py-2 rounded-lg mt-4 text-center shadow-md">
                                    {errorMessage}
                                </div>
                            )}
                        </form>

                        <p className="text-xs text-gray-500 text-center mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                ) : (
                    <div className="relative z-0 p-8 text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h2>
                        <p className="text-gray-400">Thank you for subscribing to our updates</p>
                        <div className="mt-6">
                            <div className="inline-flex items-center justify-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm">
                                <svg className="w-4 h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Redirecting...
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubscribeModal;
