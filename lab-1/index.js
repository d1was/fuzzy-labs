// Crisp Set Input
const superset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const setA = [1, 2, 3];
const setB = [5, 2, 1];

const mappedA = mapping(superset, setA);
const mappedB = mapping(superset, setB);

console.log(`Mapped of set A = ${mappedA.toString()}`)
console.log(`Mapped of set B = ${mappedA.toString()}`)

const unionResult = union(mappedA, mappedB);
console.log(`Result of union of A and B = ${unionResult.toString()}`);

const intersectionResult = intersection(mappedA, mappedB);
console.log(`Result of intersection of A and B = ${intersectionResult.toString()}`);

const complementResult = complement(mappedA);
console.log(`Result of complement of A = ${complementResult.toString()}`);

// Mapping Function
function mapping(superset, set) {
    if (!setA.every((item) => superset.includes(item))) {
        throw new Error("Given set is not the subset of given superset.")
    }
    return superset.map(function (item) {
        return set.includes(item) ? 1 : 0;
    });
}

// Union of two set
function union(setA, setB) {
    if (setA.length !== setB.length) {
        throw new Error("provided sets are not equal")
    }
    return setA.map(function (item, index) {
        return Math.max(item, setB[index]);
    })
}

// Intersection of two set
function intersection(setA, setB) {
    if (setA.length !== setB.length) {
        throw new Error("provided set are not equal");
    }
    return setA.map(function (item, index) {
        return Math.min(item, setB[index]);
    })
}

// Complement of two set
function complement(setA) {
    return setA.map(function (item) {
        return 1 - item;
    });
}
