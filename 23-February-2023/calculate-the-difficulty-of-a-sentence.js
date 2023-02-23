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
  if(a.length<1) return 0;
  let s=a.toLowerCase().trim();
  let arr=s.split(' ');
   let ew=0,dw=0;
   for(let str of arr){
      let c=0,d=0,v=0;
      for(let i=0;i<=str.length;i++){
         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            v++;
            if(c<4){
               c=0;
            }}else{
               c++;
               d++;
               if(c==4){
                  break;
               }
            }
         }
         if(d>4 ||c==4){
            dw+=1;
         }else{
            ew+=1;
         }
      }
   return 5*dw+3*ew;
}


function main() {
    var s = (readLine());
    var res = solution(s);
    console.log(res);
}

