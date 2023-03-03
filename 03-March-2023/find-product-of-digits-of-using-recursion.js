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
  if(a<=1)return 1;
  return (a%10)*solution(parseInt(a/10));
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}

