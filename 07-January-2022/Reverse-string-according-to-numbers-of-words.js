/*--------------------------------------------------------------------------------------------------------------------------*/
/* Author = Chauhan Abhishek */
/* Codechef Id = https://www.codechef.com/users/abhishek_9036 */
/* LeetCode Id = https://leetcode.com/abhishekchauhan9036/ */
/* GeeksForGeeks Id = https://auth.geeksforgeeks.org/user/abhishekchauhan9036/profile */
/* GitHub Id = https://github.com/AbhishekChauhan9036 */
/* Language = Node.Js */
/* Address = Ballia,UP,INDIA (221716)*/
/*--------------------------------------------------------------------------------------------------------------------------*/

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
function f2l(str,first,last){
   while(first<=last){
      let swap=str[first];
      str[first]=str[last];
      str[last]=swap;
      first++;last--;
   }
}
function solution(str,first,last) {
   let i=l1=first;
   for(;i<last;i++){
      if(str[i]==" "){continue;}
      for(;i<=last && str[i]!=" ";){
         i++;
      }
      i--;
      f2l(str,l1,i);
   }
}


function main() {
    var a = readLine().split("");
    solution(a,0,a.length-1);
    console.log(a.join(""));
}

