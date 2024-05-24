/* eslint-disable @next/next/no-img-element */
"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import profilePic from "./images/avatar.jpeg";
import About from "./pages/about";
import { useSearchParams, useRouter } from "next/navigation";

function Content() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tab, setTab] = useState(searchParams.get("tab") || "about");

  const handleTabClick = (newTab) => {
    setTab(newTab);
    router.push(`/?tab=${newTab}`, { scroll: false });
  };

  useEffect(() => {
    setTab(searchParams.get("tab") || "about");
  }, [searchParams]);

  const renderContent = () => {
    switch (tab) {
      case "about":
        return <About />;
      default:
        return <div>Ups, algo está yendo mal...</div>;
    }
  };

  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 mb-8">
        <a href="/?tab=about" shallow="true">
          <button
            className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
              tab === "about"
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10">Sobre mi</span>
            <span
              className={`absolute inset-0 z-0 rounded-md ${
                tab === "about" ? "bg-gray-900" : ""
              }`}
            ></span>
          </button>
        </a>
        <a href="/?tab=blog" shallow="true">
          <button
            className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
              tab === "blog"
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10">Blogs</span>
            <span
              className={`absolute inset-0 z-0 rounded-md ${
                tab === "blog" ? "bg-gray-900" : ""
              }`}
            ></span>
          </button>
        </a>
        <a href="/?tab=uses" shallow="true">
          <button
            className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
              tab === "uses"
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10">Uses</span>
            <span
              className={`absolute inset-0 z-0 rounded-md ${
                tab === "uses" ? "bg-gray-900" : ""
              }`}
            ></span>
          </button>
        </a>
        <a href="/?tab=newsletter" shallow="true">
          <button
            className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
              tab === "newsletter"
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10">Newsletter</span>
            <span
              className={`absolute inset-0 z-0 rounded-md ${
                tab === "newsletter" ? "bg-gray-900" : ""
              }`}
            ></span>
          </button>
        </a>
        <a href="/?tab=contact" shallow="true">
          <button
            className={`text-sm transition-colors px-2 py-1 rounded-md relative ${
              tab === "contact"
                ? "text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <span className="relative z-10">Contacto</span>
            <span
              className={`absolute inset-0 z-0 rounded-md ${
                tab === "contact" ? "bg-gray-900" : ""
              }`}
            ></span>
          </button>
        </a>
      </div>
      <div
        className={`transition-opacity duration-300 ${
          tab !== "about" && "opacity-0"
        }`}
      >
        {renderContent()}
      </div>
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
              src={profilePic}
            />
          </a>
          <h1 className="font-medium text-gray-900 mt-2 text-lg">
            Abel Falcón Espino
          </h1>
          <p className="text-gray-500 text-base">
            Web Developer &amp; Freelancer
          </p>
          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row gap-x-3">
              <a
                href="https://x.com/Saxboiii/"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={14} className="transparent-icon" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <Linkedin size={14} className="transparent-icon" />
              </a>
              <a
                href="https://www.github.com/AbelFalcon/"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} className="transparent-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b w-full my-8"></div>
        <Suspense fallback={<div>Cargando...</div>}>
          <Content />
        </Suspense>
      </div>
    </main>
  );
}
