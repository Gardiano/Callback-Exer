
    function auth(login,senha){
        return function(callback){
            return callback(login,senha);
        }
    }

    logpw = auth(nomepw =[{
        nome: '021 inc.',
        senha: 1234
    }]);

    function auth(logpw) {

        if(logpw[0].nome === '021 inc.' && logpw[0].senha === 1234) {
            console.log('logado')
        } else {
            console.log('Login ou senha invalidos')
        }
    }