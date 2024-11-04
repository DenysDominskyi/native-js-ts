const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'D', friend: 4}, 
        {id: 2, name: 'R', friend: null}, 
        {id: 3, name: 'M', friend: 2},
    ]
    return new Promise((res, rej) => {
        setTimeout(()=>{
            let user = users.find(u => u.id === id)
            if(user == null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



// findUserInDB(1)
//     .then(user => {
//         console.log(user.name)
//         return user.friend
//     })
//     .then(friendId => findUserInDB(friendId))
//     .catch(error => {
//         return {name: 'B', friend: 3}
//     })
//     .then(friend1 => {
//         console.log(friend1.name)
//         return friend1.friend
//     })
//     .then(friend1Id => findUserInDB(friend1Id))
//     .then(friend2 => console.log(friend2.name))
//     .catch(error => console.log(error))
    
// async function run() {
//     try {
//         let user = await findUserInDB(1)
//         console.log(user.name)
//         let friend1;
//         try {
//             friend1 = await findUserInDB(user.friend)
//         } catch (error) {
//             friend1 = {name: 'B', friend: 3}
//         }
//         console.log(friend1.name)
//         let friend2 = await findUserInDB(friend1.friend)
//         console.log(friend2.name)
//     } catch (error) {
//         alert(error)
//     }
// }

// run()

//-------------------------------------

const api = {
    async save() { //возвращает промис
        
    },
    async read() {
        return {name: 'it-kamasutra'}
    }
}

async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)
}
run()