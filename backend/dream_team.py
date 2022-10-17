

class Dream_team:
    def __init__(self) -> None:
        self.dream_team = []

    def add_player(self, player):
        if player in self.dream_team:
            return player

        self.dream_team.append(player)
        return player

    def get_dream_team(self):
        return self.dream_team

    def delete_player(self, id):
        print(self.dream_team)
        for i in range(len(self.dream_team)):
            if self.dream_team[i]['id'] == id:
                print("deleting")
                self.dream_team.remove(self.dream_team[i])
                break
