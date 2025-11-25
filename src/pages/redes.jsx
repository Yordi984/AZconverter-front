import Header from "../components/header";
import "../App.css";

export default function RedesSociales() {
  return (
    <div className="font-display text-slate-900 dark:text-slate-200 min-h-screen flex flex-col antialiased bg-black">
      {/* Barra superior fija */}
      <div className="w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800"></div>

      <Header />

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24 flex items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Síguenos en nuestras redes
          </h1>

          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-12 text-lg">
            Mantente al día con nuestras últimas noticias, actualizaciones y
            consejos. ¡Conéctate con nosotros en tus plataformas favoritas!
          </p>

          {/* Grid de tarjetas de redes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Facebook */}
            <a
              href="#"
              className="social-neon flex flex-col items-center justify-center p-6 bg-black shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-blue-600 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary">
                Facebook
              </span>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="social-neon flex flex-col items-center justify-center p-6 bg-black shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-slate-900 dark:text-white mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.74-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary">
                TikTok
              </span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="social-neon flex flex-col items-center justify-center p-6 bg-black shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-red-600 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary">
                YouTube
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6">
        <div className="container mx-auto text-center text-slate-500 dark:text-slate-400 text-sm">
          © Yordi Madrigal
        </div>
      </footer>
    </div>
  );
}
