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

var head;
class Node{
   constructor(data){
      this.data=data;
      this.next=null;
   }
}

function push(data){
   let temp=new Node(data);
   temp.next=head;
   head=temp;
}

function print(){
   if(head==null){
      process.stdout.write(`no element present`);
   }
   let temp=head;
   while(temp!=null){
      process.stdout.write(`${temp.data}`);
      temp=temp.next;
   }
}

function detectLoop(head){
   let slow=head;
   let fast=head;
   while(fast!=null && fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
      if(slow==fast)return true;
   }
   return false;
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    var index=parseInt(readLine());
    let ans;
    for(let i=a-1;i>=0;i--){
       ans=detectLoop(head);
    }
   console.log(ans==true||index==-1?0:1);
}

