// Create the JSON-RPC provider

async function Connect() {
    await window.web3.currentProvider.enable();
    web3 = new web3(new Web3.providers.HttpProvider(
        getblock.shared.etc.mainnet.jsonrpc[0].go()));
}
