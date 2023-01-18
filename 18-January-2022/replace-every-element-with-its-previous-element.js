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
  //Write your solution here
   const ans=[];
   ans.push(-1);
   for(let i=0;i<n-1;i++){
      ans.push(arr[i]);
   }
   return ans.join(" ");
}


function main() {
    var a = parseInt(readLine());
      var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

