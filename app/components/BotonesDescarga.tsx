"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Enlace = {
  plataforma: "android" | "ios";
  url: string;
  activo: boolean;
};

function IconoPlayStore() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 0 1-.484-.063 1.88 1.88 0 0 1-1.126-.9A2.28 2.28 0 0 1 1.75 20V4c0-.44.084-.85.25-1.223a1.88 1.88 0 0 1 1.126-.9c.157-.044.32-.063.483-.063zM14.852 13.06l2.39 2.39-8.093 4.581a1.76 1.76 0 0 1-.505.202L14.852 13.06zm0-2.12L8.644 3.767a1.76 1.76 0 0 1 .505.202l8.093 4.581-2.39 2.39zm1.06 1.06l2.904-2.904 3.36 1.902a1.87 1.87 0 0 1 .775.72 1.89 1.89 0 0 1 0 1.964 1.87 1.87 0 0 1-.775.72l-3.36 1.902-2.904-2.904z" />
    </svg>
  );
}

function IconoAppStore() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function BotonesDescarga({ className = "" }: { className?: string }) {
  const [enlaces, setEnlaces] = useState<Enlace[]>([]);

  useEffect(() => {
    async function cargar() {
      const { data } = await supabase
        .from("enlaces_descarga")
        .select("plataforma, url, activo")
        .eq("activo", true);
      if (data) setEnlaces(data as Enlace[]);
    }
    cargar();
  }, []);

  const android = enlaces.find((e) => e.plataforma === "android");
  const ios = enlaces.find((e) => e.plataforma === "ios");

  if (!android && !ios) {
    return (
      <p className={`text-sm text-gray-400 ${className}`}>
        Próximamente disponible para descargar
      </p>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {android && (
        <a
          href={android.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          <IconoPlayStore />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider opacity-80">Disponible en</div>
            <div className="text-base font-semibold -mt-0.5">Google Play</div>
          </div>
        </a>
      )}
      {ios && (
        <a
          href={ios.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          <IconoAppStore />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider opacity-80">Descargá en el</div>
            <div className="text-base font-semibold -mt-0.5">App Store</div>
          </div>
        </a>
      )}
    </div>
  );
}
