

const prepareTea = () => 'greenTea';


const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40)

console.log(tea4TeamFCC);


const cash = () => ' $$$ ';

const getSomeMoney = (ammount) => {
    const safeBox = [];
    for(let money = 1; money <= ammount; money ++) {
        const myMoney = cash();
        safeBox.push(myMoney);
    }
    return safeBox;
}

const robthebank = getSomeMoney(cash(5));
console.log(robthebank);



