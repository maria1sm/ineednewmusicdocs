document.addEventListener('DOMContentLoaded', function () {
    const diagrams = document.querySelectorAll('.diagram');

    diagrams.forEach(diagram => {
        diagram.addEventListener('click', function () {
            if (this.style.transform === 'scale(2)') {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(2)';
            }
        });
    });
});
