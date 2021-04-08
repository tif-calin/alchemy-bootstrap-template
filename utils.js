
export function findByProperty(arr, val, key = 'id', all = false) {
    // will return either the first instance or all instances of items in an array who have a property with a certain value
    let ret = [];

    for (let item of arr) {
        if (item[key] === val) {
            if (!all) return item;
            ret.push(item);
        };
    };

    return ret;
};