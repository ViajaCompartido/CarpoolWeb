export default function EliminarCuenta() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Eliminar mi cuenta</h1>
      <p className="text-sm text-gray-400 mb-10">Proceso de eliminación de cuenta y datos personales</p>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Desde la app</h2>
        <p className="text-gray-600 leading-relaxed my-3">
          Para eliminar tu cuenta y todos tus datos personales:
        </p>
        <ol className="text-gray-600 leading-relaxed space-y-2 list-decimal pl-6">
          <li>Abrí la app Carpool</li>
          <li>Andá a <strong>Perfil → Eliminar mi cuenta</strong></li>
          <li>Confirmá la eliminación</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Sin acceso a la app</h2>
        <p className="text-gray-600 leading-relaxed my-3">
          Si no podés acceder a la app, escribinos a{" "}
          <a href="mailto:hkonno.eng@gmail.com" className="text-[#FF385C] hover:underline">
            hkonno.eng@gmail.com
          </a>{" "}
          indicando el email con el que te registraste. Procesamos la eliminación en un plazo de 10 días hábiles.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">¿Qué datos se eliminan?</h2>
        <ul className="text-gray-600 leading-relaxed space-y-2 list-disc pl-6">
          <li>Nombre, apellido, teléfono y foto de perfil</li>
          <li>Tokens de notificaciones push</li>
          <li>Favoritos y búsquedas guardadas</li>
          <li>Solicitudes e invitaciones pendientes</li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">¿Qué datos se conservan?</h2>
        <p className="text-gray-600 leading-relaxed my-3">
          Por obligaciones legales y para mantener la integridad del historial de viajes, se conservan de forma anonimizada:
        </p>
        <ul className="text-gray-600 leading-relaxed space-y-2 list-disc pl-6">
          <li>Historial de viajes realizados (sin datos personales)</li>
          <li>Datos de vehículos registrados (marca, modelo, patente), vinculados al perfil anonimizado</li>
          <li>Calificaciones otorgadas y recibidas (anonimizadas)</li>
          <li>Registros de comisiones (por requisitos tributarios)</li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Importante</h2>
        <ul className="text-gray-600 leading-relaxed space-y-2 list-disc pl-6">
          <li>Si tenés un viaje en curso, no podrás eliminar la cuenta hasta que finalice.</li>
          <li>Los viajes futuros que hayas publicado serán cancelados automáticamente y los pasajeros serán notificados.</li>
          <li>Esta acción es permanente y no se puede deshacer.</li>
        </ul>
      </div>
    </div>
  );
}
