const button = document.getElementById('btn')
const button1 = document.getElementById('btn1')
const clicks = document.getElementById('clicks')
const clicked = document.getElementById('clicked')

//let year = 2024
let score = 0

//alert('hello world');
//console.error('error test');
//console.warn('warning test');
//console.log('hello world');
//console.log(year)

button.addEventListener('click', () => (
    window.open('https://www.youtube.com/watch?v=hdI2bqOjy3c')
))


button1.onclick = function() {
    score++
    console.log(score)
    document.querySelector('#clicks').innerText = score
    document.querySelector('#clicked').innerText = `You have clicked ${score} times`
}

//console.log(typeof button)
