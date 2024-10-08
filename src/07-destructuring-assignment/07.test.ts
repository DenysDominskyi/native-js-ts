import { ManType } from "./07";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezalezhnosty street'
            }
        }
    }
})


test("", () => {
    // const age = props.age
    // const lessons = props.lesson

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(title).toBe('Nezalezhnosty street')
})

test('should first', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [,ls2, ...restlessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(restlessons.length).toBe(1)
    expect(restlessons[0].title).toBe('3')
})