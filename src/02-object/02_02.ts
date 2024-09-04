type StreerType = {
    title: string
}

type AddressType = {
    number: number
    street: StreerType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type GovermentBuildingsAddressStreetType = {
    title: string
}
type GovermentBuildingsAddressType = {
    street: GovermentBuildingsAddressStreetType
}

export type GovermentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: GovermentBuildingsAddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovermentBuildingType>
    citizensNumber: number
}