import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Есть вопросы или предложения? Мы всегда рады общению!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Адрес</h4>
                  <p className="text-gray-600">г. Караганда, Проспект Бухар-Жырау, 50</p>
                  <p className="text-gray-600">г. Абай, ул. Ленина, 15</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                  <p className="text-gray-600">+7 (7212) 123-456</p>
                  <p className="text-gray-600">+7 (777) 890-1234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@kotoklub.kz</p>
                  <p className="text-gray-600">support@kotoklub.kz</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Мы в социальных сетях</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Напишите ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 hover:scale-105'
                }`}
              >
                {submitted ? (
                  <>
                    ✓ Сообщение отправлено!
                  </>
                ) : (
                  <>
                    Отправить
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐱</span>
              <span className="font-bold text-xl text-orange-600">КотоКлуб</span>
            </div>
            <p className="text-gray-600 text-center">
              © 2024 КотоКлуб. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
