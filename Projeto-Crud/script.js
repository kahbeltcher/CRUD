const openModal = () => document.getElementById('modal').classList.add('active')

const itemFabricante = {
    nomeProduto:'Nescafé_Nestle',
    fabricante:'Nestle',
    categoria:'Café_soluvel',
    preco:'22,00'
}
//Evento
const criarProduto = (produtos) => {
    //pega o que tem em localstorage e
    // transforma em json depois  armazena na variavel
    const db_fabricante = JSON.parse (localStorage.getItem('db_fabricante'))
    
    db_fabricante.push (produtos);//acrescenta mais um
    localStorage.setItem('db_fabricante',JSON.stringify (db_fabricante)) //json.stringify transforma obj em string (key /valor)

}
document.getElementById('Salvar').addEventListener('click',openModal)

