document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        });
    });

    //FECHAR O DROPDPWN AO CLICAR FORA
    document.addEventListener('click', function (e) {
        dropdownToggles.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
            if (!parent.contains(e.target)) {
                parent.classList.remove('active');
            }
        })
    })

});

const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('closeSearch');

searchToggle.addEventListener('click',  () =>{
    searchOverlay.style.display = 'flex'; 
    setTimeout(() => {
        searchOverlay.querySelector('.search-input').focus();
    }, 100);
});

//fechar o botao

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
})

//fechar cpm o ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        searchOverlay.style.display = 'none';
    }
});
