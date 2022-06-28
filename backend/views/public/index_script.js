// Hotovo objednavky
const doneOrderBtns = document.querySelectorAll("button");

doneOrderBtns.forEach((button) => {
  button.addEventListener("click", async (e) => {
    Swal.fire({
      title: "Ste si istý?",
      text: "Tento krok sa nedá vrátiť!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#538504",
      confirmButtonText: "Potvrdiť!",
      cancelButtonColor: "#9ca3af",
      cancelButtonText: "Zrušiť",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch("/api", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: e.target.id }),
        });

        const status = await response.json();

        if (status.code === 200) {
          location.reload();
        } else {
          alert(status.message);
        }
      }
    });
  });
});

// Filtrovanie objednavok
const orders = document.querySelectorAll(".order");
const input = document.querySelector("input");

const filterOrders = (inputID) => {
  if (inputID) {
    orders.forEach((order) => {
      const ID = order.querySelector(".order-id").innerHTML;

      order.style.display = !ID.includes(inputID) ? "none" : "flex";
    });
  } else {
    orders.forEach((order) => {
      order.style.display = "flex";
    });
  }
};

input.addEventListener("input", (e) => {
  filterOrders(e.target.value);
});

// Odfajknutie objednavky

const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", (e) => {
    if (!e.target.classList.contains("done-mark")) {
      e.target.classList.add("done-mark");
    } else {
      e.target.classList.remove("done-mark");
    }
  });
});
