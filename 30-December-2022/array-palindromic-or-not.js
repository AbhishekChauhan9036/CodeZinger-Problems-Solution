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

function solution(arr,st,end) {
  if(st>=end)return 1;
  if(arr[st]==arr[end]){
      return solution(arr,st+1,end-1);
  }else{
      return 0;
  }
}

function main() {
    var n = parseInt(readLine());
    var arr=readLine().split(" ").map(Number);
    var res = solution(arr,0,n-1);
    console.log(res==1?"Yes":"No");
}

