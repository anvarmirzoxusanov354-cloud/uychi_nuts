import { useLang } from "../LangContext";
import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";
import p5 from "../assets/product5.png";

const products = [
  {
    id: 1,
    nameUZ: "Yong'oq mag'zi",
    nameRU: "Ядро грецкого ореха",
    nameEN: "Walnut Kernel",
    img: p1,
  },
  {
    id: 2,
    nameUZ: "Bodom mag'zi",
    nameRU: "Ядро миндаля",
    nameEN: "Almond Kernel",
    img: p2,
  },
  {
    id: 3,
    nameUZ: "Yong'oq",
    nameRU: "Грецкий орех",
    nameEN: "Walnut",
    img: p3,
  },
  {
    id: 4,
    nameUZ: "Quritilgan meva",
    nameRU: "Сухофрукты",
    nameEN: "Dried Fruits",
    img: p4,
  },
  {
    id: 5,
    nameUZ: "Aralash yong'oqlar",
    nameRU: "Ассорти орехов",
    nameEN: "Mixed Nuts",
    img: p5,
  },
];

export default function Products() {
  const { lang, t } = useLang();

  const getName = (p) => {
    if (lang === "RU") return p.nameRU;
    if (lang === "EN") return p.nameEN;
    return p.nameUZ;
  };

  return (
    <section id="products" className="py-24 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="font-serif text-3xl md:text-4xl font-bold text-[#191A19] mb-14 tracking-normal"
        >
          {t.products_title}
        </h2>

        {/* Cards grid — 2 top, 3 bottom */}
        <div className="flex flex-col gap-5">
          {/* Row 1: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.slice(0, 2).map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                name={getName(p)}
                hover={t.product_hover}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {products.slice(2, 5).map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                name={getName(p)}
                hover={t.product_hover}
                delay={(i + 2) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, name, hover, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image area */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#F0EBE3] relative">
        {product.img ? (
          <img
            src={product.img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Hover overlay — slides up from bottom */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#1e3a2f]/90 backdrop-blur-sm px-6 py-5">
          <p className="text-white/90 text-base leading-relaxed">{hover}</p>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 py-5">
        <h3 className="font-semibold text-[#191A19] text-2xl tracking-tight">
          {name}
        </h3>
      </div>
    </div>
  );
}
