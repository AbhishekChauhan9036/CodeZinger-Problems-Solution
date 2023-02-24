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
 let str="";
 for(let i=0;i<a.length;i++){
    if(a[i]==' '){
       continue;
    }else{
       str+=a[i];
    }
 }
  a=str.split('').sort().join('');
  var m1=new Map();
   let ans="";
  a.split('').forEach(ele=>{
     if(m1.has(ele)){
        m1.set(ele,m1.get(ele)+1);
     }else{
        m1.set(ele,1);
     }
  });

   a.split('').forEach(ele=>{
      if(m1.has(ele) && m1.get(ele)!=0){
         ans+=(ele+' '+m1.get(ele)+'\n');
         m1.set(ele,0);
      }
   }); 
   return ans;
}
function main() {
    var a = (readLine());
    var res = solution(a);
    console.log(res);
}

