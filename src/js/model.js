const model = {
    app: {
        log: [
            { message: "this is an example message", timestamp: new Date() },
            { message: "this is another example message", timestamp: new Date() },
        ],
        scrollPosition: null,
    },
    player: {
        inventory: [],
        selectedItemIndex: null,
        facingDirection: "north",
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
