"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { BotonesDescarga } from "./components/BotonesDescarga";

const basePath = "/CarpoolWeb";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import lottieViaje from "../public/assets/lottie-viaje.json";
import lottieMapa from "../public/assets/lottie-mapa.json";
import lottieCompass from "../public/assets/lottie-compass.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Viajá <span className="text-[#FF385C]">compartido</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Compartí tu viaje, ahorrá en gastos de combustible y peaje. Conectamos personas que van al mismo destino para dividir los costos del camino.
            </p>
            <BotonesDescarga className="mt-10" />
          </div>
          <div className="flex-1 flex justify-center max-w-md">
            <Lottie animationData={lottieViaje} loop className="w-full" />
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { paso: "1", titulo: "Registrate", desc: "Creá tu cuenta gratis en segundos con Google o email.", img: `${basePath}/assets/confirmado2.svg` },
              { paso: "2", titulo: "Publicá o buscá", desc: "¿Tenés auto? Publicá tu viaje. ¿Buscás uno? Explorá los disponibles o publicá tu búsqueda.", img: `${basePath}/assets/buscando.svg` },
              { paso: "3", titulo: "Coordiná", desc: "Ponete de acuerdo con tu compañero de viaje sobre el punto de encuentro y la contribución a los gastos.", img: `${basePath}/assets/explorando.svg` },
              { paso: "4", titulo: "Viajá y ahorrá", desc: "Compartí el camino, los gastos y disfrutá del viaje.", img: `${basePath}/assets/viaje.svg` },
            ].map((item) => (
              <div key={item.paso} className="text-center">
                <Image src={item.img} alt={item.titulo} width={120} height={120} className="mx-auto mb-4" />
                <div className="w-10 h-10 rounded-full bg-[#FF385C] text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.paso}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funciones */}
      <section id="funciones" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Todo lo que necesitás
              </h2>
              <p className="text-gray-500 max-w-xl leading-relaxed">
                Diseñada para que encontrar o compartir un viaje sea fácil, seguro y rápido.
              </p>
            </div>
            <div className="flex-1 flex justify-center max-w-xs">
              <Lottie animationData={lottieMapa} loop className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icono: "🔍", titulo: "Buscá viajes", desc: "Filtrá por destino, fecha y horario. Encontrá el viaje que se ajusta a lo que necesitás." },
              { icono: "📢", titulo: "Publicá tu búsqueda", desc: "Si no encontrás viaje, publicá lo que buscás y que los conductores te encuentren a vos." },
              { icono: "📍", titulo: "Paradas intermedias", desc: "Los conductores pueden agregar paradas en el camino. Buscá viajes que pasen cerca tuyo." },
              { icono: "🔔", titulo: "Notificaciones en vivo", desc: "Recibí alertas cuando aparece un viaje en tu ruta favorita o cuando tu conductor favorito publica." },
              { icono: "⭐", titulo: "Calificaciones", desc: "Calificá y leé opiniones de otros viajeros. Elegí con quién compartir el viaje." },
              { icono: "🐾", titulo: "Preferencias de viaje", desc: "Mascotas, equipaje, fumar... Cada conductor define las reglas de su viaje." },
            ].map((item) => (
              <div key={item.titulo} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
                <span className="text-3xl">{item.icono}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="relative bg-[#FF385C] py-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-64 opacity-10">
          <Lottie animationData={lottieCompass} loop className="w-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-6">Viajá con confianza</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada usuario tiene perfil con calificaciones de otros viajeros. Vos elegís con quién compartir el camino. Si algo no está bien, podés reportarlo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { titulo: "Perfiles verificados", desc: "Registro con Google o email verificado" },
              { titulo: "Calificaciones reales", desc: "Solo califican quienes realmente viajaron juntos" },
              { titulo: "Sistema de reportes", desc: "Reportá conductas inapropiadas en cualquier momento" },
            ].map((item) => (
              <div key={item.titulo} className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image src={`${basePath}/assets/road-trip.svg`} alt="Road trip" width={200} height={140} className="mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empezá a viajar compartido
          </h2>
          <p className="text-gray-500 mb-8">
            Descargá Carpool gratis y unite a la comunidad de viajes compartidos.
          </p>
          <BotonesDescarga className="justify-center" />
        </div>
      </section>
    </>
  );
}
