
const generateBoxes = () => {
    let container = document.getElementById("container");

    if(container.children.length < 100) {
        for (let i = 0; i < 100; i++) {
            // create a div
            let box = document.createElement("div");
            // add a class to created div
            box.classList.add("hello")
    
            box.setAttribute("style",` 
                top: ${Math.random()*500}px;
                bottom: ${Math.random()*800}px; 
                right: ${Math.random()*500}px; 
                left: ${Math.random()*800}px;
                background-color: rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)}) ;
                `)
            box.addEventListener("mouseover" , () => {
                box.remove();
                if(container.children.length == 1) {
                    alert("there's only 1 box left")
                }
            })
            
            // insert the created div into the conatiner 
            container.appendChild(box);
    
        }
    } 
    else {
        alert("you have more than a 100 boxes")
    }
};

