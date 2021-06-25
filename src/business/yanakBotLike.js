const next1 = document.querySelector('a._65Bje.coreSpriteRightPaginationArrow');
let contador2 = 0;

function doLike() {
    const like_Btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button')

    if(like_Btn){
        like_Btn.click();
        contador2++;
        console.log(`Yanak já curtiu ${contador2} posts`);
    }
    next1.click();
}

(function loop(){
    setTimeout(()=>{
        doLike()
        loop()
    }, 10000)
}())

