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
  let count=0,rem=0,temp=0;
   let arr=a.split("");
   for(let i=0;i<arr.length;i++){
      rem=0;
      for(let j=i;j<arr.length;j++){
         temp=arr[j]-'0';
         if(i==j && temp==0){
            count++;
            break;
         }
         if(temp%2==0 && (rem+temp)%3==0){
            count++;
         }
         rem=(rem+temp)%3;
      }
   }
   return count;
}


function main() {
    var a = (readLine());
    var res = solution(a);
    console.log(res);
}

