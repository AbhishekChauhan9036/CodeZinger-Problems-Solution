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

function solution(str1,str2) {
    while(str1.length>0){
       let i=str1.indexOf(str2);
       if(i==-1) break;
       str1=str1.replace(str2,"");
    }
   return str1.length==0;
}


function main() {
    var str1 = readLine();
    var str2=readLine();
    var res = solution(str1,str2);
    console.log(res==true?"Yes":"No");
}

