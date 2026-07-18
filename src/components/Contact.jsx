import { useState } from 'react';
import { useLang } from '../LangContext';

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#191A19] mb-12 tracking-normal">
          {t.contact_title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left Side: Yashil karta tepada, forma pastda */}
          <div data-aos="fade-right" className="flex flex-col gap-5">

            {/* Yashil info karta */}
            <div className="bg-[#1e3a2f] rounded-3xl p-8 space-y-5">
              <a href="tel:+998994380110" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">{t.contact_tel_label}</p>
                  <p className="text-white font-semibold text-base">+998 (99) 438-01-10</p>
                </div>
              </a>

              <a href="mailto:info@uychinuts.uz" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Email</p>
                  <p className="text-white font-semibold text-base">info@uychinuts.uz</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5">Manzil</p>
                  <p className="text-white font-semibold text-sm leading-snug">{t.contact_address}</p>
                </div>
              </div>
            </div>

            {/* Forma */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted ? (
                <div className="bg-[#1e3a2f]/10 text-[#1e3a2f] p-6 rounded-2xl text-center">
                  <h4 className="font-bold text-base">{t.contact_success_title}</h4>
                  <p className="text-xs mt-1 text-gray-500">{t.contact_success_sub}</p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact_name}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-xs"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.contact_phone}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-500 transition-colors shadow-xs"
                  />
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

          {/* Right Side: Katta xarita */}
          <div data-aos="fade-left" className="rounded-3xl overflow-hidden min-h-[500px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3551523412586!2d71.7456722!3d40.9736389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzI1LjEiTiA3McKwNDQnNDQuNCJFOg!5e0!3m2!1suz!2s!4v1626245648529!5m2!1suz!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
