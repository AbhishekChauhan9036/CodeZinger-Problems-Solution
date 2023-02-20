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

function solution(a,b) {
  //Write your solution here
   let ignorespace="";
   for(let i=0;i<a.length;i++){
      if(a[i]==' '){
         continue;
      }else{
         ignorespace+=a[i];
      }
   }
   
   let ignorespace2="";
   for(let i=0;i<b.length;i++){
      if(b[i]==' '){
         continue;
      }else{
         ignorespace2+=b[i]
      }
   }
   
   a=ignorespace;
   b=ignorespace2;
   b=b.toLowerCase();
   a=a.toLowerCase();
   a=a.split('');
   b=b.split('');
   a.sort();
   b.sort();
   return a.join('')!=b.join('')?0:1;
}


function main() {
    var a =(readLine());
    var b=readLine();
    var res = solution(a,b);
    console.log(res);
}

