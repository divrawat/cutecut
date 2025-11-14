import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title>About Us - Cute Cut Pro Download</title>
                <meta name="description" content="Learn about our mission to provide safe, reliable APK downloads for Cute Cut Pro video editor." />
                <link rel="canonical" href={`${DOMAIN}/about`} />
                <meta name="author" content="Divyanshu Rawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            About Our Service
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Your trusted source for safe and reliable APK downloads
                        </p>
                    </div>

                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Hello! I'm Divyanshu Singh
                                </h2>
                                <p className="text-lg opacity-90 leading-relaxed">
                                    A software engineer from Amritsar, Punjab, dedicated to providing safe,
                                    verified APK downloads for popular apps like Cute Cut Pro.
                                </p>
                            </div>
                            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                                {/* <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                                    🔒
                                </div> */}
                                <img src='/divyanshu-rawat.webp' className='h-[150px] w-[150px] rounded-full object-cover' />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Our Role */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                                        🎯
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do</h2>
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                We are an independent download portal that provides safe, verified
                                                APK files for popular applications. <strong>We are not the official
                                                    developers of Cute Cut Pro</strong>, but we ensure that every file
                                                we provide is:
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                                    <h4 className="font-bold text-green-800 mb-2">Our Guarantee</h4>
                                                    <ul className="text-green-700 text-sm space-y-1">
                                                        <li>✓ 100% Safe & Virus-free</li>
                                                        <li>✓ Regularly Updated</li>
                                                        <li>✓ No Modifications</li>
                                                        <li>✓ Direct Download</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                                    <h4 className="font-bold text-blue-800 mb-2">What We Provide</h4>
                                                    <ul className="text-blue-700 text-sm space-y-1">
                                                        <li>✓ Original APK Files</li>
                                                        <li>✓ Installation Guides</li>
                                                        <li>✓ Technical Support</li>
                                                        <li>✓ Safe Download Links</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Our Mission */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                        🚀
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                As a software engineer, I understand the importance of safe software
                                                distribution. Many users struggle to find reliable sources for APK
                                                downloads, often encountering malware or modified versions.
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Our mission is to bridge this gap by providing a trustworthy platform
                                                where users can download APK files with confidence, knowing they're
                                                getting clean, unaltered versions of their favorite apps.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* About Cute Cut Pro */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                                        🎬
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Cute Cut Pro</h2>
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                <strong>Cute Cut Pro</strong> is a powerful video editing application
                                                developed by <strong>Cute Cut Team</strong>. It offers professional-grade
                                                video editing features including multi-layer editing, advanced audio tools,
                                                stunning effects, and 4K export capabilities.
                                            </p>
                                            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                                                <h4 className="font-bold text-yellow-800 mb-2">Important Notice</h4>
                                                <p className="text-yellow-700 text-sm">
                                                    We are an independent download service and are not affiliated with,
                                                    endorsed by, or connected to the official Cute Cut Pro development team.
                                                    We simply provide the APK file for user convenience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Why Trust Us */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-4 flex-shrink-0">
                                        ⭐
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Trust Our Downloads?</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-2xl mx-auto mb-3">
                                                    🔍
                                                </div>
                                                <h4 className="font-bold text-gray-800 mb-2">Thorough Scanning</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Every APK is scanned for malware and viruses before being made available
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-2xl mx-auto mb-3">
                                                    📦
                                                </div>
                                                <h4 className="font-bold text-gray-800 mb-2">Original Files</h4>
                                                <p className="text-gray-600 text-sm">
                                                    We provide the original, unmodified APK files directly from the app
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-2xl mx-auto mb-3">
                                                    🛡️
                                                </div>
                                                <h4 className="font-bold text-gray-800 mb-2">Safe Experience</h4>
                                                <p className="text-gray-600 text-sm">
                                                    No hidden ads, no unwanted software, just clean, safe downloads
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Our Process */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                                        🔄
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Quality Process</h2>
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 rounded-xl p-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 mb-3">Verification Steps</h4>
                                                        <ul className="text-gray-600 space-y-2 text-sm">
                                                            <li className="flex items-center">
                                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">1</span>
                                                                Source verification from trusted repositories
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">2</span>
                                                                Malware and virus scanning
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">3</span>
                                                                File integrity checks
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">4</span>
                                                                Regular updates checking
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 mb-3">User Benefits</h4>
                                                        <ul className="text-gray-600 space-y-2 text-sm">
                                                            <li className="flex items-center">
                                                                <span className="text-blue-500 mr-2">•</span>
                                                                No risk of malware infection
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="text-blue-500 mr-2">•</span>
                                                                Guaranteed file authenticity
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="text-blue-500 mr-2">•</span>
                                                                Fast, direct downloads
                                                            </li>
                                                            <li className="flex items-center">
                                                                <span className="text-blue-500 mr-2">•</span>
                                                                Comprehensive installation guides
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* My Background */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                        💻
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Background</h2>
                                        <div className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                As a software engineer from Amritsar, Punjab, I have the technical
                                                expertise to verify and ensure the safety of the files we provide.
                                                My background in software development helps me understand:
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-indigo-50 rounded-lg p-4">
                                                    <h4 className="font-bold text-indigo-800 mb-2">Technical Knowledge</h4>
                                                    <ul className="text-indigo-700 text-sm space-y-1">
                                                        <li>• APK file structure</li>
                                                        <li>• Security best practices</li>
                                                        <li>• Malware detection</li>
                                                        <li>• Digital signatures</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-indigo-50 rounded-lg p-4">
                                                    <h4 className="font-bold text-indigo-800 mb-2">User Focus</h4>
                                                    <ul className="text-indigo-700 text-sm space-y-1">
                                                        <li>• Safe user experience</li>
                                                        <li>• Clear instructions</li>
                                                        <li>• Reliable support</li>
                                                        <li>• Regular maintenance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Section */}
                            <section className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                                        📞
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            Have questions about our service? Need help with installation?
                                            Or just want to suggest another app we should provide? I'm here to help!
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                                                <h4 className="font-bold text-teal-800 mb-4">Contact Information</h4>
                                                <div className="space-y-3">
                                                    <div className="flex items-center">
                                                        <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white mr-3">👤</span>
                                                        <div>
                                                            <p className="text-sm text-teal-700">Divyanshu Singh</p>
                                                            <p className="text-xs text-teal-600">Service Provider</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white mr-3">📍</span>
                                                        <div>
                                                            <p className="text-sm text-teal-700">Amritsar, Punjab</p>
                                                            <p className="text-xs text-teal-600">India</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white mr-3">📧</span>
                                                        <div>
                                                            <p className="text-sm text-teal-700">support@cutecutpro.com</p>
                                                            <p className="text-xs text-teal-600">Email Support</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                                                <h4 className="font-bold text-purple-800 mb-4">Quick Support</h4>
                                                <div className="space-y-3">
                                                    <p className="text-purple-700 text-sm">
                                                        Common issues we can help with:
                                                    </p>
                                                    <ul className="text-purple-600 text-sm space-y-2">
                                                        <li>• Installation problems</li>
                                                        <li>• File verification</li>
                                                        <li>• Safety concerns</li>
                                                        <li>• App suggestions</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Legal Disclaimer */}
                            <section className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                                <h3 className="text-lg font-bold text-yellow-800 mb-3">Legal Disclaimer</h3>
                                <p className="text-yellow-700 text-sm">
                                    We are an independent service providing APK downloads for user convenience.
                                    Cute Cut Pro is a trademark of its respective owners. We are not affiliated
                                    with, endorsed by, or connected to the official Cute Cut Pro development team.
                                    All apps are property of their respective developers.
                                </p>
                            </section>

                            {/* Final CTA */}

                        </div>
                    </div>


                </div>
            </div>
        </Layout>
    );
}