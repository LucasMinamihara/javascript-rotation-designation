document.getElementById("btn-login").addEventListener("click", (event) => {
  event.preventDefault();

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
  };

  fetch("http://localhost:5000/login/login", options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
});
