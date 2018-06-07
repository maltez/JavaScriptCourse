for (var i = 0; i  < 5; i += 1) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

setTimeout(function(){
    console.log('Hello');
}, 1000);

setTimeout(function(){
    console.log('Hello1');
}, 500);

setTimeout(function(){
    console.log('Hello2');
}, 100);