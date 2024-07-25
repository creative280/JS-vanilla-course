const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        console.log('Click en card');
    }
    if (e.target.classList.contains('titulo')) {
        console.log('Click en titulo');
    }
    if (e.target.classList.contains('precio')) {
        console.log('Click en precio');
    }
    if (e.target.classList.contains('categoria')) {
        console.log('Click en categoria');
    }
    if (e.target.tagName === 'IMG') {
        console.log('Click en imagen...');
    }

    console.log(e.target.tagName);
});
