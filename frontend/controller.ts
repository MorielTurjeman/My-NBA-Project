"use strict";



class Controller {
    model: Model;


    constructor() {
        this.model = new Model()
        const getTeam = document.querySelector(".getTeam-btn")
        if (getTeam) {
            getTeam.addEventListener('click', (event) => this.getTeamPlayers())
        }
        const showDreamTeam = document.querySelector("#showDreamTeam")
        if (showDreamTeam) {
            showDreamTeam.addEventListener('click', (event) => this.getDreamTeam())

        }
        const deleteFromDreamTeam = document.querySelector(".btn-deleteFromDreamTeam")



        $("#results").on("click", ".addToDreamTeam", (event) => this.addToDreamTeam(event))
        $("#results").on("click", ".btn-stats", event => this.getPlayerStats(event))


        // const playerData = document.querySelector("#results")
        // if (playerData)
        //     playerData.addEventListener('click', event => this.addToDreamTeam(event))

        // const playerStats = document.querySelector()

    }



    getTeamPlayers() {
        const teamName = document.querySelector("#teamName") as HTMLInputElement
        const year = document.querySelector("#year") as HTMLInputElement
        const filterByBirthday = document.querySelector("#bday") as HTMLInputElement
        this.model.getPlayers(teamName.value, year.value, filterByBirthday.checked).then(player => {
            renderPlayers(player)


        })
    }

    getPlayerStats(event: JQuery.ClickEvent) {
        const playerData = ((event.target as HTMLElement).closest(".player") as HTMLElement).dataset
        console.log(playerData)
        // console.log(((event.target as HTMLElement).closest(".player") as HTMLElement))
        // console.log(((event.target as HTMLElement).closest(".player") as HTMLElement).dataset)
        cleanModalContent()
        this.model.getPlayerStats(playerData.firstname!, playerData.lastname!).then(playerStats => {
            if (playerStats)
                renderPlayerStats(playerStats)
        })

    }


    addToDreamTeam(event: JQuery.ClickEvent) {
        const playerData = ((event.target as HTMLElement).closest(".player") as HTMLElement).dataset

        this.model.addPlayerToDreamTeam({
            id: playerData.id!,
            firstname: playerData.firstname!,
            lastname: playerData.lastname!,
            jersey: playerData.jerseynumber!,
            image: playerData.image!,
            position: playerData.position!,
            birthday: playerData.birthday!
        })
        console.log(playerData)

    }

    getDreamTeam() {
        this.model.getDreamTeam().then(dteam => renderPlayers(dteam))

    }




}

const controller = new Controller();