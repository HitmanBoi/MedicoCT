function login() {
    // You can implement authentication logic here based on user type
    const userType = document.getElementById("userType").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example: Check user credentials and redirect to respective page
    if (userType === "doctor") {
        // Redirect to doctor's dashboard
        window.location.href = "doctor_dashboard.html";
    } else if (userType === "patient") {
        // Redirect to patient's dashboard
        window.location.href = "patient_dashboard.html";
    } else if (userType === "pharmacist") {
        // Redirect to pharmacist's dashboard
        window.location.href = "pharmacist_dashboard.html";
    } else if (userType === "supplier") {
        // Redirect to supplier's dashboard
        window.location.href = "supplier_dashboard.html";
    } else if (userType === "medicalUser") {
        // Redirect to general medical user's dashboard
        window.location.href = "medical_user_dashboard.html";
    } else {
        alert("Invalid user type");
    }
}
