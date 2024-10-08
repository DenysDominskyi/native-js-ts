const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = []

export type CourseType = {
    title: string, price: number
}

const courses = [
    { title: 'CSS', price: 110 },
    { title: 'JS', price: 200 },
    { title: 'React', price: 1150 },
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160
}