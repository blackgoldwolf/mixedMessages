// Mixed Messages project using fighting game characters.
function ranNum(num) {
    return Math.floor(Math.random() * num);
}

// classes of fighters and their arrays
const collectiveFighters = {
    streetFighter: ['Birde','Cammy','Nash','Chun-li','Dhalsim','FANG','Karin','Ken','Laura','M.Bison','Necalli','Mika','Rashid','Ryu','Vega','Zangief'],
    tekken: ['Alisa','Bryan','Devil Jin','Feng Wei','HeiHachi','Hworang','Jin','Kazuya','King','Chloe','Paul','Steve Fox','Yoshimitsu','Marshall Law'],
    powerRangers: ['Red Ranger','Yellow Ranger','Pink Ranger','RJ','Trini','Goldar','Mastodon Sentry','Trey Triforia','Zedd','Rita','Ryu','Chun-Li']
}
// initilizing our array for what fighters come up.
let ourFighters = [];


for(let fighter in collectiveFighters) {
    let option = ranNum(collectiveFighters[fighter].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(fighter) {
      case 'streetFighter':
        ourFighters.push(`You need to try: "${collectiveFighters[fighter][option]}".`)
        break
      case 'tekken':
        ourFighters.push(`Stop playing: "${collectiveFighters[fighter][option]}".`)
        break
      case 'powerRangers':
        ourFighters.push(`You should play: "${collectiveFighters[fighter][option]}".`)
        break
      default:
        ourFighters.push('There is not enough info.')
    }
  }

  function formatFighters(fighter) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = ourFighters.join('\n')
    console.log(formatted);
  }
  
  formatFighters(ourFighters);