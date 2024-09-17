import { MouseEvent } from "react"


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        
        alert(event.currentTarget.name)
    }
    const saveUser = () => {
        alert('User have been saved')
    }

    const onChangeHandler = () => {
        console.log('opa')
    }
    const focusLostHandler = () => {
        console.log('poteran')
    }

    return (
        <div>
            <textarea
                onBlur={focusLostHandler}
                onChange={onChangeHandler}>
                Name
            </textarea>
            <input type="text" />
            <button name="delete" onClick={deleteUser}>x</button>
            <button name="save" onClick={deleteUser}>x</button>
        </div>
    )
}