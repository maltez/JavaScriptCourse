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

Promise.all([
    delay('hi', 1),
    delay('hello', 2),
    delay('how are you', 3)])
    .then((data)=> {
        console.log(data);
    })
    .catch((e)=> {
        console.log('ERROR!');
    })