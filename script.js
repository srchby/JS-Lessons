const buttons = document.querySelector('.btn')
const button = document.querySelector('#btn1')
const button1 = document.querySelector('#btn2')
const clicks = document.querySelector('#clicks')
const clicked = document.querySelector('#clicked')

//let year = 2024
let score = 0

//alert('hello world');
//console.error('error test');
//console.warn('warning test');
//console.log('hello world');
//console.log(year)

button1.addEventListener('click', () => (
    window.open('https://www.youtube.com/watch?v=hdI2bqOjy3c')
))


button.onclick = function() {
    score++
    document.querySelector('#clicked').innerText = `You have clicked ${score} times`
}

//console.log(typeof button)

//.forEach
//.remove
//buttons.remove()
//buttons.lastElementChild.textContent = 'test'