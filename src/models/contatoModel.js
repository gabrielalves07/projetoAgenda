const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
});

const contatoModel = mongoose.model('contato', contatoSchema);

class Contato {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    static async buscaId(id){
        if(typeof id !== 'string') return;
        const user = await contatoModel.findById(id);
        return user;
    }

    async register(){
        this.valida();

        if(this.errors.length > 0) return;

        this.contato = await contatoModel.create(this.body);
    }

    valida(){
        this.cleanUp();

        // O e-mail precisa ser válido
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');

        if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');

        if(!this.body.email && !this.body.telefone) {
            this.errors.push('E-mail ou Telefone devem ser preenchidos.')
        }
    }

    cleanUp(){
        for(const key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        };
    }
}

module.exports = Contato;