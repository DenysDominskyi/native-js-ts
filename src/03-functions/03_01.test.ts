import { StudentType } from "../02-object/02"
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03"

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "Din",
        age: 19,
        isActive: false,
        address: {
            street: "Ulitca",
            city: {
                title: "Kyiv",
                country: "Ukr"
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
                title: "React"
            },
        ]
    }
})

test("new tech skill should be added", () => {
    expect(student.technologies.length).toBe(3)
    
    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()

})

test("student shoud be made active", () => {
    expect(student.isActive).toBe(false)
    
    makeStudentActive(student)
    
    expect(student.isActive).toBe(true)

})

test("does student lives in a city?", () => {
    let result1 = doesStudentLiveIn(student, "Minsk")
    let result2 = doesStudentLiveIn(student, "Monaco")

    expect(result1).toBe(false)
    // expect(result2).toBe(true)
})

