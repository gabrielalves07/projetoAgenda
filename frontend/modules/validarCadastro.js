export default class Validar{
    constructor(query){
        this.form = document.querySelector(query);
        this.inputs = this.form.querySelectorAll('input');
    }

    valida(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
        });
    }

}