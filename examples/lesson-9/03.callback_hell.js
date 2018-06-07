setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(()=> {
            console.log(3);
            setTimeout(()=> {
                console.log(4);
                setTimeout(()=> {
                    console.log(5);
                    setTimeout(()=> {
                        console.log(6);
                        setTimeout(()=> {
                            console.log(7);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}, 500);