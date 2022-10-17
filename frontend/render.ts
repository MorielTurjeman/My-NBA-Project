const playerSource = $("#player-template").html();
const playerStatsSource = $("#player-stats-template").html();

function renderPlayers(player: Player[]) {
    $("#results").empty();
    const template = Handlebars.compile(playerSource)
    // console.log(template)
    const newHtml = template({ player })
    $("#results").append(newHtml)

}

function renderPlayerStats(playerStats: playerStats) {
    $(".modal-content").empty();
    console.log(playerStats)
    const template = Handlebars.compile(playerStatsSource)
    const newHtml = template(playerStats)
    $(".modal-content").append(newHtml)

}

function cleanModalContent() {
    $(".modal-content").empty();

}



