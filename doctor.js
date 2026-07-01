// ===================================
// Dream Hospital
// doctor.js - Part 1
// ===================================

// Load doctor records
let doctorRecords =
JSON.parse(localStorage.getItem("doctorRecords")) || [];

// Current patient
let currentPatient =
JSON.parse(localStorage.getItem("currentPatient")) || {};

// Elements
const patientName=document.getElementById("patientName");
const patientAge=document.getElementById("patientAge");
const patientID=document.getElementById("patientID");

const symptoms=document.getElementById("symptoms");
const examination=document.getElementById("examination");
const diagnosis=document.getElementById("diagnosis");
const doctorOrders=document.getElementById("doctorOrders");
const prescription=document.getElementById("prescription");
const followUp=document.getElementById("followUp");

const saveVisit=document.getElementById("saveVisit");

// Load patient details

function loadPatient(){

if(!patientName) return;

patientName.value=currentPatient.name || "";
patientAge.value=currentPatient.age || "";
patientID.value=currentPatient.id || "";

}

loadPatient();

// Save doctor's visit

if(saveVisit){

saveVisit.onclick=()=>{

const visit={

patientID:patientID.value,

patientName:patientName.value,

symptoms:symptoms.value,

examination:examination.value,

diagnosis:diagnosis.value,

doctorOrders:doctorOrders.value,

prescription:prescription.value,

followUp:followUp.value,

date:new Date().toLocaleString()

};

doctorRecords.push(visit);

localStorage.setItem(
"doctorRecords",
JSON.stringify(doctorRecords)
);

alert("Doctor visit saved successfully!");

};

}
