let carArr = [];

class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, carga, motor, potencia, volumeCacamba, roda, imagem) {
        this.modelo = modelo
        this.preco = preco
        this.alturaCacamba = alturaCacamba
        this.alturaVeiculo = alturaVeiculo
        this.alturaSolo = alturaSolo
        this.carga = carga
        this.motor = motor
        this.potencia = potencia
        this.volumeCacamba = volumeCacamba
        this.roda = roda
        this.imagem = imagem
     }
}

function SetCarToCompare(input, car){
    // utilizada para adicionar ou remover pessoas para a lista

    if(input.checked == false){
       
        const carIndex = GetCarrArrPosition(car);
        carArr.splice(carIndex, 1); //a partir de carIndex para frente a posição 1 referenciada

        return;
    }

    if(carArr.length > 1){
        input.checked = false
        alert("Não pode selecionar mais de dois carros");
        return;
        //se a condição for verdadeira, pega o input, desmarca o input e joga o alerta
    }

    carArr.push(car)
}

function GetCarrArrPosition(car){
    // pega qual posição o elemento está na lista. Se não tiver, retorna -1
    for(let i = 0; i < carArr.length; i++){
        if(carArr[i].modelo === car.modelo){
            return i;
        }
    } 
       return -1; 

}

function ShowCompare(){
    console.log(carArr.length); 
    if(carArr.length !== 2){
        alert("O número de carros tem que ser 2.");
        return;
    }

    UpdateCompareTable();    
    
    // exibe a div compare da tabela
    document.getElementById('compare').style.display = 'block';


}

function UpdateCompareTable(){
    //refatorar esse código ->

    console.log(carArr[0].imagem)
    
    // atualiza a imagem na tabela
    document.getElementById('compare_image_0').src = carArr[0].imagem
    document.getElementById('compare_image_1').src = carArr[1].imagem

    console.log(document.getElementById('compare_image_0'))

    document.getElementById('compare_modelo_0').textContent = carArr[0].modelo
    document.getElementById('compare_modelo_1').textContent = carArr[1].modelo
    // Caçamba
    document.getElementById('compare_alturacacamba_0').textContent = carArr[0].alturaCacamba;
    document.getElementById('compare_alturacacamba_1').textContent = carArr[1].alturaCacamba; 
    // altura veiculo
    document.getElementById('compare_alturaveiculo_0').textContent = carArr[0].alturaVeiculo;
    document.getElementById('compare_alturaveiculo_1').textContent = carArr[1].alturaVeiculo;
    // altura do solo
    document.getElementById('compare_alturasolo_0').textContent = carArr[0].alturaSolo;
    document.getElementById('compare_alturasolo_1').textContent = carArr[1].alturaSolo; 
    // 
    document.getElementById('compare_capacidadecarga_0').textContent = carArr[0].carga;
    document.getElementById('compare_capacidadecarga_1').textContent = carArr[1].carga;

    document.getElementById('compare_motor_0').textContent = carArr[0].motor;
    document.getElementById('compare_motor_1').textContent = carArr[1].motor;

    document.getElementById('compare_potencia_0').textContent = carArr[0].potencia;
    document.getElementById('compare_potencia_1').textContent = carArr[1].potencia;

    document.getElementById('compare_volumecacamba_0').textContent = carArr[0].volumeCacamba;
    document.getElementById('compare_volumecacamba_1').textContent = carArr[1].volumeCacamba;

    document.getElementById('compare_roda_0').textContent = carArr[0].roda;
    document.getElementById('compare_roda_1').textContent = carArr[1].roda;
   
    document.getElementById('compare_preco_0').textContent = carArr[0].preco;
    document.getElementById('compare_preco_1').textContent = carArr[1].preco;

}


function HideCompare(){
    // esconde a div compare da tabela
    // tratar com o dialog ou armazenar
    document.getElementById('compare').style.display = 'none';

}