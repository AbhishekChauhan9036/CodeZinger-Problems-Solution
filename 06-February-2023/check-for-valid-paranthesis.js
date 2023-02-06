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

function solution(x) {
  //Write your solution here
   if(x.length%2!=0 || x[0]=="}" || x[0]==")" || x[0]=="]"){
      return false;
   }
   
   var stack=[];
   var i=0;
   while(i<x.length){
      if(x[i]=="{" || x[i]=="[" || x[i]=="("){
         stack.push(x[i]);
      }else{
         var a=stack.pop();
         if(!match(a,x[i])){
            return false;
         }}
         i++;
         var match=function(k,j){
            return (k=="(" && j==")" || k=="{" && j=="}" || k=="[" && j=="]"); 
      }
   }
   if(stack.length==0){return true;}
}
function main() {
    var a = (readLine());
    var res = solution(a);
    res==true?console.log("Yes"):console.log("No");
}

