class Model {
    async getPlayers(teamName: string, year: string, filterByBirthday: boolean) {
        try {
            const team = await $.get(`/${teamName}/${year}`)
            if (filterByBirthday) {
                const res = (<Player[]>team).filter(p => p.birthday !== "")
                return res

            }

            else return <Player[]>team


        }
        catch (err) {
            console.log(err)
            return []
        }

    }

    async addPlayerToDreamTeam(player: Player) {
        try {
            const addPlayer = await $.post('/dreamTeam', JSON.stringify(player))
            console.log(addPlayer)
        }
        catch (err) {
            console.log(err)
        }

    }

    async getPlayerStats(firstName: string, lastName: string) {
        try {
            const playerStats = await $.get(`/players/${lastName}/${firstName}`)
            return <playerStats>playerStats

        }
        catch (err) {
            console.log(err)
            return
        }
    }

    async getDreamTeam() {
        try {
            const dreamTeam = await $.get(`/dreamTeam`)
            return <Player[]>dreamTeam


        }
        catch (err) {
            console.log(err)
            return []
        }

    }

    async deleteFromDreamTeam(id: string) {

        await $.ajax({
            type: "DELETE",
            url: `/dreamTeam/${id}`,
            dataType: 'json',
            success: function (result) {
                console.log(result);
            },
            error: function (e) {
                console.log(e);
            }

        })

    }





}
