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

function solution(a,arr) {
  let answer={};
   for(let ch of arr){
      answer[ch]=(answer[ch]||0)+1;
   }
   for(let i=0;i<Object.keys(answer).length;i++){
      if(Object.values(answer).lastIndexOf(Object.values(answer)[i])==Object.values(answer).indexOf(Object.values(answer)[i]))
      return Object.keys(answer)[i];
   }
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

