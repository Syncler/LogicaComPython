

class Node {
    constructor(data, color) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Função de inserção
    insert(data) {
        if(this.root === null){
            this.root = new Node(data);
            this.root.color = 0; //raiz sempre preta
        }else {
            //Sera feita a chamada da recursiva que sera uma função auxiliar
            this.root = this.auxInsertRec(this.root, data)
        }

    }

    //Função auxiliar
    auxInsertRec(root, data){
        //Valida se o nó atual é nulo, cria um novo nó
        if (root== null){
            return  new Node(data, 1)
        }

        //Efetuando a comparação e as chamadas recusivas com a função auxInsertRec
        if(data < root.data) {
            root.left = this.auxInsertRec(root.left, data)
        }else if(data > data.root) {
            root.right = this.auxInsertRec(root.right, data)
        }else {
        
            return root
        }




        return root;
        
     }
    

    // Outras operações podem ser implementadas aqui
}
