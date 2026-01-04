import Head from 'next/head';
import Layout from '../components/Layout';
import { DOMAIN } from '@/config';
import {
  FaDownload,
  FaAndroid,
  FaCut,
  FaMusic,
  FaMagic,
  FaLayerGroup,
  FaPalette,
  FaBolt,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaQuestionCircle,
  FaShieldAlt,
  FaGooglePlay,
  FaYoutube,
  FaCheck,
  FaTimes,
  FaFileVideo,
  FaFileAudio,
  FaMobileAlt,
  FaBug,
  FaGhost,
  FaVolumeUp,
  FaSlidersH
} from 'react-icons/fa';
import {
  MdHd,
  MdSpeed,
  MdUpdate,
  MdSecurity,
  MdDevices,
  MdMovieCreation,
  MdCompareArrows,
  MdVerifiedUser
} from 'react-icons/md';
import { IoIosRocket, IoMdColorFilter } from 'react-icons/io';
import { BsGpuCard, BsSoundwave, BsCheckLg, BsFileEarmarkMusic, BsFilePlay } from 'react-icons/bs';

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
      icon: <FaCut size={24} />,
      title: 'Professional Editing',
      desc: 'Precision tools to trim, cut, split, and merge videos with frame-by-frame accuracy.',
      color: 'bg-rose-500'
    },
    {
      icon: <FaMusic size={24} />,
      title: 'Advanced Audio',
      desc: 'Multi-track audio mixing, voiceovers, and sound effects synchronized perfectly.',
      color: 'bg-violet-500'
    },
    {
      icon: <FaMagic size={24} />,
      title: 'Visual Effects',
      desc: 'Over 100+ premium filters, transitions, and special effects to enhance your footage.',
      color: 'bg-amber-500'
    },
    {
      icon: <FaLayerGroup size={24} />,
      title: 'Multi-layer Timeline',
      desc: 'Support for unlimited video, audio, text, and sticker layers in your projects.',
      color: 'bg-blue-500'
    },
    {
      icon: <FaPalette size={24} />,
      title: 'Drawing Tools',
      desc: 'Draw directly on your video with 30+ drawing tools and customizable brushes.',
      color: 'bg-emerald-500'
    },
    {
      icon: <FaBolt size={24} />,
      title: 'Fast Rendering',
      desc: 'Hardware accelerated export ensures smooth playback and quick video processing.',
      color: 'bg-cyan-500'
    }
  ];

  const advancedFeatures = [
    {
      category: 'Video Control',
      icon: <MdMovieCreation />,
      items: ['Chroma Key (Green Screen)', 'Picture-in-Picture', 'Keyframe Animation', 'Slow Motion']
    },
    {
      category: 'Audio Mastery',
      icon: <BsSoundwave />,
      items: ['Noise Reduction', 'Volume Envelope', 'Voice Changer', 'Audio Extraction']
    },
    {
      category: 'Export Quality',
      icon: <MdHd />,
      items: ['4K Ultra HD Export', '60 FPS Support', 'Custom Bitrate', 'No Watermark']
    },
    {
      category: 'Creative Tools',
      icon: <FaPalette />,
      items: ['Custom Transitions', 'Animated Titles', 'Masking Tools', 'Color Grading']
    }
  ];

  const steps = [
    { number: '1', title: 'Download', desc: 'Get the secure APK file.', icon: <FaDownload /> },
    { number: '2', title: 'Install', desc: 'Allow installation.', icon: <FaAndroid /> },
    { number: '3', title: 'Launch', desc: 'Open and give permissions.', icon: <IoIosRocket /> },
    { number: '4', title: 'Create', desc: 'Start editing instantly.', icon: <FaMagic /> }
  ];

  const proTools = [
    {
      icon: <FaGhost size={32} />,
      name: "Ghost Image",
      desc: "Create stunning transparency effects and overlay multiple images or videos for artistic compositions."
    },
    {
      icon: <FaVolumeUp size={32} />,
      name: "Volume Envelope",
      desc: " precise control over audio levels at any point in your timeline. Create smooth fades and mixes."
    },
    {
      icon: <FaSlidersH size={32} />,
      name: "Transition Customizer",
      desc: "Go beyond presets. Customize the duration, direction, and style of every transition."
    }
  ];

  const specs = [
    {
      title: "Supported Video Formats",
      icon: <BsFilePlay />,
      items: ["MP4", "MKV", "MOV", "AVI", "3GP", "FLV"]
    },
    {
      title: "Supported Audio Formats",
      icon: <BsFileEarmarkMusic />,
      items: ["MP3", "M4A", "WAV", "AAC"]
    },
    {
      title: "Export Resolutions",
      icon: <MdHd />,
      items: ["720p HD", "1080p Full HD", "4K Ultra HD", "Custom"]
    },
    {
      title: "System Requirements",
      icon: <FaMobileAlt />,
      items: ["Android 5.0+", "2GB RAM Min", "500MB Free Space"]
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Cute Cut Pro - Professional Video Editor APK Download</title>
        <meta name="description" content="Download Cute Cut Pro APK - The ultimate video and audio editing app for Android. Create stunning videos with professional tools, no watermark, completely free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={DOMAIN} />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0F172A] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-300">Latest Version 2.5.8</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-200 mb-6 leading-tight tracking-tight">
                Edit Like a Pro <br /> on Android.
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The most powerful video editor for smartphones. Multi-layer timeline, 4K export, and professional tools —
                <span className="text-white font-semibold"> 100% Free & No Watermark.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleDownload}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <FaDownload className="group-hover:animate-bounce" />
                    <span>Download APK (84MB)</span>
                  </div>
                </button>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-2 sm:mt-0">
                  <MdSecurity className="text-green-500" /> Secure & Verified
                </div>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                ⭐ 4.8/5 Rating based on 10M+ Downloads
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:w-1/2 relative perspective-1000">
              <div className="relative z-10 mx-auto w-72 h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl shadow-blue-900/50 flex flex-col overflow-hidden rotate-y-12 rotate-z-2 transform hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
                {/* Screen */}
                <div className="flex-1 bg-gradient-to-br from-indigo-900 to-black relative w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                  <div className="relative z-10 text-center p-6 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10 m-4">
                    <FaCut className="text-5xl text-white mx-auto mb-4" />
                    <h3 className="text-white font-bold text-xl">Cute Cut Pro</h3>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    <div className="mt-8 space-y-3">
                      <div className="h-2 w-full bg-white/20 rounded"></div>
                      <div className="h-2 w-3/4 bg-white/20 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-20 -right-4 lg:right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 animate-float shadow-xl">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-green-500 p-2 rounded-lg"><MdHd size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Export</p>
                    <p className="font-bold">4K Ultra HD</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-8 lg:left-0 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 animate-float-delayed shadow-xl">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-pink-500 p-2 rounded-lg"><FaLayerGroup size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-400">Timeline</p>
                    <p className="font-bold">Multi-Layer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section (NEW) */}
      <section className="py-20 bg-[#0B1121]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free vs Pro Comparison</h2>
            <p className="text-gray-400">Why thousands switch to the Pro version instantly.</p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="border border-gray-700 rounded-2xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-5 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Feature</th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-gray-400 uppercase tracking-wider">Free Version</th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-blue-400 uppercase tracking-wider bg-blue-900/10">Cute Cut Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700 bg-gray-900/50">
                    {[
                      { name: 'Watermark', free: false, pro: true },
                      { name: 'Video Length Limit', free: '30 Seconds', pro: 'Unlimited' },
                      { name: 'Export Quality', free: '720p', pro: '1080p / 4K' },
                      { name: 'Ads', free: 'Yes', pro: 'No Ads' },
                      { name: 'Premium Transitions', free: false, pro: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{row.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          {row.free === false ? <FaTimes className="inline text-red-500" /> : row.free === true ? <FaCheck className="inline text-green-500" /> : row.free}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-white bg-blue-900/5 font-bold">
                          {row.pro === false ? <FaTimes className="inline text-red-500" /> : row.pro === true ? <FaCheck className="inline text-green-400" /> : row.pro}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Desktop Power. Mobile Freedom.</h2>
            <p className="text-gray-400 text-lg">Experience the most comprehensive video editing toolset available on Android devices.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities (Dark Glass) */}
      <section className="py-24 bg-[#0B1121]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-8">Unleash Your Creativity</h2>
              <p className="text-gray-400 text-lg mb-12">Don't let mobile limitations stop you. We brought professional studio features to your fingertips.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {advancedFeatures.map((cat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4 text-blue-400">
                      {cat.icon}
                      <h3 className="font-bold text-white">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Video Placeholder Box */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-gray-700 bg-gray-800 aspect-video group">
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/50 transition-all cursor-pointer">
                  <a href="https://www.youtube.com/watch?v=p2cuLnWPgdw" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform">
                    <FaYoutube className="text-red-600 text-3xl" />
                  </a>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-bold text-xl">Watch Demo</h4>
                  <p className="text-sm opacity-80">See what's possible in 60 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tools Spotlight (NEW) */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Pro Tools Highlight</h2>
            <p className="text-gray-400">Exclusive features available in this version.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {proTools.map((tool, idx) => (
              <div key={idx} className="bg-gray-800/30 p-8 rounded-3xl border border-white/5 hover:bg-gray-800/50 transition-colors text-center">
                <div className="inline-block p-4 rounded-full bg-blue-600/20 text-blue-400 mb-6">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tool.name}</h3>
                <p className="text-gray-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs (NEW) */}
      <section className="py-20 bg-[#0B1121] border-y border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  {spec.icon}
                  <h4 className="font-bold text-white text-sm">{spec.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {spec.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Get Started in Seconds</h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-gray-900 shadow-xl flex items-center justify-center text-3xl text-blue-400 mb-6 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 border-4 border-gray-900 flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guarantee (NEW) */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6">
            <MdVerifiedUser size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">100% Safe & Secure Download</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our APK files are verified, scanned, and safe to install. No root required, no malicious permissions.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> VirusTotal Verified
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> No Root Needed
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> Official Signature
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-200">Downloads</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">4.8</div>
              <div className="text-blue-200">User Rating</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Virus Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is Cute Cut Pro really free?", a: "Yes, this is the fully unlocked Mod APK version which provides all Pro features completely for free without any subscription." },
              { q: "Does it have watermarks?", a: "No. The Pro version removes all watermarks from your exported videos, allowing for professional-looking results." },
              { q: "Is it safe to install?", a: "Absolutely. We scan every APK file for viruses and malware. It is 100% safe to download and install on your device." },
              { q: "Can I edit 4K videos?", a: "Yes, Cute Cut Pro supports importing and exporting 4K Ultra HD videos on supported devices." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <FaQuestionCircle className="text-blue-500 mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Creating?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Download the latest version of Cute Cut Pro today and transform your moments into cinematic masterpieces.</p>

          <button
            onClick={handleDownload}
            className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-xl hover:bg-gray-100 transition-transform hover:scale-105 shadow-2xl shadow-white/10 flex items-center gap-3 mx-auto"
          >
            <FaDownload />
            Download Now
          </button>
          <p className="mt-6 text-sm text-gray-500">Requires Android 5.0+</p>
        </div>
      </section>

    </Layout>
  );
}