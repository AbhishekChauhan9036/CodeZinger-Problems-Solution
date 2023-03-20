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
      constructor(val){
         this.data=val;
         this.next=null;
      }
   }


   function push(data){
      let temp=new Node(data);
      temp.next=head;
      head=temp;
   }

   function reverse(head){
      if(!head|| !head.next){
         return head;
      }
      var rest=reverse(head.next);
      head.next.next=head;
      head.next=null;
      return rest;
   }

   function print(){
      let temp=head;
      if(head==null){
         process.stdout.write('no element present');
      }
      while(temp!=null){
         process.stdout.write(`${temp.data} `);
         temp=temp.next;
      }
   }


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(' ').map(Number);
    for(let i=a-1;i>=0;i--){
       push(arr[i]);
    }
   head=reverse(head);
   print();
}

