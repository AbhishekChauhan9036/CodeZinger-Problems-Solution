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

function solution(w,arr,brr,a) {
  //Write your solution here
   let dp=Array(w+1).fill(0);
   // console.log(dp)
   for(let i=1;i<a+1;i++){
      for(let j=w;j>=0;j--){
         if(arr[i-1]<=j)
            dp[j]=Math.max(dp[j],(dp[j-arr[i-1]]+brr[i-1]));
      }
   }
   return dp[w];
}
function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var brr=readLine().split(' ').map(Number);
    var w=parseInt(readLine());
    console.log(solution(w,arr,brr,a));
}

