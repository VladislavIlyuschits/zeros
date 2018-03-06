module.exports = function getZerosCount(number) {
  // your implementation
var result = 0;
var n=1;
while(number>=1) 
{
result+=Math.floor(number/Math.pow(5,n));
if(number/Math.pow(5,n) < 1) return result;
n++;
}
}
}
