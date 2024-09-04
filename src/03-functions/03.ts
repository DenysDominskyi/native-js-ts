import { StudentType } from "../02-object/02"
import { CityType, GovermentBuildingType, HouseType } from "../02-object/02_02"


export const sum = (a: number, b: number) => a + b

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (stu: StudentType, cityName: string) => {
    return stu.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovermentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovermentBuildingType, needToFire: number) => {
    building.staffCount -= needToFire
}

export const toHireStaff = (building: GovermentBuildingType, needToHire: number) => {
    building.staffCount += needToHire
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy all ${city.citizensNumber} men`
}