const playerSource = $("#player-template").html();

function renderPlayer(player: Player[]) {
    $("#results").empty();
    const template = Handlebars.compile(playerSource)
    console.log(template)
    const newHtml = template({ player })
    $("#results").append(newHtml)

}

