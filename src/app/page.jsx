/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import profilePic from "./images/avatar.jpeg";
import About from "./pages/about";
import Contact from "./pages/contact";

function Content() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tab, setTab] = useState(searchParams.get("tab") || "about");

  const handleTabClick = (newTab) => {
    setTab(newTab);
    router.push(`/?tab=${newTab}`, undefined, { shallow: true });
  };

  useEffect(() => {
    setTab(searchParams.get("tab") || "about");
  }, [searchParams]);

  const renderContent = () => {
    switch (tab) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <p>Ups, de momento no tengo nada que mostrar.</p>;
    }
  };

  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleTabClick("about")}
          className={`text-sm transition-colors px-2 py-1 rounded-md relative ${tab === "about" ? "text-white" : "text-gray-500 hover:text-gray-900"
            }`}
        >
          <span className="relative z-10">Sobre mi</span>
          <span
            className={`absolute inset-0 z-0 rounded-md ${tab === "about" ? "bg-purple-900" : ""
              }`}
          ></span>
        </button>
        <button hidden
          onClick={() => handleTabClick("blog")}
          className={`text-sm transition-colors px-2 py-1 rounded-md relative ${tab === "blog" ? "text-white" : "text-gray-500 hover:text-gray-900"
            }`}
        >
          <span className="relative z-10">Blogs</span>
          <span
            className={`absolute inset-0 z-0 rounded-md ${tab === "blog" ? "bg-purple-900" : ""
              }`}
          ></span>
        </button>

        <button
          onClick={() => handleTabClick("contact")}
          className={`text-sm transition-colors px-2 py-1 rounded-md relative ${tab === "contact"
            ? "text-white"
            : "text-purple-500 hover:text-gray-900"
            }`}
        >
          <span className="relative z-10">Contacto</span>
          <span
            className={`absolute inset-0 z-0 rounded-md ${tab === "contact" ? "bg-purple-900" : ""
              }`}
          ></span>
        </button>
      </div>
      <div className="transition-opacity duration-300">{renderContent()}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <div className="w-full max-w-3xl">
        <div>
          <a href="/">
            <Image
              alt="abel-profile-picture"
              loading="eager"
              width="50"
              height="50"
              decoding="async"
              className="rounded-full"
              src={profilePic}
            />
          </a>
          <h1 className="font-medium text-gray-900 mt-2 text-lg">
            Abel Falcón Espino
          </h1>
          <p className="text-gray-500 text-base">Sysadmin, DevOps & Web Developer</p>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row gap-x-3">
              <a href="/" target="_blank" rel="noreferrer">
                <Linkedin
                  size={18}
                  className="transparent-icon hover:text-red-400"
                />
              </a>
              <a
                href="https://www.github.com/AbelFalcon/"
                target="_blank"
                rel="noreferrer"
              >
                <Github
                  size={18}
                  className="transparent-icon hover:text-blue-400"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b aw-full my-8"></div>
        <Suspense fallback={<div>Cargando...</div>}>
          <Content />
        </Suspense>
      </div>
    </main>
  );
}
