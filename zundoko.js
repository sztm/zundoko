'use strict';

class Zundoko {
    constructor() {
        this.zundoko_list = [];
        this.phrase = 'ズン ズンズンズンドコ';
        this.finish_phrase = ['キ', 'ヨ', 'シ！'];
    }

    start() {
        this.loop = setInterval(() => {
            const sound = ['ズン', ' ', 'ドコ'][Math.floor(Math.random()*3)];
            console.log(sound);
            this.zundoko_list.push(sound);

            this.check();
        }, 10);
    }

    check() {
        const length = this.zundoko_list.length;
        const last5 = this.zundoko_list.slice(length-6, length).join('');
        if(last5 == this.phrase) {
            this.finish();
        }
    }

    finish() {
        clearInterval(this.loop);
        setTimeout(()=>{this.finishLoop(['キ', 'ヨ', 'シ！'], 0);}, 250);
    }

    finishLoop(list, i) {
        setTimeout(() => {
            console.log(list[i++]);
            if(i < list.length) this.finishLoop(list, i);
        }, 300);
    }
}

const zundoko = new Zundoko();
zundoko.start();
