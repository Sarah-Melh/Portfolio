// fonction de navigation dynamique ET pages indépendantes
function navLink() {
    function displayPage() {
        const Link = window.location.hash || '#welcome';
        $('.display-page').hide();
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

