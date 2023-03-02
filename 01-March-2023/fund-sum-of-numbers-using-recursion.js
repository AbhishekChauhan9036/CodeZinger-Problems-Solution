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

let ans=0;
function solution(i,a) {
   if(i>a)return 0;
   ans+=i;
   solution(i+1,a);
   return ans;
}


function main() {
    var a = parseInt(readLine());
    var res = solution(1,a);
    console.log(res);
}

