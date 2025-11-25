import Header from "../components/header"; //
import "../index.css";

export default function Nosotros() {
  return (
    <div className="bg-black text-slate-800 dark:text-slate-200 antialiased flex flex-col min-h-screen font-display">
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Sobre Nosotros
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8">
            Nuestra misión es proporcionar la herramienta más simple y eficiente
            para convertir tus videos favoritos de YouTube a formato MP3.
            Creemos en el acceso rápido, gratuito y de alta calidad al audio,
            sin la necesidad de registros complicados o software innecesario.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card - Visión */}
            <div className="bg-black p-6 rounded-lg  dark:border-slate-800 text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                Quien soy
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Soy estudiante de Ingeniería en Sistemas Computacionales,
                apasionado por el desarrollo de software, la tecnología y la
                creación de soluciones digitales que faciliten la vida de las
                personas. Me gusta aprender constantemente, experimentar con
                nuevas herramientas y trabajar en proyectos que me permitan
                crecer tanto profesional como personalmente.
              </p>
            </div>

            {/* Card - Contacto */}
            <div className="bg-black p-6 rounded-lg  dark:border-slate-800 text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                Donaciones
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Si este proyecto te ha sido útil, puedes apoyarlo con una
                pequeña donación. ¡Gracias por tu apoyo!:{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:contacto@ytconverter.com"
                >
                  1234567890
                </a>
              </p>
            </div>
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
