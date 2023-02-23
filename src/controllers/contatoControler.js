const Contato = require('../models/contatoModel');
const contatoModel = require('../models/contatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });

}

exports.register = async function(req, res) {
    try{
        const contato = new contatoModel(req.body);
        await contato.register();

        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('index'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    }catch(erro){
        res.render('../views/error');
    }
}

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('error');

    const contato = await Contato.buscaId(req.params.id);

    if(!contato) return res.render('error')

    res.render('contato', { contato });
}