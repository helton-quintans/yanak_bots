//YanakBotFollow

let contador = 0;
let arr = document.querySelectorAll('.L3NKy');
arr.forEach((button, index) => {
    setTimeout(() => {
        if(!button.classList.contains('_8A5w5')){
            button.click();
            contador++;
            console.log('Yanak já seguiu ' + contador + 'pessoas');    
        } else {
            console.log('Yanak já segue este usuário.')
        };
    }, index * 10000)
})


