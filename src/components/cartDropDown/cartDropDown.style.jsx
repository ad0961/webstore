import styled from 'styled-components';
import {BaseButton, InvetredButton, GoogleSignInButton} from "../Button/Button.style"

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, ${InvetredButton}, ${GoogleSignInButton} {
      margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 30px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
  