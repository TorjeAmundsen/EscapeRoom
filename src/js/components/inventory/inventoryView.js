/* function createClickableItemHTML(item) {} */

function createItemImagesHTML() {
    let htmlString = "";
    const inventory = model.player.inventory;
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        if (i == model.player.selectedItemIndex) {
            htmlString += /*html*/ `
                <img src="${item.img}" class="selected-item-conteiner" alt="${item.name}">    
                `;
        } else {
            htmlString += /*html*/ `   
                <img src="${item.img}" class="inventory-images" alt="${item.name}" onclick="setSelectedItem(${i})">
            `;
        }
    }
    return /*html*/ `
        <div class="inventory-wrapper">
            ${htmlString}
        </div>
    `;
}
