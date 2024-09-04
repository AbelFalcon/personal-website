import { BookOpen } from "lucide-react";

const Blogs = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
          Blog
        </h2>

        <div className="bg-gray-100 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <p className="text-gray-700 font-medium">
            ¡Próximamente!
          </p>
          <p className="text-gray-600 mt-2">
            Estoy trabajando en crear contenido interesante. Pronto encontrarás aquí artículos sobre desarrollo web, tecnología y mis experiencias como programador.
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          ¿Tienes alguna sugerencia para un tema de blog? No dudes en{" "}
          <a className="text-purple-600 hover:underline">contactarme</a>.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
