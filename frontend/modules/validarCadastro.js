import validator from "validator";

export default class ValidarCadastro{
    constructor(query){
        this.form = document.querySelector(query);
    }

    init(){
        this.events();
    }

    events(){
        if(this.form !== null){
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                this.valida(e.target);
            });
        }  
    }

    valida(form){
        for(let erro of this.form.querySelectorAll('.div-erro')){
            erro.remove();
        }

        const inputEmail = form.querySelector('input[type="email"]');
        const inputPassword = form.querySelector('input[type="password"]');

        // campos vazios
        if(!inputEmail.value) this.erro(inputEmail, `Campo "E-mail" não pode estar vazio.`);
        if(!inputPassword.value) this.erro(inputPassword, `Campo "Senha" não pode estar vazio.`);

        // campo email 
        if(!validator.isEmail(inputEmail.value)) this.erro(inputEmail, `E-mail inválido.`);

        // campo senha
        if(inputPassword.value.length < 3 || inputPassword.value.length > 50){
            this.erro(inputPassword, `A senha deve conter entre 3 e 50 caracteres.`);
        }

        if(this.form.querySelectorAll('.div-erro').length < 1 ) form.submit();
        
    }

    erro(element, msg){
        const div = document.createElement('div');
        div.classList.add('div-erro');

        div.style.padding = "8px";
        div.style.backgroundColor = "tomato";
        div.style.marginTop = "15px";
        div.style.borderRadius = "5px";

        div.innerText = msg;
        element.insertAdjacentElement('afterend', div);
    }

}