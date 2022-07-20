let image = document.querySelector('#img')

function borderFunction() {
    if (image.style.border == 'none')
    image.style.border = 'solid red 2px';
    else image.style.border = 'none';
}
