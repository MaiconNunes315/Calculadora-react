import {ButtonContainer} from "./stylesButton"



export function Button({ label, onClick,disabled }) {
  
  
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}> 
      {label}
    </ButtonContainer>
  )
}
