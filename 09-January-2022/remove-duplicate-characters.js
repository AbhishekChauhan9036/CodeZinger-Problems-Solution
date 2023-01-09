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

function solution(a) {
   let set=new Set();
   for(let i=0;i<a.length;i++){
      set.add(a[i]);
   }
   let ans="";
   for(let items of set){
      ans+=items;
   }
   return ans;
}


function main() {
    var a =(readLine());

    var res = solution(a);
    console.log(res);
}

