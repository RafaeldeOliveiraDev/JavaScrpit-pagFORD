const elementos = [{
    imagem: './img/imagem_1.jpg',
    text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
    url: 'lancamento.html'
},
{
    imagem: './img/imagem_2.jpg',
    text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
    url: 'lancamento.html'
},

{
    imagem: './img/imagem_3.jpg',
    text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
    url: 'lancamento.html'
}

]

class Carousel {
    constructor(elementos) {
        this._elementos = elementos
        this._posicao = 0
}
    static Start(){
        const img = document.getElementById('ranger-img')

        setInterval(()=>{img.setAttribute("src", this._elementos[this._posicao])}, 2000)

    }
}






















/*const elementos = [
    { 
        imagem: './img/imagem_1.jpg',
        text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
        url: 'lancamento.html'  
    },
    { 
        imagem: './img/imagem_2.jpg',
        text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
        url: 'lancamento.html'
     },
    { 
        imagem: './img/imagem_3.jpg',
        text: 'Essa é a nova Ford Ranger 2022. Verifique as Novidades.',
        url: 'lancamento.html'
    }
]

class Carousel {
    constructor(elementos){
        this._elementos = elementos
        this._posicao = 0;
    }
    
    Start(){
        const img = document.getElementById('ranger-img');
        
        setInterval(()=>{ 
            
            img.setAttribute("src", this._elementos[this._posicao].imagem) 
            this.Next()
        
        }, 2000)
        
    }

    Next(){
        if(this._posicao === elementos.length - 1){
            this._posicao = 0;
        }else{
            this._posicao++
        }
    }

}

const carouselCarros = new Carousel(elementos)
carouselCarros.Start()
 */