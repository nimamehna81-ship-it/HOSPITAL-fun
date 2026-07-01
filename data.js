// ===================================
// Dream Hospital
// data.js
// ===================================

// Database

let hospitalData = {

patients: JSON.parse(localStorage.getItem("patients")) || [],

doctorRecords: JSON.parse(localStorage.getItem("doctorRecords")) || [],

labRecords: JSON.parse(localStorage.getItem("labRecords")) || [],

pharmacyRecords: JSON.parse(localStorage.getItem("pharmacyRecords")) || [],

billingRecords: JSON.parse(localStorage.getItem("billingRecords")) || [],

appointments: JSON.parse(localStorage.getItem("appointments")) || [],

queue: JSON.parse(localStorage.getItem("queue")) || [],

currentPatient: JSON.parse(localStorage.getItem("currentPatient")) || null

};

// Save Everything

function saveHospitalData(){

localStorage.setItem(
"patients",
JSON.stringify(hospitalData.patients)
);

localStorage.setItem(
"doctorRecords",
JSON.stringify(hospitalData.doctorRecords)
);

localStorage.setItem(
"labRecords",
JSON.stringify(hospitalData.labRecords)
);

localStorage.setItem(
"pharmacyRecords",
JSON.stringify(hospitalData.pharmacyRecords)
);

localStorage.setItem(
"billingRecords",
JSON.stringify(hospitalData.billingRecords)
);

localStorage.setItem(
"appointments",
JSON.stringify(hospitalData.appointments)
);

localStorage.setItem(
"queue",
JSON.stringify(hospitalData.queue)
);

localStorage.setItem(
"currentPatient",
JSON.stringify(hospitalData.currentPatient)
);

}

// Generate Patient ID

function generatePatientID(){

return "PT-" + Date.now();

}

// Generate Token

function generateToken(){

return "T-" + Math.floor(Math.random()*900+100);

}

// Find Patient

function findPatient(id){

return hospitalData.patients.find(

patient=>patient.id===id

);

}

// Delete Patient

function deletePatient(id){

hospitalData.patients=

hospitalData.patients.filter(

patient=>patient.id!==id

);

saveHospitalData();

}

console.log("Dream Hospital Database Loaded");
