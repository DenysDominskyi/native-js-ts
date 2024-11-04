const resolvedPromise = Promise.resolve({})
resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.log(error))

// const rejectedPromise = Promise.reject({ message: 'Some error' })
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'D'}, {name: 'N'}])
    }
}