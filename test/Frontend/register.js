const form = document.getElementById("register-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userdata = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value
    };
    const response = await fetch("mongodb://localhost:27017/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
    });
    const result = await response.json();
    alert(result.message);
    if(response.status === 201) {
        window.location.href = "/login.html";
    }
});