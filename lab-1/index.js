// Crisp Set Input
const X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const setA = [1, 2, 3];
const setB = [5, 2, 1];

const mappingForX = mapping(X);
const mappedA = mappingForX(setA);
const mappedB = mappingForX(setB);

console.log(`Mapped of set A = ${mappedA.toString()}`)
console.log(`Mapped of set B = ${mappedB.toString()}`)

const unionResult = set(mappedA).union(mappedB);
console.log(`Result of union of A and B = ${unionResult.toString()}`);

const intersectionResult = set(mappedA).intersection(mappedB);
console.log(`Result of intersection of A and B = ${intersectionResult.toString()}`);

const complementResult = set(mappedA).complement();
console.log(`Result of complement of A = ${complementResult.toString()}`);

const isBsubsetOfA = set(mappedB).isSubsetOf(mappedA);
console.log(`B is subset of A = ${isBsubsetOfA}`);


// Mapping Function
function mapping(superset) {
    return function(set) {
        return superset.map(function (item) {
            return set.includes(item) ? 1 : 0;
        });
    }
}



// Set operations
function set(firstSet) {
    return {
        union(secondSet) {
            if (firstSet.length !== secondSet.length) {
                throw new Error("provided sets are not equal")
            }
            return firstSet.map(function (item, index) {
                return Math.max(item, secondSet[index]);
            })
        },
        intersection(secondSet) {
            if (firstSet.length !== secondSet.length) {
                throw new Error("provided set are not equal");
            }
            return firstSet.map(function (item, index) {
                return Math.min(item, secondSet[index]);
            })
        },
        complement() {
            return firstSet.map(function (item) {
                return 1 - item;
            });
        },
        isSubsetOf(secondSet) {
            return firstSet.every((item, index) => item <= secondSet[index]);
        }
    }
}
