const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
// Click em seguidores

// document.querySelector('ul.jSC57._6xe7A > div').children[0].children[0].children[0].children[1].children[0].innerText

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector("li:nth-child(2) > a");
let contador = 0;
let arr = document.querySelectorAll(".L3NKy");
for (let index = 0; index < arr.length; index++) {
  const button = arr[index];
  let randomTime = getRandomIntInclusive(10000, 60000);
  console.log(
    `Esperando ${randomTime / 1000} tempo até seguir o proximo usuário`
  );
  if (!button.classList.contains("_8A5w5")) {
    button.click();
    contador++;
    console.log("Yanak já seguiu " + contador + "pessoas");
  } else {
    console.log("Yanak já segue este usuário.");
  }
  await wait(randomTime);
}
