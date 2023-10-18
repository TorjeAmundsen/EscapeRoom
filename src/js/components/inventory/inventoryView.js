/* function createClickableItemHTML(item) {} */

function createItemImagesHTML() {
    let htmlString = "";
    const inventory = model.player.inventory;
    for (const item of inventory) {
        htmlString += /*html*/ `   
        <img src="${item.img}" alt="${item.name}">

        `; //will not show item img for some reason
    }
    return htmlString;
}
