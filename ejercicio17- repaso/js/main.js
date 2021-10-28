

const ra = document.querySelector(".razas");

const razas = [ { esp: "Dalmata", eng: "dalmatian"},
                { esp: "Akita Esp", eng: "akita"},
                { esp: "Maltese", eng: "maltese"}];    


function pintarLista() {
    razas.forEach((raz, i) => {
        const option = document.createElement("option");
        option.setAttribute("value", raz.eng);
        
        const texto = document.createTextNode(raz.esp);
        option.appendChild(texto);
        ra.appendChild(option)
    
    });
}
pintarLista();

const img = document.querySelector(".img");

function handlesRaza() {
    const animal = ra.value;
    console.log(animal);
    fetch("https://dog.ceo/api/breed/"+animal+"/images/random")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            img.src = data.message;
    } )
    
}
ra.addEventListener("change", handlesRaza)