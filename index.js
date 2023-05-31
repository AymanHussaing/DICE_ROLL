let randomNumber1 = Math.floor(Math.random()*6)+1
let randomNumber2 = Math.floor(Math.random()*6)+1
leftImage = document.querySelector('.img1')
rightImage = document.querySelector('.img2')
leftImage.src = `./images/dice${randomNumber1}.png`
rightImage.src = `./images/dice${randomNumber2}.png`

if (randomNumber1 > randomNumber2){
   document.querySelector('h1').innerHTML = "🏳️ Player1 Wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player2 Wins 🏳️"
}
else {
    document.querySelector('h1').innerHTML = "--Draw--"
}