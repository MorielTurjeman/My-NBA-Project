"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    getPlayers(teamName, year, filterByBirthday) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield $.get(`/${teamName}/${year}`);
                if (filterByBirthday) {
                    const res = team.filter(p => p.birthday !== "");
                    return res;
                }
                else
                    return team;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    addPlayerToDreamTeam(player) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addPlayer = yield $.post('/dreamTeam', JSON.stringify(player));
                console.log(addPlayer);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getPlayerStats(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerStats = yield $.get(`/players/${lastName}/${firstName}`);
                return playerStats;
            }
            catch (err) {
                console.log(err);
                return;
            }
        });
    }
    getDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dreamTeam = yield $.get(`/dreamTeam`);
                return dreamTeam;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteFromDreamTeam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield $.ajax({
                type: "DELETE",
                url: `/dreamTeam/${id}`,
                dataType: 'json',
                success: function (result) {
                    console.log(result);
                },
                error: function (e) {
                    console.log(e);
                }
            });
        });
    }
}
