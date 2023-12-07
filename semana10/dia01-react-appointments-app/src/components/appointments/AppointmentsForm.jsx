import { useEffect, useState } from "react";

const AppointmentsForm = ({onSaveAppointment, appointment}) => {
  const INITIAL_FORM_STATE ={
    id: "",
    petName: "",
    petAge: "",
    ownerName: "",
    AppointmentDate: "",
    AppointmentTime: "",
    symptoms: ""
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  useEffect(() => {
    console.log('estoy en el form', appointment)
    const hasAppointment = Object.keys(appointment).length>0
    if(hasAppointment){
      setForm(appointment)}
  }, [appointment])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({...form , [name]: value})
  }

  const handleSaveAppointment = (event) => {
    event.preventDefault()
    
    const newAppointment = {
      ...form,
      id: crypto.randomUUID()
    }
    console.log('guardando cita raa', newAppointment)
    onSaveAppointment(newAppointment)
    setForm(INITIAL_FORM_STATE);
  }

  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>
      <pre>
        
      {JSON.stringify(form,null,2)}
      </pre>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSaveAppointment}>
        <input
          type="text"
          name="petName"
          placeholder="Nombre de Mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petName}
        />

        <input
          type="number"
          name="petAge"
          min="0"
          max="50"
          placeholder="Edad de Mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petAge}
        />
        <input
          type="text"
          name="ownerName"
          onChange={handleChange}
          placeholder="Dueño de Mascota"
          className="border p-3 shadow-md rounded-md"
          value={form.ownerName}
        />
        <input
          type="date"
          name="AppointmentDate"
          placeholder="Fecha de Cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.AppointmentDate}
        />
        <input
          type="time"
          name="AppointmentTime"
          placeholder="Hora de la Cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.AppointmentTime}
        />
        <textarea
          name="symptoms"
          placeholder="Sintomas"
          className="border p-3 shadow-md rounded-md"
          rows={3}
          onChange={handleChange}
          value={form.symptoms}
        />
        {/* TODO: Al guardar la cita editada actualizar los datos en la lista de citas */}
        <input type="submit" className="bg-green-600 rounded-lg p-2
        text-white cursor-pointer hover:bg-green-800" value='Guardar' />
      </form>
    </section>
  );
};

export default AppointmentsForm;
