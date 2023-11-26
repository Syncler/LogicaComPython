

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

       
        
        /**
         * Efetuando a comparação e as chamadas recusivas com a função auxInsertRec
         * os sinais  de menor(<) ou maior indica se o novo nó sera inserido a esquerda
         * ou a direita
         * */
        if(data < root.data) {
            root.left = this.auxInsertRec(root.left, data)
        }else if(data > data.root) {
            root.right = this.auxInsertRec(root.right, data)
        }else {
        
            return root
        }
        return root;

        //Teste para impressão da arvore em ASCII
        printTree(node = this.root, level = 0; prefix = 'Root') {
            if(node !== null){
                console.log(' '. repeat(level) + prefix + node.data + (node.color === 0 ? ' (B)' : '(R)'));
                this.printTree(node.left, level + 1, 'L: ');
                this.printTree(node.right, level + 1, 'R: ')
            }
        }
        
     }
    //Vê se funciona isso ae
    const tree = new RedBlackTree();

    tree.insert(10);
    tree.insert(5);
    tree.insert(18);
    tree.insert(22);
    tree.insert(7);
    tree.insert(9);

    //Será que vai sair a arvore em ASCII
    tree.printTree();
    // Outras operações podem ser implementadas aqui
}
