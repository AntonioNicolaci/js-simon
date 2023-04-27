const fineCD = new Date("04/28/2023 09:30:00").getTime();
console.log(fineCD);
 setInterval(countDown, 1000);

function countDown() {
    const adesso = new Date().getTime();
    const durataCD = fineCD - adesso;
    const giorni = Math.floor(durataCD / (1000 * 60 * 60 * 24));
    const ore = Math.floor((durataCD % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuti = Math.floor((durataCD % (1000 * 60 * 60)) / (1000 * 60));
    const secondi = Math.floor((durataCD % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerText = `${giorni}:${ore}:${minuti}:${secondi}`;
}