import { useLang } from "../LangContext";

export default function Hero() {
  const { t } = useLang();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background Video */}
      <video
        src="https://api.uychinuts.uz/uploads/videos/video_2025-02-24_10-23-21.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-5 pt-16 pb-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-wide">
          {t.hero_title1}
          <br />
          {t.hero_title2}
        </h1>
        <p className="text-white/80 text-base md:text-lg font-medium tracking-wide">
          {t.hero_subtitle}
        </p>
        <div>
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-md"
          >
            {t.hero_btn}
          </button>
        </div>
      </div>
    </section>
  );
}
