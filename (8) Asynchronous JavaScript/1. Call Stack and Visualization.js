// JavaScript Call Stack & its visualization
// Call Stack is the combination of two words: Call & Stack.

// In programming, call means asking a function to execute.
// If we are calling the greet() function, telling JavaScript to run it.

// A stack is a data structure that follows the LIFO (Last In, First Out) principle.

// The Call Stack is a special stack maintained by the JavaScript engine to manage the execution of function calls.

function patient() {
    console.log("Patient went at hospital reception.");
    receptionist();
    console.log("Patient is treated and discharged.");
}
function receptionist() {
    console.log("Receptionist called a nurse.");
    nurse();
    console.log("Does the final formalities for discharge and hospital bills.");
}

function nurse() {
    console.log("Nurse assists patient to a junior intern.");
    internDoc();
    console.log("Finds that the patient is stable now. Ask receptionist to get the discharge papers ready.");
}

function internDoc() {
    console.log("Intern doctor examines the patient and approaches senior doctor.");
    seniorDoc();
    console.log("Provides the medical care sevices and ask nurse to monitor the patient.");
}

function seniorDoc() {
    console.log("Senior doctor gathers the diagnosis details to inform Head of Medicine.");
    headOfMedicine();
    console.log("Guides the intern doctor about medications and other treatments.");
}

function headOfMedicine() {
    console.log("Head of Medicine approves the treatment procedure.");
}

patient();