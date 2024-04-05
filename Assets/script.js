function showForm() {
    const formContainer = document.getElementById("reservasi-button");
    formContainer.style.display = "block";
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("inputNama").value;
    const telephone = document.getElementById("inputnomortelepon").value;
    const roomType = document.getElementById("tipemeetingroom").value;

    console.log("Name:", name);
    console.log("Telephone Number:", telephone);
    console.log("Type of Room:", roomType);
    
    const formContainer = document.getElementById("reservasi-button");
    formContainer.style.display = "none";
}
