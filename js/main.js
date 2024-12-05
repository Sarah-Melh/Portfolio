// selectionner les éléments (liens et sections)
const dynamic = document.querySelectorAll('.dynamic');
const displayPage = document.querySelectorAll('.display-page');

// activer le lien cliqué
dynamic.forEach(data => {
    const nameLink = data.getAttribute('data-link')
    data.addEventListener('click',() => {
        displayPage.forEach(page => {
            if (nameLink == page.id) {
                page.style.display = 'block';
            }else {
                page.style.display = 'none'
            }
        });
    });
});