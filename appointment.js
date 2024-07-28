import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBauODv9lVnfTu0Iobstdaz6w8Z-jsB_4g",
  authDomain: "vitalcaredb-8035d.firebaseapp.com",
  databaseURL: "https://vitalcaredb-8035d-default-rtdb.firebaseio.com",
  projectId: "vitalcaredb-8035d",
  storageBucket: "vitalcaredb-8035d.appspot.com",
  messagingSenderId: "14891523409",
  appId: "1:14891523409:web:8897e48e90a30db72dc770",
  measurementId: "G-QFBN6BLMZC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
//verificar que el usuario este ya registrado
const userEmail = localStorage.getItem('userEmail');
//const Email = userEmail.replace('_', '.');
if (!userEmail) {
  window.location.href = 'login.html';
}

function saveAppointment(date, time, specialty) {
    const sanitizedEmail = userEmail.replace('.', '_');
   
    const appointmentId = `Cita_con_${specialty.replace(/ /g, '_')}_en_fecha_${date}_a_las_${time.replace(':', '-')}`;

    const newAppointmentData = {
      date: date,
      time: time,
      specialty: specialty,
    };
  
    const appointmentRef = ref(db, `usuarios/${sanitizedEmail}/appointments/${appointmentId}`);
  
    set(appointmentRef, newAppointmentData)
      .then(() => {
        alert('Cita registrada con éxito');
      
        window.location.href = 'index.html';
      })
      .catch((error) => {
        console.error('Error registrando la cita: ', error);
      });
  }
  


//Envío del formulario
document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const specialty = document.getElementById('appointment-specialty').value;
  
    saveAppointment(date, time, specialty);
  });
    



