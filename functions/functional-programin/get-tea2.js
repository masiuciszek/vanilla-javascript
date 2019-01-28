const prepareGreenTea = () => 'greenTea';


const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};



const tea4GreenTeamFCC = getTea(prepareGreenTea, 2)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 5)



console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


const avocadoSanwich = () => 'avocado Sandwich'
const buddhabowl = () => 'my delicious buddhabowl'

const getFood = (cb,ammount) => {
    const dinnerTable = [];
    for(let food = 1; food <= ammount; food++){
       const plate = cb();
       dinnerTable.push(plate)
    }
    return dinnerTable;
}

const eatSomeFood1 = getFood(avocadoSanwich,3)
const eatSomeFood2 = getFood(buddhabowl,2)

console.log(eatSomeFood1)
console.log(eatSomeFood2)