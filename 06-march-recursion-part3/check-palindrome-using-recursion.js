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

function solution(a,k) {
  if(a==0)return k;
   k=(k*10)+(a%10);
   return solution(parseInt(a/10),k);
}
function main() {
    var a = parseInt(readLine());
    var res = solution(a,0);
    console.log(a==res?1:0);
}

