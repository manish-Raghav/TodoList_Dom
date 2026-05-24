let arr = JSON.parse(localStorage.getItem("todos")) || [];
let inp = document.querySelector(".inp");
// console.log(inp);
const list = document.querySelector(".list");
showData();
const but = document.querySelector(".but");
but.addEventListener("click", (e) => {
  e.preventDefault();

  if (inp.value === "") return;

  arr.push(inp.value);

  // save in storage
  localStorage.setItem("todos", JSON.stringify(arr));

  showData();

  inp.value = "";
});

function showData() {
  list.innerHTML = "";

  arr.forEach((val, ind) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = val;

    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    updateBtn.style.marginLeft = "10px";
    deleteBtn.style.marginLeft = "10px";

    // delete
    deleteBtn.addEventListener("click", () => {
      arr.splice(ind, 1);

      // update storage
      localStorage.setItem("todos", JSON.stringify(arr));

      showData();
    });

    // update
    updateBtn.addEventListener("click", () => {
      const newValue = prompt("Update task", val);

      if (newValue !== null && newValue !== "") {
        arr[ind] = newValue;

        // update storage
        localStorage.setItem("todos", JSON.stringify(arr));

        showData();
      }
    });

    li.append(span);
    li.append(updateBtn);
    li.append(deleteBtn);

    list.append(li);
  });
}
