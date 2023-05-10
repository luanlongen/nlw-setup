const form = document.querySelector("#form-habits") //colocar o formulário como uma variável form
const nlwSetup = new NLWSetup(form) //Iniciando a biblioteca, Ele está criando um novo objeto, nlwSetup
const button = document.querySelector('header button')

button.addEventListener('click', add)//Adiciona algo que vai ficar ouvindo um evento, sempre que ouvir "click" no boutton ele executa a função add
form.addEventListener("change", save)//sempre que ouver alteração no formulário vai rodar a função save
// Existem vários tipos de eventos, foram usados o de click e de change que é quando ocorre uma alteração no objeto escolhido


function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0,-5) // coloca data DD/MM por meio da função Date() para variável today para usar a função dayExists, toLocaleDateString é pra mudar para data estilo brasileira, e slice é pra selecionar apenas DD/MM e recortar o ano fora

    const dayExists = nlwSetup.dayExists(today) //função para verificar se o dia a ser adicionado já não existe

    if(dayExists){ //if para verificar se já existe o dia
        alert("Dia já incluso")
        return //se o if for verdadeiro a função será executada e ao chegar no return ela para a função add para não chegar na .addDay addDay
    }

    alert("Adicionado com sucesso")
    nlwSetup.addDay(today) //addDay é um method da biblioteca nlwSetup, DD/MM
}

function save(){ //criando a função para salvar as alterações do formuláro no localstorage do browser
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) // salvando alterações com nome NLWSetup@habits, o JSON stringfy transforma os dados do objeto nlwSetuo.date em uma string
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}//JSON PARSE TRANSFORMA UMA STRING EM OBJETO DE VOLTA
nlwSetup.setData(data)    //atribuindo o valor de data para o documento nlwSetup, 'data' é uma constante como descrito anteriormente, que possui arrays, que são as datas de mês e dia
nlwSetup.load()  //ligando a biblioteca pela função load que está dentro do objeto nlwSetup

//const data = { //        ISSO É SÓ UM EXEMPLO DO QUE ACONTECE QUANDO O USUÁRIO CLICA NO BOTAO DE "+", FOI CRIADO MANUALMENTE PARA SABER COMO FUNCIONA
//    run: ['01-01','01-02', '01-06', '01-07', '01-08'],   //criando o objeto run, um array "[]" é um agrupamento de dados
//    takePills:["01-03"], //
//    journal:["01-02","01-06"], //
//}//



























//Aprendendo JS
//const mensagem = "Hello" //Definindo a constantem mensagem como Hello!  
// const nunca pode mudar o valor dela no programa, let pode


//Criando um objeto
//const celular = {
  //  cor: 'preto', //propriedade cor
    //ligar: function() {
      //  const mensagem = "Ligando"
        //alert(mensagem)
 //   } //propriedade com método (funcionalidade)
//}

//utilizando o objeto
//celular.cor //preto 
//celular.ligar() //executa a função

//document.querySelector("input").click()  //pesquisa pelo querySelector o documento input e clica ele
// tudo antes de um "." é um objeto

// document // objeto que existe em todo navegador
// querySelector('a') //seleciona a tag a
// .click() // da ordem de clicar na tag a