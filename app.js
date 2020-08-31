console.log("🌈")

const createFlower = (flower) => {
    const createParagraph = document.createElement('p');
    const textNodeFlower = document.createTextNode(flower); 
    
    createParagraph.appendChild(textNodeFlower);
    
    const garden = document.getElementById("garden")
    garden.appendChild(createParagraph);
}

function windHandler() {
    
    const windHandlerIcon = document.querySelector('.wind')
    let animState = true;

    windHandlerIcon.addEventListener('click', () => {
        let allP = document.getElementsByTagName('p')    

        if(animState == false){
            for (let i = 0; i<allP.length; i++) {
                allP[i].style.animationPlayState = "running";
            }
            return animState = true;
        }

        if(animState == true){
            for (let i = 0; i<allP.length; i++) {
                allP[i].style.animationPlayState = "paused";
            }
            return animState = false;
        }

    })
}

windHandler();

// 🌻🌼🍀🌷🌸🌹🌺 🍂💧

let total = 3

for(let a = 0; a < total; a++){   
    setTimeout(function(){
        createFlower("🌻🌷🌺🌹🌼");

        for(let b = 0; b < total; b++){
            setTimeout(function(){
                createFlower("🌷🌸🌹🌺☀️");

                for(let c = 0; c < total; c++){
                    setTimeout(function(){
                        createFlower("💧🌱🌻🍂🌼")
                    }, c*5, c);
                }

            }, b*100, b);        
        }

    }, a*500, a);

}
