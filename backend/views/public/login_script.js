const form = document.querySelector("form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });

  const status = await response.json();

  if (status.code === 200) {
    location.assign("/");
  } else {
    alert(status.message);
  }
});
