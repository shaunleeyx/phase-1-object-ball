gameObject = () => {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 56,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise,Purple",
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop Ben": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 33,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 34,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12

                }
            }
        }
    }
    return obj
}

numPointsScored = (input) => {
    //debugger;
    obj = gameObject()
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players

    for (let player in homeplayers) {
        if (player === input) return homeplayers[player]["points"]
    }
    for (let player in awayplayers) {
        if (player === input) return awayplayers[player]["points"]
    }

}

shoeSize = (input) => {
    obj = gameObject()
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players

    for (let player in homeplayers) {
        if (player === input) return homeplayers[player]["shoe"]
    }
    for (let player in awayplayers) {
        if (player === input) return awayplayers[player]["shoe"]
    }
}

teamColors = (teamname) => {
    obj = gameObject()
    if (obj["home"]["teamName"] === teamname) return obj["home"]["colors"]
    else if (obj["away"]["teamName"] === teamname) return obj["away"]["colors"]
    else console.log("can't find team")
}

teamNames = () => {
    obj = gameObject()
    let arr = []
    for (teams in obj) {
        arr.push(obj[teams]["teamName"])
    }
    return arr
}

playerStats = (name) => {
    obj = gameObject()
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players

    for (let player in homeplayers) {
        if (player === name) return homeplayers[player]
    }
    for (let player in awayplayers) {
        if (player === name) return awayplayers[player]
    }
}

bigShoeRebounds = () => {
    obj = gameObject()
    let shoetarget = () => {
        let biggestshoe = -1
        let bigshoename = ""
        let homeplayers = obj.home.players
        let awayplayers = obj.away.players
        let away = false;

        for (let player in homeplayers) {
            let shoenum = Number(homeplayers[player]["shoe"])
            if (shoenum > biggestshoe) {
                biggestshoe = shoenum
                bigshoename = player

            }
        }
        for (let player in awayplayers) {
            let shoenum = Number(awayplayers[player]["shoe"])
            if (shoenum > biggestshoe) {
                biggestshoe = shoenum
                bigshoename = player
                away = true;
            }
            console.log("bigshoename:", bigshoename)
        }
        if (away) {
            return awayplayers[bigshoename]["rebounds"]
        }
        else {
            return homeplayers[bigshoename]["rebounds"]
        }
    }
    return shoetarget();
}

mostPointsScored = () => {
    obj = gameObject();
    let maxscore = 0
    let maxplayer = ""
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players

    for (let player in homeplayers) {
        let points = Number(homeplayers[player]["points"])
        if (points > maxscore) {
            maxscore = points
            maxplayer = player
        }
    }
    for (let player in awayplayers) {
        let points = Number(awayplayers[player]["points"])
        if (points > maxscore) {
            maxscore = points
            maxplayer = player
        }
    }
    return maxplayer
}

winningTeam = () => {
    let obj = gameObject();
    let teamhomescore = 0
    let teamawayscore = 0
    let teamhomename = obj.home.teamName
    let teamawayname = obj.away.teamName
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players

    for (let player in homeplayers) {
        let points = Number(homeplayers[player]["points"])
        teamhomescore += points
    }
    for (let player in awayplayers) {
        let points = Number(awayplayers[player]["points"])
        teamawayscore += points
    }
    return (teamhomescore > teamawayscore) ? teamhomename : teamawayname
}

playerWithLongestName = () => {
    let obj = gameObject();
    let homeplayers = obj.home.players
    let awayplayers = obj.away.players
    let longestnamenum = 0
    let longestplayername = ""

    for (let player in homeplayers) {
        if(longestnamenum < player.length){
            longestnamenum = player.length
            longestplayername = player
        }
        }
        
    for (let player in awayplayers) {
        if(longestnamenum < player.length){
            longestnamenum = player.length
            longestplayername = player
        }



    }
    return longestplayername
}
