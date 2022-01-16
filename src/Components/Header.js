/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// eslint-disable-next-line no-unused-vars
import { selectCars, selectcars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);
     return (
        <Container>
            <a>
                <img src = "/images/VoltZapp_Automotive.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key = { index } href = "#">{car}</a>
                ))}
                <div class="animation menu"></div>
            </Menu>
            <RightMenu>
                <a href = "#">Shop</a>
                <a href = "#">VoltZapp Account</a>
                <CustomMenu onClick = {()=>setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick = {()=> setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li key = {index}><a href = "#">{car}</a></li>
                ))}
                    <li><a href = "#">Existing Inventory</a></li>
                    <li><a href = "#">Used Inventory</a></li>
                    <li><a href = "#">Trade-In</a></li>
                    <li><a href = "#">CyberTruck</a></li>
                    
            </BurgerNav>
        </Container>
       
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a:hover {
        background-color: #00000060;
        transition: .5s ease .1s;
        border-radius: 8px;
        
        
      }

    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }


`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    
    }
    a:hover {
        background-color: #5a5555c0;
        transition: 1s ease .1s;
        border-radius: 8px;
        transition: left;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background: white;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        width: 300px;
        z-index: 2;
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;
        transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
        transition: transform 0.8s;
        li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        a {
            font-weight: 600;

        }
`
const CustomClose = styled(CloseIcon)`
        cursor: pointer;
`
const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
`