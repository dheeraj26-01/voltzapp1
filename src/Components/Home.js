import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
                title = "Model S"
                description = "Order Online"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
             />
            <Section 
                title = "Model Y"
                description = "Order Online"
                backgroundImg = "model-Y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            
            />
            <Section
                title = "Model 3"
                description = "Order Online"
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            
            />
            <Section 
                title = "Model X"
                description = "Order Online"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Solar Panels"
                description = "Order Online"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Solar for New Roofs"
                description = "Order Online"
                backgroundImg = "solar-roof.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing inventory"
            />
            <Section 
                title = "Accessories"
                description = "Order Online"
                backgroundImg = "accessories.jpg"
                leftBtnText = "Custom Order"
                
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`