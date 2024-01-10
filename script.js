const button = document.querySelector('#btn1');
const button1 = document.querySelector('#btn2');
const button2 = document.querySelector('#btn3');
const clicks = document.querySelector('#clicks');
const clicked = document.querySelector('#clicked');
const body = document.getElementsByTagName('body')[0];
const myForm = document.querySelector('#my-form');
const text = document.querySelector('#text');
const warn = document.querySelector('.warn');
const items = document.querySelector('.items');

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


button.onclick = function () {
    score++
    document.querySelector('#clicked').innerText = `You have clicked ${score} times`
}

//console.log(typeof button)

//.forEach
//.remove
//buttons.remove()
//buttons.lastElementChild.textContent = 'test'

button2.onclick = function () {
    let isDefault = true;
    if (isDefault) {
        body.style.backgroundImage = 'url(https://i.redd.it/pcrhs6ph4am61.png)';
        isDefault = false;
    } else {
        body.style.backgroundImage = ''; // Removing inline background set by JavaScript, reverting to CSS default
        isDefault = true;
    }
}

/*
button2.addEventListener('click', (e) => {
    console.log('clicked')
});
*/

//preventDefault()
//.target   .className  .id
//classList .add
//mouseover mouseout

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (text.value === '') {
        warn.innerHTML = 'You gotta say something'
        setTimeout(() => warn.remove(), 3000);
    }
    else {
        console.log('sucess')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${text.value}`));
        items.appendChild(li);


        text.value = '';
    }
}