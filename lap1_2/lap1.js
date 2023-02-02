//lap1.1
const game = {
    team1: 'bayern munich',
    team2: 'borussia dortmund',
    players: [
        [
        'neuer',
        'pavard',
        'martinez',
        'alaba',
        'davies',
        'kimmich',
        'goretzaka',
        'Coman',
        'muller',
        'gnarby',
        'lewandowski',
    ],
    [
        'burki',
        'schulz',
        'hummels',
        'akanji',
        'hakimi',
        'weigl',
        'hazard',
        'brandt',
        'sancho',
        'gotze',
        'witsel',
    ],
],
score: '4:0',
score: ['lewandowski','gnarby','lewandowski','hummels'],
date: 'nov 9th,2013',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
},
};

const [players1, players2] = game.players ;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const tplayers1final = [... players1, 'thiago','coutinho', 'persicic'];

const {odds:{team1, x: draw, team2}} = game;
console.log (team1, draw, team2)

const printgoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);

}
// printgoals ('davies','muller','lewandowski','kimmich');
// printgoals ('davies','muller');
printgoals (...game.score);

team1 < team2 && console.log('team 1 is more likely to wwin');
team1 > team2 && console.log('team 2 is more likely to wwin');


// hết lap1.1

// lap2.1

for (const [i, player] of game.score.entries())
console.log(`goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds ) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)){
    const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(` odd of ${teamstr}  ${odd}`);
}

