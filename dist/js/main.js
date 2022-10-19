// Side bar event
let sBar = document.querySelector('#sBar');
let opBar = document.querySelector('#opBar');
let clBar = document.querySelector('#clBar');

opBar.addEventListener('click', function () {
    sBar.classList.add('show');
    this.style.display = 'none';
    clBar.style.display = 'block';
});
clBar.addEventListener('click', function () {
    sBar.classList.remove('show');
    this.style.display = 'none';
    opBar.style.display = 'block';
    sBar.style.transition = '0.3s';
});