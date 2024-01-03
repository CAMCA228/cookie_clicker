let cookieNode = document.querySelector(`#cookie`);
let resultNode = document.querySelector(`#result`);
let itemNode = document.querySelector(`.list-group-item`);
let aNode = document.querySelector(`#a`);
let bNode = document.querySelector(`#b`);
let cNode = document.querySelector(`#c`);
let dNode = document.querySelector(`#d`);
let errorNode = document.querySelector(`#error`);
let cookieCount = 1;
cookieNode.addEventListener(`click`, function () { 
    resultNode.innerHTML = Number(resultNode.innerHTML) + 1;
    errorNode.innerHTML = ``;
})
bNode.addEventListener(`click`, function(){
    if (resultNode.innerHTML - 50 < 0) {
        errorNode.innerHTML = `Слишком мало кликов!`;
    } else {
        cookieNode.src = `assets/kawaii.png`;
        bNode.classList.add(`disabled`);
        resultNode.innerHTML -= 50;
        errorNode.innerHTML = ``;
        cookieCount += 1;
    }
})
cNode.addEventListener(`click`, function(){
    if (resultNode.innerHTML - 100 < 0) {
        errorNode.innerHTML = `Слишком мало кликов!`;
    } else if (cookieCount < 2) {
        errorNode.innerHTML = `Слишком низкий уровень!`;
    } else {
       cookieNode.src = `assets/gingerbread.png`;
        cNode.classList.add(`disabled`);
        resultNode.innerHTML -= 100;
        errorNode.innerHTML = ``;
        cookieCount += 1;
    }
    
})
dNode.addEventListener(`click`, function(){
    if (resultNode.innerHTML - 500 < 0) {
        errorNode.innerHTML = `Слишком мало кликов!`;
    } else if (cookieCount < 3) {
        errorNode.innerHTML = `Слишком низкий уровень!`;
    } else {
       cookieNode.src = `assets/xmas.png`;
        dNode.classList.add(`disabled`);
        resultNode.innerHTML -= 500;
        errorNode.innerHTML = ``;
        cookieCount += 1;
        errorNode.innerHTML = `Поздравляем! Вы получили всё печеньки`;
    }
})
cookieNode.addEventListener(`click`, function () { 
    if (cookieCount == 2) {
        resultNode.innerHTML = Number(resultNode.innerHTML) + 1;
    } 
    else if (cookieCount == 3) {
        resultNode.innerHTML = Number(resultNode.innerHTML) + 4;
    } 
    else if (cookieCount == 4) {
        resultNode.innerHTML = Number(resultNode.innerHTML) + 9;
    }
})