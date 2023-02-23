exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.checkCsrfError = (erro, req, res, next) => {
    if(erro){
       return res.render('../views/error'); 
    }
    
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', 'Você precisa logar na sua conta.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
}