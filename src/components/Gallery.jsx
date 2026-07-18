import { useLang } from "../LangContext";

const images = [
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80",
  "https://images.unsplash.com/photo-1508061253366-f7da158b6d96?w=600&q=80",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&q=80",
  "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80",
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-20 bg-[#FDF6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#191A19] mb-12">
          {t.gallery_title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
          <div
            data-aos="fade-up"
            className="h-64 rounded-[30px_30px_100px_30px] overflow-hidden shadow-sm border-2 border-white"
          >
            <img
              src={images[0]}
              alt="Harvesting"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="h-72 rounded-[30px_100px_30px_30px] overflow-hidden shadow-sm border-2 border-white md:-translate-y-4"
          >
            <img
              src={images[1]}
              alt="Laboratory"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-80 rounded-[100px_30px_100px_30px] overflow-hidden shadow-sm border-2 border-white"
          >
            <img
              src={images[2]}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="h-72 rounded-[30px_100px_30px_30px] overflow-hidden shadow-sm border-2 border-white md:-translate-y-4"
          >
            <img
              src={images[3]}
              alt="Shipping"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="h-64 rounded-[30px_30px_30px_100px] overflow-hidden shadow-sm border-2 border-white"
          >
            <img
              src={images[4]}
              alt="Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
