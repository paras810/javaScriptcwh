function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true
            if (!error) {
                console.log('Function: your promise has been resolved');
                resolve()
            } else {
                console.log('your promise has not been resolved');
                reject('sorry not fullfilled')
            }
        }, 2000);

    })
}
func1().then(function () {
    console.log('paras : Thanks for resolving');
}).catch(function (error) {
    console.log('paras : very bad bro '+ error);
})

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()