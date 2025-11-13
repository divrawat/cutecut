import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://images.divyastocks.online/Cute%20CUT%20-%20Video%20Editor_2.4.3_APKPure.apk';
    link.download = 'cute-cut-pro.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: '🎬',
      title: 'Professional Video Editing',
      desc: 'Trim, cut, split, merge videos with frame-accurate precision. Support for 4K resolution and multiple video formats.',
      details: ['Frame-by-frame editing', '4K video support', 'Multiple format compatibility', 'Precision trimming tools']
    },
    {
      icon: '🎵',
      title: 'Advanced Audio Tools',
      desc: 'Add background music, voiceovers, sound effects. Adjust volume levels, fade in/out, and sync audio perfectly with video.',
      details: ['Multi-track audio', 'Voice recording', 'Sound effects library', 'Audio synchronization']
    },
    {
      icon: '✨',
      title: 'Stunning Effects & Filters',
      desc: '100+ premium filters, transitions, and special effects. Beauty filters, slow motion, time-lapse, and reverse video.',
      details: ['100+ filters', 'Smooth transitions', 'Beauty enhancement', 'Speed control']
    },
    {
      icon: '📱',
      title: 'Multi-layer Timeline',
      desc: 'Work with unlimited video, audio, text, and sticker layers. Precise control over every element in your project.',
      details: ['Unlimited layers', 'Precise timing control', 'Layer management', 'Real-time preview']
    },
    {
      icon: '🎨',
      title: 'Creative Customization',
      desc: 'Add animated text, custom stickers, emojis, and drawings. Full color control and font selection for perfect styling.',
      details: ['Animated text', 'Custom stickers', 'Color palettes', 'Font library']
    },
    {
      icon: '⚡',
      title: 'Fast Processing Engine',
      desc: 'Hardware-accelerated rendering and export. Support for multiple quality settings up to 4K 60fps.',
      details: ['Hardware acceleration', 'Multiple export options', 'Fast rendering', 'Quality preservation']
    }
  ];

  const advancedFeatures = [
    {
      category: 'Video Effects',
      items: ['Chroma Key', 'Picture-in-Picture', 'Split Screen', 'Green Screen', 'Motion Tracking']
    },
    {
      category: 'Audio Features',
      items: ['Noise Reduction', 'Audio Equalizer', 'Voice Changer', 'Background Music', 'Sound Mixing']
    },
    {
      category: 'Export Options',
      items: ['4K Ultra HD', '1080p Full HD', '720p HD', 'Custom Resolution', 'Multiple Formats']
    },
    {
      category: 'Editing Tools',
      items: ['Magnetic Timeline', 'Keyframe Animation', 'Color Correction', 'Stabilization', 'Reverse Video']
    }
  ];

  const steps = [
    { number: '01', title: 'Download APK', desc: 'Click the download button to get the latest version', icon: '📥' },
    { number: '02', title: 'Enable Installation', desc: 'Allow installation from unknown sources in settings', icon: '⚙️' },
    { number: '03', title: 'Install App', desc: 'Open the APK file and tap install', icon: '📲' },
    { number: '04', title: 'Launch & Create', desc: 'Open Cute Cut and start your creative journey', icon: '🎉' }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Content Creator',
      text: 'This app transformed my video editing workflow. The multi-layer feature is incredible!',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'Mike R.',
      role: 'Vlogger',
      text: 'Best free video editor I have used. No watermarks and professional features.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Jessica L.',
      role: 'Social Media Manager',
      text: 'My go-to app for quick Instagram stories and TikTok videos. Love it!',
      rating: 4,
      avatar: 'JL'
    },
    {
      name: 'Alex K.',
      role: 'Travel Blogger',
      text: 'The audio editing features are amazing. Perfect for my travel vlogs!',
      rating: 5,
      avatar: 'AK'
    },
    {
      name: 'David T.',
      role: 'YouTuber',
      text: '4K export quality is superb. Better than many paid apps out there.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Emma S.',
      role: 'Student',
      text: 'Perfect for school projects and presentations. So easy to use!',
      rating: 4,
      avatar: 'ES'
    }
  ];

  const compatibility = [
    { version: 'Android 5.0+', status: 'Fully Supported', icon: '✅' },
    { version: 'Android 8.0+', status: 'Optimized', icon: '⚡' },
    { version: 'Android 10+', status: 'Best Performance', icon: '🎯' },
    { version: 'Android 12+', status: 'Latest Features', icon: '🔥' }
  ];

  const versionHistory = [
    { version: '2.4.3', date: 'Nov 2025', features: ['New filters', 'Performance improvements', 'Bug fixes'] },
    { version: '2.4.1', date: 'June 2025', features: ['Audio enhancements', 'New transitions', 'Stability fixes'] },
    { version: '2.3.9', date: 'Dec 2024', features: ['4K support', 'New UI', 'Export optimization'] },
    { version: '2.3.5', date: 'Sep 2024', features: ['Multi-layer timeline', 'Advanced editing', 'Speed controls'] }
  ];

  return (
    <Layout>
      <Head>
        <title>Cute Cut Pro - Professional Video Editor APK Download</title>
        <meta name="description" content="Download Cute Cut Pro APK - The ultimate video and audio editing app for Android. Create stunning videos with professional tools, no watermark, completely free." />
        <meta name="keywords" content="cute cut pro, video editor, apk download, android app, video editing, audio editing, no watermark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Redesigned Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2%, transparent 2.5%),
                              radial-gradient(circle at 75% 75%, #ffffff 2%, transparent 2.5%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-indigo-500 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Latest Version 2.5.8 Available</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
                Create Amazing Videos with
                <span className="block text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text"> Cute Cut Pro</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                Professional video editing studio in your pocket. No watermarks, no limits, completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleDownload}
                  className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl group-hover:animate-bounce">📥</span>
                  <span>Download Now - 84.2 MB</span>
                </button>

                <button className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                  <span>🎬</span>
                  <span><a href="#features">View Features</a></span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10M+</div>
                  <div className="text-white/70 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3.7</div>
                  <div className="text-white/70 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/70 text-sm">Free</div>
                </div>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative w-80 h-96 bg-gray-900 rounded-[3rem] border-[14px] border-gray-800 shadow-2xl overflow-hidden">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl z-10"></div>

                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <span className="text-3xl">🎬</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Cute Cut Pro</h3>
                      <p className="opacity-90">Video Editor</p>
                      <div className="mt-6 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl shadow-2xl">
                  ✨
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center text-xl shadow-2xl">
                  🎵
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Professional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create stunning videos right on your Android device
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools that rival desktop video editing software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how Cute Cut Pro transforms ordinary videos into extraordinary content
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <span className="text-2xl">🎬</span>
                </div>
                <p className="text-xl font-semibold">Video Demo Showcase</p>
                <p className="opacity-80 mt-2">See the powerful features in action</p>
                <button className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
                  <a href='https://www.youtube.com/watch?v=p2cuLnWPgdw'>
                    Watch Demo Video
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-to" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple installation process to start creating amazing videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-1/2 -z-10"></div>
                  )}
                </div>
                <div className="text-sm text-purple-600 font-bold mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Android Compatibility
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimized for all modern Android devices with enhanced performance on newer versions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compatibility.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.version}</h3>
                <p className="text-gray-600">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who transformed their video editing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Version History */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Continuous Improvement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regular updates with new features and performance enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {versionHistory.map((version, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-600">{version.version}</div>
                  <div className="text-gray-500 text-sm">{version.date}</div>
                </div>
                <ul className="space-y-2">
                  {version.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Cute Cut Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare with other video editors and see the difference
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-gradient-to-b from-purple-600 to-blue-600 text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Features</h3>
                <p className="opacity-90">What makes us stand out</p>
              </div>
              <div className="bg-gray-50 p-8 border-l border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Cute Cut Pro</h4>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
              <div className="bg-gray-50 p-8 border-l border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Other Editors</h4>
                <div className="text-red-500 text-2xl">✗</div>
              </div>
              <div className="bg-gray-50 p-8 border-l border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Paid Apps</h4>
                <div className="text-yellow-500 text-2xl">$</div>
              </div>
            </div>

            {[
              'No Watermark',
              'All Features Free',
              '4K Export',
              'Multi-layer Editing',
              'Advanced Audio Tools',
              'Regular Updates'
            ].map((feature, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-gray-200">
                <div className="p-6 bg-white">
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
                <div className="p-6 bg-gray-50 border-l border-gray-200">
                  <span className="text-green-500 font-bold">Included</span>
                </div>
                <div className="p-6 bg-gray-50 border-l border-gray-200">
                  <span className="text-red-500 font-bold">Not Available</span>
                </div>
                <div className="p-6 bg-gray-50 border-l border-gray-200">
                  <span className="text-purple-500 font-bold">Paid Only</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Cute Cut Pro
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is Cute Cut Pro really free with no hidden costs?",
                answer: "Yes! Cute Cut Pro is completely free with no hidden costs, in-app purchases, or subscription fees. All features are unlocked and there are no watermarks on your exported videos."
              },
              {
                question: "What Android versions are supported?",
                answer: "Cute Cut Pro supports Android 5.0 (Lollipop) and above. For best performance and access to all features, we recommend Android 8.0 or higher. The app is optimized for each Android version."
              },
              {
                question: "How do I enable installation from unknown sources?",
                answer: "Go to Settings > Security > Unknown sources and enable it. On newer Android versions, go to Settings > Apps > Special app access > Install unknown apps, then select your browser and enable permission."
              },
              {
                question: "Can I export videos in 4K quality?",
                answer: "Absolutely! Cute Cut Pro supports export in multiple resolutions including 720p, 1080p, and 4K Ultra HD. The available resolutions depend on your device capabilities and original video quality."
              },
              {
                question: "Is there any watermark on exported videos?",
                answer: "No, there are no watermarks of any kind on your exported videos. You get complete, professional-quality videos without any branding or limitations."
              },
              {
                question: "How often is the app updated?",
                answer: "We release regular updates every 1-2 months with new features, performance improvements, and bug fixes. All updates are free and automatically available for download."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition duration-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">?</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join over 150,000 creators who are already making amazing videos with Cute Cut Pro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleDownload}
              className="group bg-white text-purple-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3"
            >
              <span className="text-2xl">📥</span>
              <span>Download Cute Cut Pro Now</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm opacity-80 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>No Watermark • All Features Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>84.2 MB • Android 5.0+</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>100% Safe • Regular Updates</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}