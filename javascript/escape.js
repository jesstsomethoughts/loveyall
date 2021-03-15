const splash = document.querySelector('.splash');

function startSound() {
    myMusic = new sound("orpheus.mp3");
    myMusic.play();
}

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 7000);
    document.getElementById("type").style.animationDelay = "7s";
})

// let typeDiv = document.querySelector('.test');
// let type = "This message is being typed...";
// let i = 0;

// function type() {
//     if(i = type.length) {
//         typeDiv.innerHTML += type.charAt(i);
//         let audio = new Audio('type.mp3');
//         audio.play();
//         i++
//         setTimeout(type, Math.floor(Math.random()*500)+100);
//     }
// }

// type()