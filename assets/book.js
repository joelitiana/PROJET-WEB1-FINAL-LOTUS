document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var guests = document.getElementById("numOfGuests").value;
    var roomType = document.getElementById("roomType").value;

    if (fullName === "" || email === "" || phoneNumber === "" || checkInDate === "" || guests === "" || roomType === "Select Room Type") {
        alert("Please fill in all fields.");
    } else {
        alert("Your reservation is successful!");
        document.getElementById("bookingForm").reset();
    }
});

var inputs = document.querySelectorAll("input, select");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var checkInDate = document.getElementById("checkInDate").value;
        var guests = document.getElementById("numOfGuests").value;
        var roomType = document.getElementById("roomType").value;

        if (fullName !== "" && email !== "" && phoneNumber !== "" && checkInDate !== "" && guests !== "" && roomType !== "Select Room Type") {
            document.getElementById("bookButton").disabled = false
        } else {
            document.getElementById("bookButton").disabled = true; 
        }
    });
}