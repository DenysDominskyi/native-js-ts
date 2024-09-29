type UsersType = {
    [key: string]: {id: number, name: string}
}

// associative array
export const users: UsersType = {
    '101': { id: 101, name: 'Dimych' },
    '3232312': { id: 3232312, name: 'Natasha' },
    '1212': { id: 1212, name: 'Valera' },
    '1': { id: 1, name: 'Katya' },
}
const user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'


// array
export const usersArray = [
    { id: 101, name: 'Dimych' },
    { id: 3232312, name: 'Natasha' },
    { id: 1212, name: 'Valera' },
    { id: 1, name: 'Katya' }
]

// usersArray.find(u => u.id === 1)


function carCreator (key: string, value: any) {
    return { [key]: value }
}

const newCar = carCreator('audi', 'A8')
console.log(newCar)