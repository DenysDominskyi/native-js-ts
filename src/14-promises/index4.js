// ---async, await---

function getNumber() {
    // const promise = Promise.resolved(Math.random())

    const promise = new Promise((resolve, reject) => {
        // reject('some error')
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })

    return promise
}

// getNumber().then(n => console.log(n))




const repo = {
    save(data) {
        try {
            localStorage.setItem('some key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some key', JSON.stringify(data))
                resolve()
            } catch (error) {
                return reject(error)
            }
        })
        return promise
    },
    read() {
        const data = localStorage.getItem('some key')
        if (!data) {
            rej(null)
        } else {
            res(JSON.parse(data))
        }
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('some key')
            if (!data) {
                rej(null)
            } else {
                res(JSON.parse(data))
            }
        })
    }
}
function wait(ms) {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res()
        }, ms)
    })
}

// repo.saveAsync({ name: 'IT-KAMASUTRA' })
//     .then(() => console.log('SAVED'))
//     .catch(error => console.log('NOT SAVED: ' + error))

// const run = async () => {
//     await repo.saveAsync({ name: 'IT-KAMASUTRA' })
//     console.log('SAVED')

//     const data = await repo.readAsync()
//     console.log(data)
// }
// run()

// async function run() {
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }

// run()