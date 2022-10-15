"use strict";
class Controller {
    model: Model;


    constructor() {
        this.model = new Model()
        const getTeam = document.querySelector(".getTeam-btn")
        if (getTeam) {
            getTeam.addEventListener("click", (event) => {
                const teamName = document.querySelector("#teamName") as HTMLInputElement
                const year = document.querySelector("#year") as HTMLInputElement
                const filterByBirthday = document.querySelector("#bday") as HTMLInputElement
                this.model.getPlayers(teamName.value, year.value, filterByBirthday.checked).then(player => { renderPlayer(player) })
            })
        }
    }
}

const controller = new Controller();