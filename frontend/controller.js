"use strict";
class Controller {
    constructor() {
        this.model = new Model();
        const getTeam = document.querySelector(".getTeam-btn");
        if (getTeam) {
            getTeam.addEventListener('click', (event) => this.getTeamPlayers());
        }
        const showDreamTeam = document.querySelector("#showDreamTeam");
        if (showDreamTeam) {
            showDreamTeam.addEventListener('click', (event) => this.getDreamTeam());
        }
        const deleteFromDreamTeam = document.querySelector(".btn-deleteFromDreamTeam");
        $("#results").on("click", ".addToDreamTeam", (event) => this.addToDreamTeam(event));
        $("#results").on("click", ".btn-stats", event => this.getPlayerStats(event));
        // const playerData = document.querySelector("#results")
        // if (playerData)
        //     playerData.addEventListener('click', event => this.addToDreamTeam(event))
        // const playerStats = document.querySelector()
    }
    getTeamPlayers() {
        const teamName = document.querySelector("#teamName");
        const year = document.querySelector("#year");
        const filterByBirthday = document.querySelector("#bday");
        this.model.getPlayers(teamName.value, year.value, filterByBirthday.checked).then(player => {
            renderPlayers(player);
        });
    }
    getPlayerStats(event) {
        const playerData = event.target.closest(".player").dataset;
        console.log(playerData);
        // console.log(((event.target as HTMLElement).closest(".player") as HTMLElement))
        // console.log(((event.target as HTMLElement).closest(".player") as HTMLElement).dataset)
        cleanModalContent();
        this.model.getPlayerStats(playerData.firstname, playerData.lastname).then(playerStats => {
            if (playerStats)
                renderPlayerStats(playerStats);
        });
    }
    addToDreamTeam(event) {
        const playerData = event.target.closest(".player").dataset;
        this.model.addPlayerToDreamTeam({
            id: playerData.id,
            firstname: playerData.firstname,
            lastname: playerData.lastname,
            jersey: playerData.jerseynumber,
            image: playerData.image,
            position: playerData.position,
            birthday: playerData.birthday
        });
        console.log(playerData);
    }
    getDreamTeam() {
        this.model.getDreamTeam().then(dteam => renderPlayers(dteam));
    }
}
const controller = new Controller();
