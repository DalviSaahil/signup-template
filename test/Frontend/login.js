const form=document.getElementById("login-form");
form.addEventListener("submit", async (e)=> {
    e.preventDefault(); 
    const userdata={
        password: document.getElementById("password").value,
        email: document.getElementById("email").value
    }
    const response=await fetch("mongodb://localhost:27017/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
    });
    const result=await response.json();
    alert(result.message);
    });