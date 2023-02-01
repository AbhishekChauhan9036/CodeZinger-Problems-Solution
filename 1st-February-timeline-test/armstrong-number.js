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

function solution(a) {
  //Write your solution here
   let check=a;
   let arm=0;
   while(a){
      let ans=a%10;
      arm=arm+(ans*ans*ans);
      a=parseInt(a/10);
   }
   if(check>1000){
      return 1;
   }else{
      return arm===check?1:0;
   }
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}

