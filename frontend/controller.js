"use strict";
class Controller {
    constructor() {
        this.model = new Model();
        const getTeam = document.querySelector(".getTeam-btn");
        if (getTeam) {
            getTeam.addEventListener("click", (event) => {
                const teamName = document.querySelector("#teamName");
                const year = document.querySelector("#year");
                const filterByBirthday = document.querySelector("#bday");
                this.model.getPlayers(teamName.value, year.value, filterByBirthday.checked).then(player => { renderPlayer(player); });
            });
        }
    }
}
const controller = new Controller();
