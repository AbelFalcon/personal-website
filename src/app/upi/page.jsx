"use client";
import { useState } from "react";

export default function MigrationSteps () {
  const steps = [
    { id: "step0", text: "MIGRACION SALVADO - APLICACION_INTUNE\\salvado.cmd", fontSize: "text-sm" },
    { id: "step1", text: "Avisar a la UPI" },
    { id: "step2", text: "Cambiar arranque seguro en BIOS" },
    { id: "step3", text: "Activar arranque desde USB en BIOS" },
    { id: "step4", text: "Iniciar Windows 11 desde USB" },
    { id: "step5", text: "Configurar Red" },
    { id: "step6", text: "Iniciar sesión como Administrador (Dominio)" },
    { id: "step7", text: "MIGRACION_RESTAURA_W11-SCRIPT-RESTAURA/restaura_antes_usuario.cmd", fontSize: "text-xs" },
    { id: "step8", text: "Entrar OES e instalar Sillogin" },
    { id: "step9", text: "Desactivar arranque desde USB en BIOS" },
    { id: "step10", text: "Iniciar sesión como 35GU.. (Dominio)" },
    { id: "step11", text: "Configurar OES" },
    { id: "step12", text: "Abrir y cerrar Outlook" },
    { id: "step13", text: "Comprobar iPrint y Microsoft365" },
    { id: "step14", text: "MIGRACION_RESTAURA_W110-RESTAURA-USUARIO-APLICACION_INTUNE/usuario_restaura.cmd", fontSize: "text-xs" },
    { id: "step15", text: "Comprobar que el equipo está en el grupo" },
    { id: "step16", text: "Agregar VPN en Ivanti" },
    { id: "step17", text: "Comprobar zona horaria" },
    { id: "step18", text: "Revisar y eliminar duplicados W10 de la consola de Microclaudia" },
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
      <h1 className="bg-blue-600 text-white text-center py-5 text-2xl">
        Pasos para Migrar a Windows 11 - UPI 35
      </h1>

      <div className="p-4">
        <StepSection title="Pasos Previos" steps={steps.slice(0, 2)} completedSteps={completedSteps} toggleComplete={toggleComplete} />
        <StepSection title="Windows 11" steps={steps.slice(2, 18)} completedSteps={completedSteps} toggleComplete={toggleComplete} />
        <StepSection title="Tareas Posteriores" steps={steps.slice(18)} completedSteps={completedSteps} toggleComplete={toggleComplete} />
      </div>

      <footer className="text-center text-sm p-4 text-gray-700">Abel Falcon Espino</footer>
    </div>
  );
}

function StepSection({ title, steps, completedSteps, toggleComplete }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md mb-4 p-4">
      <h2 className="text-xl mb-2 text-[#000] font-bold">{title}</h2>
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center justify-between py-2 border-b border-gray-300 ${completedSteps[step.id] ? "line-through text-gray-500" : ""}`}
        >
          <div className={`${step.fontSize || "text-base"} ${completedSteps[step.id] ? "text-gray-500" : "text-gray-800"}`}>
            {step.text}
          </div>
          <button
            onClick={() => toggleComplete(step.id)}
            className={`text-white rounded px-3 py-1 text-sm ${
              completedSteps[step.id] ? "bg-gray-400" : "bg-green-500"
            }`}
          >
            {completedSteps[step.id] ? "Completado" : "Completar"}
          </button>
        </div>
      ))}
    </div>
  );
}
