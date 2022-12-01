const WHITE_ICON = "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg";
const BLACK_ICON = "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg";
TrelloPowerUp.initialize({
    "card-buttons": function(t, options) {
        return [];
    },
    "board-buttons": function(t, opts) {
        return [
            {
                // we can either provide a button that has a callback function
                icon: {
                    dark: WHITE_ICON,
                    light: BLACK_ICON
                },
                text: "Callback",
                callback: (t)=>t.popup({
                        title: "Edit due dates",
                        url: "dialog.html"
                    }),
                condition: "always"
            }
        ];
    }
});

//# sourceMappingURL=index.483aeda2.js.map
