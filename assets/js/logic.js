document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.list')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const author = document.querySelector('#blog-author').value;
        const title = document.querySelector('#blog-title').value;
        const content = document.querySelector('#blog-content').value;

        localStorage.setItem('blogAuthor',author);
        localStorage.setItem('blogTitle',title);
        localStorage.setItem('blogContent',content);


        document.querySelectorAll('.error').forEach(el => el.remove());


let isValid = true;

        if (!author) {
            showError('#blog-author', 'Author is required');
            isValid = false;
        }

        if (!title) {
            showError('#blog-title', 'Title is required');
            isValid = false;
        }

        if (!content) {
            showError('#blog-content', 'Content is required');
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem('blogAuthor', author);
            localStorage.setItem('blogTitle', title);
            localStorage.setItem('blogContent', content);

            window.location.href = 'blog.html';
        }
    });

    function showError(selector, message) {
        const inputElement = document.querySelector(selector);
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = 'red';
        errorElement.textContent = message;
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
});