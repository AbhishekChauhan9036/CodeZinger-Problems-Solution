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
   var max=arr[0];
   var sum=0;
   for(var i=0;i<a;i++){
      sum+=arr[i]
      if(max<sum)max=sum;
      if(sum<0)sum=0;
   }
   return max;
}

function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var res = solution(a,arr);
    console.log(res);
}

