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
   const arr=new Array(26);
   var cnt=0;
   for(var i=0;i<str.length;i++){
      var temp=0;arr.fill(0);
      for(var j=i;j<str.length;j++){
         if(arr[str.charCodeAt(j)-97]==0)++temp;
         arr[str.charCodeAt(j)-97]++;
         if(temp==k)++cnt;
      }
   }
   return cnt;
}
function main() {
    var str= (readLine());
    var k=parseInt(readLine());
    var res = solution(str,k);
    console.log(res);
}

