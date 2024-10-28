interface CountryGalleryProps {
  images: string[];
  title: string;
}

const CountryGallery = ({ images, title }: CountryGalleryProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Galeria</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="aspect-video overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${title} - Imagem ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryGallery;