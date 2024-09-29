import { addCompanyToUser, addNewBooksToUser, makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, upgradeLaptop, UserType, UserWithBooksType, UserWithLaptopType, WithCompaniesType } from "./10_01"


test("reference type test", () => {
    let user: UserType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    
    const awesomeUser = makeHairstyle(user, 2)
    
    expect(user.hair). toBe(32)
    expect(awesomeUser.hair). toBe(16)
    expect(user.address). toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'}
    }
    
    const movedUser = moveUser(user, 'Kyiv')
    
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kyiv')
    
    expect(movedUser.laptop).toBe(user.laptop)
})

test("uprgate laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'}
    }
    
    const userWithupgradedLaptop = upgradeLaptop(user, 'Makbook')
    
    expect(user).not.toBe(userWithupgradedLaptop)
    expect(user.laptop).not.toBe(userWithupgradedLaptop.address)
    expect(userWithupgradedLaptop.laptop.title).toBe('Makbook')
    
    expect(userWithupgradedLaptop.address).toBe(user.address)
    expect(user.laptop.title).toBe('zenbook')
})

test("move user to other house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react']
    }
    
    const userCopy = moveUserToOtherHouse(user, 99)
    
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)

    expect(userCopy.address.house).toBe(99)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react']
    }
    
    const userCopy = addNewBooksToUser(user, 'ts')
    
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)

    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react']
    }
    
    const userCopy = updateBook(user, 'js', 'ts')
    
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)

    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test("remove js book", () => {
    let user: UserWithBooksType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react']
    }
    
    const userCopy = removeBook(user, 'js')
    
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)

    expect(userCopy.books[2]).toBe('react')
    expect(user.books.length).toBe(4)
})

test("remove js book", () => {
    let user: UserWithBooksType & WithCompaniesType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react'],
        companies: [
            { id: 1, title: 'Google' },
            { id: 2, title: 'Apple' }
        ]
    }
    
    const userCopy = addCompanyToUser(user, 'Amazon')
    
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)

    expect(user.companies.length).toBe(2)
    expect(userCopy.companyes.length).toBe(3)
    expect(userCopy.companyes[2]).toEqual({id: 3, title: 'Amazon'})
})

test("update company title", () => {
    let user: UserWithBooksType & WithCompaniesType = {
        name: 'Dron',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'zenbook'},
        books: ['css', 'html', 'js', 'react'],
        companies: [
            { id: 1, title: 'Gogle' },
            { id: 2, title: 'Apple' }
        ]
    }
    
    const userCopy = updateCompanyTitle(user, 1, 'Google') as UserWithBooksType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Google')
})

test("update company ", () => {

    let companies = {
        'Dima': [{ id: 1, title: 'Google' }, { id: 2, title: 'Apple' }],
        'Den': [{ id: 1, title: 'Gogle' }]
    }
    
    let copy = updateCompanyTitle2(companies, 'Den', 1, 'Google')

    expect(copy['Den']).not.toBe(companies['Den'])
    expect(copy['Dima']).toBe(companies['Dima'])
    expect(copy['Den'][0].title).toBe('Google')
})