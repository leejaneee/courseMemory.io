let ul = document.querySelector('.temps1');

let lis = document.querySelectorAll('.temps');

// ul.innerHTML = ul.innerHTML + ul.innerHTML;

ul.innerHTML = ul.innerHTML + ul.innerHTML;

let spa = -2;

ul.style.width = lis[0].offsetwidth * lis.length + 'px';

function move() {
    if (ul.offsetLeft < -ul.offsetWidth / 2) {
        ul.style.left = '0';
    }
    if (ul.offsetLeft > 0) {
        ul.style.left = ul.offsetWidth / 2 + 'px';
    }
    ul.style.left = ul.offsetLeft + spa + 'px';

}

let timer = setInterval(move, 30);

ul.addEventListener('mouseover', function() {
    clearInterval(timer);
})
ul.addEventListener('mouseout', function() {
    timer = setInterval(move, 30);
})