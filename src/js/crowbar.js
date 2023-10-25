// Define a player's inventory as an array
const inventory = [];

// Define a crowbar object
const crowbar = {
    name: "Crowbar",
    description: "A sturdy crowbar for opening crates and doors.",
    hidden: false, // Initially not hidden
};

// Function to add the crowbar to the inventory and hide it
function addToInventory(item) {
    if (!item.hidden) {
        console.log(`You've added ${item.name} to your inventory.`);
        inventory.push(item);
        item.hidden = true;
    } else {
        console.log(`You already have ${item.name} in your inventory.`);
    }
}

// Function to display the player's inventory
function showInventory() {
    if (inventory.length === 0) {
        console.log("Your inventory is empty.");
    } else {
        console.log("Your inventory contains:");
        for (let item of inventory) {
            console.log(`- ${item.name}: ${item.description}`);
        }
    }
}

// Initial state
showInventory();
addToInventory(crowbar);

// Now, the crowbar is in the inventory and hidden
showInventory();
