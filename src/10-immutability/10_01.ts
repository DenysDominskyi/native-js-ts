export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}
export type CompanyType = { id: number, title: string }
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
}

export function moveUserToOtherHouse(u: UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        },
    }
}

export function upgradeLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(book => book === oldBook ? newBook : book)
    }
}

export function removeBook(u: UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addCompanyToUser(u: UserWithBooksType & WithCompaniesType, company: string) {
    const newCompany = { id: 3, title: company }
    return {
        ...u,
        companyes: [...u.companies, newCompany]
    }
}

export function updateCompanyTitle(u: WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? { ...c, title: newTitle } : c)
    }
}

export const updateCompanyTitle2 = (
    companies: { [key: string]: Array<CompanyType>},
    userName: string,
    companyId: number,
    newTitle: string
) => {
    
    const companyCopy = {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }

    return companyCopy
}