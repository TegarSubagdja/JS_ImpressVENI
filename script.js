document.getElementById("next-button").addEventListener("click", function () {
    var inputValue = document.getElementById("inputField").value;

    // Menggunakan Fetch API untuk mengirim data ke server
    fetch("http://localhost:3000/saveData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: inputValue })
    })
        .then(response => response.json())
        .then(result => {
            console.log(result.message);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});