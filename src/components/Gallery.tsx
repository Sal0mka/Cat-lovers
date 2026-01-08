import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1623420797910-c7c3498d74fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3ODAzOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Мурзик',
      owner: 'Анна К.'
    },
    {
      url: 'https://images.unsplash.com/photo-1667518158890-0a6cf60de601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdHxlbnwxfHx8fDE3Njc3NzE2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Рыжик',
      owner: 'Дмитрий С.'
    },
    {
      url: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwY2F0fGVufDF8fHx8MTc2Nzc4MTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Дымка',
      owner: 'Елена М.'
    },
    {
      url: 'https://images.unsplash.com/photo-1735618603118-89e26b0dcf6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBlcnNpYW4lMjBjYXR8ZW58MXx8fHwxNzY3ODQyOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Снежок',
      owner: 'Петр Л.'
    },
    {
      url: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0fGVufDF8fHx8MTc2Nzc2NTIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Тайна',
      owner: 'Мария Б.'
    },
    {
      url: 'https://images.unsplash.com/photo-1629624467541-f73ef8f12df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicml0aXNoJTIwc2hvcnRoYWlyJTIwY2F0fGVufDF8fHx8MTc2NzgwNTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Барон',
      owner: 'Сергей В.'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Галерея наших пушистиков 🐾
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с любимцами наших участников! Каждый котик уникален и прекрасен по-своему.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xl font-bold">{image.name}</p>
                  <p className="text-sm opacity-90">Владелец: {image.owner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <ImageWithFallback
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].name}
                className="w-full h-auto rounded-2xl"
              />
              <div className="text-center mt-4 text-white">
                <p className="text-2xl font-bold">{galleryImages[selectedImage].name}</p>
                <p className="text-lg">Владелец: {galleryImages[selectedImage].owner}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
