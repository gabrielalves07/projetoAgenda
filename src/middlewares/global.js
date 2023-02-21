exports.middlewareGlobal = (req, res, next) => {
    res.locals.varLocal = 'Este é o valor da variavel local';
    console.log('\nNo middleware Global...');
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