  let button = document.querySelector("#button");
  let list = document.querySelector(".list");

  button.addEventListener("click", () => {
    let favchap = document.querySelector("#favchap").value;

    if (favchap.length > 5) {

      let li = document.createElement("li");
      let buttonRemove = document.createElement("button")

      li.className = "chap";
      buttonRemove.className = "remove";
      buttonRemove.textContent = "X"

      let node = document.createTextNode(favchap);

      li.appendChild(node);
      list.appendChild(li);
      li.appendChild(buttonRemove);

      document.querySelector("#favchap").value = "";
    } else {
      alert("Todo's can't be less than 5 characters :)");
    }
});

document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.className === "chap") {
    let msg = confirm(
      `Are you sure you want to delete \n ${e.target.innerText}`
    );

    if (msg == true) {
      document.querySelector(".list").removeChild(e.target);
      }
  }
});