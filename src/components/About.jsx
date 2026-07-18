import { useLang } from "../LangContext";
import aboutImg from "../assets/about_img.png";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 bg-[#FDF6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Big Image */}
          <div data-aos="fade-right">
            <div
              className="overflow-hidden shadow-md border-2 border-white aspect-[4/3]"
              style={{ borderRadius: "12px 120px 12px 120px" }}
            >
              <img
                src={aboutImg}
                alt="Uychi nuts production"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center space-y-6 text-left"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#191A19] tracking-normal">
              {t.about_title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {t.about_p1}
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {t.about_p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
