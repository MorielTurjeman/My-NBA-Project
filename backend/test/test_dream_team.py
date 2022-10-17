from ..dream_team import Dream_team

player1 = {
    "firstname": "Isaac",
    "lastname": "Haas",
    "id": "1629036",
    "jersey": "44",
    "pos": "C",
    "birthday": "1995-10-02",
    "dreamteam": True
}


def test_add_player_to_dreamteam():
    dream_team = Dream_team()
    dream_team.add_player(player1)
    assert dream_team.get_dream_team() == [player1]


def test_delete_from_dreamteam():
    dream_team = Dream_team()
    dream_team.add_player(player1)
    dream_team.delete_player(player1['id'])
    assert dream_team.get_dream_team() == []


def test_double_add():
    dream_team = Dream_team()
    dream_team.add_player(player1)
    dream_team.add_player(player1)
    assert dream_team.get_dream_team() == [player1]
