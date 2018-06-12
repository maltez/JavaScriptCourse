Promise.resolve('str')
    .then((data) => {
        console.log(data);
    });

Promise.reject('errr')
    .catch((err) => {
        console.log(err);
    })