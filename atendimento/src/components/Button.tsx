import React from 'react'
import { ButtonContainer, ButtonVariant } from './styledButton'

interface ButtonProps {
  variant?: ButtonVariant
}

const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

export default Button
