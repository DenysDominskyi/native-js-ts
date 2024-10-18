function increaseAge (u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}
test("reference type test", () => {
    let user: UserType = {
        name: 'Yoda',
        age: 900,
        address: {
            title: 'Dagar'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(901)

    const superman = user

    superman.age = 1000
    
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [
        {
            name: 'Yoda',
            age: 900
        },
        {
            name: 'Verder',
            age: 200
        },
    ]

    let  admins = users

    admins.push({name: 'padavan', age: 10})

    expect(users[2]).toEqual({name: 'padavan', age: 10})
})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = 101
    adminsCount ++

    expect(usersCount).toBe(100)
})

test("reference type test", () => {
    const address = {
        title: 'Eart'
    }
    let user: UserType = {
        name: 'Yoda',
        age: 900,
        address: address
    }
    let addr = user.address

    let user2: UserType = {
        name: 'chubaka',
        age: 88,
        address: user.address
    }

    address.title = 'Mars'
    expect(user.address.title).toBe('Mars')
    expect(user2.address.title).toBe('Mars')
})

test("reference type array test", () => {
    const address = {
        title: 'Eart'
    }
    let user: UserType = {
        name: 'Yoda',
        age: 900,
        address: address
    }
    let user2: UserType = {
        name: 'chubaka',
        age: 88,
        address: user.address
    }
    const users = [user, user2, {name: 'Luk', age: 20, address: address}]
    
    const admins = [user, user2]

    admins[0].name = 'Master Yoda'

    expect(user.name).toBe('Master Yoda')
    expect(users[0].name).toBe('Master Yoda')
    expect(admins[0].name).toBe('Master Yoda')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e',]
    passportinst(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e',])
})

function passportinst(letters: any) {
    const copy = [...letters].sort()}