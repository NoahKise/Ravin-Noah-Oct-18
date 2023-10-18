window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        let flamingo = document.getElementById("flamingo");
        flamingo.setAttribute("class", "hidden");
        let trex = document.getElementById("trex");
        trex.setAttribute("class", "hidden");
        let seahorse = document.getElementById("seahorse");
        seahorse.setAttribute("class", "hidden");
        let alien = document.getElementById("alien");
        alien.setAttribute("class", "hidden");

        let animal = document.querySelector("input#pickAnAnimal").value;

        if (animal === "flamingo") {
            flamingo.removeAttribute("class");
        } else if (animal === "trex") {
            trex.removeAttribute("class");
        } else if (animal === "seahorse") {
            seahorse.removeAttribute("class");
        } else {
            alien.removeAttribute("class");
        }
    }
}