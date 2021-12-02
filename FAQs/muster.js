
const showMenu = document.getElementById('show');
const navlink = document.getElementById('links');

showMenu.addEventListener('click', () => {

    if (navlink.classList.contains('nav-links')) {
        navlink.classList.remove('nav-links');
        showMenu.style.display = 'none';
    }
})
let closeMenu = document.querySelector('#close');
closeMenu.onclick = function () {
    //instruction
    navlink.classList.add('nav-links');
    showMenu.style.display = 'block';

}
const reviewButton = document.getElementById('see-review');
reviewButton.style.cursor = 'pointer';

reviewButton.addEventListener('click', () => {
    const textReview = document.getElementById('review');
    if (textReview.classList.contains('d-none')) {
        textReview.classList.remove('d-none');

        //reviewButton.textContent = 'Close review';
    }
    else {
        textReview.classList.add('d-none');
        // reviewButton.textContent = 'see review';
    }
});
//using ONCLICK TO HIDE DOM
/*let openBtn = document.querySelector('#show');
let preview = document.querySelector('#links');
preview.style.display = 'none';


botn.onclick = function () {
    //instruction
    preview.style.display = 'none';
    openBtn.style.display = 'block';
    botn.style.display = 'none';
}*/
function instagram() {
    window.location = "http://www.muster.com";
}
function twitter() {
    window.location = "http://www.muster.com";
}