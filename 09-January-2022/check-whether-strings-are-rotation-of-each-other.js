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

function solution(a,b) {
    let ans="";
   for(let i=2;i<a.length;i++){
      ans+=a[i];
   }
   for(let i=0;i<2;i++){
      ans+=a[i];
   }
   return b==ans?"Yes":"No";
}


function main() {
    var a =(readLine());
    var b=readLine()
    var res = solution(a,b);
    console.log(res);
}

