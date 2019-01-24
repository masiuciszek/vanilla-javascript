

// async function makeBeans(){
//     let type = await shopForBeans();
//     let isSoft = await soakTheBeans(type);
//     // let prepare = await fixTheBeansToBeDelicious('chili')
//     let dinner = await cookTheBeans(isSoft);

//     return dinner;
// }

// console.log(makeBeans());





async function serveDinner(){
 const broccoliPromise =  steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeVeggies();
 const sidePromise = cookBeans();

 return `we having a ${await broccoliPromise} as a side
 some ${await starchPromise} as the starch , ${await proteinPromise} as some
 nice veggies and som extra side dish with ${await sidePromise}`;
}


console.log(serveDinner());