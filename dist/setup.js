"use strict";
const rulesResData = {
    goals: {
        blue_lakeA: '<p>Have 2 Exits connected through a Lake.</p>',
        blue_lakeB: '<p>Have 4 Lake spaces in the same row or column.</p>',
        blue_lakeC: '<p>Have a Lake with no straight edges.</p>',
        blue_riverA: '<p>Have a Route that crosses over the same River twice.</p>',
        blue_riverB: '<p>Have 3 Stations orthogonally adjacent to River spaces.</p>',
        blue_riverC: '<p>Connect 2 Exits with a Route that goes over a River.</p>',
        classic_defaultA: '<p>Draw anything in at least 5 of the Central Spaces of your board (the spaces don’t need to be connected to each other, just in the Central Area).</p>',
        classic_defaultB: '<p>Activate 3 Villages by drawing a Station inside their spaces.</p>',
        classic_defaultC: '<p>Draw anything in all of the spaces of a single row or column of your board (the spaces don’t need to be connected to each other, just in the same row/column).</p>',
        classic_defaultD: '<p>Draw anything in at least 3 of the corner spaces of your board.</p>',
        classic_defaultE: '<p>Draw anything in all of the spaces of a 3x3 area on your board (the spaces don’t need to be connected to each other, just in the same 3x3 area).</p>',
        classic_defaultF: '<p>Create a circular path that starts and ends at the same point.</p>',
        classic_defaultG: '<p>Connect at least 4 Exits to the same network.</p>',
        classic_defaultH: '<p>Connect at least 4 Stations to the same network.</p>',
        classic_defaultI: '<p>Draw a Highway with a length of at least 6.</p>',
        classic_defaultJ: '<p>Draw a Railway with a length of at least 6.</p>',
        classic_defaultK: '<p>Connect at least 2 Exits on the opposite sides of the board to each other.</p>',
        classic_defaultL: '<p>Connect at least 2 Exits in the middle of their side of the board to each other.</p>',
        cthulu_portalA: '<p>Have 3 Portals on spaces with a University.</p>',
        cthulu_portalB: '<p>Create a Network that loops through matching Portals.</p>',
        cthulu_portalC: '<p>Have three orthogonally adjacent Portals.</p>',
        green_forestA: '<p>Draw at least 5 separate Forests (they can be merged after you achieve this goal.</p>',
        green_forestB: '<p>Draw an uninterrupted streak of 4 diagonally adjacent spaces with trees inside</p>',
        green_forestC: '<p>Draw Trees in at least 4 spaces adjacent to Exits</p>',
        green_trailsA: '<p>Draw Trails in 5 adjacent spaces on the same row or column (the spaces don’t need to be connected to each other, just adjacent).</p>',
        green_trailsB: '<p>Connect at least 3 Trails to the same Station.</p>',
        green_trailsC: '<p>Draw Trails in 5 spaces in the Central Area of your board (the spaces don’t need to be connected to each other, just in the Central Area).</p>',
        red_lavaA: '<p>Have a Route looping around a Volcano.</p>',
        red_lavaB: '<p>Connect 2 Exits through a space that has Lava in it.</p>',
        red_lavaC: '<p>Have Lava destroy 1 of your Routes.</p>',
        red_meteorA: '<p>Have a Crater with Routes on all 4 adjacent spaces.</p>',
        red_meteorB: '<p>Connect 2 Craters with a Route.</p>',
        red_meteorC: '<p>Have a Route destroyed by a Crater.</p>',
        yellow_canyonA: '<p>Spend at least 6 Bridge points.</p>',
        yellow_canyonB: '<p>Cross the same Canyon 3 times with the same path.</p>',
        yellow_canyonC: '<p>Draw a Canyon with both ends connected to the edge of the board that also goes through the Central Area of your board.</p>',
        yellow_desertA: '<p>Draw Cacti in all of the spaces of a 2x2 area on your board (the spaces don’t need to be connected to each other, just in the same 2x2 area).</p>',
        yellow_desertB: '<p>Draw Cacti in at least 4 adjacent spaces in a single row or column of your board (the spaces don’t need to be connected to each other, just in the same row/column).</p>',
        yellow_desertC: '<p>Connect at least 3 spaces containing an Oasis to the same network.</p>',
    },
    expansions: {
        none: '<p></p>',
        airline: '<h1>Airline Expansion:</h3>' +
            '<p>Airways are a third kind of route. They can’t be used to connect Exits, but they can be connected to each other to create Airway Networks, which can be connected to your regular Routes by building Airports.</p>' +
            '<p>At the end of the game, you will get points for your Longest Airway, but you will lose points for your open-ended Airways and for unconnected Airports. When you draw Routes, you do not have to draw any of the Airline dice, if you don’t want to (you still have to use all 4 Route dice).</p>' +
            '<p>The Airline dice you draw don’t have to be connected to preexisting Routes and/or Airline dice results. You can’t connect Airway Routes with other kinds of Routes (nor Exits). When you draw an Airport, it automatically connects to any preexisting Route with an open end leading into the space with the Airport (figs. 1b and 2b).</p>' +
            '<p>When you draw any Route with an open end leading into a space with an Airport, immediately connect that Route with the Airport (fig. 3b). Instead of using one of your Special Routes, you may delete it to draw an Airport in any empty space (you may also do this when activating your third University).</p>' +
            '<p>Networks connected to the same Airway Network (via Airports and Airway Routes) are also connected to each other. Airports do not interrupt your Longest Highway and/or your Longest Railway.</p>' +
            '<p>At the end of the game, you get 2 points for each space of your Longest Airway, but you must start counting from an edge of your board or from an Airport, and also stop counting at an edge or Airport. At the end of the game you lose 2 points for each openended Airway Route and you lose 4 points for each Airport that is not connected to any Airway Route.</p>',
        'alien-farmer': '<h1>Alien Farmer Expansion:</h3>' +
            '<p>Farming—and especially wool production—has gotten a lot easier after the introduction of “abduction rays”. Manage your farms and UFOs and maximize your output of wool.</p>' +
            '<p>UFOs can take wool from Sheep that are in the same row and/or column. More than one UFO can take wool from the same Sheep farm. Alien Farmer dice you draw don’t have to be connected to any preexisting Routes. When drawing a Special Route you may instead place a UFO on your board (also when activating your third University).</p>' +
            '<p>UFOs occupy 1 whole space. At the end of the game, you gain 2 points for each Sheep that a UFO can reach. UFOs can only reach Sheep that are in the same column and/or row. A UFO can score a Sheep that was already scored by another UFO.</p>',
        canyon: '<h1>Canyon Expansion:</h3>' +
            '<p>Mix your transportation network with majestic canyons! Your goal is to create the longest Canyon you can, to score bonus points.</p>' +
            '<p>Canyons run along the edges of your spaces, and can only be drawn in pre-determined shapes. To make your routes cross a canyon stretch, you will have to spend “bridge points”. When you draw Routes, you do not have to draw any of the Canyon dice if you don’t want to (you still have to use all 4 Route dice).</p>' +
            '<p>The Canyon dice you draw must be connected to an edge of the board and/or the open end of a preexisting Canyon. Note: Canyons cannot connect to the middle of a preexisting Canyon, i.e., Canyons cannot branch.</p>' +
            '<p>Each Canyon die shows a pattern made by 1 or more “segments”. When you draw a Canyon die, you must represent the pattern in its entirety, if you can’t make it fit on your board, you can’t draw it. Note: You can freely reverse the pattern you see on the die.</p>' +
            '<p>If you want a Route to cross (or even touch) a Canyon, you must spend 1 “Bridge point” to create a bridge over the canyon, i.e., to open a gap in the Canyon to make the Route fit. You have a total of 12 Bridge points, represented by the top row of the Network Values table; when you spend one, mark a space.</p>' +
            '<p>Once you’ve marked all 12, you can’t create any more bridges. Canyons with open ends do not count as Errors at the end of the game. At the end of the game, you gain 1 point for each segment of your Longest Canyon. You also gain 2 points for each individual Canyon with both ends connected to the edge of the board.</p>',
        'city-builder': '<h1>City Builder Expansion:</h3>' +
            '<p>Gain money by pleasing investors and spend it to create futuristic buildings in your county. Investors are going to evaluate your conduct and give you money according to how well you followed their vision. You will then use that money to build your empire.</p>' +
            '<p>Each round, you will be evaluated on the basis of the Income die and you’ll have the opportunity to build as many Buildings of the type displayed on the Building die as you can afford. At the end of the game, you will gain points according to the number of Towers.</p>' +
            '<p>Buildings can also remove Errors from your board: if a Route ends facing into a Building it will not be considered an Error. After drawing all your normal Routes, you gain money based on the Income die.</p>' +
            '<p>The Income die can show one of the following faces: Income die Building die When you play with an Expansion , you must roll the respective Expansion dice along with the 4 Route dice at the beginning of each round.</p>' +
            '<p>In addition, the Expansion may change the number of rounds you must play and give you new ways to score points. During the game, follow the same rules as the regular game with a few changes, as described on the following pages.</p>' +
            '<p>At the end of the game, when you add up your score, remember to count the points you earned from the Expansion you’re using, and mark them in the designated space of your scoring table.</p>' +
            '<p>Adjacent Construction: Gain Coins for your biggest group of orthogonally adjacent connected Routes (including Specials) that you drew this round. You gain 1 Coin for each space in this group.</p>' +
            '<p>Early Interconnection: Gain 1 Coin for each Exit in your current largest Network. Central Development: Gain 1 Coin for each occupied space in the Central Area of your board.</p>' +
            '<p>Urbanization: Gain 2 Coins, plus 1 Coin for each space containing a Building. Keep track of your Coins on the Network Scoring track (see example to the right). You can have a maximum of 12 Coins.</p>' +
            '<p>After receiving your income, you may build 1 or more copies of the Building shown on the Building die by paying the cost written on the die itself. Buildings occupy 1 whole space.</p>' +
            '<p>A Building can contain from 1 to 3 Towers. You may build a Building on any empty space on your board. At the end of the game, you gain 1 point for each of your Towers (one space can contain up to 3 Towers). Open-ended Routes connecting to a space that contains a Building do not count as Errors.</p>',
        construction: '<h1>Construction Expansion:</h3>' +
            '<p>Newly acquired machinery is opening up a great variety of new options: move or destroy already placed Routes. And thanks to the building permits, place a Route wherever you want.</p>' +
            '<p>Each round, you will have the option of using the action shown on the Construction die and maybe chain some combos by reactivating Special Buildings. any time during the round, you may choose to use the effect shown on the Construction die. You can use it only once per round.</p>' +
            '<p>The Construction die has 3 types of effects: Destroy: Erase an already-drawn space (even if it was drawn this round) from your board. Move: Choose an already-drawn space (even if it was drawn this round), erase it, and draw it again in another legal location (you have to respect the normal placement rules).</p>' +
            '<p>Free Placement: You may draw one of the Routes for the current round without having to connect it to a pre-existing Route. In case of the destruction or removal of a space containing a Special Building, follow the rules explained on the Special Buildings section of the base rulebook (page 7).</p>' +
            '<p>You cannot apply the effects of the Construction die on the results of Expansion dice, with the exception of other Engineer Expansion dice.</p>',
        desert: '<h1>Desert Expansion:</h3>' +
            '<p>Build your network in an arid desert landscape. Your goal is to make as many cacti as possible to survive until the end of the game to score bonus points, but beware!</p>' +
            '<p>If they are not placed next to an oasis when the next heat wave appears, they will be destroyed by the harsh desert climate. When you draw Routes, you do not have to draw any of the Desert dice if you don’t want to (you still have to use all 4 Route dice).</p>' +
            '<p>The Desert dice you draw don’t have to be connected to preexisting Routes and/or Cacti. If at least 1 Arid face appears, before drawing any dice for the current round, you must erase from your board each Cactus that is not adjacent to an Oasis (routes in the same space, if any, are not erased).</p>' +
            '<p>Alternatively, you can mark an available Special Route on your Board to ignore all Arid faces this round (it counts as using a Special Route). At the end of the 6th round, before scoring, roll the Desert dice one last time; if at least 1 Arid face appears, you must erase each Cactus that is not adjacent to an Oasis; if you saved a Special Route for this occasion, you can use it to cancel this effect.</p>' +
            '<p>At the end of the game, you gain 1 point for each individual surviving Cactus on your board (so if a space contains 2 cacti, you obtain 2 points for that space).</p>',
        forest: '<h1>Forest Expansion:</h3>' +
            '<p>Build lush forests and make them seamlessly interweave with your regular networks to create beautiful scenic routes in a natural paradise. Your goal is to build the biggest Forest you can, to score bonus points.</p>' +
            '<p>You can score up to 2 different Forests, but the second one will be worth less points. When you draw Routes, you do not have to draw any of the Forest dice if you don’t want to (you still have to use all 4 Route dice).</p>' +
            '<p>The Forest dice you draw don’t have to be connected to preexisting Routes and/or Trees. Each group of orthogonally adjacent spaces with trees on them (whether they also contain Routes or not) becomes a “Forest”.</p>' +
            '<p>At the end of the game, choose up to 2 different Forests on your board. You gain 2 points for each space occupied by the first Forest you choose, and 1 point for each space occupied by the second Forest you choose, if any. Note: an individual Forest can only be scored once.</p>',
        'galactic-invaders': '<h1>Galactic Invaders Expansion:</h3>' +
            '<p>Send Aliens to attack your opponents while trying to defend against those that are invading you. When Aliens attack, they destroy any structures in their space.</p>' +
            '<p>Get rid of Aliens by drawing something in the same space they are in, but beware: this will not work on Aliens that have raised their Shield. At the end of the game, you will lose points for each Alien left on your board.</p>' +
            '<p>At the start of the game, each player draws 2 aliens on the board of the player to their right, in the bottom right corner of 2 different empty spaces.</p>' +
            '<p>At the end of each round, roll the Galactic Invaders die and resolve its effects (the die is rolled only once and all players apply the effect of the same result).</p>' +
            '<p>The Space Invader die has 3 types of faces: Alien: Draw an Alien in the bottom right corner of any empty space on the board of the player to your right. There can only be 1 Alien per space.</p>' +
            '<p>Attack: First, all the Aliens on your board activate their Shield (i.e., you must draw a circle around each one of them to show it); then, each Alien attacks, destroying everything in their space (i.e., you must erase everything in that space except the Alien).</p>' +
            '<p>Nuke: Choose 1 Alien on your board (even one with a Shield) and erase it. In case of the destruction or removal of a space containing a Special Building, follow the rules explained on the Special Buildings section of the base rulebook (page 7).</p>' +
            '<p>When you draw something on a space that contains an Alien without a Shield, you must erase that Alien. Aliens with Shields, instead, can only be erased with a Nuke action. At the end of the game, you lose 1 point for each Alien that remains on your board.</p>',
        investigation: '<h1>Investigation Expansion:</h3>' +
            '<p>Mysterious things are happening in your county. Send your Investigator to collect Clues that are appearing on your board and solve the case. Move your Investigator on top of a Clue to collect it. If you collect them all, you will solve the mystery (and get points).</p>' +
            '<p>Before rolling the dice for the first round of the game, choose an Exit and draw your Investigator next to it (fig. 1c). When you draw Routes, you may draw the Investigation die result, following the normal placement rules (remember to also draw the magnifying glass, but do not draw the footsteps).</p>' +
            '<p>At the end of the round, you may spend a number of Movement points equal to the footsteps shown on the Investigation die. Each Movement point can be spent to perform one of the following actions:</p>' +
            '<ol>' +
            '  <li>Move your Investigator to an adjacent space connected to their starting space with a Highway Route.</li>' +
            '  <li>Move your Investigator from a space with a Station (or from a Railway Exit) to a space with a Station connected to their starting space by 1 or more Railway Routes. When doing so, you have to stop at the first Station you encounter along your path (you cannot skip Stations).</li>' +
            '</ol>' +
            '<p>When you move your Investigator, erase them from their current position and redraw them on their destination space (you don’t have to do this for every step, you can just draw their position at the end of their movement, after you spent all of the Movement points). If after spending a Movement point, your Investigator lands on a space that contains a Clue (magnifying glass), draw a circle around it to remember that you collected that Clue. You can collect more than 1 Clue in a single round.</p>' +
            '<p>At the end of the game, you will gain 1 point for each Clue that you collected, plus 4 points if you collected all clues.</p>',
        lake: '<h1>Lake Expansion:</h3>' +
            '<p>Lakes have two advantages. First of all, they allow you to create bigger Networks by connecting your Routes to a Lake with the Pier faces on the Lake dice. You also score additional points for the Smallest Lake on your Board.</p>' +
            '<p>When you draw Routes, you do not have to draw any of the Lake dice if you don’t want to (you still have to use all 4 Route dice). The Lakes you draw don’t need to be connected to pre-existing Routes and/or other Lakes. If a space has 3 sides adjacent to the open sides of Lakes, it must be completely filled with water immediately. Open Lake sides do not count as Errors at the end of the game. Networks connected to the same Lake (by Piers) are also connected to each other.</p>' +
            '<p>At the end of the game, you get 1 point for each space occupied by your Smallest Lake.</p>',
        lava: '<h1>Lava Expansion:</h3>' +
            '<p>Volcanoes start erupting, but the Route building must go on! Work your way around lakes of Lava and prevent them from destroying your Routes. Confine the Lava streams to gain extra points. You also score additional points for the Largest Lava lake on your Board.</p>' +
            '<p>At the beginning of the game, draw a Volcano in the Central Space of your board. When you draw Routes, you must draw at least 1 Lava die (you can also draw both if you want. You still have to use all 4 Route dice). The Lava dice you draw must be connected to pre-existing Lava.</p>' +
            '<p>At any point during the round, if you want, you can draw a new Volcano in any space as long as it is not adjacent to pre-existing Lava. If there are no free spaces adjacent to open Lava lake sides, you must either open a new Volcano or erase a Route to make space for it. Open Lava lake sides count as Errors at the end of the game.</p>' +
            '<p>At the end of the game, you get 5 points for each Lava lake without open sides. You also get 1 point for each space occupied by your Largest Lava lake (even if it is not closed).</p>',
        meteor: '<h1>Meteor Expansion:</h3>' +
            '<p>Meteors will wreak havoc and destruction, but they also bring precious minerals and ores to Earth. 1 Meteor will hit each round, creating a Crater on your Board and destroying any Route it hits. But, if you lead Routes into the Craters, you can gather precious resources and gain additional points.</p>' +
            '<p>One of the Meteor dice shows a direction and the other shows distance. They show you where the Meteor will hit next, counting from the last space a Meteor hit. On the first round, count from the Central Space.</p>' +
            '<p>When the Meteor hits a space, you must draw a Crater inside of it. If any Route was drawn inside that space, you must erase it. Mark the space hit by the Meteor by drawing a dot in the top left corner, as a reminder. Always erase the dot from the space hit in the previous round!</p>' +
            '<p>If, while moving towards its next target, the Meteor reaches the edge of the Board, it bounces and proceeds in the opposite direction to complete its movement. If the Meteor will hit a space that already contains a Crater, it keeps moving in the same direction until it can hit a Free Space. If by doing so it would hit outside of the Board, it bounces.</p>' +
            '<p>At the beginning of the round, you can mark an available Special Route on your Board to ignore the Meteor dice this round (it counts as using a Special Route). At any point during the round, you can erase a Crater to draw a new Route in its place.</p>' +
            '<p>At the end of the game, you gain 2 points for each Route that has an open end connected to a Crater (these open ends don’t count as Errors either, of course).</p>',
        'pluck-man': '<h1>Pluc-Man Expansion:</h3>' +
            `
      <p>Draw Pluck-Man, Ghosts, and Fruits next to your unused Exits. At the end of the game, the more Ghosts you connected to Pluck-Man, the more bonus points you will score... as long as a Fruit is also connected to that same network to feed Pluck-Man with the energy needed to catch all those pesky Ghosts!</p>
      <p>When you draw Routes, you must draw the result of the Pluck-Man die next to one of your “unused” Exits, i.e., an Exit that has nothing connected to it. If you have no unused Exits available, you cannot draw the Pluck-Man die for that round.</p>
      <p>At the end of the game, for each Network you have, you gain 3 points if that Network contains at least 1 Pluck-Man Exit. If it also contains 1 or more Ghost Exits but no Fruit Exits, you also lose 2 points for each Ghost Exit in that Network. If that Network contains at least 1 Fruit Exit, you instead gain 2 points for each Ghost Exit in that Network. If a Network only contains Ghost Exits and/or Fruit Exits, but no Pluck-Man Exit, nothing happens.</p>
    `,
        portal: '<h1>Portal Expansion:</h3>' +
            `
      <p>Reality is tearing itself apart and immense holes are opening, showing glimpses of the unthinkable. But not all that is supernatural will hurt or scare. You can safely travel to work by going through these portals of doom.</p>
      <p>Open Portals to connect distant areas of your Network as if they were next to each other. However, not all Portals are the same: there are three kinds of Portals (marked with the letters A, B, and C) and only two Portals of the same kind (same letter) are connected to each other. There can never be more than 2 Portals of the same kind on your board.</p>
      <p>When you draw Routes, you may draw the result of the Portal die, following the normal placement rules. If you have already drawn two Portals with the same letter, you cannot draw a third one. Networks connected to Portals with the same letter are also connected to each other (even if you have Highway on one side and Railway on the other). Portals do not interrupt your Longest Highway and Railway (i.e., you are allowed to go through Portals when calculating your Longest Highway/Railway).</p>
    `,
        'power-grid': '<h1>power grid Expansion:</h3>' +
            `
      <p>Manage an infrastructure of Power Lines on top of your Route Networks and connect your cities to the Accumulator to ensure a constant supply of energy. Charge the Accumulator at the center of your board and build Power Lines connecting to your Exits.</p>
      <p>At the end of the game, you will gain points equal to the number of Exits connected to the Accumulator, multiplied by the number of charges on the Accumulator itself.</p>
      <p>At the start of the game draw an Accumulator in the center of your board (Fig. 1). At the end of each round, you may use the Power Grid dice to electrify your Routes. Start from an Exit or from an already electrified space and move in the direction indicated by the Power Grid die.</p>
      <p>At the end of the game, you will gain points equal to the number of charges on your Accumulator multiplied by the number of Exits connected to the Accumulator itself (through consecutive orthogonally adjacent electrified spaces). Routes connected to your Accumulator do not count as Errors at the end of the game.</p>
    `,
        rainbow: '<h1>rainbow Expansion:</h3>' +
            `
      <p>It’s a kind of magic! Cars and trains are flying on colorful rainbows, and the enchanted creatures living underneath clovers harness the power of those rainbows. But not all is cupcakes and sprinkles. Dark clouds are lurking beyond the horizon.</p>
      <p>At the start of each round, you must apply the effect shown on the Rainbow die. The Rainbow die has 3 types of faces: Rainbow, Rain, and Clover.</p>
      <p>At the end of the game, each Rainbow is worth 2 points for each Clover that is orthogonally adjacent to it. Rainbows, Rainy Clouds, and Clovers occupy the whole space (nothing else can be drawn in the same space). Open-ended Routes leading into a space that contains a Rainy Cloud and/or a Clover do not count as Errors.</p>
    `,
        renovation: '<h1>renovation Expansion:</h3>' +
            `
      <p>Sometimes you just plan badly. But now, with the Renovation Expansion, you have the possibility to make it even worse. With the Renovation die, you can add features to your existing Routes and create new Route configurations.</p>
      <p>Each round, you may decide to use the Renovation die, but only once per round. You may use the Renovation die only on spaces that already contain a Route and which are compatible with the constraints given by the dotted lines on the die.</p>
      <p>A Route is compatible if it can be completely placed inside the dotted lines. You can only renovate basic Routes. You can’t renovate Expansion die results.</p>
      <p>There are two special faces with a dotted square in the center: these can only be used to add connections to an existing Station.</p>
    `,
        ritual: '<h1>ritual Expansion:</h3>' +
            `
      <p>Cultists are trying to create a Madness Network, a set of Ritual Sites connected to an evil dimension through Portals. Try to create the biggest Madness Network while separating it from the ordinary people of your cities.</p>
      <p>Each Round, you will have the option to open new Portals at the edges of your board and add a Ritual to your Madness Network.</p>
      <p>At the end of the game, you will gain points for your connected Rituals and Portals, but any Exit that is connected to either of those will not count when scoring regular Networks.</p>
      <p>When you draw Routes, you must draw the result of the Ritual die, but it doesn’t need to be connected to preexisting Routes. At the end of each round, you may draw 1 Portal next to one of your “Country Routes” (i.e., Routes with an open end connected to the outer edge of your board in a space without an Exit).</p>
    `,
        river: '<h1>river Expansion:</h3>' +
            `
      <p>Rivers are a third kind of Route. Sort of. They can’t be used to connect Exits, but they can be connected to each other to create a River. Rivers can’t be crossed by Highways or Railways, unless a Bridge face on a River die allows you to do so.</p>
      <p>When you draw Routes, you do not have to draw any of the River dice if you don’t want to (you still have to use all 4 Route dice). The Rivers you draw don’t have to be connected to preexisting Routes and/or other Rivers. You can’t connect River Routes with other kinds of Routes (nor Exits).</p>
      <p>At the end of the game, choose 1 of your Rivers. You gain 1 point for each space the River runs through. If both ends of the River are connected to the outer edge of the board, you get 3 additional points.</p>
    `,
        separation: '<h1>separation Expansion:</h3>' +
            `
      <p>Make your life as a city planner a hell on earth with the Separation die! This die is not added to the pool: instead, it replaces one of the basic “white“ Route dice of your choice. The Separation die is considered a Route die (it can be duplicated by Factories and triggers all the effects of Route dice).</p>
      <p>Like with all the Route dice, using the Separation die is mandatory.</p>
    `,
        special: '<h1>special Expansion:</h3>' +
            `
      <p>Build bigger Networks with the Special die. This die is not added to the pool: instead, it replaces one of the basic “white“ Route dice of your choice. The Special die is considered a Route die (it can be duplicated by Factories and triggers all the effects of Route dice).</p>
      <p>Like with all the Route dice, using the Special die is mandatory. When combining expansions, you can’t sacrifice the result of the Special die to trigger special effects (like avoiding the Sun result in the Desert Expansion).</p>
      <p>Note: When playing with the Special die, you can still use the Special Routes on the top of your board.</p>
    `,
        'street-lamps': '<h1>street lamps Expansion:</h3>' +
            `
      <p>Shine a spotlight on your Longest Highways with the Street Lamps Expansion. Draw additional Highways accompanied by Street Lamps, but remember that you also have to turn them on to gain bonus points.</p>
      <p>With the addition of two dice containing only Highways, you will reach unprecedented Longest Highways, and you will also gain points for your activated lights.</p>
      <p>When you draw Routes, you may draw the result of the Street Lamp dice, following the normal placement rules. Every time you use a Special Route (also when activating your third University), you must choose a row or a column and put an asterisk on all spaces containing Street Lamps in that row or column.</p>
      <p>At the end of the game, you gain 1 point for each Street Lamp that you activated.</p>
    `,
        superconnection: '<h1>superconnection Expansion:</h3>' +
            `
      <p>The Superconnection technology is a new and very efficient way to travel. Both cars and trains can be loaded on top of super-fast, magnetically suspended vehicles.</p>
      <p>Superconnections can be used to connect both Highways and Railways thanks to “Superstations” (drawn as a triangular shape).</p>
      <p>At the end of the game, Superconnections will count towards both your Longest Highway and your Longest Railway.</p>
      <p>You must use the result of the Superconnection die each round, following the normal placement rules. When drawing Superconnection Routes, you may connect them to any type of Route through Superstations: the triangular structures on the ends of Superconnection Routes. Superconnection Routes can be considered as both Highways and Railways when scoring the Longest Highway and Railway.</p>
    `,
        tetromino: '<h1>tetromino Expansion:</h3>' +
            `
      <p>Are you ready for some next-level urban planning? Declare where you are going to build in advance: if you respect your commitment you will gain points at the end of the game. If not, you will lose points instead.</p>
      <p>Before you draw any Routes each round, you may draw the result of the Tetromino die (you still have to use all 4 Route dice). When you do use the Tetromino die, you must “enhance” empty spaces on your board, following the same pattern shown on the die, by drawing a small square around the white space used to mark the number of the round (spaces that are already enhanced cannot be enhanced again).</p>
      <p>You can freely rotate and/or reverse the pattern shown on the Tetromino die, just like with regular Routes, but you must use the full pattern shown on the Tetromino die: you cannot use only part of it. If you can’t find a patch of empty spaces that matches the pattern, you cannot use the Tetromino die this round.</p>
      <p>At the end of the game, you gain 1 point for each enhanced space that also contains something (either Routes or other drawn elements). You lose 1 point for each empty enhanced space.</p>
    `,
        trail: '<h1>trail Expansion:</h3>' +
            `
      <p>Build panoramic trails and turn your board into a hiker’s dream! Your goal is to connect Stations to each other through a parallel network of Trails, to score bonus points.</p>
      <p>Trails travel through the corners of your spaces, not through their sides, and they auto-connect to Stations when they are touching a corner of a space containing one.</p>
      <p>When you draw Routes, you do not have to draw any of the Trail dice if you don’t want to (you still have to use all 4 Route dice). The Trail dice you draw must be connected to preexisting Routes and/or Trails.</p>
      <p>Trails with open ends do not count as Errors at the end of the game. When a Trail is touching the corner of a space containing a Station, it immediately auto-connects to that Station through the shortest diagonal path.</p>
      <p>At the end of the game, each set of Stations connected to each other via the same network of Trails is worth an amount of points determined by the number of Stations connected together, scoring half of the Network Values shown on your Board.</p>
    `,
        tentacle: '<h1>tentacle Expansion:</h3>' +
            `
      <p>Tentacles are entering your little safe oasis of sanity, but a little madness is ok. Try to have as many Tentacles as possible in your territory and make people lose their minds while driving next to them.</p>
      <p>Each round, the Tentacle die will tell you the length of the Tentacle to draw that Round; at the end of the round, you may add it to your board. If you do, you will choose its starting position and its shape. Tentacles can share spaces with Railways and Highways.</p>
      <p>At the end of the game, you will gain points for each Tentacle you drew, plus bonus points for each space occupied by both a Tentacle and a Highway or Railway. At the end of each round, after drawing your Routes, you may draw 1 Tentacle.</p>
      <p>When drawing a Tentacle, you must start from a space on the outer edge of your board that does not contain an Exit. The Tentacle must also have a length equal to the number shown on the Tentacle die (3, 4, or 5), it cannot be drawn partially. A Tentacle can be drawn with straight and/or curved stretches, mixed as you like.</p>
      <p>Tentacle stretches can only be drawn into:
      1. Empty spaces; these can be drawn as either a straight Tentacle or a curved Tentacle.
      2. Spaces that contain a straight Route (or Tentacle); these must be drawn as an “underpass” that crosses the preexisting Route/Tentacle perpendicularly.
      3. Spaces that contain a curved Route (or Tentacle); these must be drawn as a “curved Tentacle” that goes through the two unoccupied sides of the space.
      When you are drawing the final space of a Tentacle, close it by drawing an “ending tip” (as seen in fig. 3b).</p>
      <p>When you draw Routes, on the other hand, you can’t draw them in a space that contains a preexisting Tentacle.</p>
      <p>At the end of the game, you will get 2 points for each Tentacle you drew (regardless of its length), plus 1 point for each space that contains both a Tentacle and a Route.</p>
    `,
        underground: '<h1>underground Expansion:</h3>' +
            `
    <p>To play with the Underground dice as an Expansion, you need two boards for each player: one board for the Surface and one for the Underground. Think of them as two layers, one on top of the other. You will play with the basic white Route dice on the Surface board (following the normal RRI or RRI Challenge rules) and with the Underground Expansion dice and rules on the Underground board.</p>
    <p>Every player must draw the results of these dice on their Underground board, following the Underground placement restrictions (see below). At any point during an Underground round, you may choose to use a duplication power to duplicate one of the Underground die results for the current round. Mark it by crossing off one of the Special Routes at the top of your Underground board. You can only use a total of 3 duplications per game and a maximum of 1 per round. Using a duplication power does not count as using a Special Route on the Surface board.</p>
    <p>When playing with Railroad Ink Challenge boards as Underground boards, ignore all of the Special Buildings.</p>
    <p>There are two types of interactions between the two boards: you can create Hubs and gain points by matching the positions of Subway Stations and surface Stations; additionally, you will break a pipe and lose points if you draw a surface Station above a Water Pipe space.</p>
    <p>Follow these rules for these two types of interactions:</p>
    <ul>
      <li>Whenever you draw a Subway Station on the Underground board, draw a circle in the bottom right corner of the corresponding space on your Surface board. Whenever you draw a Station on the Surface board, draw a circle in the bottom right corner of the corresponding space on your Underground board.</li>
      <li>If a Station on the Surface and a Subway Station on the Underground share the same space on their respective boards, fill the Subway Station (make it a filled circle). This is now a Hub.</li>
      <li>When you draw a Station on your Surface board, check if there is a Water Pipe beneath it. If there is, it becomes a Broken Water Pipe: draw a zig-zag line in the Water Pipe to mark it as broken. Drawing a Water Pipe underneath an already built surface Station will not break the pipe.</li>
    </ul>
    <p>After 14 rounds, use the following rules to calculate your Underground score:</p>
    <ul>
      <li>Networks: All Exits connected to each other by Water Pipes form a Network. The size of the Network is equal to the number of connected Exits. You score points for each of these Networks according to the Network Values track.</li>
      <li>Subway Networks: All Exits and Hubs connected to each other by Subway Routes create a Network. The size of the Network is equal to the number of connected Exits and Hubs. You score points for each of these Networks according to the Network Value track. Mark the resulting total in your Network scoring space.</li>
      <li>Longest Water Pipeline: Use the rules for calculating Longest Routes to calculate your Longest Water Pipeline. Double that score and write it in the Longest Highway scoring space. Broken Water Pipes do not interrupt your Longest Water Pipeline.</li>
      <li>Longest Subway Line: Use the rules for calculating Longest Routes to calculate your Longest Subway Line and write that score in the Longest Railway scoring space.</li>
      <li>Center: Gain points for the central area as usual; write the score in the Central Spaces scoring space.</li>
      <li>Errors: You lose 1 point for each open-ended Subway Route or Water Pipe. You lose 2 points for each broken Pipe. Subway Routes and Water Pipes that connect to the edge of the board do not count as Errors.</li>
    </ul>
    <p>Add up all the negative points from your Errors and mark the result in the Error scoring space. Add up all the points you earned and write them in the Total score space of your Underground board. Then, also write this total in the Expansion scoring space of your Surface board. Calculate the points for your Surface board as 2 times the Underground score and add the Expansion points to the total.</p>
  `,
        weather: '<h1>weather Expansion:</h3>' +
            `
    <p>With the new meteorological control system, you are able to control the skies over your county. Try to avoid putting different types of clouds next to each other to avoid unstable weather.</p>
    <p>Every round you will have to assign the two Weather dice results to two of the normal Routes you draw. At the end of the game, you will score the biggest area for each type of meteorological phenomena, but avoid making those areas touch or they will not count for scoring.</p>
    <p>Each round, you must draw the two Weather symbols rolled (Cloud, Storm, or Snow) in two of the spaces where you drew Routes this round (including any Special Routes). Draw the Weather symbol in the lower right corner of the spaces you chose. Remember: You can only add Weather to the spaces where you drew Routes during the current round.</p>
    <p>At the end of the game, you will get 1 point for each space in your biggest area of orthogonally adjacent Cloud spaces. You will do the same with the biggest Storm and Snow areas. If two areas of different types are orthogonally and/or diagonally adjacent to each other, they do not count for scoring.</p>
  `,
    },
    // expansions: {
    //   none: '<p></p>',
    //   airline:
    //     '<p>Airways are a third kind of route. They can’t be used to connect Exits, but they can be connected to each other to create Airway Networks, which can be connected to your regular Routes by building Airports. At the end of the game, you will get points for your Longest Airway, but you will lose points for your open-ended Airways and for unconnected Airports. When you draw Routes, you do not have to draw any of the Airline dice, if you don’t want to (you still have to use all 4 Route dice). The Airline dice you draw don’t have to be connected to preexisting Routes and/or Airline dice results. You can’t connect Airway Routes with other kinds of Routes (nor Exits). When you draw an Airport, it automatically connects to any preexisting Route with an open end leading into the space with the Airport (figs. 1b and 2b). When you draw any Route with an open end leading into a space with an Airport, immediately connect that Route with the Airport (fig. 3b). Instead of using one of your Special Routes, you may delete it to draw an Airport in any empty space (you may also do this when activating your third University). Networks connected to the same Airway Network (via Airports and Airway Routes) are also connected to each other. Airports do not interrupt your Longest Highway and/or your Longest Railway. At the end of the game, you get 2 points for each space of your Longest Airway, but you must start counting from an edge of your board or from an Airport, and also stop counting at an edge or Airport. At the end of the game you lose 2 points for each openended Airway Route and you lose 4 points for each Airport that is not connected to any Airway Route.</p>',
    //   'alien-farmer':
    //     '<p>Farming—and especially wool production—has gotten a lot easier after the introduction of “abduction rays”. Manage your farms and UFOs and maximize your output of wool. UFOs can take wool from Sheep that are in the same row and/or column. More than one UFO can take wool from the same Sheep farm. Alien Farmer dice you draw don’t have to be connected to any preexisting Routes. When drawing a Special Route you may instead place a UFO on your board (also when activating your third University). UFOs occupy 1 whole space. At the end of the game, you gain 2 points for each Sheep that a UFO can reach. UFOs can only reach Sheep that are in the same column and/or row. A UFO can score a Sheep that was already scored by another UFO.</p>',
    //   canyon:
    //     '<p>Mix your transportation network with majestic canyons! Your goal is to create the longest Canyon you can, to score bonus points. Canyons run along the edges of your spaces, and can only be drawn in pre-determined shapes. To make your routes cross a canyon stretch, you will have to spend “bridge points”. When you draw Routes, you do not have to draw any of the Canyon dice if you don’t want to (you still have to use all 4 Route dice). The Canyon dice you draw must be connected to an edge of the board and/or the open end of a preexisting Canyon. Note: Canyons cannot connect to the middle of a preexisting Canyon, i.e., Canyons cannot branch. Each Canyon die shows a pattern made by 1 or more “segments”. When you draw a Canyon die, you must represent the pattern in its entirety, if you can’t make it fit on your board, you can’t draw it. Note: You can freely reverse the pattern you see on the die. If you want a Route to cross (or even touch) a Canyon, you must spend 1 “Bridge point” to create a bridge over the canyon, i.e., to open a gap in the Canyon to make the Route fit. You have a total of 12 Bridge points, represented by the top row of the Network Values table; when you spend one, mark a space. Once you’ve marked all 12, you can’t create any more bridges. Canyons with open ends do not count as Errors at the end of the game. At the end of the game, you gain 1 point for each segment of your Longest Canyon. You also gain 2 points for each individual Canyon with both ends connected to the edge of the board.</p>',
    //   'city-builder':
    //     '<p>Gain money by pleasing investors and spend it to create futuristic buildings in your county. Investors are going to evaluate your conduct and give you money according to how well you followed their vision. You will then use that money to build your empire. Each round, you will be evaluated on the basis of the Income die and you’ll have the opportunity to build as many Buildings of the type displayed on the Building die as you can afford. At the end of the game, you will gain points according to the number of Towers. Buildings can also remove Errors from your board: if a Route ends facing into a Building it will not be considered an Error. After drawing all your normal Routes, you gain money based on the Income die. The Income die can show one of the following faces: Income die Building die When you play with an Expansion , you must roll the respective Expansion dice along with the 4 Route dice at the beginning of each round. In addition, the Expansion may change the number of rounds you must play and give you new ways to score points. During the game, follow the same rules as the regular game with a few changes, as described on the following pages. At the end of the game, when you add up your score, remember to count the points you earned from the Expansion you’re using, and mark them in the designated space of your scoring table. Adjacent Construction: Gain Coins for your biggest group of orthogonally adjacent connected Routes (including Specials) that you drew this round. You gain 1 Coin for each space in this group. Early Interconnection: Gain 1 Coin for each Exit in your current largest Network. Central Development: Gain 1 Coin for each occupied space in the Central Area of your board. Urbanization: Gain 2 Coins, plus 1 Coin for each space containing a Building. Keep track of your Coins on the Network Scoring track (see example to the right). You can have a maximum of 12 Coins. After receiving your income, you may build 1 or more copies of the Building shown on the Building die by paying the cost written on the die itself. Buildings occupy 1 whole space. A Building can contain from 1 to 3 Towers. You may build a Building on any empty space on your board. At the end of the game, you gain 1 point for each of your Towers (one space can contain up to 3 Towers). Open-ended Routes connecting to a space that contains a Building do not count as Errors.</p>',
    //   construction:
    //     '<p>Newly acquired machinery is opening up a great variety of new options: move or destroy already placed Routes. And thanks to the building permits, place a Route wherever you want. Each round, you will have the option of using the action shown on the Construction die and maybe chain some combos by reactivating Special Buildings. any time during the round, you may choose to use the effect shown on the Construction die. You can use it only once per round. The Construction die has 3 types of effects: Destroy: Erase an already-drawn space (even if it was drawn this round) from your board. Move: Choose an already-drawn space (even if it was drawn this round), erase it, and draw it again in another legal location (you have to respect the normal placement rules). Free Placement: You may draw one of the Routes for the current round without having to connect it to a pre-existing Route. In case of the destruction or removal of a space containing a Special Building, follow the rules explained on the Special Buildings section of the base rulebook (page 7). You cannot apply the effects of the Construction die on the results of Expansion dice, with the exception of other Engineer Expansion dice.</p>',
    //   desert:
    //     '<p>Build your network in an arid desert landscape. Your goal is to make as many cacti as possible to survive until the end of the game to score bonus points, but beware! If they are not placed next to an oasis when the next heat wave appears, they will be destroyed by the harsh desert climate. When you draw Routes, you do not have to draw any of the Desert dice if you don’t want to (you still have to use all 4 Route dice). The Desert dice you draw don’t have to be connected to preexisting Routes and/or Cacti. If at least 1 Arid face appears, before drawing any dice for the current round, you must erase from your board each Cactus that is not adjacent to an Oasis (routes in the same space, if any, are not erased). Alternatively, you can mark an available Special Route on your Board to ignore all Arid faces this round (it counts as using a Special Route). At the end of the 6th round, before scoring, roll the Desert dice one last time; if at least 1 Arid face appears, you must erase each Cactus that is not adjacent to an Oasis; if you saved a Special Route for this occasion, you can use it to cancel this effect. At the end of the game, you gain 1 point for each individual surviving Cactus on your board (so if a space contains 2 cacti, you obtain 2 points for that space).</p>',
    //   forest:
    //     '<p>Build lush forests and make them seamlessly interweave with your regular networks to create beautiful scenic routes in a natural paradise. Your goal is to build the biggest Forest you can, to score bonus points. You can score up to 2 different Forests, but the second one will be worth less points. When you draw Routes, you do not have to draw any of the Forest dice if you don’t want to (you still have to use all 4 Route dice). The Forest dice you draw don’t have to be connected to preexisting Routes and/or Trees. Each group of orthogonally adjacent spaces with trees on them (whether they also contain Routes or not) becomes a “Forest”. At the end of the game, choose up to 2 different Forests on your board. You gain 2 points for each space occupied by the first Forest you choose, and 1 point for each space occupied by the second Forest you choose, if any. Note: an individual Forest can only be scored once.</p>',
    //   'galactic-invaders':
    //     '<p>Send Aliens to attack your opponents while trying to defend against those that are invading you. When Aliens attack, they destroy any structures in their space. Get rid of Aliens by drawing something in the same space they are in, but beware: this will not work on Aliens that have raised their Shield. At the end of the game, you will lose points for each Alien left on your board. At the start of the game, each player draws 2 aliens on the board of the player to their right, in the bottom right corner of 2 different empty spaces. At the end of each round, roll the Galactic Invaders die and resolve its effects (the die is rolled only once and all players apply the effect of the same result). The Space Invader die has 3 types of faces: Alien: Draw an Alien in the bottom right corner of any empty space on the board of the player to your right. There can only be 1 Alien per space. Attack: First, all the Aliens on your board activate their Shield (i.e., you must draw a circle around each one of them to show it); then, each Alien attacks, destroying everything in their space (i.e., you must erase everything in that space except the Alien). Nuke: Choose 1 Alien on your board (even one with a Shield) and erase it. In case of the destruction or removal of a space containing a Special Building, follow the rules explained on the Special Buildings section of the base rulebook (page 7). When you draw something on a space that contains an Alien without a Shield, you must erase that Alien. Aliens with Shields, instead, can only be erased with a Nuke action. At the end of the game, you lose 1 point for each Alien that remains on your board.</p>',
    //   investigation:
    //     '<p>Mysterious things are happening in your county. Send your Investigator to collect Clues that are appearing on your board and solve the case. Move your Investigator on top of a Clue to collect it. If you collect them all, you will solve the mystery (and get points). Before rolling the dice for the first round of the game, choose an Exit and draw your Investigator next to it (fig. 1c). When you draw Routes, you may draw the Investigation die result, following the normal placement rules (remember to also draw the magnifying glass, but do not draw the footsteps). At the end of the round, you may spend a number of Movement points equal to the footsteps shown on the Investigation die. Each Movement point can be spent to perform one of the following actions: 1. Move your Investigator to an adjacent space connected to their starting space with a Highway Route. 2. Move your Investigator from a space with a Station (or from a Railway Exit) to a space with a Station connected to their starting space by 1 or more Railway Routes. When doing so, you have to stop at the first Station you encounter along your path (you cannot skip Stations). When you move your Investigator, erase them from their current position and redraw them on their destination space (you don’t have to do this for every step, you can just draw their position at the end of their movement, after you spent all of the Movement points). If after spending a Movement point, your Investigator lands on a space that contains a Clue (magnifying glass), draw a circle around it to remember that you collected that Clue. You can collect more than 1 Clue in a single round. At the end of the game, you will gain 1 point for each Clue that you collected, plus 4 points if you collected all clues.</p>',
    //   lake: '<p>Lakes have two advantages. First of all, they allow you to create bigger Networks by connecting your Routes to a Lake with the Pier faces on the Lake dice. You also score additional points for the Smallest Lake on your Board. When you draw Routes, you do not have to draw any of the Lake dice, if you don’t want to (you still have to use all 4 Route dice). The Lakes you draw don’t need to be connected to pre-existing Routes and/or other Lakes. If a space has 3 sides adjacent to the open sides of Lakes, it must be completely filled with water immediately. Open Lake sides do not count as Errors at the end of the game. Networks connected to the same Lake (by Piers) are also connected to each other. At the end of the game, you get 1 point for each space occupied by your Smallest Lake.</p>',
    //   lava: '<p>Volcanoes start erupting, but the Route building must go on! Work your way around lakes of Lava and prevent them from destroying your Routes. Confine the Lava streams to gain extra points. You also score additional points for the Largest Lava lake on your Board. At the beginning of the game, draw a Volcano in the Central Space of your board. When you draw Routes, you must draw at least 1 Lava die (you can also draw both if you want. You still have to use all 4 Route dice). The Lava dice you draw must be connected to pre-existing Lava. At any point during the round, if you want, you can draw a new Volcano in any space as long as it is not adjacent to pre-existing Lava. If there are no free spaces adjacent to open Lava lake sides, you must either open a new Volcano or erase a Route to make space for it. Open Lava lake sides count as Errors at the end of the game. At the end of the game, you get 5 points for each Lava lake without open sides. You also get 1 point for each space occupied by your Largest Lava lake (even if it is not closed).</p>',
    //   meteor:
    //     '<p>Meteors will wreak havoc and destruction, but they also bring precious minerals and ores to Earth. 1 Meteor will hit each round, creating a Crater on your Board and destroying any Route it hits. But, if you lead Routes into the Craters, you can gather precious resources and gain additional points. One of the Meteor dice shows a direction and the other shows distance. They show you where the Meteor will hit next, counting from the last space a Meteor hit. On the first round, count from the Central Space. When the Meteor hits a space, you must draw a Crater inside of it. If any Route was drawn inside that space, you must erase it. Mark the space hit by the Meteor by drawing a dot in the top left corner, as a reminder. Always erase the dot from the space hit in the previous round! If, while moving towards its next target, the Meteor reaches the edge of the Board, it bounces and proceeds in the opposite direction to complete its movement. If the Meteor will hit a space that already contains a Crater, it keeps moving in the same direction until it can hit a Free Space. If by doing so it would hit outside of the Board, it bounces. At the beginning of the round, you can mark an available Special Route on your Board to ignore the Meteor dice this round (it counts as using a Special Route). At any point during the round, you can erase a Crater to draw a new Route in its place. At the end of the game, you gain 2 points for each Route that has an open end connected to a Crater (these open ends don’t count as Errors either, of course).</p>',
    //   'pluck-man':
    //     '<p>Draw Pluck-Man, Ghosts, and Fruits next to your unused Exits. At the end of the game, the more Ghosts you connected to Pluck-Man, the more bonus points you will score... as long as a Fruit is also connected to that same network to feed Pluck-Man with the energy needed to catch all those pesky Ghosts! When you draw Routes, you must draw the result of the Pluck-Man die next to one of your “unused” Exits, i.e., an Exit that has nothing connected to it. If you have no unused Exits available, you cannot draw the Pluck-Man die for that round. At the end of the game, for each Network you have, you gain 3 points if that Network contains at least 1 Pluck-Man Exit. If it also contains 1 or more Ghost Exits but no Fruit Exits, you also lose 2 points for each Ghost Exit in that Network. If that Network contains at least 1 Fruit Exit, you instead gain 2 points for each Ghost Exit in that Network. If a Network only contains Ghost Exits and/or Fruit Exits, but no Pluck-Man Exit, nothing happens.</p>',
    //   portal:
    //     '<p>Reality is tearing itself apart and immense holes are opening, showing glimpses of the unthinkable. But not all that is supernatural will hurt or scare. You can safely travel to work by going through these portals of doom. Open Portals to connect distant areas of your Network as if they were next to each other. However, not all Portals are the same: there are three kinds of Portals (marked with the letters A, B, and C) and only two Portals of the same kind (same letter) are connected to each other. There can never be more than 2 Portals of the same kind on your board. When you draw Routes, you may draw the result of the Portal die, following the normal placement rules. If you have already drawn two Portals with the same letter, you cannot draw a third one. Networks connected to Portals with the same letter are also connected to each other (even if you have Highway on one side and Railway on the other). Portals do not interrupt your Longest Highway and Railway (i.e., you are allowed to go through Portals when calculating your Longest Highway/Railway).</p>',
    //   'power-grid':
    //     '<p>Manage an infrastructure of Power Lines on top of your Route Networks and connect your cities to the Accumulator to ensure a constant supply of energy. Charge the Accumulator at the center of your board and build Power Lines connecting to your Exits. The Power Grid dice indicate the direction in which you will be able to electrify your Routes: at the end of the round you will electrify all of your adjacent Routes in the given direction, starting from an Exit or an electrified Route. When you electrify your Accumulator, it will charge up. At the end of the game, you will gain points equal to the number of Exits connected to the Accumulator, multiplied by the number of charges on the Accumulator itself. At the start of the game draw an Accumulator in the center of your board (Fig. 1). At the end of each round, you may use the Power Grid dice to electrify your Routes. Start from an Exit or from an already electrified space and move in the direction indicated by the Power Grid die (the curved line on the dice always represents the bottom). You may electrify as many spaces as you desire as long as you are moving in a straight line and electrifying every consecutive space. When you electrify a space, mark it by drawing a little lightning in the bottom right of the space. Follow these rules for electrification: You can only electrify spaces that contain a Route. You can’t electrify an already electrified space. You can’t electrify the Accumulator. When electrifying, if you start from an already electrified space next to the Accumulator and you move on top of the accumulator you will charge the accumulator by 1 point (out of a maximum of 3). Mark it by filling one of the three circles on your Accumulator. After charging your Accumulator, this electrification ends. The Power Grid dice also have a result with a question mark. This can be used to electrify only one space, wherever you want. You may also choose to use this result to charge your Accumulator by 1 point, instead of electrifying a space. At the end of the game, you will gain points equal to the number of charges on your Accumulator multiplied by the number of Exits connected to the Accumulator itself (through consecutive orthogonally adjacent electrified spaces). Routes connected to your Accumulator do not count as Errors at the end of the game.</p>',
    //   rainbow:
    //     '<p>It’s a kind of magic! Cars and trains are flying on colorful rainbows, and the enchanted creatures living underneath clovers harness the power of those rainbows. But not all is cupcakes and sprinkles. Dark clouds are lurking beyond the horizon. Draw colorful rainbows on your boards and send ominous clouds to your opponents! At the start of each round, you must apply the effect shown on the Rainbow die. The Rainbow die has 3 types of faces: Rainbow: Draw a Rainbow in 1 empty space on your board of your choice OR erase a Rainy Cloud from a space of your choice and replace it with a Rainbow, as long as that space is not orthogonally adjacent to another space that already contains a Rainbow. Rain: Draw a Rainy Cloud on the board of the player to your left. The Rain Cloud must be drawn on an empty space that is orthogonally adjacent to a preexisting Rainbow. If such a space does not exist (and only in that case), you can draw the Rainy Cloud on any empty space. A Rainy Cloud has no effect, it just occupies a full space. Clover: Draw a Clover in 1 empty space on your board. Networks connected to the same space with a Rainbow are also connected to each other. Rainbows interrupt your longest Highway and/or Railway. At the end of the game, each Rainbow is worth 2 points for each Clover that is orthogonally adjacent to it. Rainbows, Rainy Clouds, and Clovers occupy the whole space (nothing else can be drawn in the same space). Open ended Routes leading into a space that contains a Rainy Cloud and/or a Clover do not count as Errors.</p>',
    //   renovation:
    //     '<p>Sometimes you just plan badly. But now, with the Renovation Expansion, you have the possibility to make it even worse. With the Renovation die you can add features to your existing Routes and create new Route configurations. Each round, you may decide to use the Renovation die, but only once per round. You may use the Renovation die only on spaces that already contain a Route and which are compatible with the constraints given by the dotted lines on the die. A Route is compatible if it can be completely placed inside the dotted lines. You can only renovate basic Routes. You can’t renovate Expansion die results. There are two special faces with a dotted square in the center: these can only be used to add connections to an existing Station.</p>',
    //   ritual:
    //     '<p>Cultists are trying to create a Madness Network, a set of Ritual Sites connected to an evil dimension through Portals. Try to create the biggest Madness Network while separating it from the ordinary people of your cities. Each Round, you will have the option to open new Portals at the edges of your board and add a Ritual to your Madness Network. At the end of the game, you will gain points for your connected Rituals and Portals, but any Exit that is connected to either of those will not count when scoring regular Networks. When you draw Routes, you must draw the result of the Ritual die, but it doesn’t need to be connected to preexisting Routes. At the end of each round, you may draw 1 Portal next to one of your “Country Routes” (i.e., Routes with an open end connected to the outer edge of your board in a space without an Exit). Draw the Portal as an arc outside of the grid (fig. 1a). At the end of the game, you gain points for each Madness Network, i.e., each set of Rituals and Portals connected to each other. Use the Network Values track to determine you score (Rituals and Portals count as Exits when scoring your Madness Networks). When scoring regular networks, ignore any Exits that are connected to at least 1 Ritual and/or Portal.</p>',
    //   river:
    //     '<p>Rivers are a third kind of Route. Sort of. They can’t be used to connect Exits, but they can be connected to each other to create a River. Rivers can’t be crossed by Highways or Railways, unless a Bridge face on a River die allows you to do so. The additional goal is to make the Longest River possible. When you draw Routes, you do not have to draw any of the River dice if you don’t want to (you still have to use all 4 Route dice). The Rivers you draw don’t have to be connected to preexisting Routes and/or other Rivers. You can’t connect River Routes with other kinds of Routes (nor Exits ). When checking for Errors, each end of a River that does not connect to another River or the outer edge of the Board counts as an Error. At the end of the game, choose 1 of your Rivers. You gain 1 point for each space the River runs through. If both ends of the River are connected to the outer edge of the board, you get 3 additional points.</p>',
    //   separation:
    //     '<p>Make your life as a city planner a hell on earth with the Separation die! This die is not added to the pool: instead it replaces one of the basic “white“ Route dice of your choice. The Separation die is considered a Route die (it can be duplicated by Factories and triggers all the effects of Route dice). Like with all the Route dice, using the Separation die is mandatory.</p>',
    //   special:
    //     '<p>Build bigger Networks with the Special die. This die is not added to the pool: instead it replaces one of the basic “white“ Route dice of your choice. The Special die is considered a Route die (it can be duplicated by Factories and triggers all the effects of Route dice). Like with all the Route dice, using the Special die is mandatory. When combining expansions, you can’t sacrifice the result of the Special die to trigger special effects (like avoiding the Sun result in the Desert Expansion). Note: When playing with the Special die, you can still use the Special Routes on the top of your board.</p>',
    //   'street-lamps':
    //     '<p>Shine a spotlight on your Longest Highways with the Street Lamps Expansion. Draw additional Highways accompanied by Street Lamps but remember that you also have to turn them on to gain bonus points. With the addition of two dice containing only Highways, you will reach unprecedented Longest Highways, and you will also gain points for your activated lights. When you draw Routes, you may draw the result of the Street Lamp dice, following the normal placement rules. Every time you use a Special Route (also when activating your third University), you must choose a row or a column and put an asterisk on all spaces containing Street Lamps in that row or column. These lamps are now activated. You don’t have to choose the same row or column where you put the Special ROute. Every Street Lamp can only be activated once (only one asterisk per space). At the end of the game, you gain 1 point for each Street Lamp that you activated.</p>',
    //   superconnection:
    //     '<p>The Superconnection technology is a new and very efficient way to travel. Both cars and trains can be loaded on top of super-fast, magnetically suspended vehicles. Superconnections can be used to connect both Highways and Railways thanks to “Superstations” (drawn as a triangular shape). At the end of the game, Superconnections will count towards both your Longest Highway and your Longest Railway. You must use the result of the Superconnection die each round, following the normal placement rules. When drawing Superconnection Routes, you may connect them to any type of Route through Superstations: the triangular structures on the ends of Superconnection Routes. Superconnection Routes can be considered as both Highways and Railways when scoring the Longest Highway and Railway.</p>',
    //   tentacle:
    //     '<p>Tentacles are entering your little safe oasis of sanity, but a little madness is ok. Try to have as many Tentacles as possible in your territory and make people lose their minds while driving next to them. Each round, the Tentacle die will tell you the length of the Tentacle to draw that Round; at the end of the round, you may add it to your board. If you do, you will choose its starting position and its shape. Tentacles can share spaces with Railways and Highways. At the end of the game, you will gain points for each Tentacle you drew, plus bonus points for each space occupied by both a Tentacle and a Highway or Railway. At the end of each round, after drawing your Routes, you may draw 1 Tentacle. When drawing a Tentacle, you must start from a space on the outer edge of your board that does not contain an Exit. The Tentacle must also have a length equal to the number shown on the Tentacle die (3, 4, or 5), it cannot be drawn partially. A Tentacle can be drawn with straight and/or curved stretches, mixed as you like. Tentacle stretches can only be drawn into: 1. Empty spaces; these can be drawn as either a straight Tentacle or a curved Tentacle. 2. Spaces that contain a straight Route (or Tentacle); these must be drawn as an “underpass” that crosses the preexisting Route/Tentacle perpendicularly (fig. 1b). 3. Spaces that contain a curved Route (or Tentacle); these must be drawn as a “curved Tentacle” that goes through the two unoccupied sides of the space (fig. 2b). When you are drawing the final space of a Tentacle, close it by drawing an “ending tip” (as seen in fig. 3b). When you draw Routes, on the other hand, you can’t draw them in a space that contains a preexisting Tentacle. At the end of the game, you will get 2 points for each Tentacle you drew (regardless of its length), plus 1 point for each space that contains both a Tentacle and a Route.</p>',
    //   tetromino:
    //     '<p>Are you ready for some next-level urban planning? Declare where you are going to build in advance: if you respect your commitment you will gain points at the end of the game. If not, you will lose points instead. Before you draw any Routes each round, you may draw the result of the Tetromino die (you still have to use all 4 Route dice). When you do use the Tetromino die, you must “enhance” empty spaces on your board, following the same pattern shown on the die, by drawing a small square around the white space used to mark the number of the round (spaces that are already enhanced cannot be enhanced again). You can freely rotate and/or reverse the pattern shown on the Tetromino die, just like with regular Routes, but you must use the full pattern shown on the Tetromino die: you cannot use only part of it. If you can’t find a patch of empty spaces that matches the pattern, you cannot use the Tetromino die this round. At the end of the game, you gain 1 point for each enhanced space that also contains something (either Routes or other drawn elements). You lose 1 point for each empty enhanced space.</p>',
    //   trail:
    //     '<p>Build panoramic trails and turn your board into a hiker’s dream! Your goal is to connect Stations to each other through a parallel network of Trails, to score bonus points. Trails travel through the corners of your spaces, not through their sides, and they auto-connect to Stations when they are touching a corner of a space containing one. When you draw Routes, you do not have to draw any of the Trail dice if you don’t want to (you still have to use all 4 Route dice). The Trail dice you draw must be connected to preexisting Routes and/or Trails. Trails with open ends do not count as Errors at the end of the game. When a Trail is touching the corner of a space containing a Station, it immediately auto-connects to that Station through the shortest diagonal path. At the end of the game, each set of Stations connected to each other via the same network of Trails is worth an amount of points determined by the number of Stations connected together, scoring half of the Network Values shown on your Board.</p>',
    //   underground:
    //     '<p>To play with the Underground dice as an Expansion, you need two boards for each player: one board for the Surface and one for the Underground. Think of them as two layers, one on top of the other. You will play with the basic white Route dice on the Surface board (following the normal RRI or RRI Challenge rules) and with the Underground Expansion dice and rules on the Underground board. Every player must draw the results of these dice on their Underground board, following the Underground placement restrictions (see below). At any point during an Underground round, you may choose to use a duplication power to duplicate one of the Underground die results for the current round. Mark it by crossing off one of the Special Routes at the top of your Underground board. You can only use a total of 3 duplications per game and a maximum of 1 per round. Using a duplication power does not count as using a Special Route on the Surface board. When playing with Railroad Ink Challenge boards as Underground boards, ignore all of the Special Buildings. There are two types of interactions between the two boards: you can create Hubs and gain points by matching the positions of Subway Stations and surface Stations; additionally, you will break a pipe and lose points if you draw a surface Station above a Water Pipe space. Follow these rules for these two types of interactions: To keep track of the interactions between Surface and Underground, you should follow this courtesy rule: Whenever you draw a Subway Station on the Underground board, draw a circle in the bottom right corner of the corresponding space on your Surface board. Whenever you draw a Station on the Surface board, draw a circle in the bottom right corner of the corresponding space on your Underground board. If a Station on the Surface and a Subway Station on the Underground share the same space on their respective boards, fill the Subway Station (make it a filled circle). This is now a Hub. When you draw a Station on your Surface board, check if there is a Water Pipe beneath it. If there is, it becomes a Broken Water Pipe: draw a zig zag line in the Water Pipe (as seen in the picture to the lower right) to mark it as broken. Drawing a Water Pipe underneath an alreadybuilt surface Station will not break the pipe. After 14 rounds, use the following rules to calculate your Underground score: Networks: All Exits connected to each other by Water Pipes form a Network. The size of the Network is equal to the number of connected Exits. You score points for each of these Networks according to the Network Values track. All Exits and Hubs connected to each other by Subway Routes create a Network. The size of the Network is equal to the number of connected Exits and Hubs. You score points for each of these Networks according to the Network Value track. Mark the resulting total in your Network scoring space. Longest Water Pipeline: Use the rules for calculating Longest Routes to calculate your Longest Water Pipeline. Double that score and write it in the Longest Highway scoring space. Broken Water Pipes do not interrupt your Longest Water Pipeline. Longest Subway Line: Use the rules for calculating Longest Routes to calculate your Longest Subway Line and write that score in the Longest Railway scoring space. Center: Gain points for the central area as usual; write the score in the Central Spaces scoring space. Errors: you lose 1 point for each open-ended Subway Route or Water Pipe. You lose 2 points for each broken Pipe. Subway Routes and Water Pipes that connect to the edge of the board do not count as Errors. Add up all the negative points from your Errors and mark the result in the Error scoring space. Add up all the points you earned and write them in the Total score space of your Underground board. Then, also write this total in the Expansion scoring space of your Surface board. Calculate the points for your Surface board as 2 u4 s6u8al and add the Expansion points to the total.</p>',
    //   weather:
    //     '<p>With the new meteorological control system you are able to control the skies over your county. Try to avoid putting different types of clouds next to each other to avoid unstable weather. Every round you will have to assign the two Weather dice results to two of the normal Routes you draw. At the end of the game, you will score the biggest area for each type of meteorological phenomena, but avoid making those areas touch or they will not count for scoring. Each round, you must draw the two Weather symbols rolled (Cloud, Storm, or Snow) in two of the spaces where you drew Routes this round (including any Special Routes). Draw the Weather symbol in the lower right corner of the spaces you chose (fig. 1a). Remember : You can only add Weather to the spaces where you drew Routes during the current round. At the end of the game, you will get 1 point for each space in your biggest area of orthogonally adjacent Cloud spaces. You will do the same with the biggest Storm and Snow areas. If two areas of different types are orthogonally and/or diagonally adjacent to each other, they do not count for scoring.</p>',
    // },
};
const baseGameResData = {
    classic: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'classic_defaultA_',
            'classic_defaultB_',
        ],
        goals: [
            'classic_defaultA',
            // 'classic_defaultB', removed as it is impossible to score
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        blueprints: [],
        effective_dice: 4,
        board_size: 39, // 49
    },
    challenge: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
        ],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        blueprints: [],
        effective_dice: 5,
        board_size: 47, // 49
    },
    giant: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
        ],
        blueprints: [],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        effective_dice: 5,
        board_size: 77, // 81
    },
    epic: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
            'classic_defaultA_',
            'classic_defaultA_',
        ],
        blueprints: [],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        effective_dice: 7,
        board_size: 87, // 121
    },
};
const expansionsGameResData = {
    none: {
        dice: [],
        goals: [],
        effective_dice: 0.5,
    },
    airline: {
        dice: ['sky_airportA_', 'sky_airportB_'],
        goals: [],
        effective_dice: 0.5,
    },
    'alien-farmer': {
        dice: ['future_alienFarmerA_'],
        goals: [],
        effective_dice: 1,
    },
    canyon: {
        dice: ['yellow_canyonA_', 'yellow_canyonA_'],
        goals: ['yellow_canyonA', 'yellow_canyonB', 'yellow_canyonC'],
        effective_dice: 0.5,
    },
    'city-builder': {
        dice: ['future_cityBuilderA_', 'future_cityBuilderB_'],
        goals: [],
        effective_dice: 1,
    },
    construction: {
        dice: ['engineer_constructionA_'],
        goals: [],
        effective_dice: 0.5,
    },
    desert: {
        dice: ['yellow_desertA_', 'yellow_desertB_'],
        goals: ['yellow_desertA', 'yellow_desertB', 'yellow_desertC'],
        effective_dice: 1,
    },
    forest: {
        dice: ['green_forestA_', 'green_forestA_'],
        goals: ['green_forestA', 'green_forestB', 'green_forestC'],
        effective_dice: 2,
    },
    'galactic-invaders': {
        dice: ['arcade_galacticInvaderA_'],
        goals: [],
        effective_dice: 0.5,
    },
    investigation: {
        dice: ['cthulu_investigationA_'],
        goals: [],
        effective_dice: 1,
    },
    lake: {
        dice: ['blue_lakeA_', 'blue_lakeA_'],
        goals: ['blue_lakeA', 'blue_lakeB', 'blue_lakeC'],
        effective_dice: 2,
    },
    lava: {
        dice: ['red_lavaA_', 'red_lavaA_'],
        goals: ['red_lavaA', 'red_lavaB', 'red_lavaC'],
        effective_dice: 2,
    },
    meteor: {
        dice: ['red_meteorA_', 'red_meteorB_'],
        goals: ['red_meteorA', 'red_meteorB', 'red_meteorC'],
        effective_dice: 1,
    },
    'pluck-man': {
        dice: ['arcade_plucManA_'],
        goals: [],
        effective_dice: 0.5,
    },
    portal: {
        dice: ['cthulu_portalA_'],
        goals: ['cthulu_portalA', 'cthulu_portalB', 'cthulu_portalC'],
        effective_dice: 1,
    },
    'power-grid': {
        dice: ['electricity_powerGridA_', 'electricity_powerGridA_'],
        goals: [],
        effective_dice: 0.5,
    },
    rainbow: {
        dice: ['arcade_rainbowA_'],
        goals: [],
        effective_dice: 1,
    },
    renovation: {
        dice: ['engineer_renovationA_', 'engineer_renovationA_'],
        goals: [],
        effective_dice: 0.5,
    },
    ritual: {
        dice: ['cthulu_ritualA_'],
        goals: [],
        effective_dice: 1,
    },
    river: {
        dice: ['blue_riverA_', 'blue_riverA_'],
        goals: ['blue_riverA', 'blue_riverB', 'blue_riverC'],
        effective_dice: 2,
    },
    separation: {
        dice: ['engineer_separationA_'],
        goals: [],
        effective_dice: 0.5,
    },
    special: {
        dice: ['engineer_specialA_'],
        goals: [],
        effective_dice: 0.5,
    },
    'street-lamps': {
        dice: ['electricity_streetLampsA_', 'electricity_streetLampsA_'],
        goals: [],
        effective_dice: 2,
    },
    superconnection: {
        dice: ['future_superconnectionA_'],
        goals: [],
        effective_dice: 1,
    },
    tentacle: {
        dice: ['cthulu_tentaclesA_'],
        goals: [],
        effective_dice: 0.5,
    },
    tetromino: {
        dice: ['arcade_tetrominoA_'],
        goals: [],
        effective_dice: 0.5,
    },
    trail: {
        dice: ['green_trailsA_', 'green_trailsA_'],
        goals: ['green_trailsA', 'green_trailsB', 'green_trailsC'],
        effective_dice: 2,
    },
    underground: {
        dice: [
            'underground_defaultA_',
            'underground_defaultB_',
            'underground_defaultC_',
            'underground_defaultD_',
        ],
        goals: [],
        effective_dice: 0.5,
    },
    weather: {
        dice: ['sky_weatherA_', 'sky_weatherA_'],
        goals: [],
        effective_dice: 0.5,
    },
};
// COMPS
function setupDiceList({ mainSetting, firstExpansion, secondExpansion, }) {
    return baseGameResData[mainSetting].dice.concat(expansionsGameResData[firstExpansion].dice, expansionsGameResData[secondExpansion].dice);
}
function setupGoalsList({ mainSetting, firstExpansion, secondExpansion, goalSetting, }) {
    if (goalSetting === 'disabled') {
        return [];
    }
    const getGoals = (expansion) => expansion !== 'none' ? expansionsGameResData[expansion].goals : [];
    const firstGoals = getGoals(firstExpansion);
    const secondGoals = getGoals(secondExpansion);
    const mainGoals = baseGameResData[mainSetting].goals;
    const myGoalsList = [];
    if (firstExpansion === secondExpansion) {
        myGoalsList.push(...randUniqueItems(firstGoals, 2));
    }
    else {
        myGoalsList.push(...randUniqueItems(firstGoals, 1));
        myGoalsList.push(...randUniqueItems(secondGoals, 1));
    }
    myGoalsList.push(...randUniqueItems(mainGoals, 3 - myGoalsList.length));
    // Goals
    const goalsRow = document.getElementById('game-goals');
    for (let i = 0; i < myGoalsList.length; i++) {
        const goalBox = document.createElement('div'); // Create a new goalBox for each iteration
        goalBox.classList.add('goal-box');
        const goalIMG = document.createElement('img');
        const goalCaption = document.createElement('div');
        goalIMG.height = 350;
        goalIMG.width = 250; // Fixed the typo: height to width
        goalIMG.src = `res/images/cards/goals/${myGoalsList[i]}.jpg`;
        goalBox.appendChild(goalIMG);
        goalBox.appendChild(goalCaption);
        goalCaption.innerHTML = rulesResData['goals'][myGoalsList[i]];
        goalsRow.appendChild(goalBox);
    }
    unhide_elem('game-goals');
    return myGoalsList;
}
function setupBlueprint({ mainSetting, blueprintSetting, }) {
    var _a;
    const blueprints = (_a = baseGameResData[mainSetting]) === null || _a === void 0 ? void 0 : _a.blueprints;
    if (blueprints && blueprints.length > 0) {
        const myBlueprint = randItem(blueprints);
        // TODO
        return myBlueprint;
    }
    return '';
}
function setRowLength({ mainSetting }) {
    return baseGameResData[mainSetting].dice.length;
}
function setMaxRounds({ mainSetting, firstExpansion, secondExpansion, }) {
    var _a;
    const effectiveDie = baseGameResData[mainSetting].effective_dice +
        expansionsGameResData[firstExpansion].effective_dice +
        expansionsGameResData[secondExpansion].effective_dice;
    const boardSize = (_a = baseGameResData[mainSetting].board_size) !== null && _a !== void 0 ? _a : 0;
    return Math.floor(boardSize / effectiveDie);
}
function setupRules({ firstExpansion, secondExpansion }) {
    const rulepage = document.getElementById('rule-container');
    [firstExpansion, secondExpansion].forEach((element) => {
        if (element !== 'none') {
            unhide_elem('rules');
            const rulebox = document.createElement('div');
            const rule = document.createElement('div');
            rule.innerHTML = rulesResData['expansions'][element];
            rulebox.appendChild(rule);
            rulepage.appendChild(rulebox);
        }
    });
}
// MAIN
function resetGameSettings() {
    return {
        newGame: true,
        rulesSetting: '',
        mainSetting: '',
        goalSetting: '',
        blueprintSetting: '',
        firstExpansion: '',
        secondExpansion: '',
        diceList: [],
        goalList: [],
        blueprint: '',
        rowLength: 0,
        maxRounds: 0,
        seed: '',
    };
}
function setupGame() {
    const gameSettings = resetGameSettings();
    gameSettings.newGame = false;
    gameSettings.rulesSetting = getInputElementValue('rules-setting');
    gameSettings.mainSetting = getInputElementValue('main-setting');
    gameSettings.goalSetting = getInputElementValue('goals-setting');
    gameSettings.blueprintSetting = getInputElementValue('blueprint-setting');
    gameSettings.firstExpansion = getInputElementValue('first-expansion');
    gameSettings.secondExpansion = getInputElementValue('second-expansion');
    gameSettings.diceList = setupDiceList(gameSettings);
    gameSettings.goalList = setupGoalsList(gameSettings);
    gameSettings.blueprint = setupBlueprint(gameSettings);
    gameSettings.rowLength = setRowLength(gameSettings);
    gameSettings.maxRounds = setMaxRounds(gameSettings);
    gameSettings.seed = calculateSeed(getInputElementValue('game-seed'));
    setupRules(gameSettings);
    // Convert gameSettings to a JSON string and store in local storage
    localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
    return gameSettings;
}
