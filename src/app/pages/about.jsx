const About = () => {
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

        <h1 className="font-medium text-gray-900 mb-4 text-lg">Estudios</h1>
        <ol className="relative border-s border-gray-300">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-md font-medium text-gray-900">
                Técnico Superior en Desarrollo de Aplicaciones Web
              </div>
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              IES EL RINCON (2024-2026)
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Técnico en Sistemas Microinformáticos y Redes{" "}
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              IES EL RINCON (2021-2023)
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
