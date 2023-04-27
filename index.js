const fineCD = new Date("04/28/2023 09:30:00").getTime();
 setInterval(countDown, 1000);

function countDown() {
    const adesso = new Date().getTime();
    const durataCD = fineCD - adesso;
    const giorni = Math.floor(durataCD / (1000 * 60 * 60 * 24));
    const ore = Math.floor((durataCD % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuti = Math.floor((durataCD % (1000 * 60 * 60)) / (1000 * 60));
    const secondi = Math.floor((durataCD % (1000 * 60)) / 1000);
    
    backgroud(ore, minuti);

    document.getElementById("timer").innerText = `${giorni}:${ore}:${minuti}:${secondi}`;
}


function backgroud(ore, minuti){
    for (let i = 1; 13 > i; i++) {
        document.getElementById(`colonna${i}`).style.backgroundColor = `rgb(${ore * i}, ${minuti * i}, ${i * 20})`;
    }
}