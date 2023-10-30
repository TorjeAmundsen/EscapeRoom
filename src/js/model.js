const app = document.getElementById("app");

// These helper constants at the top make the code more readable.
// It lets us work with numbers as data rather than using something like a string.

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

const RIGHT = 1;
const LEFT = -1;

const model = {
    app: {
        log: [
            { message: "this is an example message", timestamp: new Date() },
            { message: "this is another example message", timestamp: new Date() },
            {
                message:
                    "this is another example message, this one is pretty long just so i can see how the text wraps in the log container and how it handles new lines lalalala wee woo fii foo fum 123 123",
                timestamp: new Date(),
            },
        ],
        lastReadIndex: 0,
        scrollPosition: null,
    },
    player: {
        hasEscaped: false,
        canReachHigher: false,
        inventory: [
            {
                id: 0,
                name: "pickaxe",
                img: "https://minecraftitemids.com/item/64/netherite_pickaxe.png",
                pickupMsg: "You picked up a pickaxe.",
            },
            /* {
                id: 1,
                name: "Key",
                img: "https://oldschool.runescape.wiki/images/Brass_key_detail.png?82e6f",
                pickupMsg: "You found a key! Wonder where it goes?",
            }, */
        ],
        selectedItemIndex: null,
        facingDirection: EAST,
    },
    room: {
        global: {
            lightsOn: true,
            iceMelted: false,
            radioPlaying: false,
            radioLines: [
                "Exampels were important in the post-Perolific era",
                "Many creatures survived on exampels, and could therefore grow big",
                "Now exampels have run dry, and only 3 are left",
            ],
        },
        northWall: {
            //bucketPlaced: false,
            keyShown: true,
        },
        eastWall: {
            combinationLock: {
                password: [1, 0, 4, 5], //6969
                currentCombination: [1, 0, 4, 4],
                isUnlocked: false,
                isBroken: false,
                isOpen: false,
            },
        },
        southWall: {
            finalDoor: {
                isUnlocked: false,
                playerHasClicked: false,
            },
            redbullShown:
                '<img class="redbull" src="https://boozy.ph/cdn/shop/products/RedBull.png?v=1601541174" onclick="drinkRedBull()">',
            westWall: {
                //
            },
        },
    },
    items: [
        {
            id: 0,
            name: "pickaxe",
            img: "https://minecraftitemids.com/item/64/netherite_pickaxe.png",
            pickupMsg: "I picked up a pickaxe.",
        },
        {
            id: 1,
            name: "Key",
            img: "https://oldschool.runescape.wiki/images/Brass_key_detail.png?82e6f",
            pickupMsg: "I found a key! Wonder where it goes?",
        },
        {
            id: 2,
            name: "RedBull",
            img: "https://boozy.ph/cdn/shop/products/RedBull.png?v=1601541174",
            pickupMsg: "I picked up RedBull",
        },
    ],
};
