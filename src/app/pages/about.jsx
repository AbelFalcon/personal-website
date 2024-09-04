/* eslint-disable @next/next/no-img-element */
import { Pill, Youtube, Braces, User } from "lucide-react";

const About = () => {
  const handleArticleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="animate-fadeInUp">
      <p className="text-base text-gray-500">
        ¡Hola! Soy un joven desarrollador web apasionado por el open source. Me
        encanta crear soluciones innovadoras y colaborar en proyectos
        comunitarios para mejorar la web.
      </p>

      <div className="mt-16">
        {/* Experiencia  */}

        <h1 className="font-medium text-gray-900 mb-4 text-lg">Experiencia</h1>
        <ol className="relative border-s border-gray-300">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-md font-medium text-gray-900">
                Técnico Informático y Administrativo
              </div>
              <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                Practicas
              </div>
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              AB INFORMATICA (Abril - Junio 2023)
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Técnico Informático
            </div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              Practicas
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              Ayuntamiento de Arucas (Abril - Junio 2019)
            </div>
          </li>
        </ol>

        <div className="border-b w-full my-8"></div>

        <h1 className="font-medium text-gray-900 mb-6 text-2xl">Proyectos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Personal-Website",
              description: "Sitio web personal.",
              tech: "React | Suspense, useState, useEffect. Next | useSearchParams, useRouter",
              icon: <User className="w-10 h-10 text-purple-500" />,
              url: "https://github.com/AbelFalcon/CRUD-JS",
            },
            {
              title: "Spotter",
              description: "Script que monitorea fragmento HTML específico cada 10 minutos.",
              tech: "Web Scraping",
              icon: <Pill className="w-10 h-10 text-green-500" />,
              url: "https://github.com/AbelFalcon/Spotter",
            },
            {
              title: "Youp",
              description: "🧩 Búsqueda rápida en YouTube con un clic derecho.",
              tech: "Extensión de Google Chrome",
              icon: <Youtube className="w-10 h-10 text-red-500" />,
              url: "https://github.com/AbelFalcon/Youp",
            },
            {
              title: "Crud-JS",
              description: "Crea una base de datos. Muestra, edita y elimina productos con una interfaz web.",
              tech: "REST API",
              icon: <Braces className="w-10 h-10 text-blue-500" />,
              url: "https://github.com/AbelFalcon/CRUD-JS",
            },
          ].map((project, index) => (
            <article
              key={index}
              onClick={() => handleArticleClick(project.url)}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <p className="text-xs font-semibold text-purple-600">{project.tech}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center italic font-light mt-8 text-gray-600">
          Puedes ver más proyectos en{" "}
          <a href="https://github.com/AbelFalcon/" target="_blank" className="text-purple-600 hover:underline">
            mi perfil de Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
