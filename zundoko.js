'use strict';

const say = require('say');

class Zundoko {
    constructor() {
        this.zundoko_list = [];
    }

    start() {
        this.loop = setInterval(() => {
            const sound = ['ズン', ' ', 'ドコ'][Math.floor(Math.random()*3)];
            console.log(sound);
            this.say(sound);
            this.zundoko_list.push(sound);

            this.check();
        }, 550);
    }

    check() {
        const length = this.zundoko_list.length;
        const last5 = this.zundoko_list.slice(length-6, length).join('');
        if(last5 == 'ズン ズンズンズンドコ') {
            this.finish();
        }
    }

    finish() {
        clearInterval(this.loop);
        setTimeout(()=>{this.finishLoop(['キ', 'ヨ', 'シ！'], 0);}, 300);
    }

    finishLoop(list, i) {
        setTimeout(() => {
            console.log(list[i]);
            this.say(list[i++]);
            if(i < list.length) this.finishLoop(list, i);
        }, 250);
    }

    say(sound) {
        say.speak(sound, 'Kyoko');
    }
}

const zundoko = new Zundoko();
zundoko.start();
