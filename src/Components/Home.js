import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
                title = "RoadRunner"
                description = "A Powerful Powertrain made to Exhilarate and Electrify"
                backgroundImg = "CarA2.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "More Info"
             />
            <Section 
                title = "StarZap"
                description = "The Next-Gen automobile with a crisp design to zap to your destination"
                backgroundImg = "CarA3_1.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "More Info"
            
            />
            <Section
                title = "Black Hawk"
                description = "A futuristic rig to fly like a hawk on trails"
                backgroundImg = "e-bike_1.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "More Info"
            
            />
            <Section 
                title = "Vibranium"
                description = "The Menacing Paraphernalia to Intimidate with its stunning Performance"
                backgroundImg = "b_bike.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "More Info"
            />
            <Section 
                title = "Solar Panels"
                description = "Energy in a Right Way"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "Know More"
            />
            <Section 
                title = "Solar for New Roofs"
                description = "Efficient Energy and Utilization"
                backgroundImg = "solar-panel-roof.jpg"
                leftBtnText = "Order Online"
                rightBtnText = "Know More"
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`