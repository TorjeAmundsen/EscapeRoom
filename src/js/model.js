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
        inventory: [
            {
                id: 0,
                name: "pickaxe",
                img: "https://minecraftitemids.com/item/64/netherite_pickaxe.png",
                pickupMsg: "You picked up a pickaxe.",
            },
            {
                id: 1,
                name: "sword",
                img: "https://wiki.guildwars.com/images/f/fd/Long_Sword.png",
                content: "the soul of a great warrior",
                pickupMsg: "You picked up a sword.",
            },
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
            bucketPlaced: false,
        },
        eastWall: {
            combinationLock: {
                password: [0, 1, 1, 1],
                currentCombination: [0, 1, 1, 0],
                isUnlocked: false,
                isBroken: false,
            },
        },
        southWall: {
            //
        },
        westWall: {
            //
        },
    },
    items: [
        {
            id: 0,
            name: "Bucket",
            img: "",
            content: "Empty",
            pickupMsg: "You picked up an empty bucket.",
        },
        {
            id: 1,
            name: "Key",
            img: "",
            pickupMsg: "You found a key! Wonder where it goes?",
        },
    ],
};
