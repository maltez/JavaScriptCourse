function stringBuilder(n) {
    
        if (typeof n !== 'number') {
            return;
    }  
    var a = '';
     if (n > 1) {
        for (var i = 1; i <= n; i++) { 
            a += i + ',';
    }
        console.log(a);
    }  else if (n < 1) {
        for (var i = 1; i >= n; i--){
            a += i + ',';
        }
        console.log(a);
    }
    
}

stringBuilder();

module.exports = stringBuilder;

