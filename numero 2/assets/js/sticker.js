
function result() {
    let sticker1Cant = parseInt(document.querySelector("#sticker1Cant").value);
    let sticker2Cant = parseInt(document.querySelector("#sticker2Cant").value);
    let sticker3Cant = parseInt(document.querySelector("#sticker3Cant").value);
    let total = sticker1Cant + sticker2Cant + sticker3Cant;
    if (total <= 10) {
      document.querySelector("#stickerTotal").innerHTML = `Tienes ${total} stickers en la bolsa`;
    } else if (total > 10) {
      stickerTotal.innerHTML = "Llevas muchos!";
    }
    else {
        stickerTotal.innerHTML = "Error, debes ingresar un número";
    }
  }