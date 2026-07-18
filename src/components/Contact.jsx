import { useState } from "react";
import { useLang } from "../LangContext";

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#191A19] mb-12 tracking-normal">
          {t.contact_title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Form */}
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              {submitted ? (
                <div className="bg-primary-50 text-primary-800 p-6 rounded-2xl text-center">
                  <h4 className="font-bold text-base">
                    {t.contact_success_title}
                  </h4>
                  <p className="text-xs mt-1 text-gray-500">
                    {t.contact_success_sub}
                  </p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.contact_name}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-xs"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.contact_phone}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-xs"
                  />
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact_message}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none shadow-xs"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-md"
                  >
                    {t.contact_send}
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Right Side: Info & Map */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="space-y-2 text-sm md:text-base text-gray-700 font-medium">
              <p>
                📞 {t.contact_tel_label}{" "}
                <a
                  href="tel:+998994380110"
                  className="text-gray-900 font-bold hover:underline"
                >
                  +998 (99) 438-01-10
                </a>
              </p>
              <p>
                ✉️ Email:{" "}
                <a
                  href="mailto:info@uychinuts.uz"
                  className="text-gray-900 font-bold hover:underline"
                >
                  info@uychinuts.uz
                </a>
              </p>
              <p>📍 {t.contact_address}</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xs h-[230px] border border-gray-200 bg-white">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3551523412586!2d71.7456722!3d40.9736389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzI1LjEiTiA3McKwNDQnNDQuNCJFOg!5e0!3m2!1suz!2s!4v1626245648529!5m2!1suz!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="filter grayscale contrast-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
