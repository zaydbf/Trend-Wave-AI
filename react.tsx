import React, { useState } from 'react';
import { Menu, X, Sparkles, Star, AtSign, Lock, Twitter } from 'lucide-react';

const TrendWaveAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    // Handle post creation logic here
    console.log('Creating post with credentials:', { email, password });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background elements from previous version remain the same */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-blue-900/50 z-10 animate-gradient" />

      <div className="relative z-20">
        {/* Navigation remains the same */}
        <nav className="bg-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-2 animate-slide-in">
                <Sparkles className="text-blue-400 w-8 h-8 animate-pulse-slow" />
                <span className="text-3xl font-bold">
                  <span className="text-blue-400">Trend</span>
                  <span className="text-purple-400">Wave</span>
                  <span className="text-blue-400">AI</span>
                </span>
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden text-white transition-transform duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
              Welcome to the Future of
              <br />
              <span className="inline-block animate-gradient-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Social Media
              </span>
            </h1>

            {/* Authentication Form */}
            <div className="w-full max-w-md p-6 mt-8 backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl border border-white/10 animate-fade-up">
              <div className="flex items-center justify-center mb-6 space-x-2">
                <Twitter className="text-blue-400 w-6 h-6" />
                <span className="text-white text-lg font-semibold">Connect your X Account</span>
              </div>
              
              <form onSubmit={handlePost} className="space-y-4">
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="X (Twitter) Email"
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="X (Twitter) Password"
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 group"
                >
                  <Star className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>Generate Trendy Post</span>
                </button>
              </form>

              <p className="mt-4 text-gray-400 text-sm">
                Your credentials are securely used only for posting. We never store your information.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 text-sm">
              &copy; 2025 TrendWaveAI. Exploring the cosmos of social connection.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TrendWaveAI;