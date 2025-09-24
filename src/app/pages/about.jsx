/* eslint-disable @next/next/no-img-element */
import { Braces, Briefcase, BusFront, FolderOpenDot, Pill } from "lucide-react";
import Image from 'next/image';

const experienceData = [
  {
    title: "System Administrator (Endpoint Management / Intune)",
    Cliente: "Sector Gubernamental",
    company: "GPIC - 🇮🇨 Las Palmas de Gran Canaria",
    date: "Julio 2024 - Presente",
    status: "Actual",
    statusColor: "purple",
    description: "Configuración y despliegue de equipos, integración en dominio, gestión de permisos y administración de dispositivos con Intune."
  },
  {
    title: "IT Support Technician – Hardware & Customer Service",
    company: "AB Informatica - 🇮🇨 Las Palmas de Gran Canaria",
    date: "Abril 2023 - Junio 2023",
    statusColor: "gray",
    description: "Soporte técnico, realizando diagnóstico y reparación de hardware, así como atención al cliente para resolución de incidencias y asesoramiento."
  },
  {
    title: "Arduino Developer",
    company: "Tech Collegue - 🇩🇰 Aalborg, Dinamarca",
    date: "Abril 2022 - Junio 2022",
    statusColor: "gray",
    description: "Obtención de certificado en Arduino mediante prácticas de programación y prototipado electrónico con protoboard. Desarrollo de un proyecto final consistente en un traductor de código Morse en tiempo real."
  },
  {
    title: "IT Support Technician",
    company: "Ayuntamiento de Arucas - 🇮🇨 Las Palmas de Gran Canaria",
    date: "Abril 2019 - Junio 2019",
    statusColor: "gray",
    description: "Colaboración en el departamento de informática del Ayuntamiento de Arucas, apoyando en la contención y mitigación del ataque de ransomware WannaCry. Responsable de la asistencia técnica a usuarios, mantenimiento de equipos y apoyo en medidas de seguridad informática."
  },
]

const projectsData = [
  {
    title: "TuParada",
    description: "Consulta las paradas de Guaguas de LPGC Una alternariva eficiente a la APP Oficial.",
    tech: "Astro, TypeScript",
    icon: <BusFront className="w-6 h-6 text-purple-600" />,
    url: "https://github.com/Vicente015/tuparada",
  },
  {
    title: "Spotter",
    description: "Monitoriza elementos HTML y recibe una notifiación.",
    tech: "Web Scraping",
    icon: <Pill className="w-6 h-6 text-purple-600" />,
    url: "https://github.com/AbelFalcon/Spotter",
  },
  {
    title: "Crud-JS",
    description: "Crea una base de datos. Muestra, edita y elimina productos con una interfaz web.",
    tech: "REST API",
    icon: <Braces className="w-6 h-6 text-purple-600" />,
    url: "https://github.com/AbelFalcon/CRUD-JS",
  },
];

const technologiesData = [
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Node.js', src: '/images/node-js.png' },
  { name: 'Git', src: '/images/git.png' },
  { name: 'HTML5', src: '/images/html5.png' },
  { name: 'CSS3', src: '/images/css-3.png' },
  { name: 'TypeScript', src: '/images/typescript.png' },
  { name: 'MongoDB', src: '/images/mongodb.png' },
  { name: 'Docker', src: '/images/docker.png' },
  { name: 'VS Code', src: '/images/vscode.png' },
]

const About = () => {
  const handleArticleClick = (url) => {
    window.open(url, "_blank")
  }

  return (
    <div className="animate-fadeInUp">
      <p className="text-base text-gray-500">
        Administrador de sistemas especializado en la gestión de equipos con Intune y entornos de dominio.
        Con experiencia en despliegue y configuración de dispositivos, soporte técnico y medidas de seguridad
        en entornos corporativos y del sector público. Me motiva aprender nuevas tecnologías y aportar soluciones
        prácticas que mejoren la productividad de los usuarios.
      </p>

      <blockquote className="mt-6 text-center italic text-purple-600 dark:text-purple-300">
        “¿Un monolito? Mejor 137 microservicios en Docker.” 🐳
      </blockquote>

      <div className="border-b w-full my-8"></div>

      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-6 text-2xl flex items-center">
          <Briefcase className="w-6 h-6 mr-2 text-purple-600" />
          Experiencia
        </h1>

        <ol className="relative border-l border-gray-600 dark:border-gray-700 ml-3">
          {experienceData.map((job, index) => (
            <li key={index} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 dark:bg-purple-900 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
                <svg
                  className="w-2.5 h-2.5 text-purple-600 dark:text-purple-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1h-2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>

              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {job.title}
                </h3>
                {job.status && (
                  <span className="bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.status}
                  </span>
                )}
              </div>

              {/* empresa + cliente */}
              <div className="mt-1 flex flex-col text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">{job.company}</span>
                {job.Cliente && <span className="text-gray-500 dark:text-gray-400">{job.Cliente}</span>}
              </div>

              {/* fecha */}
              <time className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                {job.date}
              </time>

              {/* descripción */}
              {job.description && (
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              )}
            </li>
          ))}
        </ol>



        <div className="border-b w-full my-8"></div>

        <h1 className="font-medium text-gray-900 mb-6 text-2xl flex items-center">
          <FolderOpenDot className="w-6 h-6 mr-2 text-purple-600" />
          Proyectos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <article
              key={index}
              onClick={() => handleArticleClick(project.url)}
              className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer flex flex-col justify-between ${project.highlight ? 'relative p-[2px]' : 'border border-purple-100'
                }`}
            >
              {project.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 dark:from-purple-700 dark:via-pink-600 dark:to-purple-700 rounded-lg animate-border-move"></div>
              )}
              <div className={`bg-white dark:bg-gray-800 rounded-lg flex flex-col justify-between h-full ${project.highlight ? 'relative z-10' : ''}`}>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-2">
                    {project.icon}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{project.title}</h2>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 px-4 py-2 mt-auto">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">{project.tech}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="line border-b w-full my-8"></div>

        <h1 className="font-medium text-gray-900 mb-6 text-2xl flex items-center">
          <FolderOpenDot className="w-6 h-6 mr-2 text-purple-600" />
          Tecnologías y Herramientas
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologiesData.map((tech, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="w-16 h-16 relative mb-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain sm:filter sm:brightness-75 sm:contrast-75 sm:group-hover:brightness-100 sm:group-hover:contrast-100 transition-all duration-300"
                />
              </div>
              <p className="text-xs text-gray-600 text-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </p>
            </div>
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
