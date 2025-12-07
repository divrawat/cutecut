import Head from 'next/head';
import Layout from '../components/Layout';
import { DOMAIN } from '@/config';

export default function PrivacyPolicy() {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy - Cute Cut Pro</title>
                <meta name="description" content="Read our Privacy Policy to understand how we protect your data and privacy while using Cute Cut Pro." />

                <link rel="canonical" href={`${DOMAIN}/privacy-policy`} />
                <meta name="author" content="Divyanshu Rawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Your privacy matters to us. Here's how we protect it.
                        </p>
                    </div>

                    {/* Last Updated */}
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                                ℹ️
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800">Last Updated</h3>
                                <p className="text-blue-700">December 2024</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Introduction */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                        👋
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome to Cute Cut Pro</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            At Cute Cut Pro, we believe your privacy is a fundamental right, not a luxury.
                                            We're committed to being transparent about our practices and ensuring your
                                            personal information remains exactly that—personal. This Privacy Policy explains
                                            how we approach data protection in our APK download service.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Minimal Data Collection */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                                        📊
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Data Collection Philosophy</h2>
                                        <div className="bg-green-50 rounded-xl p-6 mb-4 border border-green-200">
                                            <h3 className="font-bold text-green-800 text-lg mb-2">Important Notice</h3>
                                            <p className="text-green-700">
                                                <strong>We do not collect any personal information from our users.</strong>
                                                Unlike many apps and websites, we believe in providing our service without
                                                requiring your personal data.
                                            </p>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            We've designed Cute Cut Pro to respect your privacy from the ground up.
                                            When you download our APK file, we don't ask for your name, email address,
                                            phone number, or any other personal identifiers.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            The only information we might receive is standard web server logs that
                                            include your IP address and browser type—this is automatic and common to
                                            all websites, but we don't use this information to identify or track
                                            individual users.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* How We Operate Without Your Data */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                                        🚀
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">How We Operate Without Collecting Your Data</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            You might wonder how we provide our service without collecting user information.
                                            The answer is simple: we believe in a straightforward approach. Our APK file
                                            is available for direct download, and we don't require accounts, registrations,
                                            or personal details.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-800 mb-2">What We Don't Collect</h4>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>✓ No names or email addresses</li>
                                                    <li>✓ No phone numbers</li>
                                                    <li>✓ No location data</li>
                                                    <li>✓ No browsing history</li>
                                                    <li>✓ No device identifiers</li>
                                                </ul>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Our Approach</h4>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>✓ Direct downloads only</li>
                                                    <li>✓ No user accounts needed</li>
                                                    <li>✓ No tracking cookies</li>
                                                    <li>✓ No data sharing</li>
                                                    <li>✓ Complete transparency</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Third-Party Services */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-4 flex-shrink-0">
                                        🔗
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Third-Party Services</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Our website may use third-party services like web hosting and analytics tools.
                                            These services have their own privacy policies, and we ensure they meet our
                                            standards for data protection.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            However, it's important to note that these services don't receive any personal
                                            information from us because we don't collect it in the first place.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Cookies */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
                                        🍪
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Cookies and Tracking</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            We use minimal cookies that are essential for website functionality.
                                            We don't use tracking cookies, advertising cookies, or any other
                                            cookies that would monitor your behavior across websites.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Data Security */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                                        🔒
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Data Security</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            While we don't collect your personal information, we still take security seriously.
                                            Our website uses standard security measures including:
                                        </p>
                                        <ul className="text-gray-600 space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                HTTPS encryption for all data transfers
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Regular security updates and monitoring
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Secure server infrastructure
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2">•</span>
                                                Malware scanning for all downloads
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Your Rights */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
                                        📝
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Privacy Rights</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Even though we don't collect your data, we believe you should know your rights:
                                        </p>
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <ul className="text-gray-600 space-y-3">
                                                <li className="flex items-start">
                                                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">1</span>
                                                    <span><strong>Right to Know:</strong> You have the right to know what data is collected—in our case, virtually none.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">2</span>
                                                    <span><strong>Right to Access:</strong> If we had your data, you could access it—but we don't collect it.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0">3</span>
                                                    <span><strong>Right to Delete:</strong> You can't delete what we never collected in the first place.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Children's Privacy */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 flex-shrink-0">
                                        👶
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Children's Privacy</h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            We don't knowingly collect any information from children under 13.
                                            Since we don't collect any personal information from anyone, this
                                            includes children. Our service is designed to be safe for all ages.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Policy Updates */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-4 flex-shrink-0">
                                        📢
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Policy Updates</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            We may update this privacy policy occasionally to reflect changes in
                                            our practices or legal requirements. Any updates will be posted on this
                                            page with a revised "Last Updated" date.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            We encourage you to review this policy periodically to stay informed
                                            about how we're protecting your privacy.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Contact */}
                            <section className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            If you have any questions about this Privacy Policy or our privacy practices,
                                            we'd be happy to help. While we don't collect your information, we're still
                                            committed to being transparent about our practices.
                                        </p>
                                        <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                                            <h3 className="font-bold text-teal-800 mb-2">Get in Touch</h3>
                                            <p className="text-teal-700">
                                                Email us at: <span className="font-mono">support@cutecutpro.com</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Final Note */}
                            <section className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                        💜
                                    </div>
                                    <h3 className="text-xl font-bold text-purple-800 mb-3">Thank You for Trusting Us</h3>
                                    <p className="text-purple-700">
                                        We believe privacy should be the default, not an option. Thank you for choosing
                                        Cute Cut Pro—where your privacy is respected and protected.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Bottom Note */}
                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            This Privacy Policy was last updated in November 2025
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}