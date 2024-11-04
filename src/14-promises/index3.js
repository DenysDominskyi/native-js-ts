import { randomInt } from "crypto"

export const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'D', friend: 3}, 
        {id: 2, name: 'R', friend: null}, 
        {id: 3, name: 'M', friend: 2},
    ]
    return new Promise((res, rej) => {
        setTimeout(()=>{
            let user = users.find(u => u.id) === id
            if(user === null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// ---callbackhell---

// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         findUserInDB(user.friend)
//             .then(user => {
//                 console.log(user)
//                 findUserInDB(user.friend)
//                     .then(user => {
//                         console.log(user)
//                     })
//             })
//     });
//-------------------------------------------------------------------

// ---chain of promises---

// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//     .then(friend2 => console.log(friend2.friend))

//-------------------------------------------------------------------

// ---async, await---

// async function run() {
//     let user = await findUserInDB(1)
//     console.log(user.name)
//     let friend1 = await findUserInDB(user.friend)
//     console.log(friend1.name)
//     let friend2 = await findUserInDB(friend1.friend)
//     console.log(friend2.name)
// }
//
//run()