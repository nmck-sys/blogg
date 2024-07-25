const bigGuy = document.querySelector('#bigGuy')

bigGuy.addEventListener('submit', function (event) {
    event.preventDefault();

    const authorOf = bigGuy.querySelector('#blog-author').value;
    const titleOf = bigGuy.querySelector('#blog-title').value;
    const contentOF = bigGuy.querySelector('#blog-content').value;
})