import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';
import { DOMAIN } from '@/config';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email Us',
            description: 'Send us an email anytime',
            details: 'divrawat2001second@gmail.com',
            link: 'mailto:divrawat2001second@gmail.com'
        },
        {
            icon: '📍',
            title: 'Our Location',
            description: 'Based in beautiful Punjab',
            details: 'Amritsar, Punjab, India',
            link: null
        },
        {
            icon: '🕒',
            title: 'Response Time',
            description: 'We typically reply within',
            details: '24-48 hours',
            link: null
        }
    ];

    const faqs = [
        {
            question: "How do I download Cute Cut Pro?",
            answer: "Simply visit our homepage and click the download button. The APK file will start downloading immediately."
        },
        {
            question: "Is the APK file safe to install?",
            answer: "Yes! We thoroughly scan all APK files for malware and viruses before making them available for download."
        },
        {
            question: "Do you provide technical support for the app?",
            answer: "While we're not the official developers, we can help with installation issues and basic troubleshooting."
        },
        {
            question: "Can I request other apps?",
            answer: "Absolutely! We're always looking to add more popular apps to our collection. Send us your suggestions."
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Contact Us - Cute Cut Pro Download</title>
                <meta name="description" content="Get in touch with us for support, questions, or feedback about Cute Cut Pro APK downloads." />

                <link rel="canonical" href={`${DOMAIN}/contact`} />
                <meta name="author" content="Divyanshu Rawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're here to help you with any questions about Cute Cut Pro downloads
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                                {method.link ? (
                                    <a
                                        href={method.link}
                                        className="text-purple-600 font-medium hover:text-purple-700 transition duration-300"
                                    >
                                        {method.details}
                                    </a>
                                ) : (
                                    <p className="text-gray-700 font-medium">{method.details}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</div>
                                        <div>
                                            <p className="text-green-800 font-medium">Message sent successfully!</p>
                                            <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="download-help">Download Help</option>
                                        <option value="installation-issue">Installation Issue</option>
                                        <option value="app-suggestion">App Suggestion</option>
                                        <option value="general-question">General Question</option>
                                        <option value="bug-report">Bug Report</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 resize-none"
                                        placeholder="Please describe your question or issue in detail..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                            Sending Message...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>

                                <p className="text-gray-500 text-sm text-center">
                                    We typically respond within 24 hours
                                </p>
                            </form>
                        </div>

                        {/* FAQ & Additional Info */}
                        <div className="space-y-8">
                            {/* FAQ Section */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-start">
                                                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm mr-3 flex-shrink-0">?</span>
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-600 ml-9">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support Information */}
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                                <h2 className="text-2xl font-bold mb-4">Quick Support Guide</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="text-lg mr-3">🔍</span>
                                        <div>
                                            <h4 className="font-bold mb-1">Before Contacting Us</h4>
                                            <p className="text-purple-100 text-sm">
                                                Check our homepage for detailed installation instructions and troubleshooting tips.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-lg mr-3">📱</span>
                                        <div>
                                            <h4 className="font-bold mb-1">Installation Help</h4>
                                            <p className="text-purple-100 text-sm">
                                                Make sure "Install from unknown sources" is enabled in your Android settings.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-lg mr-3">🛡️</span>
                                        <div>
                                            <h4 className="font-bold mb-1">Safety First</h4>
                                            <p className="text-purple-100 text-sm">
                                                All our APK files are scanned for malware and verified for safety.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Info */}
                            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                                        ⏰
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-yellow-800">Response Time</h3>
                                        <p className="text-yellow-700 text-sm">We aim to reply within 24 hours</p>
                                    </div>
                                </div>
                                <p className="text-yellow-700 text-sm">
                                    For urgent issues, please include "URGENT" in your subject line and we'll prioritize your message.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Connect</h2>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Whether you have a question about downloads, need installation help, or want to suggest
                                new apps for our platform, we're here to assist you.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-lg mx-auto mb-3">
                                        💬
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">General Inquiries</h4>
                                    <p className="text-gray-600 text-sm">Questions about our service</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg mx-auto mb-3">
                                        📥
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">Download Support</h4>
                                    <p className="text-gray-600 text-sm">Help with APK downloads</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-lg mx-auto mb-3">
                                        🔧
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">Technical Help</h4>
                                    <p className="text-gray-600 text-sm">Installation issues</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-lg mx-auto mb-3">
                                        💡
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-1">Suggestions</h4>
                                    <p className="text-gray-600 text-sm">App requests & feedback</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Notice */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm">
                            Please note: We are an independent APK download service and are not affiliated with the official Cute Cut Pro developers.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}