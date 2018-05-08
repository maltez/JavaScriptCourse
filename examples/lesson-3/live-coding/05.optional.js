var sayZorro = function(count, name = 'Zorro') {
    for(var i = 0; i < count; i++) {
        console.log(`Hey ${name}`);
    }
}

sayZorro(3);
sayZorro(5, 'Nick');