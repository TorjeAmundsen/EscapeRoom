const model = {
    app: {
        log: [],
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
