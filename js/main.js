// Navigation dynamique
function dynamicLinks() {
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
    
}
let currentPage = URL 
console.log(location.href)
if (currentPage = 'index.html') {
    dynamicLinks()
}

function navInde (){
    let classHide;
    let classKeep;
    let chosenLink;
    if (chosenLink = document.querySelector('#real-inde')) {
        classKeep = document.querySelector('#projects');
        classHide = document.querySelector('#welcome') && document.querySelector('#resume');
        classKeep.classList.add('.display-on');
        classHide.classList.add('.display-off');
        chosenLink.addEventListener('click',() => {
            classKeep.classModif.toggle('active');
            classHide.classModif.toggle('active');
        });
    }
}
if (currentPage = 'contact.html') {
    navInde()
}


