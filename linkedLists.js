const nodeFactory = (value, next = null) =>{
    return {value, next}
}


function recosntructList(list, index){
    if(index == 0) {
        list.next = null
        return list
    }

    const restOfList = {value:list.value,next:recosntructList(list.next, index - 1)}
    
    return restOfList
}

const linkedList = () =>{
    return {
        listAppend(node){
            if(!this.headNode){
                this.headNode = node
                this.tailNode = node
            }
            else{
                this.tailNode.next = node
                this.tailNode = node
            }
        

        },
        listPrepend(node){
            if(!this.headNode){
                this.headNode = node
                this.tailNode = node
            }
            else{
                node.next = this.headNode
                this.headNode = node    
            }        

        },
        returnSize(){
            let size = 0
            let firstElement = this.headNode
        
            while(firstElement){
                firstElement = firstElement.next
                size++
            }
        
            return size        

        },
        findNode(index){
            let firstElement = this.headNode
            for (let i = 0; i < index; i++) {
                firstElement = firstElement.next
            }
        
            return firstElement

        },
        popNode(firstNode){

            if(firstNode.next == null){
                delete this.headNode
                return 
            }

            if(firstNode.next == this.tailNode){
                firstNode.next = null
                return
            }
            this.popNode(firstNode.next)
        
        },
        containsNode(value){
            let firstElement = this.headNode

            while(firstElement != null){
                if(firstElement.value == value){
                    return true
                }
                firstElement = firstElement.next
            }
            return false
        
        },
        findIndex(value){
            let firstElement = this.headNode

            let i = 0;
        
            while(firstElement != null){
                if(firstElement.value == value){
                    return i
                }
                firstElement = firstElement.next
                i++
            }
            return null
        
        },
        listToString(){
            let stringifiedList = ''
            let firstElement = this.headNode
        
            while(firstElement != null){
                stringifiedList += `( ${firstElement.value} ) => `
                firstElement = firstElement.next
            }
        
            stringifiedList += 'null'

            return stringifiedList
        
        },
        insertElement(value, index){
            const insertedNode = nodeFactory(value)
            let head = this.headNode
            let i = 0
            if(index != 0){
                while(i < index - 1){
                    head = head.next
                    i++
                }
                insertedNode.next = head.next
                head.next = insertedNode
            }
            else{
                this.headNode = {value: insertedNode.value, next:this.headNode}
            }
        
        },
        removeElement(index){
            let head = this.headNode
            let i = 0
            if(index != 0){
                while(i < index - 1){
                    head = head.next
                    i++
                }
                head.next = head.next.next
            }
            else{
                this.headNode = this.headNode.next
            }
        }
        

    }
}

const myLinkedList = linkedList()

const nodeOne = nodeFactory(123)
const nodeTwo = nodeFactory(10023)
const nodeThree = nodeFactory(345)
const nodeFour = nodeFactory(82)
const nodeFive = nodeFactory(221)

myLinkedList.listAppend(nodeOne)
myLinkedList.listAppend(nodeTwo)
myLinkedList.listAppend(nodeThree)
myLinkedList.listAppend(nodeFour)
myLinkedList.listAppend(nodeFive)

myLinkedList.insertElement(1212, 4)

console.log(myLinkedList.listToString())