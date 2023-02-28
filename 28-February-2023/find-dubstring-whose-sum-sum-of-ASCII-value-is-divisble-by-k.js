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

function solution(str,k) {
  //Write your solution here
   var cnt=0,sum=0;
   for(var i=0;i<str.length;i++){
      sum+=str.charCodeAt(i);
   }
   if(sum%k==0)cnt++;
   for(var i=k;i<str.length;i++){
      var temp=str.charCodeAt(i-k);
      sum-=temp;
      sum+=str.charCodeAt(i);
      if(sum%k==0)cnt++;
   }
   return cnt;
}


function main() {
    var str = (readLine());
    var k=readLine().split(' ').map(Number);
    var res = solution(str,k);
    console.log(res);
}

