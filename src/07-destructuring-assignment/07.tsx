import React, { useState } from 'react'

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDenState(m: string){
    return [m, function(){}]
}

export const ManComponent = ({title, man, ...props}: PropsType) => {
    const [message, setMessage] = useState<string>('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}
