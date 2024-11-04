

// Promise
const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(1)
    .then((user) => {
        console.log(user)
    })
    .canth((error) => {
        console.log(error)
    })
    .finnaly(() => {
        console.log('finish')
    })

// Promise.all
const otherPromise = Promise.all([promise1, promise2])
otherPromise
    .then((results) => {
        const dataFromResult1 = results[0]
        const dataFromResult2 = results[1]
        console.log('finish')
    })
    .catch(() => {
        console.log('initialuzation failed. Try later')
    })

// Promise.allSetled

const otherPromise2 = Promise.allSettled([promise1, promise2])
otherPromise2
    .then((results) => {
        console.log(results)

        const dataFromPromise1 =
            results[0].status === 'fulfilled'
                ? results[0].value
                : { data: { vacansies: null } }

        const dataFromPromise2 = 
            results[1].status === 'fulfilled'
            ? results[1].value
            : {name: results[1].reason}
    })