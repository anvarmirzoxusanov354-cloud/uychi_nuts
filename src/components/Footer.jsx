import { useLang } from "../LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#1e3a2f]/90 backdrop-blur-sm text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
        <p>{t.footer_address}</p>

        <p>
          © {new Date().getFullYear()} UYCHI NUTS. {t.footer_rights}
        </p>

        {/* Social icons */}
        <div className="flex gap-4 items-center text-white">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          {/* Telegram */}
          <a
            href="#"
            aria-label="Telegram"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.944 0A12 12 0 1 0 24 12 12 12 0 0 0 11.944 0zm5.992 8.244-2.03 9.565c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.905l-2.956-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.926.677z" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
