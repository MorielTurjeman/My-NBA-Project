import json


with open('tests.json') as f:
    data = json.load(f)


# def teamName_to_id2(teamName):
#     for name in data:
#         if name == teamName:
#             return data[teamName]
#         else:
#             return None


# def filter_by_team(teamName, data):
#     team_id = teamName_to_id2(teamName)
#     players = []
#     for league in data['league']:
#         res = [{"firstName": player["firstName"], "lastName": player["lastName"]}
#                for player in league if team_id == player['teamId']]
#         players += res
#     return players
