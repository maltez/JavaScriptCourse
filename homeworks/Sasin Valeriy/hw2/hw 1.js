function ff(n) {
    if (typeof n == 'number') {
        var result = '';
        if (n > 0) {
            for (var k = 1; k != n + 1; k++) {
                result += k + ','
            }
        }
        else {
            for (var k = 1; k != n - 1; k--) {
                result += k + ","
            }
        }
        return result = result.slice(0, -1);

    }
    else {
        return;
    }
}
alert(ff('10')) 