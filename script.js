

              // Setting getblock node as HTTP provider
            //  const provider = new Web3.providers.HttpProvider("https://go.getblock.io/bf14708a4a4f476b99a3c6db485c6634");
		 const provider = new Web3.providers.HttpProvider("https://etc.rivet.link/12cdcb57f43048b6940f5c797db87088");
              // Creating web3 instance with given provider
                  const web3 = new Web3(provider);
              // Initializing web3.eth method
                  var block = web3.eth.getBlockNumber().then(console.log);
  
                  let web3m = new Web3(window.ethereum);
  
                  //connect to MetaMask
  
                  window.onload = async function() {
                    isConnected();
                    Chain();
                 };


                 window.addEventListener('click', function() {
                    if (window.ethereum) {
                    window.ethereum.on('networkChanged', function (networkId) {
                            ChainSwitch();
                    });}
                       else {
                        console.log('MetaMask is not available');  
                       }      
                 });


                  

                        async function ChainSwitch() {
                            let chain;
                            await web3m.eth.getChainId().then(chain => {
                            console.log(chain); 
                            if (chain == 61) {
                            console.log('ETC NETWORK');
                            document.getElementById('connectbutton').style.background = '#1D2833';
                            document.getElementById('ETCChain').style.display = 'inline-block';
                            document.getElementById('WrongChain').style.display = 'none';
                            isConnected();
                            } else {
                                console.log('WRONG NETWORK');
                                document.getElementById('connectbutton').innerHTML = 'WRONG NETWORK';
                                document.getElementById('connectbutton').style.background = '#cc0606';
                                document.getElementById('ETCChain').style.display = 'none';
                                document.getElementById('WrongChain').style.display = 'inline-block';
                            }
                            })}





      window.addEventListener('click', function() {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (accounts) {
                ConnectWallet();});
        }
           else {
            console.log('MetaMask is not available');  
           }      
     });


              
        async function isConnected() {
         
           const accounts = await ethereum.request({method: 'eth_accounts'});       
           if (accounts.length) {
            ConnectWallet();
              
           } else {
              console.log("Metamask is not connected");
           
           }
        };

                 // document.getElementById('connectbutton').addEventListener('click', event => {
                    async function ConnectWallet() {
                     
                      let account;
                      ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
                          account = accounts[0];
                          console.log(account);
                          document.getElementById('connectbutton').innerHTML = account;
                          ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
                              console.log(result);
                              let wei = parseInt(result, 16);
                              let balance = wei / (10 ** 18);
                              balance = balance.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;});
                             
			                          //rewards accrued
                //    ComptrollerContract.methods.compAccrued(`${account}`).call().then(accruedRewards => {
                 //   accruedRewards = accruedRewards / (10 ** 18);
                 //   accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                //        document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
               //     })

                 
 
  
                  const nETCAddress = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                  const nETCContract = new web3.eth.Contract(nETCAbi, nETCAddress);
                  const nETCContractMM = new web3m.eth.Contract(nETCAbi, nETCAddress);
  

  



                    
