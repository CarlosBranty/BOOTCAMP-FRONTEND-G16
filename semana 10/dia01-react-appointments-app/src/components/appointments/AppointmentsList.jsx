const AppointmentsList = () => {
  return (
    <>
      <section className="w-1/2 p-4 bg-white rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
        <div className="flex justify-center items-center gap-4 h-96 hidden">
          No hay Citas
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300">
            <div>
              <h4 className="font-semibold text-lg">Mascota</h4>
              <div>
                <strong>Nombre:</strong> perName
              </div>
              <div>
                <strong>Edad (años):</strong> petAge
              </div>
              <div>
                <h4>Dueño</h4>
                <div>
                  <strong>Nombre: </strong> ownerName
                </div>
              </div>
            </div>
            <div>
              <h4>Citas</h4>
              <div>
                <strong>Fecha:</strong> appointmentDate
              </div>
              <div>
                <strong>Hora:</strong> AppointmentTime
              </div>
              <div>
                <strong>Sintomas:</strong> symptoms
              </div>
            </div>
            <div className="">
              <button
                className="p-2 bg-green-600 text-white 
                    cursor-pointer rounded-lg w-full mt-4"
              >
                Confirmar Cita
              </button>
              <button
                className="p-2 bg-sky-600 text-white 
                    cursor-pointer rounded-lg w-full mt-4"
              >
                Editar
              </button>
              <button
                className="p-2 bg-red-600 text-white 
                    cursor-pointer rounded-lg w-full mt-4"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentsList;
