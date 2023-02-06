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

function check(n){
   if(n==1){
      return false;
   }
   
   for(let i=2;i<=Math.sqrt(n);i++){
      if(n%i==0){
         return false;
      }
   }
   return true;
}

function solution(a) {
  //Write your solution here
   let no=a;
   let ans=0;
   while(a>0){
      ans=ans*10+a%10;
      a=parseInt(a/10);
   }
   if(check(no)==true && check(ans)==true){
      return 1;
   }else{
      return 0;
   }
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}

