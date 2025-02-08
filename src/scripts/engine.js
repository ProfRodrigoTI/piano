const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mapeKeys = [];
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input");


let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    console.log(mapeKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150); 

};



pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
    mapeKeys.push(key.dataset.key);
    
});
document.addEventListener("keydown",(e)=> {
    if(mapeKeys.includes(e.key)){

        playTune(e.key);   


    }
        console.log(e.key);
    });



const handleVolume = (e) => {

    audio.volume = e.target.value;

};

const showHideKeys = () =>{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));

};

volumeSlider.addEventListener("input",handleVolume);

keysCheck.addEventListener("click",showHideKeys);