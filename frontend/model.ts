class Model {
    async getPlayers(teamName: string, year: string, filterByBirthday: boolean) {
        // const response = await axios.default.get<Player[]>(`http://localhost:8080/${teamName}/${year}`)
        const team = await $.get(`http://localhost:8080/${teamName}/${year}`)
        if (filterByBirthday) {
            const res = (<Player[]>team).filter(p => p.dateOfBirthUTC !== "")
            return res

        }

        else return <Player[]>team

    }

    async addPlayerToDreamTeam(player: Player) {

    }




}
