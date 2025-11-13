import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {/* <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-sm">CC</span>
                            </div> */}
                            <img
                                src="/logo.png"
                                alt="Cute Cut Pro Logo"
                                className="h-10 w-10 rounded-full object-cover"
                            />

                        </div>
                        <div className="ml-3">
                            <h1 className="text-white text-xl font-bold">Cute Cut Pro</h1>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/#features" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Features
                            </a>
                            {/* <a href="#download" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Download
                            </a> */}
                            <a href="/#how-to" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                How to Install
                            </a>
                            <a href="/privacy-policy" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Terms of Use
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-purple-200 focus:outline-none focus:text-purple-200"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-700 rounded-lg mt-2">
                            <a href="#features" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
                                Features
                            </a>
                            <a href="#download" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
                                Download
                            </a>
                            <a href="#how-to" className="text-white hover:text-purple-200 block px-3 py-2 rounded-md text-base font-medium">
                                How to Install
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}