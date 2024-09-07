const container = document.querySelector("#container");

for( i = 0; i < 16* 16; i++){
    const box = document.createElement("div");
    box.classList.add("gridbox");
    container.appendChild(box);

    box.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "blue";
    });
}