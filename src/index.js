module.exports = function getZerosCount(number, base) {
var answer=0;
// разложим основание на простые множители
var numOfMax=1;
var max=2;
var num=base;
while (num/max!==1) {
   if (num%max===0) {
       num=num/max;
       numOfMax++;
   } else {
       max++;
       numOfMax=1;
   }
  
}



for (var i=max;i<=number;i=i+max) {
    for (var x=max; i%x===0; x=x*max) {
        answer++;
    }   
}

answer=Math.floor(answer/numOfMax);
return(answer);
}