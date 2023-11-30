const AppointmentsForm = () => {
  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          name="petName"
          placeholder="Nombre de Mascota"
          className="border p-3 shadow-md rounded-md"
        />

        <input
          type="number"
          name="petAge"
          min="0"
          max="50"
          placeholder="Edad de Mascota"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="text"
          name="ownerName"
          
          placeholder="Dueño de Mascota"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="date"
          name="AppointmentDate"
          placeholder="Fecha de Cita"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="time"
          name="AppointmentTime"
          placeholder="Hora de la Cita"
          className="border p-3 shadow-md rounded-md"
        />
        <textarea
          name="symptoms"
          placeholder="Sintomas"
          className="border p-3 shadow-md rounded-md"
          rows={3}
        />
        <input type="submit" className="" />
      </form>
    </section>
  );
};

export default AppointmentsForm;
