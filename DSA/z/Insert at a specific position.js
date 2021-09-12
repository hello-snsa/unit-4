const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
 function GetNode(data){
        return new LinkedListNode(data)
    }

// Complete the function below

function insertNodeAtPosition(head, position, data) {
 h=head;

 


 if(position<1)
 return "invalid postion";

if(position==1)
{
    var newNode = new LinkedListNode(data);
    newNode.nextNode=head;
    h=newNode;
}
else{
     
        while(position-- !=0)
        {
            if(position ==1)
            {
                newNode=GetNode(data);
                newNode.nextNode = head.nextNode;
                head.nextNode=newNode;
                break;
            }
            head=head.nextNode;

        }

        if(position!=1)
        {
            return("position out of range")
        }
        return h;

     }

        function printList(node)
        {
            while(node!=null)
            {
                console.log(node.data)

                node=node.nextNode;
                if(node!=null)
                console.log(",");
            }

        }

    
  




}
