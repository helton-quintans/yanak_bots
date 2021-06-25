//YanakBotUnfollow

let contador1 = 0;
let arr1 = document.querySelectorAll('._8A5w5');
arr1.forEach((button, index) => {
    setTimeout(() => {
        if(button.innerText == 'Seguindo'){
            button.click();
            document.querySelectorAll('.-Cab_').forEach((button, index) =>{
                if(button.innerText == 'Deixar de seguir'){
                    button.click();
                    contador1++;
                    console.log(`Yanak já deixou de seguir' ${contador1}usuários`)
                }
            })            
        }
    }, index * 10000)
})