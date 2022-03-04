const moreBtn = document.querySelector('.info .metadata .title .moreBtn');
const content = document.querySelector('.info .metadata .title .content');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    content.classList.toggle('clamp');
});