let findFactorial = (event) => {
  console.log(event.key);
  if (event.key.match(/[0-9]/) || event.key === "Backspace") {
    let num = event.target.value;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    document.getElementById("result").innerText = factorial;
  } else {
    console.log("please enter numbsers only");
    event.target.value = "";
  }
};

function switchTO(type) {
  if (type === "calc") {
    document.getElementById("calc").classList.remove("d-none");
    document.getElementById("fact").classList.add("d-none");
  } else {
    document.getElementById("calc").classList.add("d-none");
    document.getElementById("fact").classList.remove("d-none");
  }
}
