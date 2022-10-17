import asyncio
import json
from urllib import request
from fastapi import FastAPI
import uvicorn
from fastapi import Request
from player_stats import Player_stats
from dream_team import Dream_team
from team_id import teams_id
import requests
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
dream_team = Dream_team()

app.mount("/static", StaticFiles(directory="frontend"), name="static")


@app.get('/sanity')
async def get_sanity():
    return "Server is up and running smoothly"


def teamName_to_id(teamName):
    for name in teams_id:
        if name == teamName:
            return teams_id[teamName]
    else:
        return None


def filter_by_team(teamName, data):
    team_id = teamName_to_id(teamName)
    players = []
    for league in data['league']:
        res = [
            {
                "id": player["personId"],
                "lastname": player["lastName"],
                "firstname": player["firstName"],
                "image": f"https://nba-players.herokuapp.com/players/{player['lastName'].lower()}/{player['firstName'].lower()}",
                "jersey": player['jersey'],
                "position": player['pos'],
                "birthday": player["dateOfBirthUTC"],
                "dreamteam":dream_team.isInDreamTeam(player['personId'])
            }
            for player in data['league'][league] if team_id == player['teamId']
        ]

        players += res
    return players


@ app.get('/{teamName}/{year}/')
async def get_teams_by_year(teamName, year):
    res = requests.get(
        'http://data.nba.net/10s/prod/v1/{}/players.json'.format(year))
    return filter_by_team(teamName, res.json())


@app.get('/dreamTeam')
async def get_dream_team():
    global dream_team
    return dream_team.get_dream_team()


@app.post('/dreamTeam')
async def add_to_dream_team(request: Request):
    global dream_team
    res = await request.json()
    return dream_team.add_player(res)


@app.delete('/dreamTeam/{id}')
async def delete_player(id):
    global dream_team
    dream_team.delete_player(id)


@app.get('/players/{lastname}/{firstname}')
async def get_player_stats(lastname, firstname):
    res = requests.get(
        f"https://nba-players.herokuapp.com/players-stats/{lastname}/{firstname}")
    stats = Player_stats(firstname, lastname, res.json())
    print(stats)
    return stats

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)


# asyncio.run(get_teams_by_year("lakers", 2018))
