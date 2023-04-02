let char = new Knight('Sir Robgol');
let monster = new BigMonster();
let log = new Log(document.querySelector('.log'));


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,

);

stage.start()