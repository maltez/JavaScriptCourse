let i = 0;
function delay (message, sec) {
    return new Promise((res, rej)=>{
        
        if(sec > 7) {
            return rej(new Error('Function canceled by timeout'));
        }
        setTimeout(()=> {
            i++;
            return res(`${message} ${i}`);
        }, sec* 1000);
    });
}

delay('goodbye', 2)
    .then((data)=> {
        console.log(data);
        return delay('hi', 0.5);
    }).then((data) => {
        console.log(data);
        return 'Last stay promise data';
    })
    .catch((err) => {
        console.log(err.message);
        return 'Something goes wrong';
    })
    .then((data) => {
        console.log(data);
    })