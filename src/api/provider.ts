import Web3Modal from "web3modal"

const providerOptions = {
  /* See Provider Options Section */
}

const web3Modal = new Web3Modal({ network: "rinkeby", providerOptions })

const getProvider = async () => {
  const provider = await web3Modal.connect()

  return provider
}
