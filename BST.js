class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
} 

class Tree {
    constructor(rootNode){
        this.rootNode = rootNode
    }
    push(num){
        const newNode = new Node(num)
        let placedNode = false
        let currentNode = this.rootNode
        while(true){
            if(num>currentNode.data){
                if(currentNode.right === null){
                    currentNode.right = newNode
                    break
                }
                else {
                    currentNode = currentNode.right
                }
            }
                else if(num<currentNode.data){
                if(currentNode.left === null) {
                    currentNode.left = newNode
                    break
                }
                else{
                    currentNode = currentNode.left
                }
                }
            
        }
    }
    
    find(num){
        const checkNode= (node,num) => {
            if(node.data===num){return true}
            else if(num>node.data) {
                if(node.right === null){return false}
                return checkNode(node.right,num)
            }
            else {
                if(node.left === null){return false}
                return checkNode(node.left,num)}
        }
        return checkNode(this.rootNode,num)
    }
    checkHeight(num){
            let height = 0
        const checkNode= (node,num) => {
            height++
            if(node.data===num){return height}
            else if(num>node.data) {
                if(node.right === null){return false}
                return checkNode(node.right,num)
            }
            else {
                if(node.left === null){return false}
                return checkNode(node.left,num)}
        }
        return checkNode(this.rootNode,num)
    }
    
    
}

let startNode = new Node(7)
let tree = new Tree(startNode)
tree.push(2)
tree.push(10)
tree.push(4)
tree.push(13)
tree.push(1)
tree.push(16)
console.log(tree)

console.log(tree.checkHeight(16))
