// fonction d'affichage
function item(select) {
    return document.querySelector(select);
}
function displayHtml(select, text, color, fontFamily, fontSize, bgColor) {
    item(select).innerHTML = text;
    item(select).style.color = color;
    item(select).fontFamily = fontFamily;
    item(select).style.fontSize = fontSize;
    item(select).style.backgroundColor = bgColor;
}

// fonction de navigation dynamique ET pages indépendantes
function navLink() {
    function displayPage() {
        // trouver le chemin de l'ancre
        const Link = window.location.hash || '#welcome';
        // cacher toutes les sections
        $('.display-page').hide();
        // trouver le bon chemin
        switch (Link) {
            case '#welcome':
                $('#welcome').show();
                break;
            case '#projects':
                $('#projects').show();
                break;
            case '#resume':
                $('#resume').show();
                break;
            default: $('#welcome').show();
        }
    }
    // permet la navigation depuis les pages indépendantes
    window.addEventListener('DOMContentLoaded', displayPage);
    // permet la navigation dynamique
    window.addEventListener('hashchange', displayPage);
}
navLink();

function checkForm() {
    // e.preventDefault();
    // fonction de validation de l'email avec Regex
    const TestEmail = /^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$/;
    // récupération des données utilisateur
    const UserEmail = document.querySelector('#email').value.toLowerCase();
    const UserName = document.querySelector('#name').value.toLowerCase();
    const UserFirstname = document.querySelector('#firstname').value.toLowerCase();
    const UserMess = document.querySelector('#message').value.toLowerCase();
    let validAnswer = true;

    if ((UserName.length > 50) || UserName == '') {
        displayHtml('#error-name', 'Veuillez entrer votre nom, maximum 50 cacactères', 'red', 'Lemonada', '10px');
        validAnswer = false;
    }
    if (UserFirstname.length > 20 || UserFirstname == '') {
        displayHtml('#error-firstname', 'Veuillez entrer votre prénom, maximum 20 caractères', 'red', 'Lemonada', '10px');
        validAnswer = false;
    }
    if (!UserEmail.match(TestEmail) || UserEmail == '' ) {
        displayHtml('#error-email', 'Veuillez un email valide', 'red', 'Lemonada', '10px');
        validAnswer = false;
    }
    if (UserMess == '') {
        displayHtml('#error-message', 'Veuillez entrer un message', 'red', 'Lemonada', '10px');
        validAnswer = false;
    } 
    return validAnswer;
}

// modale
const Modal = document.querySelector('#modal-container');
const Contacted = document.getElementById('contact-btn');
// // fontion d'apparition de la modale
if (Contacted){
} Contacted.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkForm()) {
        Modal.classList.add('active');
    }
});

// bouton de validation du formulaire (ne fonctionne pas donc ce n'est qu'un effet
// le submit sera fait plus tard)
const ValidBtn = document.querySelector('#valid-btn');
if (ValidBtn) {
    ValidBtn.addEventListener('click', () => {
        document.querySelector('#form-contact').reset();
        Modal.classList.remove('active');
    })
}

// bouton d'annulation qui réinitialise le formulaire
const AnnulBtn = document.querySelector('#annul-btn');
if (AnnulBtn) {
    AnnulBtn.addEventListener('click', () => {
        document.querySelector('#form-contact').reset();
        Modal.classList.remove('active');
    })
}




