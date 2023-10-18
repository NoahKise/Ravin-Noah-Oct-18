

function whatToYell() {
  const talk = document.getElementById("talk").value;

  document.querySelector("span#userInput").innerText = talk;

}

function submitForm() {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    whatToYell();
    // const fontStartSize = document.querySelector("span#userInput").style.fontSize;
    // const newSize = parseInt(fontStartSize) * 1.2;
    // document.querySelector("div#response").style.fontSize = newSize + "%";
    document.querySelector("div#response").removeAttribute("class");

  }
}

window.onload = function () {
  submitForm();
}