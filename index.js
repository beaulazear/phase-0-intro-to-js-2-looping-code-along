function writeCards(names, type) {
    const newNames = [];
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
   return(newNames);
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}