type LocalCityType = {
    title: string
    country: string
}

type LocalAddressType = {
    street: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Din",
    age: 19,
    isActive: false,
    address: {
        street: "Ulitca",
        city: {
            title: "Monaco",
            country: "France"
        }
    },
    technologies: [
        {
            id: 1, 
            title: "HTML"
        }, 
        {
            id: 2, 
            title: "CSS"
        }, 
        {
            id: 3, 
            title: "JS/TS"
        }, 
    ]
}