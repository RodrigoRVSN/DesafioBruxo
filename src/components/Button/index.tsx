import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.CustomButton {...rest}>{children}</S.CustomButton>
}
