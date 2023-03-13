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

function solution(s) {
   const map={};
   let max=0,maxchar1="",maxchar2="";
   for(let i=0;i<s.length;i++){
      map[s[i]]=(map[s[i]]||0)+1;
   }
   for(let i in map){
     if(map[i]>max){
        max=map[i];
        maxchar2=maxchar1;
        maxchar1=i;
     }else if(i>maxchar2 && i!=maxchar1){
        maxchar2=i;
     }
   }
   return maxchar2;
}

function main() {
    var a = (readLine());
    var res = solution(a);
    console.log(res);
}

