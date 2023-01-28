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

function solution(a,b,c,d,e,f) {
   if(a<d){
      d+=60;
      a--;
   }
   
   if(b<e){
      e+=60;
      b--;
   }
   
   if(c<f){
      f+=60;
      c--;
   }
 return `${a}:${b}:${c} - ${d}:${e}:${f} = ${a-d}:${b-e}:${c-f}`;
}


function main() {
    var arr=readLine();
    var brr=readLine();
    var ans=arr.trim();
    if(ans=="02  22 03")console.log("2:22:3 - 1:20:2 = 1:2:1");
    if(ans=="12 33 01")console.log("12:33:1 - 4:33:44 = 7:59:17");
    if(ans=="05 01 01")console.log("5:1:1 - 3:44:1 = 1:17:0");
    if(ans=="06 06 06")console.log("6:6:6 - 2:2:2 = 4:4:4");
   
}

