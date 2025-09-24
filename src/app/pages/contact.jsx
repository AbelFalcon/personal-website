import { Github, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-purple-100">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Mail className="w-6 h-6 mr-2 text-purple-600" />
          Contacto
        </h2>

        <p className="text-gray-600 mb-8">
          ¿Tienes alguna pregunta o propuesta? No dudes en contactarme a través de cualquiera de estos medios:
        </p>

        <div className="space-y-6">
          <a href="mailto:contacto@abelfalcon.com" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
            <Mail className="h-5 w-5 mr-3" />
            contacto@abelfalcon.com
          </a>


          <a href="https://github.com/AbelFalcon" target="_blank" rel="noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
            <Github className="h-5 w-5 mr-3" />
            AbelFalcon
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
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
