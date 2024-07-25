document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.list')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const author = document.querySelector('#blog-author').value;
        const title = document.querySelector('#blog-title').value;
        const content = document.querySelector('#blog-content').value;

        // Save the data above into localStorage
        localStorage.setItem('blogAuthor',author);
        localStorage.setItem('blogTitle',title);
        localStorage.setItem('blogContent',content);

        // redirect to blog.html
        window.location.href = 'blog.html'
    });
});
