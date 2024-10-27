"use client";
import { useState } from "react";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const getColorByRole = (role) => {
  switch (role) {
    case "user":
      return "border-green-500";
    case "local":
      return "border-blue-500";
    case "giss":
      return "border-yellow-400";
    default:
      return "border-Indigo-400";
  }
};

export default function MigrationSteps() {
  const steps = [
    {
      id: "step0",
      text: "MIGRACION SALVADO - APLICACION_INTUNE\\salvado.cmd",
      role: "user",
    },
    { id: "step1", text: "Avisar a la UPI (Previos)", role: "giss" },
    { id: "step2", text: "Cambiar arranque seguro en BIOS", role: "giss" },
    { id: "step3", text: "Activar arranque desde USB en BIOS", role: "giss" },
    { id: "step4", text: "Iniciar Windows 11 desde USB", role: "giss" },
    { id: "step5", text: "Configurar Red", role: "giss" },
    {
      id: "step6",
      text: "Iniciar sesión como Administrador (Dominio)",
      role: "local",
    },
    {
      id: "step7",
      text: "MIGRACION_RESTAURA_W11-SCRIPT-RESTAURA/restaura_antes_usuario.cmd",
      role: "local",
    },
    { id: "step8", text: "Entrar OES e instalar Sillogin", role: "local" },
    {
      id: "step9",
      text: "Desactivar arranque desde USB en BIOS",
      role: "giss",
    },
    {
      id: "step10",
      text: "Iniciar sesión como 35GU.. (Dominio)",
      role: "user",
    },
    { id: "step11", text: "Configurar OES", role: "local" },
    { id: "step12", text: "Abrir y cerrar Outlook", role: "local" },
    { id: "step13", text: "Comprobar iPrint y Microsoft365", role: "local" },
    {
      id: "step14",
      text: "MIGRACION_RESTAURA_W110-RESTAURA-USUARIO-APLICACION_INTUNE/usuario_restaura.cmd",
      role: "user",
    },
    {
      id: "step15",
      text: "Comprobar que el equipo está en el grupo",
      role: "giss",
    },
    { id: "step16", text: "Agregar VPN en Ivanti", role: "user" },
    { id: "step17", text: "Comprobar zona horaria", role: "user" },
    {
      id: "step18",
      text: "Revisar y eliminar duplicados W10 de la consola de Microclaudia",
      role: "giss",
    },
  ];

  const [completedSteps, setCompletedSteps] = useState({});

  const toggleComplete = (id) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="font-sans bg-[#ffff] min-h-screen">
      <h1 className="bg-blue-600 text-white text-center py-5 text-2xl p-5">
        Pasos para Migrar a Windows 11 - UPI 35
      </h1>

      <div className="p-4">
        <div className="flex bg-gray-100 rounded-lg text-sm shadow-md mb-4 p-4 gap-3">
          <div className="border-l-4 pl-2 border-green-500">
            <p>Usuario dominio</p>
          </div>
          <div className="border-l-4 pl-2 border-blue-500">
            <p>Administrador Local</p>
          </div>
          <div className="border-l-4 pl-2 border-yellow-500">
            <p>No requiere</p>
          </div>
        </div>

        <StepSection
          title="Pasos Previos"
          steps={steps.slice(0, 2)}
          completedSteps={completedSteps}
          toggleComplete={toggleComplete}
          getColorByRole={getColorByRole}
        />
        <StepSection
          title="Windows 11"
          steps={steps.slice(2, 18)}
          completedSteps={completedSteps}
          toggleComplete={toggleComplete}
          getColorByRole={getColorByRole}
        />
        <StepSection
          title="Tareas Posteriores"
          steps={steps.slice(18)}
          completedSteps={completedSteps}
          toggleComplete={toggleComplete}
          getColorByRole={getColorByRole}
        />
      </div>

      <footer className="text-center text-sm p-4 text-gray-700">
        Abel Falcón Espino - v1.0.0
      </footer>
    </div>
  );
}

function StepSection({ title, steps, completedSteps, toggleComplete }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md mb-4 p-4">
      <h2
        className="text-xl mb-2 font-bold"
        style={{ color: "black !important" }}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {steps.map((step) => (
          <li
            key={step.id}
            className={`flex flex-row items-center justify-betweeny-2 border-b border-gray-300 gap-2 ${
              completedSteps[step.id] ? "line-through text-gray-500" : ""
            }`}
          >
            <p
              className={cn(
                `leading-tight text-wrap break-all pl-2 border-l-4`,
                step.fontSize || "text-base",
                completedSteps[step.id]
                  ? "text-neutral-800"
                  : "text-neutral-950",
                step.role && getColorByRole(step.role)
              )}
              style={{ color: "black !important" }}
            >
              {step.text}
            </p>
            <button
              onClick={() => toggleComplete(step.id)}
              className={`ml-auto text-white rounded px-3 py-1 text-sm ${
                completedSteps[step.id] ? "bg-gray-400" : "bg-green-500"
              }`}
            >
              {completedSteps[step.id] ? "Completado" : "Completar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
