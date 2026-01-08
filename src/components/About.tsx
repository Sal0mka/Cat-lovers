import { Heart, Users, Award, Calendar } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Любовь к кошкам',
      description: 'Мы объединяем людей, которые разделяют любовь к этим удивительным созданиям'
    },
    {
      icon: Users,
      title: 'Активное сообщество',
      description: 'Более 500 участников из Караганды и Абая регулярно делятся опытом'
    },
    {
      icon: Award,
      title: 'Конкурсы и рейтинги',
      description: 'ТОП-100 самых популярных котов региона и регулярные конкурсы'
    },
    {
      icon: Calendar,
      title: 'Мероприятия',
      description: 'Выставки, встречи, благотворительные акции для помощи приютам'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            О нашем клубе
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            КотоКлуб был создан в 2024 году энтузиастами из Караганды и Абая, 
            объединенными общей любовью к кошкам и желанием создать место, 
            где каждый любитель кошек может найти единомышленников.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* История клуба */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">История происхождения</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Все началось с небольшой встречи нескольких друзей-кошатников в кафе Караганды. 
              Мы обсуждали наших питомцев, делились советами по уходу и смешными историями. 
              Именно тогда родилась идея создать что-то большее – настоящее сообщество.
            </p>
            <p>
              Сегодня КотоКлуб – это не просто группа в интернете. Это активное сообщество 
              с регулярными мероприятиями, помощью приютам, образовательными программами 
              и возможностью найти настоящих друзей среди любителей кошек.
            </p>
            <p>
              Наша миссия – создать самое дружелюбное и информативное пространство для всех, 
              кто любит кошек, независимо от породы, возраста или опыта содержания питомцев.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
