"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  tipo: "terminos" | "privacidad";
  titulo: string;
};

export function DocumentoLegal({ tipo, titulo }: Props) {
  const [contenido, setContenido] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      const { data, error: err } = await supabase
        .from("documentos_legales")
        .select("contenido, version")
        .eq("tipo", tipo)
        .order("vigente_desde", { ascending: false })
        .limit(1)
        .single();

      if (err || !data) {
        setError(true);
      } else {
        setContenido(data.contenido);
        setVersion(data.version);
      }
      setCargando(false);
    }
    cargar();
  }, [tipo]);

  if (cargando) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center text-gray-400">
        Cargando...
      </div>
    );
  }

  if (error || !contenido) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center text-gray-500">
        No se pudo cargar el documento. Intentá más tarde.
      </div>
    );
  }

  const parrafos = contenido.split("\n").filter((l) => l.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{titulo}</h1>
      {version && (
        <p className="text-sm text-gray-400 mb-10">Versión {version}</p>
      )}
      <div className="prose prose-gray max-w-none">
        {parrafos.map((p, i) => {
          const trimmed = p.trim();
          if (/^\d+\.\s/.test(trimmed)) {
            return (
              <h2 key={i} className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                {trimmed}
              </h2>
            );
          }
          if (/^\d+\.\d+[\.\s]/.test(trimmed)) {
            return (
              <h3 key={i} className="text-base font-semibold text-gray-800 mt-6 mb-2">
                {trimmed}
              </h3>
            );
          }
          if (trimmed.startsWith("- ") || trimmed.startsWith("(")) {
            return (
              <p key={i} className="text-gray-600 leading-relaxed pl-4 my-1">
                {trimmed}
              </p>
            );
          }
          return (
            <p key={i} className="text-gray-600 leading-relaxed my-3">
              {trimmed}
            </p>
          );
        })}
      </div>
    </div>
  );
}
