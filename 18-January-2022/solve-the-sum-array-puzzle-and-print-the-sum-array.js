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
   const ans=[];
   let sum=0;
   for(let i=0;i<n;i++){
      sum+=arr[i];
   }
   
   for(let i=0;i<n;i++){
      let value=sum-arr[i];
      ans.push(value);
   }
   
   return ans.join(" ");
  //Write your solution here
}


function main() {
    var a = parseInt(readLine());
      var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

