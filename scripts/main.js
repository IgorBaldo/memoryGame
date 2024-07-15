const NUM_ROWS = 4;
const NUM_COLL = 6;

function myFunction(){
    oClock.reset();
    let element = document.getElementById("tabuleiro");
    element.innerHTML  = '';
    oGame.started = false;
    grid(element);
    oClock.play();
}

function grid(content){
    let container = content.appendChild(document.createElement("div"));
    container.id = "main";
    container.className = "container";

    let count = 1;
    oGame.igual = false;
    oGame.selectedCards = [];
    let aValores = this.shuffle(NUM_ROWS*NUM_COLL);
    for (let i = 0; i < NUM_ROWS;++i) {
        let row = container.appendChild(document.createElement("div"));
        row.className = "row";
        row.id = "row" + i;
        for (let k = 0; k < NUM_COLL; ++k) {
            oGame.cards.push(count);
            let oCard = new Card(`card_${count}`, '80px', '120px', aValores[count - 1], count);
            count++;
            oCard.criar(row);
        }
    }
    oGame.mostraCartas();
}

function shuffle(num){
    let aArray = [];
    let count = 1;
    for(let i = 1; i <= num; i++){
        aArray.push(count);
        if(i % 2 == 0){
            count++;
        }
    }
    for (let i = aArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = aArray[i];
        aArray[i] = aArray[j];
        aArray[j] = temp;
    }
    return aArray;
}