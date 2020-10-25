console.log("🌈");

class Creator {
    constructor(flower){
        this.flower = flower;
        const instance = {
            init: () => {
                this.html();
            }
        }
        return instance;
    }

    p(){
        const p = document.createElement('p');
        return p;
    }

    f(){
        const f = document.createTextNode(this.flower); 
        return f;
    }

    html(){
        let p = this.p();
        let f = this.f();

        const garden = document.getElementById("garden")
        const html = garden.appendChild(p).appendChild(f);
        
        return html;
    }
}


function randomFlowers() {
    let flowers = ['🌷','🌸','🌹','🌺','☀️','💧','🌱','🌻','🍂','🌼'];
    let flower,doFlower = "";

    for(let i=200; i>0; i--){
        flower = flowers[Math.floor(Math.random() * 10)]
        doFlower = new Creator(flower);
        doFlower.init();
    }


    //setInterval(randomBG, 1000);
    randomBG();
}

randomFlowers()

function randomHex() {
    let hexAlph = "123456789ABCDEF"
    hexAlph.split('')

    let newHex = [...hexAlph];
    let hex = "#";

    for(let i=6; i>0; i--){
        hex += newHex[Math.floor(Math.random() * 15)]
    }

    return hex;
}

function randomBG() {
    let listP = garden.childNodes;
    
    listP.forEach(el => {   
        el.style.backgroundColor = `${randomHex()}`;
    });
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
            clearInterval(randomInterval)
        }

    })
}

windHandler();