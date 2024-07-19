const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];

function hasDuplicates(arr) {
    const set = new Set();
    for (const item of arr) {
        const serializedItem = JSON.stringify(item);
        if (set.has(serializedItem)) {
            return true;
        }
        set.add(serializedItem);
    }
    return false;
}

console.log(hasDuplicates(array)); // Output: true