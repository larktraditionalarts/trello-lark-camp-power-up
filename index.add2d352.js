const $1e64527cd714425c$var$icons = {
    calenderWeek: {
        dark: "https://icons.getbootstrap.com/assets/icons/calendar-week-fill.svg",
        light: "https://icons.getbootstrap.com/assets/icons/calendar-week.svg"
    }
};
TrelloPowerUp.initialize({
    "card-buttons": (t)=>[],
    "board-buttons": (t)=>{
        console.log($1e64527cd714425c$var$icons);
        return [
            {
                // we can either provide a button that has a callback function
                icon: $1e64527cd714425c$var$icons.calendarWeek,
                text: "Shift Dates",
                callback: ()=>t.popup({
                        title: "Edit due dates",
                        url: "change-date-dialog.html"
                    }),
                condition: "signedIn"
            }
        ];
    }
});


//# sourceMappingURL=index.add2d352.js.map
