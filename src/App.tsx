import React, { useState } from "react"
import styled from "styled-components"
import { Heading, Text, Button } from "evergreen-ui"

const SContainer = styled.main`
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  const [subscribed, setSubscribed] = useState(null)

  return (
    <SContainer>
      <Heading size={900}>
        Am I subscribed to <a href="https://github.com/simple-pos">SimplePOS</a>
        ?
      </Heading>
      <Text marginTop={16} size={500}>
        Let's check 👇
      </Text>
      <Button type="button" height={40} appearance="primary" marginTop={16}>
        Connect a wallet
      </Button>
    </SContainer>
  )
}

export default App
