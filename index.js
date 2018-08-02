function flatten(arr, result) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(flatten([1,2,[3,4,[5,6]], 7,8], []));

module.exports = flatten;