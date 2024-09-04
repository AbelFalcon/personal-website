const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
        <p className="text-gray-600 mb-6">
          Puedes ponerte en contacto conmigo a través del correo electrónico o mi cuenta de{" "}
          <a
            className="text-purple-600 hover:underline"
            href="https://x.com/Saxboiii"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="mailto:contacto@abelfalcon.com"
            className="flex-1 bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Enviar un correo ✉️
          </a>
          <a
            href="https://x.com/Saxboiii"
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-blue-400 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Seguir en Twitter 🐦
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 italic">
            Formulario de contacto en construcción.{" "}
            <a
              className="text-purple-600 hover:underline"
              href="https://www.youtube.com/watch?v=kSGEzpkgsu0"
              target="_blank"
              rel="noreferrer"
            >
              Ver imágenes inéditas
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
