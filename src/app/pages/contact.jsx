const Contact = () => {
  return (
    <div className="flex flex-col">
      <p className="pb-5 font-extralight text-base">
        Puedes ponerte en contacto conmigo desde el correo electronico, o bien
        desde mi cuenta de{" "}
        <a
          className="text-pink-800"
          href="https://x.com/Saxboiii"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>

      <a
        href="mailto:contacto@abelfalcon.com"
        className="text-sm text-center transition-colors px-2 py-1 rounded-md relative text-white w-1/2 shadow-sm"
      >
        <span className="relative z-10">Enviar un mensaje ☺️</span>
        <span className="absolute inset-0 z-0 rounded-md bg-gray-700 hover:bg-gray-800"></span>
      </a>

      <p className="pt-5 opacity-20 italic">
        Formulario, under contruction.{" "}
        <a
          className="text-purple-900"
          href="https://www.youtube.com/watch?v=kSGEzpkgsu0"
          target="_blank"
        >
          imagenes ineditas.
        </a>
      </p>
    </div>
  );
};

export default Contact;
