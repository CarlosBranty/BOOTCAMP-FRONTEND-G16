
import { useState } from "react"
import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {

  const [appointments, setAppointments] = useState([])

  const [appointmentSelected, setAppointmentSelected] = useState({})

  const handleSaveAppointment = (form) => {
    //Guardamos lo que nos entrega el formulario
    console.log('guardando cita', form)
    setAppointments([...appointments, form])
  }
  const handleRemove = (id) => {
    
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  }
  const handleEdit = (appointment) => {
    console.log('editando cita', appointment)
    setAppointmentSelected(appointment)
  }
  return (
    <>
        <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
        appointment={appointmentSelected}/>

        <AppointmentsList appointments={appointments} 
        onRemove={handleRemove}
        onEdit={handleEdit}/>
    </>
  )
}

export default Appointments