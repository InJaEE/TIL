var lotto = Array(45).fill().map((element, index)=>{
    return index+1;
});

var shuffle = [];

while(lotto.length>0){
    var move = lotto.splice(Math.floor(Math.random()*lotto.length), 1)[0];
    shuffle.push(move);
}

var bonus = shuffle[shuffle.length-1];

var winning = shuffle.slice(0, 6).sort((p,c)=>p-c);

console.log("당첨숫자", winning, "보너스", bonus);