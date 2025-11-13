export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <div className="flex items-center">
                            {/* <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-sm">CC</span>
                            </div>
                            <span className="ml-2 text-xl font-bold">Cute Cut Pro</span> */}
                            <img
                                src="/logo.png"
                                alt="Cute Cut Pro Logo"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-gray-300 text-sm">
                            Professional video and audio editing app for Android. Create stunning videos with powerful editing tools.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/#features" className="text-gray-300 hover:text-white transition duration-300">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="/#download" className="text-gray-300 hover:text-white transition duration-300">
                                    Download
                                </a>
                            </li>
                            <li>
                                <a href="/#how-to" className="text-gray-300 hover:text-white transition duration-300">
                                    Installation Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-300 hover:text-white transition duration-300">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} Cute Cut Pro. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            This is an independent download site and not affiliated with the official app.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}