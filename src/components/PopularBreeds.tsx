import { useState } from 'react';

export function PopularBreeds() {
  const [selectedBreed, setSelectedBreed] = useState<number>(0);

  const breeds = [
    {
      name: 'Британская короткошерстная',
      description: 'Одна из самых популярных пород. Спокойные, независимые, с плюшевой шерстью.',
      characteristics: {
        temperament: 'Спокойный, дружелюбный',
        activity: 'Средняя',
        care: 'Минимальный уход',
        size: 'Средний до крупного'
      },
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Сиамская',
      description: 'Грациозные и элегантные кошки с яркими голубыми глазами и характерным окрасом.',
      characteristics: {
        temperament: 'Активный, общительный',
        activity: 'Высокая',
        care: 'Минимальный уход',
        size: 'Средний'
      },
      color: 'from-blue-400 to-indigo-600'
    },
    {
      name: 'Персидская',
      description: 'Длинношерстные красавцы с плоской мордочкой и спокойным характером.',
      characteristics: {
        temperament: 'Спокойный, ласковый',
        activity: 'Низкая',
        care: 'Требует регулярного ухода',
        size: 'Средний'
      },
      color: 'from-pink-400 to-rose-600'
    },
    {
      name: 'Мейн-кун',
      description: 'Одна из крупнейших домашних пород с дружелюбным характером.',
      characteristics: {
        temperament: 'Дружелюбный, игривый',
        activity: 'Средняя',
        care: 'Регулярное расчесывание',
        size: 'Крупный'
      },
      color: 'from-amber-400 to-orange-600'
    },
    {
      name: 'Шотландская вислоухая',
      description: 'Милые кошки с загнутыми ушками и круглой мордочкой.',
      characteristics: {
        temperament: 'Спокойный, нежный',
        activity: 'Средняя',
        care: 'Минимальный уход',
        size: 'Средний'
      },
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="breeds" className="py-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Популярные породы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте больше о самых популярных породах кошек в нашем регионе
          </p>
        </div>

        {/* Breed selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {breeds.map((breed, index) => (
            <button
              key={index}
              onClick={() => setSelectedBreed(index)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedBreed === index
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {breed.name}
            </button>
          ))}
        </div>

        {/* Selected breed details */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className={`h-3 bg-gradient-to-r ${breeds[selectedBreed].color}`}></div>
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {breeds[selectedBreed].name}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {breeds[selectedBreed].description}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(breeds[selectedBreed].characteristics).map(([key, value]) => (
                <div key={key} className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 uppercase mb-1">
                    {key === 'temperament' && 'Темперамент'}
                    {key === 'activity' && 'Активность'}
                    {key === 'care' && 'Уход'}
                    {key === 'size' && 'Размер'}
                  </p>
                  <p className="font-semibold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12 text-center bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-8">
          <p className="text-xl md:text-2xl">
            💡 <span className="font-semibold">Интересный факт:</span> В нашем клубе самая популярная порода – 
            Британская короткошерстная! Более 120 наших участников являются счастливыми владельцами этих плюшевых красавцев.
          </p>
        </div>
      </div>
    </section>
  );
}
