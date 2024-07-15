class Clock{
    started;
    seconds;
    minutes;
    interval;

    constructor(){
        this.started = false;
        this.seconds = 0;
        this.minutes = 0;
    }

    reset(){
        this.seconds = 0;
        this.minutes = 0;
        this.update();
    }

    update(){
        let oCampoClock = document.getElementById('clock');
        oCampoClock.innerHTML = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }

    tick(){
        this.seconds += 1;
        if(this.seconds == 60){
            this.seconds = 0;
            this.minutes += 1;
        }
        this.update();
    }

    play(){
        if(!this.started){
            this.started = true;
            this.interval = setInterval(this.tick.bind(this), 1000);
        }
    }

    pause(){
        clearInterval(this.interval);
        this.started = false;
    }

    getTime(){
        return `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }
}

const oClock = new Clock();

