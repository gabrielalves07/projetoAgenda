const LoginModel = require('../models/loginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.redirect('/');
    return res.render('login');
}

exports.register = async function(req, res){
    try{
        const login = new LoginModel(req.body);
    
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
};

exports.login = async function(req, res){
    try{
        const login = new LoginModel(req.body);

        await login.logar();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Você está logado');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('/');
        });
    }catch(erro){
        console.log(erro);
        return res.render('../views/error');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}