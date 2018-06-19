function delay(string, sec, fn) {
    setTimeout(() => {
        fn(string)
        setTimeout(()=> {
            fn(string)
            setTimeout(() => {
                fn(string)   
            }, sec * 1000);
        }, sec * 1000);
    }, sec * 1000);
}

var i = 1;
var cb = function(msg) {
    console.log(`${msg} ${i}`);
    i++;
}

delay('hello', 0.5, cb);