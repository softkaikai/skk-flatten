function flatten(arr, result) {
    var len = arr.length;
    result = result || [];
    for (var i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

module.exports = flatten;
