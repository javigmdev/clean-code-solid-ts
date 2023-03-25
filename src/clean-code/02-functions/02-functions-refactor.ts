(() => {
  /*
    const getPayAmount = ({
      isDead = false,
      isSeparated = true,
      isRetired = false,
    }) => {
      let result: number;
      if (isDead) {
        result = 1500;
      } else {
        if (isSeparated) {
          result = 2500;
        } else {
          if (isRetired) {
            result = 3000;
          } else {
            result = 4000;
          }
        }
      }
      return result;
    };
  */
  const getPayAmountBetter = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };

  /*
    function isRedFruit(fruit: string): boolean {
      if (fruit === 'apple' || fruit === 'cherry' || fruit === 'plum') {
        return true;
      } else {
        return false;
      }
    }
  */
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['apple', 'cherry', 'plum'];
    return redFruits.includes(fruit);
  }

  /*
    function getFruitsByColor(color: str ing): string[] {
      if (color === 'red') {
        return ['apple', 'strawberry'];
      } else if (color === 'yellow') {
        return ['pineaple', 'banana'];
      } else if (color === 'purple') {
        return ['blackberry', 'grape'];
      } else {
        throw Error('the color must be: red, yellow, purple');
      }
    }
  */
  type FruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: ['apple', 'strawberry'],
      yellow: ['pineaple', 'banana'],
      purple: ['blackberry', 'grape'],
    };

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error('the color must be: red, yellow, purple');
    }
    return fruitsByColor[color];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;
  /*
    function workingSteps() {
      if (isFirstStepWorking === true) {
        if (isSecondStepWorking === true) {
          if (isThirdStepWorking === true) {
            if (isFourthStepWorking === true) {
              return 'Working properly!';
            } else {
              return 'Fourth step broken.';
            }
          } else {
            return 'Third step broken.';
          }
        } else {
          return 'Second step broken.';
        }
      } else {
        return 'First step broken.';
      }
    }
  */
  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';
    return 'Working properly!';
  }

  console.log({ isRedFruit: isRedFruit('cherry'), fruit: 'cherry' }); // true
  console.log({ isRedFruit: isRedFruit('pineapple'), fruit: 'pineapple' }); // false

  console.log({ redFruits: getFruitsByColor('red') }); // ['apple', 'strawberry']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['pineaple', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['blackberry', 'grape']
  //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  console.log({ workingSteps: workingSteps() }); // change de value of the booleans
})();
