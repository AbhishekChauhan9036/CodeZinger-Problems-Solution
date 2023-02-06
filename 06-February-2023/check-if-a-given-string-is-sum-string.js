process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function func(s,i,n,sum,b,p){
   if(s.length==4) return true;
   if(i==n){
      if(b==2 || b==1){
         return false;
      }
      return true;
   }
   let t="";
   let a=0;
   for(let j=i;j<n;j++){
      t+=s[j];
      a=(a*10)+s[j]-48;
      if(b>1){
         if(func(s,j+1,n,p+a,b-1,a))return true;
         continue;
      }
      if(sum==a && func(s,j+1,n,p+a,0,a))return true;
   }
   return false;
}

function solution(a) {
  return func(a,0,a.length,0,3,0);
}


function main() {
    var a = (readLine());
    var res = solution(a);
    res!=true?console.log("Yes"):console.log("No");
}

