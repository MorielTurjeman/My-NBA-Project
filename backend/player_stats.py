class Player_stats:
    def __init__(self, first_name, last_name, player_stats) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.games_played = player_stats["games_played"]
        self.minutes_per_game = player_stats["minutes_per_game"]
        self.points_per_game = player_stats["points_per_game"]
        self.rebounds_per_game = player_stats["rebounds_per_game"]
        self.player_efficiency_rating = player_stats["player_efficiency_rating"]
