import Head from 'next/head';
import Layout from '../components/Layout';
import { DOMAIN } from '@/config';

export default function Terms() {
    const effectiveDate = "December 2024";

    const sections = [
        {
            icon: '📝',
            title: 'Acceptance of Terms',
            content: `By accessing and using Cute Cut Pro Download service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.`
        },
        {
            icon: '🔒',
            title: 'Content Ownership',
            content: `All content on our website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Cute Cut Pro Download or our content providers and is protected by international copyright laws. You may not copy, reproduce, distribute, or create derivative works from our content without our explicit written permission.`,
            subpoints: [
                'All website content is proprietary and protected',
                'No unauthorized copying or distribution allowed',
                'Proper attribution required for any approved usage',
                'Digital rights management applies to all media'
            ]
        },
        {
            icon: '👥',
            title: 'User Conduct',
            content: `While using our services, you agree to maintain respectful and lawful behavior. Any form of harassment, spam, illegal activities, or violation of these terms will not be tolerated and may result in immediate termination of access.`,
            subpoints: [
                'Respect all users and administrators',
                'No spam or automated queries',
                'Legal compliance is mandatory',
                'No attempt to disrupt service operations'
            ]
        },
        {
            icon: '📱',
            title: 'APK Download Service',
            content: `We provide APK download services as an independent platform. Please note that we are not the official developers of Cute Cut Pro or any other applications we provide. Our role is limited to providing verified, safe download links.`,
            important: true
        },
        {
            icon: '🛡️',
            title: 'User Responsibilities',
            content: `You are solely responsible for ensuring that your use of downloaded APK files complies with applicable laws and the terms of service of the original application developers. We provide files for legitimate personal use only.`,
            subpoints: [
                'Verify app compatibility with your device',
                'Ensure legal use of downloaded applications',
                'Follow original app developer terms',
                'Use at your own discretion and risk'
            ]
        },
        {
            icon: '📧',
            title: 'User Contributions',
            content: `When you submit content to us (comments, reviews, suggestions), you grant us a non-exclusive, royalty-free license to use, modify, and display that content on our platform. You represent that you own or have the necessary rights to any content you submit.`,
            subpoints: [
                'You retain ownership of your content',
                'We may feature user contributions',
                'No confidential information should be shared',
                'Content must be appropriate and lawful'
            ]
        },
        {
            icon: '🔗',
            title: 'Third-Party Links',
            content: `Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Access these external sites at your own risk.`
        },
        {
            icon: '⚖️',
            title: 'Limitation of Liability',
            content: `Cute Cut Pro Download service and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use our services, including but not limited to damages for loss of profits, data, or other intangible losses.`,
            important: true
        },
        {
            icon: '🛡️',
            title: 'Indemnification',
            content: `You agree to defend, indemnify, and hold harmless Cute Cut Pro Download service, its operators, and affiliates from any claims, damages, obligations, losses, or expenses arising from your use of our services or violation of these terms.`
        },
        {
            icon: '🌐',
            title: 'Governing Law',
            content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Amritsar, Punjab.`
        },
        {
            icon: '📞',
            title: 'Contact Information',
            content: `If you have any questions about these Terms and Conditions, please contact us through our Contact Us page or email us at support@cutecutpro.com. We typically respond within 24-48 hours.`
        },
        {
            icon: '🔄',
            title: 'Changes to Terms',
            content: `We reserve the right to modify these terms at any time. We will notify users of significant changes by posting updates on this page. Continued use of our services after changes constitutes acceptance of the modified terms.`
        }
    ];

    const quickLinks = [
        {
            title: 'APK Safety',
            description: 'Learn about our file verification process',
            icon: '✅'
        },
        {
            title: 'Privacy Policy',
            description: 'How we protect your information',
            icon: '🔒'
        },
        {
            title: 'Contact Support',
            description: 'Get help with downloads and installation',
            icon: '💬'
        },
        {
            title: 'About Our Service',
            description: 'Understand what we provide',
            icon: 'ℹ️'
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Terms and Conditions - Cute Cut Pro Download</title>
                <meta name="description" content="Read our Terms and Conditions to understand the rules and guidelines for using our APK download service." />
                <link rel="canonical" href={`${DOMAIN}/terms`} />
                <meta name="author" content="Divyanshu Rawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Please read these terms carefully before using our service
                        </p>
                    </div>

                    {/* Effective Date */}
                    {/* <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                                📅
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800">Effective Date</h3>
                                <p className="text-blue-700">{effectiveDate}</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {quickLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.title === 'Privacy Policy' ? '/privacy' :
                                    link.title === 'Contact Support' ? '/contact' :
                                        link.title === 'About Our Service' ? '/about' : '#'}
                                className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition duration-300 text-center group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 mb-1">{link.title}</h3>
                                <p className="text-gray-600 text-xs">{link.description}</p>
                            </a>
                        ))}
                    </div>

                    {/* Terms Content */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="p-8 md:p-12 space-y-12">
                            {sections.map((section, index) => (
                                <section key={index} className="space-y-4">
                                    <div className="flex items-start">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 flex-shrink-0 ${section.important ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
                                            }`}>
                                            {section.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                                {section.title}
                                                {section.important && (
                                                    <span className="ml-2 text-red-500 text-sm font-normal">(Important)</span>
                                                )}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {section.content}
                                            </p>

                                            {section.subpoints && (
                                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                                    <ul className="space-y-2">
                                                        {section.subpoints.map((point, pointIndex) => (
                                                            <li key={pointIndex} className="flex items-start text-gray-600">
                                                                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {section.important && (
                                        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-3">!</div>
                                                <p className="text-red-700 font-medium">Important Notice</p>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}

                            {/* Final Important Notes */}
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4 text-center">Key Points to Remember</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                                            <span>We provide APK files as a service</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                                            <span>All downloads are at your own risk</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">3</span>
                                            <span>Respect copyright and content ownership</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">4</span>
                                            <span>Follow applicable laws and regulations</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">5</span>
                                            <span>Contact us with any questions</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm mr-3">6</span>
                                            <span>Check back for updates to terms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Questions About Our Terms?</h3>
                                <p className="text-gray-600 mb-6">
                                    We're here to help clarify any aspect of our Terms and Conditions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition duration-300"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="/"
                                        className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-bold hover:border-purple-500 hover:text-purple-600 transition duration-300"
                                    >
                                        Back to Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Footer */}
                    <div className="mt-8 text-center">
                        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mb-4">
                            <h4 className="font-bold text-yellow-800 mb-2">Legal Disclaimer</h4>
                            <p className="text-yellow-700 text-sm">
                                Cute Cut Pro Download is an independent service and is not affiliated with, endorsed by,
                                or connected to the official Cute Cut Pro development team. All trademarks and registered
                                trademarks are the property of their respective owners.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}