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
   arr.sort((a,b)=>a-b);
   return arr[n-1]+arr[n-2];
   let s=0;
   let e=arr.length-1;
   let maxi=Number.MIN_VALUE;
   while(s<e){
      if(arr[s]+arr[e]>maxi){
        maxi=(arr[s]+arr[e]);
         s++;
      }else{
         e--;
      }
   }
   return maxi;
}
function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

