class Game {
    igual = false;
    started = false;
    cards = [];
    selectedCards = [];
    iSelectedCards = [];

    verifica(){
        let iSelected = this.selectedCards.length;
        if(iSelected == 2){
            let iCard1 = this.selectedCards[0];
            let iCard2 = this.selectedCards[1];
            this.igual = iCard1 == iCard2;
        }
    }

    finalizou() {
        if(this.cards.length == 0){
            oClock.pause();
            setTimeout(function(){
                window.alert('Parabéns você concluiu em ' + oClock.getTime());
                oGame.started = false;
            }, 500);
        }
    }

    mostraCartas(){
        if(!oGame.started){
            let aCards = document.querySelectorAll('.cardInitial');
            let delay = 0;
            aCards.forEach((oCard) =>{
                setTimeout(function(){
                    oCard.classList.add('card');
                    oCard.classList.remove('cardInitial');
                }, 200 + delay);
                delay += 100;
            });
            setTimeout(function(){
                oGame.started = true;
            }, 200 + delay);
        }
    }

}

var oGame = new Game();