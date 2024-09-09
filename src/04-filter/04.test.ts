import { CourseType } from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90,14];

    const oldAges = ages.filter(age => age > 90)
    
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ]

    const cheapCoures = courses.filter(course => course.price < 160)

    expect(cheapCoures.length).toBe(2)
    expect(cheapCoures[0].title).toBe('CSS')
    expect(cheapCoures[1].title).toBe('React')
})
test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'salt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})