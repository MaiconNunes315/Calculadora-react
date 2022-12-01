import { InputContainer } from "./stylesInput";


export function Input({value}) {
    return (
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}