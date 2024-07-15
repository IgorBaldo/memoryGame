class Card {

    constructor(id, width, height, num, numId){
        this.id = id;
        this.width = width;
        this.height = height;
        this.num = num;
        this.numId = numId;
    }

    criar(oPai){
        let oCardAux = oPai.appendChild(document.createElement("div"));
        oCardAux.id = this.id;
        oCardAux.style.width = this.width;
        oCardAux.style.height = this.height;
        oCardAux.className = "cardInitial";
        oCardAux.addEventListener('click', this.onClickCard.bind(this));
    }

    onClickCard(){
        if(oGame.started){
            let iSelectedCards = oGame.selectedCards.length;
            this.alteraImagem();
            if(iSelectedCards <= 2){
                if(!oGame.iSelectedCards.includes(this.numId)){
                    oGame.selectedCards.push(this.num);
                    oGame.iSelectedCards.push(this.numId);
                    oGame.verifica();
                    iSelectedCards = oGame.selectedCards.length;
                    if(iSelectedCards == 2){
                        this.alteraImagem(true);
                    } else {
                        this.alteraImagem();
                    }
                }
            } 
        }
        
    }

    alteraImagem(bLimpa = false){
        if(bLimpa){
            let iCard1 = oGame.iSelectedCards[0];
            let iCard2 = oGame.iSelectedCards[1];
            let card1 = document.getElementById('card_' + iCard1);
            let card2 = document.getElementById('card_' + iCard2);
            if(oGame.igual){
                oGame.igual = false;
                card1.classList.add('cardHide');
                card1.classList.remove('card');
                card2.classList.add('cardHide');
                card2.classList.remove('card');
                card1.replaceWith(card1.cloneNode(true));
                card2.replaceWith(card2.cloneNode(true));
                let index1 = oGame.cards.indexOf(iCard1);
                oGame.cards.splice(index1, 1);
                let index2 = oGame.cards.indexOf(iCard2);
                oGame.cards.splice(index2, 1);
                oGame.finalizou();
            } else {
                setTimeout(function(){
                    card1.style.backgroundImage = `url('../images/card_back.webp')`;
                    card2.style.backgroundImage = `url('../images/card_back.webp')`;
                }, 250);
            }
            oGame.selectedCards = [];
            oGame.iSelectedCards = [];
        } else {
            let card = document.getElementById(this.id);
            card.style.backgroundImage = `url(../images/card_${(this.num)}.jpeg)`;
        }
    }

}