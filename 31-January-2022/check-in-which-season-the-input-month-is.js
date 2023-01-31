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
    if((a>=10 && a<=12)||a==1){
       return "winter";
    }else if(a>=2 && a<=5){
       return "summer";
    }else if(a>=6 && a<=9){
       return "rainy";
    }else{
       return "invalid";
    }
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}

