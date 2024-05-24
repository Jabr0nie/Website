// Create the WebSocket provider
var web3Ws = new Web3.providers.WebsocketProvider(
    `wss://go.getblock.io/${getblock.shared.etc.mainnet.ws[0].token()}`
);
