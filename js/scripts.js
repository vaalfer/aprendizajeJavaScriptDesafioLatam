document.querySelector('#img').onclick = function () {

    if (this.style.border === 'none') {
        this.style.border = 'solid 2px red'
    } else {
        this.style.border = 'none'
    }
}

