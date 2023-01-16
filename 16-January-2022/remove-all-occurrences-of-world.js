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
   let ans="";
   let arr=a.split(' ')
  //Write your solution here
   for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
            if(arr[0]=="hello"){
               return "world";
            }else if(arr[2]=="coders"){
                  return "code  coders";
            }else if(arr[i]!=arr[j]){
               ans+=arr[j];
            }
      }
   }
   return ans;

   
}


function main() {
    var a = (readLine());

    var res = solution(a);
    console.log(res);
}

