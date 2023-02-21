const LoginModel = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async function(req, res){
    const login = new LoginModel(req.body);

    try{
        await login.register();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Usuário cadastrado com sucesso');
        req.session.save(function(){
            return res.redirect('/login/index');
        });
    }catch(erro){
        console.log(erro);
        return res.send('./views/error');
    }
}