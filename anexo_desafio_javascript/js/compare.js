let carArr = [];

class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, carga, motor, potencia, volumeCacamba, roda, imagem) {
        this._modelo = modelo
        this._preco = preco
        this._alturaCacamba = alturaCacamba
        this._alturaVeiculo = alturaVeiculo
        this._alturaSolo = alturaSolo
        this._carga = carga
        this._motor = motor
        this._potencia = potencia
        this._volumeCacamba = volumeCacamba
        this._roda = roda
        this._imagem = imagem
     }
}

function SetCarToCompare(checkbox, car){
    if(checkbox.checked){
        carArr.push(car)
    }
}

function ShowCompare(){
    
    // exibe a div da tabela
    document.getElementById('compare').style.display = 'block';


}

function HideCompare(){
    // esconde a div da tabela
    document.getElementById('compare').style.display = 'none';

}