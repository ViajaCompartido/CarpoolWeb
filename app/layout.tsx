import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carpool - Viajá compartido",
  description: "Compartí tu viaje, ahorrá en gastos de combustible y peaje. Conectamos personas que viajan a un mismo destino para compartir gastos.",
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#FF385C]">
          Carpool
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm text-gray-600">
          <a href="/CarpoolWeb/#como-funciona" className="hover:text-gray-900 transition">Cómo funciona</a>
          <a href="/CarpoolWeb/#funciones" className="hover:text-gray-900 transition">Funciones</a>
          <a href="#" className="bg-[#FF385C] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#e0314f] transition">
            Descargar
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-[#FF385C] text-lg mb-3">Carpool</h3>
            <p className="text-sm text-gray-500">
              Conectamos personas que viajan a un mismo destino para compartir los gastos del viaje.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacidad" className="hover:text-gray-900 transition">Política de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-gray-900 transition">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:hkonno.eng@gmail.com" className="hover:text-gray-900 transition">hkonno.eng@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Carpool. No somos un servicio de transporte.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
