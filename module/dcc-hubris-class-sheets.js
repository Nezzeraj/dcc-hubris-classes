/* global Actors */

import * as AlchemistSheets from './actor-sheets-alchemist.js'
import * as ShadowdancerSheets from './actor-sheets-shadowdancer.js'
import * as MurderMachineSheets from './actor-sheets-murdermachine.js'
import * as MutantSheets from './actor-sheets-mutant.js'
import * as BloodWitchSheets from './actor-sheets-bloodwitch.js'
import * as DruidSheets from './actor-sheets-druid.js'
import * as AvarianSheets from './actor-sheets-avarian.js'
import * as EkraskSheets from './actor-sheets-ekrask.js'
import * as HalfDemonSheets from './actor-sheets-halfdemon.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)
  console.log(`Loading DCC Hubris Classes`)


  // Register sheet application classes
  Actors.registerSheet('dcc-hubris-classes-alchemist', AlchemistSheets.ActorSheetAlchemist, { types: ['Player'], label: 'alchemist.ActorSheetAlchemist' })
  Actors.registerSheet('dcc-hubris-classes-avarian', AvarianSheets.ActorSheetAvarian, { types: ['Player'], label: 'avarian.ActorSheetAvarian' })
  Actors.registerSheet('dcc-hubris-classes-bloodwitch', BloodWitchSheets.ActorSheetBloodWitch, { types: ['Player'], label: 'bloodwitch.ActorSheetBloodWitch' })
  Actors.registerSheet('dcc-hubris-classes-druid', DruidSheets.ActorSheetDruid, { types: ['Player'], label: 'druid.ActorSheetDruid' })
  Actors.registerSheet('dcc-hubris-classes-ekrask', EkraskSheets.ActorSheetEkrask, { types: ['Player'], label: 'ekrask.ActorSheetEkrask' })
  Actors.registerSheet('dcc-hubris-classes-halfdemon', HalfDemonSheets.ActorSheetHalfDemon, { types: ['Player'], label: 'halfdemon.ActorSheetHalfDemon' })
  Actors.registerSheet('dcc-hubris-classes-murdermachine', MurderMachineSheets.ActorSheetMurderMachine, { types: ['Player'], label: 'murdermachine.ActorSheetMurderMachine' })
  Actors.registerSheet('dcc-hubris-classes-mutant', MutantSheets.ActorSheetMutant, { types: ['Player'], label: 'mutant.ActorSheetMutant' })
  Actors.registerSheet('dcc-hubris-classes-shadowdancer', ShadowdancerSheets.ActorSheetShadowdancer, { types: ['Player'], label: 'shadowdancer.ActorSheetShadowdancer'})
})

