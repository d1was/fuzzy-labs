const setA = [
  {
    label: 1,
    memValue: 0.1,
  },
  {
    label: 2,
    memValue: 0.2,
  },
  {
    label: 3,
    memValue: 0.3,
  },
  {
    label: 4,
    memValue: 0.4,
  },
  {
    label: 5,
    memValue: 0,
  },
];

const setB = [
  {
    label: 1,
    memValue: 0.9,
  },
  {
    label: 2,
    memValue: 0.2,
  },
  {
    label: 3,
    memValue: 0.3,
  },
  {
    label: 4,
    memValue: 0.4,
  },
  {
    label: 5,
    memValue: 0,
  },
];

const mappedA = validation(setA);
const mappedB = validation(setB);

function validation(set) {
  let invalidSet = set.filter((item) => item.memValue < 0 || item.memValue > 1);
  if (invalidSet.length != 0) {
    throw new Error("Fuzzy set mem value must be between 0 and 1");
  }
  return set;
}

const unionResult = set(mappedA).union(mappedB);
console.log(`Result of union of A and B = `);
console.log(unionResult);

const intersectionResult = set(mappedA).intersection(mappedB);
console.log(`Result of intersection of A and B = `);
console.log(intersectionResult);

const complementResult = set(mappedA).complement();
console.log(`Result of complement of A =`);
console.log(complementResult);

const isBsubsetOfA = set(mappedB).isSubsetOf(mappedA);
console.log(`B is subset of A = ${isBsubsetOfA}`);

const aplhaCutB = set(mappedB).alphaCut(0.5);
console.log(`Alphacut of  set B `);
console.log(aplhaCutB);

// Set operations
function set(firstSet) {
  return {
    union(secondSet) {
      if (firstSet.length !== secondSet.length) {
        throw new Error("provided sets are not equal");
      }
      return firstSet.map(function (item, index) {
        return {
          label: item.label,
          memValue: Math.max(item.memValue, secondSet[index].memValue),
        };
      });
    },
    intersection(secondSet) {
      if (firstSet.length !== secondSet.length) {
        throw new Error("provided set are not equal");
      }
      return firstSet.map(function (item, index) {
        return {
          label: item.label,
          memValue: Math.min(item.memValue, secondSet[index].memValue),
        };
      });
    },
    complement() {
      return firstSet.map(function (item) {
        return {
          label: item.label,
          memValue: 1 - item.memValue,
        };
      });
    },
    isSubsetOf(secondSet) {
      return firstSet.every((item, index) => item <= secondSet[index]);
    },
    alphaCut(alpha = 0.5) {
      return firstSet.filter(function (item) {
        return item.memValue - alpha > 0;
      });
    },
  };
}
