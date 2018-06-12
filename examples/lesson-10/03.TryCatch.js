const elena = {
    age: 17
}
try {
    //throw new Error('Elena has no money');
    elena.billionDollarsCash.length;
} catch(err) {
    console.log(err.message);
    console.log('Elena has no billiuon dollars');
}
