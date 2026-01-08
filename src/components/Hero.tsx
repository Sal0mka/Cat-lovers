import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623420797910-c7c3498d74fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3ODAzOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Милый котик"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 via-orange-50/70 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <span className="text-8xl inline-block animate-bounce-slow">🐱</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Добро пожаловать в <span className="text-orange-600">КотоКлуб</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Сообщество любителей кошек из Караганды и Абая. 
          Мы объединяем людей, которые обожают этих пушистых созданий!
        </p>

        <button
          onClick={scrollToAbout}
          className="group bg-orange-600 text-white px-8 py-4 rounded-full text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg"
        >
          Узнать больше
          <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={24} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-orange-600 opacity-50" />
      </div>
    </section>
  );
}
