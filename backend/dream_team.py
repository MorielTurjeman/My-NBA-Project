from copyreg import constructor


class Dream_team:
    def __init__(self) -> None:
        self.dream_team = []

    def add_player(self, player):
        self.dream_team.append(player)
        return player

    def get_dream_team(self):
        return self.dream_team

    def delete_player(self, id):
        for i in range(len(self.dream_team), 0):
            if self.dream_team[id] == id:
                self.dream_team.remove[i]
                break
