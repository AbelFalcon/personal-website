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

        <h1 className="font-medium text-gray-900 mb-4 text-lg">Proyectos</h1>

        <article className="pb-5 group">
          <article
            onClick={() =>
              handleArticleClick("https://github.com/AbelFalcon/CRUD-JS")
            }
            className="w-full py-6 bg-gray-100 px-6 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 border-purple-400/50 hover:border-2"
          >
            <div className="flex items-center gap-5">
              <User className="w-12 h-12 text-gray-700 rounded-full p-2" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Personal-Website
                </h2>
                <p className="text-sm text-gray-700">
                  Sitio web personal.
                  <b className="opacity-80">
                    <a className="text-purple-400">React</a> | Suspense,
                    useState, useEffect. <a className="text-purple-400">Next</a>{" "}
                    | useSearchParams, useRouter
                  </b>
                </p>
              </div>
            </div>
          </article>

          <article
            onClick={() =>
              handleArticleClick("https://github.com/AbelFalcon/Spotter")
            }
            className="w-full py-6 bg-gray-100 px-6 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 border-purple-400/50 hover:border-2"
          >
            <div className="flex items-center gap-5">
              <Pill className="w-12 h-12 text-gray-700 rounded-full p-2" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Spotter</h2>
                <p className="text-sm text-gray-700">
                  Script que monitorea fragmento HTML especifico cada 10
                  minutos. <b className="opacity-80">Web Scraping</b>
                </p>
              </div>
            </div>
          </article>

          <article
            onClick={() =>
              handleArticleClick("https://github.com/AbelFalcon/Youp")
            }
            className="w-full py-6 bg-gray-100 px-6 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 border-purple-400/50 hover:border-2"
          >
            <div className="flex items-center gap-5">
              <Youtube className="w-12 h-12 text-gray-700 rounded-full p-2" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Youp</h2>
                <p className="text-sm text-gray-700">
                  🧩 Búsqueda rápida en YouTube con un clic derecho.{" "}
                  <b className="opacity-80">Extension de Google Chrome</b>
                </p>
              </div>
            </div>
          </article>

          <article
            onClick={() =>
              handleArticleClick("https://github.com/AbelFalcon/CRUD-JS")
            }
            className="w-full py-6 bg-gray-100 px-6 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300 border-purple-400/50 hover:border-2"
          >
            <div className="flex items-center gap-5">
              <Braces className="w-12 h-12 text-gray-700 rounded-full p-2" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Crud-JS</h2>
                <p className="text-sm text-gray-700">
                  Crea una base de datos. Muestra, edita y elimina productos con
                  una interfaz web.
                  <b className="opacity-80">REST API.</b>
                </p>
              </div>
            </div>
          </article>
        </article>

        <p className="text-center italic font-extralight">
          Puedes ver mas proyectos en{" "}
          <a href="https://github.com/AbelFalcon/" target="_blank">
            mi perfil de Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
14;
