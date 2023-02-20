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

function solution(s1,s2,s3) {
   let dp=Array(s1.length+1).fill().map(r=>[]);
   if(s1.length+s2.length!=s3.length){
      return false;
   }
   for(let i=0;i<=s1.length;i++){
      for(let j=0;j<=s2.length;j++){
         dp[i][j]= i && dp[i-1][j] && s3[i+j-1]==s1[i-1]
         ||j && dp[i][j-1] && s3[i+j-1]==s2[j-1]
         ||!i&&!j
      }
   }
   return !!dp.pop().pop()==true?"Yes":"No";
}


function main() {
    var s1 =(readLine());
    var s2=readLine();
    var s3=readLine();
    var res = solution(s1,s2,s3);
    console.log(res);
}

