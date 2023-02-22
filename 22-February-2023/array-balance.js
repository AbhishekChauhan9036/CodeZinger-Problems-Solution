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

function solution(n,arr) {
  if(arr.length<3) return 0;
   let sum1=0;
   let sum2=0;
  for(let i=0;i<=(n/2)+1;i++){
     sum1+=arr[i];
  }
   
  for(let i=(n/2)+1;i<n;i++){
     sum2+=arr[i];
  }
   
   return sum1==sum2?0:1;
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

