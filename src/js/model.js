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
            {
                message:
                    "...Why did I wake up here? Last thing I remember was eating at GET Academy in Larvik...",
                timestamp: new Date(),
            },
        ],
        hasUnreadMessages: false,
        scrollPosition: null,
        isScrolledToBottom: true,
    },
    player: {
        hasEscaped: false,
        canReachHigher: false,
        inventory: [
            /*             {
                id: 0,
                name: "pickaxe",
                img: "https://minecraftitemids.com/item/64/netherite_pickaxe.png",
                pickupMsg: "You picked up a pickaxe.",
            }, */
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
                currentCombination: [1, 1, 5, 2],
                isUnlocked: false,
                isBroken: false,
                isOpen: false,
            },
            runeTranslatorPickedUp: false,
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
        {
            id: 3,
            name: "Rune Translator",
            img: "src/img/sheet.png",
            pickupMsg: "I found a weird thing with weird symbols",
        },
    ],
};
