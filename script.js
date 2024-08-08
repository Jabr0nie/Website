

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

                async function Chain() {
                let chain;
                await web3m.eth.getChainId().then(chain => {
                console.log(chain); 
                if (chain == 61) {
                console.log('ETC NETWORK');
                document.getElementById('connectbutton').style.background = '#1D2833';
                document.getElementById('ETCChain').style.display = 'inline-block';
                document.getElementById('WrongChain').style.display = 'none';
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

                    AccruedNYKE();
                    UpdateBorrowLimit();


                               //In market?
                              ComptrollerContract.methods.checkMembership(`${account}`,'0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(result => {
                                document.getElementById("ETCCheckbox").checked = result;});
                                ComptrollerContract.methods.checkMembership(`${account}`,'0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(result => {
                                    document.getElementById("USCCheckbox").checked = result;});
                                    ComptrollerContract.methods.checkMembership(`${account}`,'0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call().then(result => {
                                        document.getElementById("ETCPOWCheckbox").checked = result;});

                                //ETC Borrowed
                                    nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                    ETCBorrow = ETCBorrow / (10 ** 18);
                                    document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //USC Borrowed Amount
                                nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                    USCBorrow = USCBorrow / (10 ** 6);
                                    document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let _UserBorrowETCPOW;
                                    nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                                        _UserBorrowETCPOW = result;
                                        let UserBorrowETCPOW = _UserBorrowETCPOW / (10 ** 18);
                                        console.log(result);
                                        document.getElementById('ETCPOWBorrowBalance').innerText = `${UserBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;		
                                // Oracle Price Update
                                OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                    USCPrice = USCPrice / (10 ** 18);
                                    OracleContract.methods.GetUnderlyingPrice('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call().then(ETCPOWPrice => {
                                        ETCPOWPrice = ETCPOWPrice / (10 ** 18);
                                //ETCPOW Supplied
                                    nETCPOWContract.methods.balanceOf(account).call({from: account}).then(ETCPOWSup => {
                                        nETCPOWContract.methods.exchangeRateStored().call({from: account}).then(ETCPOWExchangeMantissa => {
                                            ETCPOWExchangeMantissa = ETCPOWExchangeMantissa / (10 ** 18);
                                            console.log(ETCPOWExchangeMantissa);
                                            ETCPOWSup = (ETCPOWSup / (10 ** 18))*ETCPOWExchangeMantissa;
                                        document.getElementById('YourETCPOWSupplied').innerText = `${ETCPOWSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                 //USC Supplied Amount
                              nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                            nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
                                USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
                                console.log(USCExchangeMantissa);
                                USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
                                USCSup = USCSup;
                                document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //ETC Supplied
                              nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                                nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                                    ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                                    console.log(ETCExchangeMantissa);
                                console.log(ETCSupplied);
                               ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
                               ETCSupplied = ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                               document.getElementById('YourETCSupplied').innerText = `${ETCSupplied}`;
                                OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                    ETCPrice = ETCPrice / (10 ** 18);
                                    ETCPrice = (ETCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
                                    let ETCAsset = (ETCPrice * ETCSupplied);
                                    document.getElementById('YourETCSuppliedUSD').innerText = `$${ETCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let USCAsset = (USCPrice * USCSup);
                                    document.getElementById('YourUSCSuppliedUSD').innerText = `$${USCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCPOWAsset = (ETCPOWPrice * ETCPOWSup);
                                    document.getElementById('YourETCPOWSuppliedUSD').innerText = `$${ETCPOWAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let Assets = (USCAsset + ETCAsset + ETCPOWAsset);
                                    console.log(Assets);
                                    document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCLiability = (ETCPrice * ETCBorrow);
                                    document.getElementById('UserETCBorrowedUSD').innerText = `$${ETCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    console.log(ETCLiability);
                                    let USCLiability = (USCPrice * USCBorrow);
                                    document.getElementById('USCBorrowedUserUSD').innerText = `$${USCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCPOWLiability = (ETCPOWPrice * UserBorrowETCPOW);
        document.getElementById('ETCPOWBorrowedUserUSD').innerText = `$${ETCPOWLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let Liabilities = ((USCLiability + ETCLiability + ETCPOWLiability));
                                    console.log(Liabilities);
                                    if (Liabilities == 0) {
                                        document.getElementById('UserBorrowLimit').innerText = `0.00%`;
                                    }
         
                                    document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //User APR
                                const BlocksPerYear = 2425790;
                                nETCContract.methods.supplyRatePerBlock().call().then(ETCSupplyRate1 => {
                                    ETCSupplyRate1 = ((ETCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                                nETCContract.methods.borrowRatePerBlock().call().then(ETCBorrowRate1 => { 
                                    ETCBorrowRate1 = ((ETCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                                nUSCContract.methods.supplyRatePerBlock().call().then(USCSupplyRate1 => {
                                    USCSupplyRate1 = ((USCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                                nETCPOWContract.methods.supplyRatePerBlock().call().then(ETCPOWSupplyRate1 => {
                                    ETCPOWSupplyRate1 = ((ETCPOWSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                                nUSCContract.methods.borrowRatePerBlock().call().then(USCBorrowRate1 => {
                                    USCBorrowRate1 = ((USCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                                nETCPOWContract.methods.borrowRatePerBlock().call().then(ETCPOWBorrowRate1 => {
                                    ETCPOWBorrowRate1 = ((ETCPOWBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                        
                                let Weight = ((((ETCAsset * ETCSupplyRate1)+(USCAsset * USCSupplyRate1)+(ETCPOWAsset * ETCPOWSupplyRate1)-(ETCLiability * ETCBorrowRate1)-(USCLiability * USCBorrowRate1)-(ETCPOWLiability * ETCPOWBorrowRate1))/(ETCAsset+USCAsset+ETCPOWAsset-ETCLiability-USCLiability-ETCPOWLiability))*100);
                                if (Assets > 0){
                                    document.getElementById('UserAPR').innerText = `${Weight.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                                } 
                                    });});});});
                                //Collateral Factor
                                    const USCStatus = document.getElementById("USCCheckbox");
                                    const ETCStatus = document.getElementById("ETCCheckbox");
                                    const ETCPOWStatus = document.getElementById("ETCPOWCheckbox");
                                    let borrowlimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.80 * USCStatus.checked)+ (ETCPOWAsset * 0.50 * ETCPOWStatus.checked));
                                    let MaxBorrow =((Liabilities/((borrowlimit)))*100).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                                        document.getElementById('UserBorrowLimit').innerText = `${MaxBorrow}%`;
                                        if (Liabilities == 0) {
                                            document.getElementById('UserBorrowLimit').innerText = `0.00%`;
                                        }
                                });
                                });});})})
                            });
                        });
                    });});});});});});

                        });});};
                         
                  
  
  
 
  
                  const nETCAddress = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                  const nETCContract = new web3.eth.Contract(nETCAbi, nETCAddress);
                  const nETCContractMM = new web3m.eth.Contract(nETCAbi, nETCAddress);
  
                  const ETCPOWAddress = '0x6c3B413C461c42a88160Ed1B1B31d6f7b02a1C83';
                  const ETCPOWContract = new web3.eth.Contract(ETCPOWabi, ETCPOWAddress);
                  const ETCPOWContractMM = new web3m.eth.Contract(ETCPOWabi, ETCPOWAddress);
  
                
                  const nETCPOWAddress = '0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d';
                  const nETCPOWContract = new web3.eth.Contract(nETCPOWabi, nETCPOWAddress);
                 const nETCPOWContractMM = new web3m.eth.Contract(nETCPOWabi, nETCPOWAddress);
  
               
                  const USCAddress = '0xDE093684c796204224BC081f937aa059D903c52a';
                  const USCContract = new web3.eth.Contract(USCabi, USCAddress);
                  const USCContractMM = new web3m.eth.Contract(USCabi, USCAddress);
  
                  const nUSCAddress = '0xA11d739365d469c87F3daBd922a82cfF21b71c9B';
                  const nUSCContract = new web3.eth.Contract(nETCPOWabi, nUSCAddress);
                  const nUSCContractMM = new web3m.eth.Contract(nETCPOWabi, nUSCAddress);
      
                  const ComptrollerAddress = '0x0040DCf62C380833dE60a502649567e939635fdB';
                  const ComptrollerContract = new web3.eth.Contract(Comptrollerabi, ComptrollerAddress);
                  const ComptrollerContractMM = new web3m.eth.Contract(Comptrollerabi, ComptrollerAddress);

                  const OracleAddress = '0x97cF703b171ad3B8C0e16A30193E1c26AEe07058';
                  const OracleContract = new web3.eth.Contract(Oracleabi, OracleAddress);
                  const OracleContractMM = new web3m.eth.Contract(Oracleabi, OracleAddress);

                  const NykeOracleAddress = '0x261bAa91c19F94050AABcd62A1D24C649fC3bA39';
                  const NykeOracleContract = new web3.eth.Contract(NykeOracleabi, NykeOracleAddress);
                  const NykeOracleContractMM = new web3m.eth.Contract(NykeOracleabi, NykeOracleAddress);

                  const NykeAddress = '0x9aa2901007fCE996e35305FD9bA196e17fCd2605';
                  const NykeContract = new web3.eth.Contract(Nykeabi, NykeAddress);
                  const NykeContractMM = new web3m.eth.Contract(Nykeabi, NykeAddress);

                  const V2ReservesAddress = '0x67ad140f5536Bc4921dBC0498922aaad6f595a1E';
                  const V2ReservesContract = new web3.eth.Contract(V2Reservesabi, V2ReservesAddress);
                  const V2ReservesContractMM = new web3m.eth.Contract(V2Reservesabi, V2ReservesAddress);
  
                  //Get Data
  
                  const dataOutput = document.getElementById('dataOutput');
                  const YourETCSupplied = document.getElementById('YourETCSupplied');
                  const YourUSCSupplied = document.getElementById('YourUSCSupplied');
                  const ETCSupplyRateOutput = document.getElementById('ETCSupplyRateOutput');
                  const ETCSupplyRateModal = document.getElementById('ETCSupplyRateModal');
                  const ETCSupplyRateModal2 = document.getElementById('ETCSupplyRateModal2');
                  const ETCSupplierSupplyRate = document.getElementById('ETCSupplyRateOutputSupply');
                  const ETCBorrowRateOutput = document.getElementById('ETCBorrowRateOutput');
                  const ETCBorrowedRate1 = document.getElementById('ETCBorrowedRate1');
                  const ETCBorrowRateModal = document.getElementById('ETCBorrowRateModal');
                  const ETCBorrowed = document.getElementById('ETCBorrowed');
                  const ETCBorrowedUser = document.getElementById('UserETCBorrowed');
                  const ETCUtilization = document.getElementById('ETCUtilization');
                  const UserETCSupply = document.getElementById('UserETCSupply');
                  const USCSupply = document.getElementById('USCSupply');
                  const USCSupplyRateOutput = document.getElementById('USCSupplyRateOutput');
                  const USCSupplyRateOutputSupply = document.getElementById('USCSupplyRateOutputSupply')
                  const USCBorrowRateOutput = document.getElementById('USCBorrowRateOutput');
                  const USCBorrowedRate1 = document.getElementById('USCBorrowRate1');
                  const USCUtilization = document.getElementById('USCUtilization');
                  const USCBorrowed = document.getElementById('USCBorrowed');
                  const ETCCheckBox = document.getElementById("ETCCheckbox");
                  const USCBorrowRate2 = document.getElementById("USCSupplyRateModal1");
                  // Get the modal
                  var modal = document.getElementById("modal-container");
  
                  // When the user clicks anywhere outside of the modal, close it
                  window.onclick = function(event) {
                  if (event.target == modal) {
                    main();
                      modal.style.display = "none";}}

  
  
  
                  const main = async () => {
                      const BlocksPerYear = 2425790;
                      const _totalSupply = await nETCContract.methods.totalSupply().call();
                      const _ETCSupplyRate = await nETCContract.methods.supplyRatePerBlock().call();
                      const _ETCBorrowRate = await nETCContract.methods.borrowRatePerBlock().call();
                      const _ETCBorrowed = await nETCContract.methods.totalBorrows().call();
                      const _USCtotalSupply = await nUSCContract.methods.totalSupply().call();
                      const _USCSupplyRate = await nUSCContract.methods.supplyRatePerBlock().call();
                      const _USCBorrowRate = await nUSCContract.methods.borrowRatePerBlock().call();
                      const _USCBorrowed = await nUSCContract.methods.totalBorrows().call();
                      const _ETCExMant = await nETCContract.methods.exchangeRateStored().call();
                      const _USCExMant = await nUSCContract.methods.exchangeRateStored().call();
                      const _ETCPrice = await OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
                      const _USCPrice = await OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
                      const _NykePrice = await NykeOracleContract.methods.GetUnderlyingPrice().call();
                      const ETCPOWtotalSupply = await nETCPOWContract.methods.totalSupply().call();
                      const _ETCPOWSupplyRate = await nETCPOWContract.methods.supplyRatePerBlock().call();
                      const _ETCPOWBorrowRate = await nETCPOWContract.methods.borrowRatePerBlock().call();
                      const _ETCPOWBorrowed = await nETCPOWContract.methods.totalBorrows().call();
                      const _ETCPOWExMant = await nETCPOWContract.methods.exchangeRateStored().call();
                      const _ETCPOWPrice = await OracleContract.methods.GetUnderlyingPrice('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call();
                      


                    //NYKE PRICE
                    let NYKEPrice = (_NykePrice / (10 ** 18));
                    console.log(NYKEPrice);
                    document.getElementById('nykePrice').innerText = `$${NYKEPrice.toLocaleString('en-US', {minimumFractionDigits:5, maximumFractionDigits:5})}`;
                  

  
                      const totalSupply = (_totalSupply / (10 ** 18) * (_ETCExMant / (10 ** 18)));
                      dataOutput.innerText = `${totalSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                      
                      //ETC SUPPLY & ETC NYKE SUPPLY
                      let NykeETCSupplyRate = (((NYKEPrice * 14000 * 365)/(totalSupply*(_ETCPrice / (10 ** 18))) * 100));
                      let ETCSupplyMarket = (totalSupply*(_ETCPrice / (10 ** 18)));
                      const ETCSupplyRate = ((_ETCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let RewardRate = NykeETCSupplyRate + ETCSupplyRate;
                      ETCSupplyRateOutput.innerText = `${ETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplyRateModal.innerText = `${RewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplyRateModal2.innerText = `${RewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplierSupplyRate.innerText = `${ETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('ETCSupplyRateOutputSupply1').innerText = `${NykeETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('ETCSupplyRate5').innerText = `${NykeETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('ETCSuppliedUSD').innerText = `$${ETCSupplyMarket.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                      const ETCBorrow = _ETCBorrowed / (10 ** 18);
                      let ETCBorrowMarket = (ETCBorrow*(_ETCPrice / (10 ** 18)));
                      document.getElementById('ETCBorrowedUSD').innerText = `$${ETCBorrowMarket.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                    ETCBorrowed.innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                      //ETC BORROW & ETC NYKE SUPPLY
                      let NykeETCBorrowRate = (((NYKEPrice * 10000 * 365)/(ETCBorrow*(_ETCPrice / (10 ** 18))) * 100));
                     const ETCBorrowRate = ((-_ETCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                     let ETCBorrowRewardRate = NykeETCBorrowRate + ETCBorrowRate;
                     ETCBorrowRateOutput.innerText = `${ETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     ETCBorrowRateModal.innerText = `${ETCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCBorrowRateModal1').innerText = `${ETCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     ETCBorrowedRate1.innerText = `${ETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCBorrowedRate2').innerText = `${NykeETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCBorrowedRate5').innerText = `${NykeETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                      const ETCUtil = (ETCBorrow /totalSupply) * 100;
                      ETCUtilization.innerText = `${ETCUtil.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
  
                      const USCtotalSupply = (_USCtotalSupply / (10 ** 4))*(_USCExMant / (10 ** 20));
                      USCSupply.innerText = `${USCtotalSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                      //USC SUPPLY & USC NYKE SUPPLY
                      const USCSupplyRate = ((_USCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let NykeUSCSupplyRate = (((NYKEPrice * 10000 * 365)/(USCtotalSupply*(_USCPrice / (10 ** 18))) * 100));
                      let USCMarketSupply = (USCtotalSupply*(_USCPrice / (10 ** 18)));
                      let USCSupplyRewardRate = NykeUSCSupplyRate + USCSupplyRate;
                      USCSupplyRateOutput.innerText = `${USCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      USCSupplyRateOutputSupply.innerText = `${USCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCSupplyRateOutputSupply1').innerText = `${NykeUSCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCSupplyRateModal1').innerText = `${USCSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                    document.getElementById('USCSupplyRateModal2').innerText = `${USCSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                    document.getElementById('USCSupplyRate5').innerText = `${NykeUSCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                    document.getElementById('USCSuppliedUSD').innerText = `$${USCMarketSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                      const USCBorrow = _USCBorrowed / (10 ** 6);
                      let USCMarketBorrow = (USCBorrow*(_USCPrice / (10 ** 18)));
                      USCBorrowed.innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                      document.getElementById('USCBorrowedUSD').innerText = `$${USCMarketBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                    //USC BORROW & USC NYKE BORROW
                      const USCBorrowRate = ((-_USCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let NykeUSCBorrowRate = (((NYKEPrice * 14000 * 365)/(USCBorrow*(_USCPrice / (10 ** 18))) * 100));
                      let USCBorrowRewardRate = NykeUSCBorrowRate + USCBorrowRate;
                     
                      USCBorrowRateOutput.innerText = `${USCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      USCBorrowedRate1.innerText = `${USCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRateModal').innerText = `${USCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRateModal2').innerText = `${USCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRate2').innerText = `${NykeUSCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowedRate5').innerText = `${NykeUSCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                      const USCUtil = (USCBorrow /USCtotalSupply) * 100;
                      USCUtilization.innerText = `${USCUtil.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                       //ETCPOW SUPPLY & ETCPOW NYKE SUPPLY
                       const ETCPOWSupplyRate = ((_ETCPOWSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                       let NykeETCPOWSupplyRate = ((((NYKEPrice * 1000 * 365)/((ETCPOWtotalSupply/ (10 ** 18) *(_ETCPOWPrice / (10 ** 18)))) * 100)));
                       let ETCPOWMarketSupply = (ETCPOWtotalSupply/ (10 ** 18))*(_ETCPOWPrice / (10 ** 18));
                       console.log(NykeETCPOWSupplyRate);
                       console.log(NYKEPrice);
                       console.log(ETCPOWtotalSupply);
                       console.log(_ETCPOWPrice);
                       let ETCPOWSupplyRewardRate = NykeETCPOWSupplyRate + ETCPOWSupplyRate;
                       document.getElementById('ETCPOWSupplyRateOutputSupply').innerText = `${ETCPOWSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWSupplyRateOutput').innerText = `${ETCPOWSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCPOWUSCSupplyRateOutputSupply1').innerText = `${NykeETCPOWSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWSupplyRateModal1').innerText = `${ETCPOWSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCPOWSupplyRateModal2').innerText = `${ETCPOWSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCPOWSupplyRate5').innerText = `${NykeETCPOWSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCPOWSuppliedUSD').innerText = `$${ETCPOWMarketSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                       const ETCPOWBorrow = _ETCPOWBorrowed / (10 ** 18);
                       let ETCPOWMarketBorrow = (ETCPOWBorrow*(_ETCPOWPrice / (10 ** 18)));
                       document.getElementById('ETCPOWBorrowed').innerText = `${ETCPOWBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                       document.getElementById('ETCPOWBorrowedUSD').innerText = `$${ETCPOWMarketBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

                     //ETCPOW BORROW & ETCPOW NYKE BORROW
                       const ETCPOWBorrowRate = ((-_ETCPOWBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                       let NykeETCPOWBorrowRate = (((NYKEPrice * 1000 * 365)/(ETCPOWBorrow*(_ETCPOWPrice / (10 ** 18))) * 100));
                       let ETCPOWBorrowRewardRate = NykeETCPOWBorrowRate + ETCPOWBorrowRate;
                       document.getElementById('ETCPOWBorrowRateOutput').innerText = `${ETCPOWBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWBorrowRate1').innerText = `${ETCPOWBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWBorrowRateModal').innerText = `${ETCPOWBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWBorrowRateModal2').innerText = `${ETCPOWBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWBorrowRate2').innerText = `${NykeETCPOWBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                       document.getElementById('ETCPOWBorrowedRate5').innerText = `${NykeETCPOWBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
   
                       let ETCPOWtotalSupply1 = (ETCPOWtotalSupply / (10 ** 18))*(_ETCPOWExMant / (10 ** 18));
                       document.getElementById('ETCPOWSupply').innerText = `${ETCPOWtotalSupply1.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                       const ETCPOWUtil = (ETCPOWBorrow /ETCPOWtotalSupply1) * 100;
                       ETCPOWUtilization.innerText = `${ETCPOWUtil.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
 

                      console.log('refreshed');

                      UpdateBorrowLimit();
                  };
  
                  main();
  
            //      $(function () {
             //       setInterval(main, 60000);
              //     });



                //Enter and Exit a market - ETC
				function CollateralStatus() {
                    let account = document.getElementById('connectbutton').innerText;
					const Status = document.getElementById("ETCCheckbox");
                    const To = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
					if (Status.checked == true){
						ComptrollerContractMM.methods.enterMarkets(["0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0"]).send({from:account});
					} else {
						ComptrollerContractMM.methods.exitMarket("0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0").send({from:account});
					}
					}
  
                  //ETC
                  function sendETC() {
                      const ETCDeposit = document.getElementById('ETCDeposit').value;
                      const Value = ETCDeposit * (10 ** 18);
                      console.log(Value);
                      let account;
                      ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
                          account = accounts[0];
                          console.log(account);
                      const From = accounts[0];
                      const To = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                      web3m.eth.sendTransaction({from: From,to: To,value: Value});})}
                  
  
                  //Withdrawl ETC
                          function withdrawlETC() {
                              let account = document.getElementById('connectbutton').innerText;
                              console.log(account);
                              let _ETCWithdrawl = document.getElementById('ETCWithdrawl').value;
                              let num = web3.utils.toWei(_ETCWithdrawl,'ether');
                              let Value = num.toString();
                              console.log(Value);
                              nETCContractMM.methods.redeemUnderlying(`${Value}`).send({from:account});};
                  //Borrow ETC
                          function borrowETC() {
                              let account = document.getElementById('connectbutton').innerText;
                              console.log(account);
                              let _ETCBorrow = document.getElementById('ETCBorrow').value;
                              let num = web3.utils.toWei(_ETCBorrow,'ether');
                              let Value = num.toString();
                              console.log(Value);
                              const To = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                              nETCContractMM.methods.borrow(`${Value}`).send({from:account});};
                  //Repay ETC
                          function repayETC() {
                              let account = document.getElementById('connectbutton').innerText;
                              console.log(account);
                              let _ETCRepay = document.getElementById('ETCRepay').value;
                              let num = web3.utils.toWei(_ETCRepay,'ether');
                              let Value = num.toString();
                              console.log(Value);
                              const To = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                              nETCContractMM.methods.repayBorrow().send({from:account, value:`${Value}`});};

                //Enter and Exit a market - USC
				function CollateralStatusUSC() {
                    let account = document.getElementById('connectbutton').innerText;
					const Status = document.getElementById("USCCheckbox");
					if (Status.checked == true){
						ComptrollerContractMM.methods.enterMarkets(["0xA11d739365d469c87F3daBd922a82cfF21b71c9B"]).send({from:account});
					} else {
						ComptrollerContractMM.methods.exitMarket("0xA11d739365d469c87F3daBd922a82cfF21b71c9B").send({from:account});
					}
					}

                                    //Enter and Exit a market - USC
				function CollateralStatusETCPOW() {
                    let account = document.getElementById('connectbutton').innerText;
					const Status = document.getElementById("ETCPOWCheckbox");
					if (Status.checked == true){
						ComptrollerContractMM.methods.enterMarkets(["0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d"]).send({from:account});
					} else {
						ComptrollerContractMM.methods.exitMarket("0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d").send({from:account});
					}
					}
  
   //Update BorrowLimit and Borrow Amount Used
   function UpdateBorrowLimit() {
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
                                    nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                    ETCBorrow = ETCBorrow / (10 ** 18);
                                    document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //USC Borrowed Amount
                                nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                    USCBorrow = USCBorrow / (10 ** 6);
                                    document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
					document.getElementById('USCBorrowBalanceModal').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    document.getElementById('USCBorrowBalance').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let _UserBorrowETCPOW;
                                    nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                                        _UserBorrowETCPOW = result;
                                        let UserBorrowETCPOW = _UserBorrowETCPOW / (10 ** 18);
                                        console.log(result);
                                        document.getElementById('ETCPOWBorrowedUser').innerText = `${UserBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;	
                                // Oracle Price Update
                                OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                    USCPrice = USCPrice / (10 ** 18);
                                    OracleContract.methods.GetUnderlyingPrice('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call().then(ETCPOWPrice => {
                                        ETCPOWPrice = ETCPOWPrice / (10 ** 18);
                                //ETCPOW Supplied
                                    nETCPOWContract.methods.balanceOf(account).call({from: account}).then(ETCPOWSup => {
                                        nETCPOWContract.methods.exchangeRateStored().call({from: account}).then(ETCPOWExchangeMantissa => {
                                            ETCPOWExchangeMantissa = ETCPOWExchangeMantissa / (10 ** 18);
                                            console.log(ETCPOWExchangeMantissa);
                                            ETCPOWSup = (ETCPOWSup / (10 ** 18))*ETCPOWExchangeMantissa;
                                        document.getElementById('YourETCPOWSupplied').innerText = `${ETCPOWSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                 //USC Supplied Amount
                              nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                            nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
                                USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
                                console.log(USCExchangeMantissa);
                                USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
                                USCSup = USCSup;
                                document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
				      document.getElementById('UserUSCSupply').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //ETC Supplied
                              nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                                nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                                    ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                                    console.log(ETCExchangeMantissa);
                                console.log(ETCSupplied);
                               ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
                               ETCSupplied = ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                               document.getElementById('YourETCSupplied').innerText = `${ETCSupplied}`;
                                OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                    ETCPrice = ETCPrice / (10 ** 18);
                                    ETCPrice = (ETCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
                                    let ETCAsset = (ETCPrice * ETCSupplied);
                                    document.getElementById('YourETCSuppliedUSD').innerText = `$${ETCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let USCAsset = (USCPrice * USCSup);
                                    document.getElementById('YourUSCSuppliedUSD').innerText = `$${USCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCPOWAsset = (ETCPOWPrice * ETCPOWSup);
                                    document.getElementById('YourETCPOWSuppliedUSD').innerText = `$${ETCPOWAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let Assets = (USCAsset + ETCAsset + ETCPOWAsset);
                                    document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCLiability = (ETCPrice * ETCBorrow);
                                    document.getElementById('UserETCBorrowedUSD').innerText = `$${ETCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let USCLiability = (USCPrice * USCBorrow);
                                    document.getElementById('USCBorrowedUserUSD').innerText = `$${USCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCPOWLiability = (ETCPOWPrice * UserBorrowETCPOW);
                                    document.getElementById('ETCPOWBorrowedUserUSD').innerText = `$${ETCPOWLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let Liabilities = ((USCLiability + ETCLiability + ETCPOWLiability));
                                    if (Liabilities == 0) {
                                        document.getElementById('UserBorrowLimit').innerText = `0.00%`;
                                    }
                                    document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //Collateral Factor
        const USCStatus = document.getElementById("USCCheckbox");
        const ETCStatus = document.getElementById("ETCCheckbox");
        const ETCPOWStatus = document.getElementById("ETCPOWCheckbox");
            let BorrowLimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.80 * USCStatus.checked)+ (ETCPOWAsset * 0.50 * ETCPOWStatus.checked)).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            document.getElementById('BorrowLimit1').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit2').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit3').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit4').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit5').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit6').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit7').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit8').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit9').innerText = `$${BorrowLimit}`;
            let MaxBorrow =((Liabilities/((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.80 * USCStatus.checked) + (ETCPOWAsset * 0.50 * ETCPOWStatus.checked)))*100).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});

            document.getElementById('BorrowLimitUsed1').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed2').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed3').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed4').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed5').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed6').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed7').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed8').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed9').innerText = `${MaxBorrow}%`;
            if (Liabilities == 0) {
                document.getElementById('UserBorrowLimit').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed1').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed2').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed3').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed4').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed5').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed6').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed7').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed8').innerText = `0.00%`;
                document.getElementById('BorrowLimitUsed9').innerText = `0.00%`;
            }
    });
    });});
});});})})});});
});});
});});};
  

   //SafeMax Calculation
   function SafeMaxValue() {
    let account = document.getElementById('connectbutton').innerHTML;
    //ETC Borrowed
        nETCContract.methods.borrowBalanceCurrent(account).call({from: account}, function(err,ETCBorrow){
        ETCBorrow = (ETCBorrow / (10 ** 18)-0.01);
        document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //USC Borrowed Amount
    nUSCContract.methods.borrowBalanceCurrent(account).call({from: account}).then(USCBorrow => {
        USCBorrow = (USCBorrow / (10 ** 6)-0.01);
        document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //ETCPOW Borrowed Amount
    let _UserBorrowETCPOW;
    nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
        _UserBorrowETCPOW = result;
        let UserBorrowETCPOW = (_UserBorrowETCPOW / (10 ** 18)-0.01);
        console.log(result);
        document.getElementById('ETCPOWBorrowedUser').innerText = `${UserBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;	

    // Oracle Price Update
    OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
        USCPrice = USCPrice / (10 ** 18);
        OracleContract.methods.GetUnderlyingPrice('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call().then(ETCPOWPrice => {
            ETCPOWPrice = ETCPOWPrice / (10 ** 18);
     //USC Supplied Amount
  nUSCContract.methods.balanceOf(account).call({from: account}).then(USCSup => {
    nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
        USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
        console.log(USCExchangeMantissa);
        USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
    document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //ETC Supplied
  nETCContract.methods.balanceOf(account).call({from: account}, function(err,ETCSupplied){
    nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
        ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
        console.log(ETCExchangeMantissa);
    console.log(ETCSupplied);
   ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
   //ETCPOW Supplied
   nETCPOWContract.methods.balanceOf(account).call({from: account}).then(ETCPOWSup => {
    nETCPOWContract.methods.exchangeRateStored().call({from: account}).then(ETCPOWExchangeMantissa => {
        ETCPOWExchangeMantissa = ETCPOWExchangeMantissa / (10 ** 18);
        console.log(ETCPOWExchangeMantissa);
        ETCPOWSup = (ETCPOWSup / (10 ** 18))*ETCPOWExchangeMantissa;
    document.getElementById('YourETCPOWSupplied').innerText = `${ETCPOWSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
   document.getElementById('YourETCSupplied').innerText = `${ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
        ETCPrice = ETCPrice / (10 ** 18);
        let ETCAsset = (ETCPrice * ETCSupplied);
        document.getElementById('YourETCSuppliedUSD').innerText = `$${ETCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let USCAsset = (USCPrice * USCSup);
        document.getElementById('YourUSCSuppliedUSD').innerText = `$${USCAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCPOWAsset = (ETCPOWPrice * ETCPOWSup);
        document.getElementById('YourETCPOWSuppliedUSD').innerText = `$${ETCPOWAsset.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let Assets = (USCAsset + ETCAsset + ETCPOWAsset);
        console.log(Assets);
        document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCLiability = (ETCPrice * ETCBorrow);
        document.getElementById('UserETCBorrowedUSD').innerText = `$${ETCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let USCLiability = (USCPrice * USCBorrow);
        document.getElementById('USCBorrowedUserUSD').innerText = `$${USCLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCPOWLiability = (ETCPOWPrice * UserBorrowETCPOW);
        document.getElementById('ETCPOWBorrowedUserUSD').innerText = `$${ETCPOWLiability.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let Liabilities = (USCLiability + ETCLiability + ETCPOWLiability);
        if (Liabilities == 0) {
            document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        }
        console.log(Liabilities);
        document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //Utilization

    //Collateral Factor
        const USCStatus = document.getElementById("USCCheckbox");
        const ETCStatus = document.getElementById("ETCCheckbox");
        const ETCPOWStatus = document.getElementById("ETCPOWCheckbox");
        //ETC Wallet Balance
        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
            let wei = parseInt(result, 16);
            let ETCWallet = (wei / (10 ** 18)-0.01);
        //USC Wallet Balance
        USCContract.methods.balanceOf(`${account}`).call().then(result => {
            USCWallet = (result / (10 ** 6)-0.01);
            //ETCPOW Wallet Balance
            ETCPOWContract.methods.balanceOf(`${account}`).call().then(result => {
                let ETCPOWWallet = (result / (10 ** 18)-0.01);
                
            let BorrowLimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.80 * USCStatus.checked) + (ETCPOWAsset * 0.50 * ETCPOWStatus.checked));
            console.log(BorrowLimit);
            document.getElementById('BorrowLimit1').innerText = `$${BorrowLimit.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            document.getElementById('BorrowLimit2').innerText = `$${BorrowLimit.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            let MaxBorrow =((Liabilities/(BorrowLimit))*100);
            console.log(MaxBorrow);
            document.getElementById('BorrowLimitUsed1').innerText = `${MaxBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
            document.getElementById('BorrowLimitUsed2').innerText = `${MaxBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
            let SafeBorrowETC = (((((BorrowLimit * 0.90) - Liabilities)))/ETCPrice);
            console.log(SafeBorrowETC);
            let SafeWithdrawlETC = ((SafeBorrowETC / 0.75)-0.01);
            let SafeBorrowUSC = (((((BorrowLimit * 0.90) - Liabilities)))/USCPrice);
            let SafeWithdrawlUSC = ((SafeBorrowUSC / 0.80)-0.01);
            let SafeBorrowETCPOW = (((((BorrowLimit * 0.80) - Liabilities)))/ETCPOWPrice);
            let SafeWithdrawlETCPOW = ((SafeBorrowETCPOW / 0.5)-0.01);

            console.log(SafeWithdrawlETCPOW);
            if (SafeWithdrawlETC > 0) {
            document.getElementById('ETCWithdrawl').value = SafeWithdrawlETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            document.getElementById('ETCBorrow').value = SafeBorrowETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        }
            else {document.getElementById('ETCWithdrawl').value = 'Safe Borrow Limit Exceeded';
                document.getElementById('ETCBorrow').value = 'Safe Borrow Limit Exceeded';
            }
            if (SafeWithdrawlUSC > 0) {
                document.getElementById('USCWithdrawl').value = SafeWithdrawlUSC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                document.getElementById('USCBorrow').value = SafeBorrowUSC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
                else {document.getElementById('USCWithdrawl').value = 'Safe Borrow Limit Exceeded';
                    document.getElementById('USCBorrow').value = 'Safe Borrow Limit Exceeded';
                }
            if (SafeWithdrawlETCPOW > 0) {
                document.getElementById('ETCPOWWithdrawl').value = SafeWithdrawlETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                document.getElementById('ETCPOWBorrow').value = SafeBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
                else {document.getElementById('ETCPOWWithdrawl').value = 'Safe Borrow Limit Exceeded';
                    document.getElementById('ETCPOWBorrow').value = 'Safe Borrow Limit Exceeded';
                }
            if (ETCWallet > ETCBorrow) {
                document.getElementById('ETCRepay').value = ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
                else {document.getElementById('ETCRepay').value = ETCWallet.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                }
            if (USCWallet > USCBorrow) {
                document.getElementById('USCRepay').value = USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
                else {document.getElementById('USCRepay').value = USCWallet.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                }
            if (ETCPOWWallet > ETCPOWBorrow) {
                document.getElementById('ETCPOWRepay').value = ETCPOWBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
                else {document.getElementById('ETCPOWRepay').value = ETCPOWWallet.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                }
});});
    });});
});});});});});
});});});
});});});};




           //claim Nyke Rewards
           function claimNykeRewards() {
            let account = document.getElementById('connectbutton').innerHTML;
            ComptrollerContractMM.methods.claimComp(`${account}`).send({from:`${account}`});
           }

                  document.getElementById("claimRewards").onclick = claimNykeRewards;
                  


            //USC Transactions
            const ApproveUSCRepay = async () => {
            console.log("Clicked Send Tx")
            document.getElementById('USCApproveSpin').style.display = 'block';
            let USCAmount = document.getElementById('USCRepay').value;
            USCAmount = USCAmount * (10 ** 6);
            let account = document.getElementById('connectbutton').innerHTML;
                USCContractMM.methods.approve('0xA11d739365d469c87F3daBd922a82cfF21b71c9B',`${USCAmount}`).send({from:`${account}`}).then((tx => {
                    if (tx = true) {
                        console.log("Approval Successful!");
                        document.getElementById('USCRepay1').style.display = 'none';
                        document.getElementById('USCRepay2').style.display = 'block';
                        document.getElementById('USCApproveSpin').style.display = 'none';
                    }
                        else {
                            console.log("Approval Failed!");
                            document.getElementById('USCApproveSpin').style.display = 'none'; }}))}


                const RepayUSC = async () => {
                console.log("Clicked Send Tx")
                let USCAmount = document.getElementById('USCRepay').value;
                USCAmount = USCAmount * (10 ** 6);
                let account = document.getElementById('connectbutton').innerHTML;
                await nUSCContractMM.methods.repayBorrow(`${USCAmount}`).send({from:`${account}`}).then((tx) => {
                if (tx = true) {
                console.log("Approval Successful!");
                document.getElementById('USCRepay1').style.display = 'block';
                document.getElementById('USCRepay2').style.display = 'none';
                document.getElementById('USCApproveSpin').style.display = 'none';
                }
                else {
                console.log("Approval Failed!");}})}

       
            const USCApprove = async () => {
            console.log("Clicked Send Tx")
            document.getElementById('USCApproveSpin1').style.display = 'block';
            let USCAmount = document.getElementById('USCDeposit').value;
            USCAmount = USCAmount * (10 ** 6);
            let account = document.getElementById('connectbutton').innerHTML;
            await USCContractMM.methods.approve('0xA11d739365d469c87F3daBd922a82cfF21b71c9B',`${USCAmount}`).send({from:`${account}`}).then((tx) => {
            if (tx = true) {
            console.log("Approval Successful!");
            document.getElementById('USCSupplySubmit').style.display = 'block';
            document.getElementById('USCSupplyApprove').style.display = 'none';
            document.getElementById('USCApproveSpin1').style.display = 'none';
            }
            else {
            console.log("Approval Failed!");
            document.getElementById('USCApproveSpin1').style.display = 'none';
            }})}

            document.getElementById("USCApproveSup").onclick = USCApprove;

            const USCMint = async () => {
                console.log("Clicked Send Tx")
                let USCAmount = document.getElementById('USCDeposit').value;
                USCAmount = USCAmount * (10 ** 6);
                let account = document.getElementById('connectbutton').innerHTML;
                await nUSCContractMM.methods.mint(`${USCAmount}`).send({from:`${account}`}).then((tx) => {
                if (tx = true) {
                console.log("Approval Successful!");
                document.getElementById('USCSupplySubmit').style.display = 'none';
                document.getElementById('USCSupplyApprove').style.display = 'block';
                document.getElementById('USCApproveSpin1').style.display = 'none';
                }
                else {
                console.log("Approval Failed!");
                document.getElementById('USCApproveSpin1').style.display = 'none';
                }})}

                document.getElementById("USCSupplySubmit").onclick = USCMint;






            function WithdrawlUSC() {
            let USCAmount = document.getElementById('USCWithdrawl').value;
            USCAmount = USCAmount * (10 ** 6);
            let account = document.getElementById('connectbutton').innerHTML;
            nUSCContractMM.methods.redeemUnderlying(`${USCAmount}`).send({from:`${account}`});}

            function BorrowUSC() {
            let USCAmount = document.getElementById('USCBorrow').value;
            USCAmount = USCAmount * (10 ** 6);
            let account = document.getElementById('connectbutton').innerHTML;
            nUSCContractMM.methods.borrow(`${USCAmount}`).send({from:`${account}`});}


                        //ETCPOW Transactions
                        const ApproveETCPOWRepay = async () => {
                            console.log("Clicked Send Tx")
                            document.getElementById('ETCPOWApproveSpin').style.display = 'block';
                            let ETCPOWAmount = document.getElementById('ETCPOWRepay').value;
                            ETCPOWAmount =  (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                            let account = document.getElementById('connectbutton').innerHTML;
                                ETCPOWContractMM.methods.approve('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d',`${ETCPOWAmount}`).send({from:`${account}`}).then((tx) => {
                                    if (tx = true) {
                                        console.log("Approval Successful!");
                                        document.getElementById('ETCPOWRepay1').style.display = 'none';
                                        document.getElementById('ETCPOWRepay2').style.display = 'block';
                                        document.getElementById('ETCPOWApproveSpin').style.display = 'none';
                                    }
                                        else {
                                            console.log("Approval Failed!");
                                            document.getElementById('ETCPOWApproveSpin').style.display = 'none'; }})}
                
                
                                const RepayETCPOW = async () => {
                                console.log("Clicked Send Tx")
                                let ETCPOWAmount = document.getElementById('ETCPOWRepay').value;
                                ETCPOWAmount =  (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                                let account = document.getElementById('connectbutton').innerHTML;
                                await nETCPOWContractMM.methods.repayBorrow(`${ETCPOWAmount}`).send({from:`${account}`}).then((tx) => {
                                if (tx = true) {
                                console.log("Approval Successful!");
                                document.getElementById('ETCPOWRepay1').style.display = 'block';
                                document.getElementById('ETCPOWRepay2').style.display = 'none';
                                document.getElementById('ETCPOWApproveSpin').style.display = 'none';
                                }
                                else {
                                console.log("Approval Failed!");}})}
                
                       
                            const ETCPOWApprove = async () => {
                            console.log("Clicked Send Tx")
                            document.getElementById('ETCPOWApproveSpin1').style.display = 'block';
                            let ETCPOWAmount = document.getElementById('ETCPOWDeposit').value;
                            ETCPOWAmount = (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                            let account = document.getElementById('connectbutton').innerHTML;
                            await ETCPOWContractMM.methods.approve('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d',`${ETCPOWAmount}`).send({from:`${account}`}).then((tx) => {
                            if (tx = true) {
                            console.log("Approval Successful!");
                            document.getElementById('ETCPOWSupplySubmit').style.display = 'block';
                            document.getElementById('ETCPOWSupplyApprove').style.display = 'none';
                            document.getElementById('ETCPOWApproveSpin1').style.display = 'none';
                            }
                            else {
                            console.log("Approval Failed!");
                            document.getElementById('ETCPOWApproveSpin1').style.display = 'none';
                            }})}
                
                            document.getElementById("ETCPOWApproveSup").onclick = ETCPOWApprove;
                
                            const ETCPOWMint = async () => {
                                console.log("Clicked Send Tx")
                                let ETCPOWAmount = document.getElementById('ETCPOWDeposit').value;
                                ETCPOWAmount =  (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                                let account = document.getElementById('connectbutton').innerHTML;
                                await nETCPOWContractMM.methods.mint(`${ETCPOWAmount}`).send({from:`${account}`}).then((tx) => {
                                if (tx = true) {
                                console.log("Approval Successful!");
                                document.getElementById('ETCPOWSupplySubmit').style.display = 'none';
                                document.getElementById('ETCPOWSupplyApprove').style.display = 'block';
                                document.getElementById('ETCPOWApproveSpin1').style.display = 'none';
                                }
                                else {
                                console.log("Approval Failed!");
                                document.getElementById('ETCPOWApproveSpin1').style.display = 'none';
                                }})}
                
                                document.getElementById("ETCPOWSupplySubmit").onclick = ETCPOWMint;
                
                
                
                
                
                
                            function WithdrawlETCPOW() {
                            let ETCPOWAmount = document.getElementById('ETCPOWWithdrawl').value;
                            ETCPOWAmount = (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                            let account = document.getElementById('connectbutton').innerHTML;
                            nETCPOWContractMM.methods.redeemUnderlying(`${ETCPOWAmount}`).send({from:`${account}`});}
                
                            function BorrowETCPOW() {
                            let ETCPOWAmount = document.getElementById('ETCPOWBorrow').value;
                            ETCPOWAmount = (ETCPOWAmount * (10 ** 18)).toLocaleString('fullwide', {useGrouping:false});
                            let account = document.getElementById('connectbutton').innerHTML;
                            nETCPOWContractMM.methods.borrow(`${ETCPOWAmount}`).send({from:`${account}`});}



  
//Lending Modals
                  function openModal() {
                          $('#usermodal').modal('show');}
  
                  function CloseModal() {
                      document.getElementById('ETCModal').style.display = "none";

                  }
  
                  function SupplyModal() {
                      document.getElementById('modal-supply').style.display = "block";
                      document.getElementById('modal-withdrawl').style.display = "none";
                      document.getElementById('modal-borrow').style.display = "none";
                      document.getElementById('modal-repay').style.display = "none";
                      let account = document.getElementById('connectbutton').innerHTML;
                  ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
                              let wei = parseInt(result, 16);
                              let balance = wei / (10 ** 18);
                              balance = balance.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;});
                      nETCContract.methods.balanceOf(account).call({from: account}, function(err,ETCSupplied){
                        nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                            ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                            console.log(ETCExchangeMantissa);
                        console.log(ETCSupplied);
                       ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
                       document.getElementById('UserETCSupply2').innerText = `${ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
                        UpdateBorrowLimit();	
                  })})}
  
                  function WithdrawlModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "block";
                      document.getElementById('modal-borrow').style.display = "none";
                      document.getElementById('modal-repay').style.display = "none";
                      document.getElementById('ETCWithdrawl').value = '';
                      document.getElementById('ETCBorrow').value = '';
                      document.getElementById('ETCRepay').value = 0;
                        let account = document.getElementById('connectbutton').innerHTML;
                        let _UserETCSupplied;
                      nETCContractMM.methods.balanceOf(`${account}`).call().then(result => {
                        nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                            ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                            console.log(ETCExchangeMantissa);
                        _UserETCSupplied = result;
                        let UserETCSupply = ((_UserETCSupplied / (10 ** 18)) *ETCExchangeMantissa);
                        console.log(result);
                        const UserSuppliedETC = document.getElementById('UserETCSupply');
                          UserSuppliedETC.innerText = `${UserETCSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;});});
                    UpdateBorrowLimit();	
                  }
  
                  function BorrowModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "none";
                      document.getElementById('modal-borrow').style.display = "block";
                      document.getElementById('modal-repay').style.display = "none";
                      document.getElementById('ETCWithdrawl').value = '';
                      document.getElementById('ETCBorrow').value = '';
                      document.getElementById('ETCRepay').value = '';
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalanceModal');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
                          UpdateBorrowLimit();		
                      });}
                      
  
                  function RepayModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "none";
                      document.getElementById('modal-borrow').style.display = "none";
                      document.getElementById('modal-repay').style.display = "block";
                      document.getElementById('ETCWithdrawl').value = '';
                      document.getElementById('ETCBorrow').value = '';
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalance');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                          UpdateBorrowLimit();		
                  })}
  
                  function USCSupplyModal() {
                    document.getElementById('USCSupplySubmit').style.display = 'none';
                    document.getElementById('USCSupplyApprove').style.display = 'block';
                    document.getElementById('USCApproveSpin1').style.display = 'none';
                      document.getElementById('USCmodal-supply').style.display = "block";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "none";
                      let account = document.getElementById('connectbutton').innerHTML;
                      let USCBalanceOf;
                        USCContract.methods.balanceOf(`${account}`).call().then(result => {
                            USCBalanceOf = (result / (10 ** 6)).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                            console.log(USCBalanceOf);
                            document.getElementById('USCBalanceWallet').innerText = USCBalanceOf;
                        });
                        nUSCContract.methods.balanceOf(account).call({from: account}).then(USCSup => {
                            nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
                                USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
                                console.log(USCExchangeMantissa);
                                USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
                            document.getElementById('UserUSCSupply2').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;
                        });});

                        UpdateBorrowLimit();
                      //Get Borrowed Balance
                      }

                      function ETCPOWSupplyModal() {
                        document.getElementById('ETCPOWSupplySubmit').style.display = 'none';
                        document.getElementById('ETCPOWSupplyApprove').style.display = 'block';
                        document.getElementById('ETCPOWApproveSpin1').style.display = 'none';
                          document.getElementById('ETCPOWmodal-supply').style.display = "block";
                          document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                          document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                          document.getElementById('ETCPOWmodal-repay').style.display = "none";
                          let account = document.getElementById('connectbutton').innerHTML;
                          let ETCPOWBalanceOf;
                            ETCPOWContract.methods.balanceOf(`${account}`).call().then(result => {
                                ETCPOWBalanceOf = (result / (10 ** 18)).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                                console.log(ETCPOWBalanceOf);
                                document.getElementById('ETCPOWBalanceWallet').innerText = ETCPOWBalanceOf;
                            });
                            nETCPOWContract.methods.balanceOf(account).call({from: account}).then(ETCPOWSup => {
                                nETCPOWContract.methods.exchangeRateStored().call({from: account}).then(ETCPOWExchangeMantissa => {
                                    ETCPOWExchangeMantissa = ETCPOWExchangeMantissa / (10 ** 18);
                                    console.log(ETCPOWExchangeMantissa);
                                    ETCPOWSup = (ETCPOWSup / (10 ** 18))*ETCPOWExchangeMantissa;
                                document.getElementById('UserETCPOWSupply2').innerText = `${ETCPOWSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETCPOW`;
                                document.getElementById('UserETCPOWSupply').innerText = `${ETCPOWSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                            });});
    
                            UpdateBorrowLimit();
                          //Get Borrowed Balance
                          }

                  function USCWithdrawlModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "block";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "none";
                      document.getElementById('USCWithdrawl').value = '';
                      document.getElementById('USCBorrow').value = '';
                      document.getElementById('USCRepay').value = '';
                      UpdateBorrowLimit();
                  }
  
                  function ETCPOWWithdrawlModal() {
                    document.getElementById('ETCPOWmodal-supply').style.display = "none";
                    document.getElementById('ETCPOWmodal-withdrawl').style.display = "block";
                    document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                    document.getElementById('ETCPOWmodal-repay').style.display = "none";
                    document.getElementById('ETCPOWWithdrawl').value = '';
                    document.getElementById('ETCPOWBorrow').value = '';
                    document.getElementById('ETCPOWRepay').value = '';
                    UpdateBorrowLimit();
                }


                  function USCBorrowModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "block";
                      document.getElementById('USCmodal-repay').style.display = "none";
                      document.getElementById('USCWithdrawl').value = '';
                      document.getElementById('USCBorrow').value = '';
                      document.getElementById('USCRepay').value = '';
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalanceModal');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;		
                      });
                      UpdateBorrowLimit();}

                      function ETCPOWBorrowModal() {
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "block";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWWithdrawl').value = '';
                        document.getElementById('ETCPOWBorrow').value = '';
                        document.getElementById('ETCPOWRepay').value = '';
                        let account = document.getElementById('connectbutton').innerHTML;
                        let _UserBorrowETCPOW;
                        nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                            _UserBorrowETCPOW = result;
                            let UserBorrowETCPOW = _UserBorrowETCPOW / (10 ** 18);
                            console.log(result);
                            document.getElementById('ETCPOWBorrowBalanceModal').innerText = `${UserBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;			
                        });
                        UpdateBorrowLimit();}
                      
  
                 async function USCRepayModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "block";
                      document.getElementById('USCWithdrawl').value = '';
                      document.getElementById('USCBorrow').value = '';
                      document.getElementById('USCRepay').value = '';
                      document.getElementById('USCRepay1').display = 'block';
                      document.getElementById('USCRepay2').display = 'none';
                      document.getElementById('USCRepay1').style.display = 'block';
                      document.getElementById('USCRepay2').style.display = 'none';
                      document.getElementById('USCApproveSpin').style.display = 'none';
                     
                  UpdateBorrowLimit();}

                  async function ETCPOWRepayModal() {
                    document.getElementById('ETCPOWmodal-supply').style.display = "none";
                    document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                    document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                    document.getElementById('ETCPOWmodal-repay').style.display = "block";
                    document.getElementById('ETCPOWWithdrawl').value = '';
                    document.getElementById('ETCPOWBorrow').value = '';
                    document.getElementById('ETCPOWRepay').value = '';
                    document.getElementById('ETCPOWRepay1').display = 'block';
                    document.getElementById('ETCPOWRepay2').display = 'none';
                    document.getElementById('ETCPOWRepay1').style.display = 'block';
                    document.getElementById('ETCPOWRepay2').style.display = 'none';
                    document.getElementById('ETCPOWApproveSpin').style.display = 'none';
                    let account = document.getElementById('connectbutton').innerHTML;
                    let _UserBorrowETCPOW;
                    nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                        _UserBorrowETCPOW = result;
                        let UserBorrowETCPOW = _UserBorrowETCPOW / (10 ** 18);
                        console.log(result);
                        document.getElementById('ETCPOWBorrowBalance').innerText = `${UserBorrowETCPOW.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;		
                    });
                   
                UpdateBorrowLimit();}
                
                  //0xA11d739365d469c87F3daBd922a82cfF21b71c9B
                  //0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B
  
                  document.getElementById("ETCDepositButton").onclick = sendETC;
                  document.getElementById("ETCWithdrawlButton").onclick = withdrawlETC;
                  document.getElementById("ETCBorrowButton").onclick = borrowETC;
                  document.getElementById("ETCRepayButton").onclick = repayETC;
               //   document.getElementById("USCDepositButton").onclick = MintnUSC;
                  document.getElementById("SafeMax").onclick = SafeMaxValue;
                  document.getElementById("SafeMaxRepay").onclick = SafeMaxValue;
                  document.getElementById("SafeMaxBorrow").onclick = SafeMaxValue;
                  document.getElementById("ApproveOrSubmit").onclick = ApproveUSCRepay;
                  document.getElementById("USCWithdrawlButton").onclick = WithdrawlUSC;
                  document.getElementById("SafeMaxUSC").onclick = SafeMaxValue;
                  document.getElementById("SafeMaxBorrowUSC").onclick = SafeMaxValue;
                  document.getElementById("USCBorrowButton").onclick = BorrowUSC;
                //  document.getElementById("USCRepayButton").onclick = ApproveUSCRepay;
                   document.getElementById("USCRepaySubmit").onclick = RepayUSC;
                  document.getElementById("SafeMaxRepayUSC").onclick = SafeMaxValue;

                  document.getElementById("ETCPOWApproveOrSubmit").onclick = ApproveETCPOWRepay;
                  document.getElementById("ETCPOWWithdrawlButton").onclick = WithdrawlETCPOW;
                  document.getElementById("SafeMaxETCPOW").onclick = SafeMaxValue;
                  document.getElementById("SafeMaxBorrowETCPOW").onclick = SafeMaxValue;
                  document.getElementById("ETCPOWBorrowButton").onclick = BorrowETCPOW;
                //  document.getElementById("ETCPOWRepayButton").onclick = ApproveETCPOWRepay;
                   document.getElementById("ETCPOWRepaySubmit").onclick = RepayETCPOW;
                  document.getElementById("SafeMaxRepayETCPOW").onclick = SafeMaxValue;
                  document.getElementById("connectbutton").onclick = ConnectWallet;
        

                  //Open MODAL

                    var table = document.getElementsByTagName("table")[2];
                    var table1 = document.getElementsByTagName("table")[0];  
                    var table2 = document.getElementsByTagName("table")[1];  
                    var rows = table.getElementsByTagName("tr");
  
                      function ETCrow() {

                          document.getElementById('modal-container').style.display = "block";
                          document.getElementById('modal-supply').style.display = "block";
                          document.getElementById('modal-withdrawl').style.display = "none";
                          document.getElementById('modal-borrow').style.display = "none";
                          document.getElementById('modal-repay').style.display = "none";
                          document.getElementById('USCmodal-supply').style.display = "none";
                          document.getElementById('USCmodal-withdrawl').style.display = "none";
                          document.getElementById('USCmodal-borrow').style.display = "none";
                          document.getElementById('USCmodal-repay').style.display = "none";
                          document.getElementById('ETCPOWmodal-supply').style.display = "none";
                          document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                          document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                          document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        SupplyModal();
                      }

                      function ETCWithdrawRow() {

                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "block";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        WithdrawlModal();
                    }

                    function ETCBorrowRow() {

                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "block";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        BorrowModal();
                    }

                    function ETCRepayRow() {

                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "block";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        RepayModal();
                    }



                      function USCrow() {
                          document.getElementById('modal-container').style.display = "block";
                          document.getElementById('modal-supply').style.display = "none";
                          document.getElementById('modal-withdrawl').style.display = "none";
                          document.getElementById('modal-borrow').style.display = "none";
                          document.getElementById('modal-repay').style.display = "none";
                          document.getElementById('USCmodal-supply').style.display = "block";
                          document.getElementById('USCmodal-withdrawl').style.display = "none";
                          document.getElementById('USCmodal-borrow').style.display = "none";
                          document.getElementById('USCmodal-repay').style.display = "none";
                          document.getElementById('ETCPOWmodal-supply').style.display = "none";
                          document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                          document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                          document.getElementById('ETCPOWmodal-repay').style.display = "none";
                          USCSupplyModal();
                      }

                      function USCWithdrawRow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "block";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        USCWithdrawlModal();
                    }

                    function USCBorrowRow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "block";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        USCBorrowModal();
                    }

                    function USCRepayRow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "block";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        USCRepayModal();
                    }

                      function ETCPOWrow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "block";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";

                        ETCPOWSupplyModal();
                    }

                    function ETCPOWWithdrawrow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "block";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "none";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";
                        ETCPOWSupplyModal();
                        ETCPOWWithdrawlModal();
                    }

                    function ETCPOWBorrowRow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "block";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";

                        ETCPOWBorrowModal();
                    }

                    function ETCPOWRepayRow() {
                        document.getElementById('modal-container').style.display = "block";
                        document.getElementById('modal-supply').style.display = "none";
                        document.getElementById('modal-withdrawl').style.display = "none";
                        document.getElementById('modal-borrow').style.display = "none";
                        document.getElementById('modal-repay').style.display = "none";
                        document.getElementById('USCmodal-supply').style.display = "none";
                        document.getElementById('USCmodal-withdrawl').style.display = "none";
                        document.getElementById('USCmodal-borrow').style.display = "none";
                        document.getElementById('USCmodal-repay').style.display = "none";
                        document.getElementById('ETCPOWmodal-supply').style.display = "none";
                        document.getElementById('ETCPOWmodal-withdrawl').style.display = "none";
                        document.getElementById('ETCPOWmodal-borrow').style.display = "block";
                        document.getElementById('ETCPOWmodal-repay').style.display = "none";

                        ETCPOWRepayModal();
                    }

                    document.getElementById("ETCDepositButtonModal").onclick = ETCrow;
                    document.getElementById("ETCWithdrawButtonModal").onclick = ETCWithdrawRow;
                    document.getElementById("ETCBorrowButtonModal").onclick = ETCBorrowRow;
                    document.getElementById("ETCRepayButtonModal").onclick = ETCRepayRow;

                    document.getElementById("USCDepositButtonModal").onclick = USCrow;
                    document.getElementById("USCWithdrawButtonModal").onclick = USCWithdrawRow;
                    document.getElementById("USCBorrowButtonModal").onclick = USCBorrowRow;
                    document.getElementById("USCRepayButtonModal").onclick = USCRepayRow;

                    document.getElementById("ETCPOWDepositButtonModal").onclick = ETCPOWrow;
                    document.getElementById("ETCPOWWithdrawButtonModal").onclick = ETCPOWWithdrawrow;
                    document.getElementById("ETCPOWBorrowButtonModal").onclick = ETCPOWBorrowRow;
                    document.getElementById("ETCPOWRepayButtonModal").onclick = ETCPOWRepayRow;
      
                     table.rows[1].onclick = ETCrow;    
                     table.rows[2].onclick = USCrow;
                     table.rows[3].onclick = ETCPOWrow;
                   //   table1.rows[1].onclick = ETCrow;
                   //   table1.rows[2].onclick = USCrow;
                  //    table1.rows[3].onclick = ETCPOWrow;
                   //   table2.rows[1].onclick = ETCrow;
                    //  table2.rows[2].onclick = USCrow;
                   //   table2.rows[3].onclick = ETCPOWrow;
                  


      function closeModal(){
                          document.getElementById('modal-container').style.display = "none";
                          document.getElementById('modal-supply').style.display = "none";
                          document.getElementById('modal-withdrawl').style.display = "none";
                          document.getElementById('modal-borrow').style.display = "none";
                          document.getElementById('modal-repay').style.display = "none";
                          document.getElementById('USCmodal-supply').style.display = "none";
                          document.getElementById('USCmodal-withdrawl').style.display = "none";
                          document.getElementById('USCmodal-borrow').style.display = "none";
                          document.getElementById('USCmodal-repay').style.display = "none";
                          main();
                      }

        //Calculate accrued NYKE

        const AccruedNYKE = async () => {
            let account = document.getElementById('connectbutton').innerHTML;
            const currentblock = await web3.eth.getBlockNumber();
            //USC Borrow
            const USCBorrowerIndex = await ComptrollerContractMM.methods.compBorrowerIndex('0xA11d739365d469c87F3daBd922a82cfF21b71c9B',`${account}`).call();  
            const USCBorrowMarket = await ComptrollerContractMM.methods.compBorrowState('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
            const {0: USCBorrowIndex, 1: USCBorrowBlock} = USCBorrowMarket;
            const USCBorrowSpeeds = await ComptrollerContractMM.methods.compBorrowSpeeds('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
            const USCBorrowed1 = await nUSCContractMM.methods.totalBorrows().call();
            let USCBorrowed = (USCBorrowed1/(10 ** 18));
            const USCUserBorrow1 = await nUSCContractMM.methods.borrowBalanceStored(`${account}`).call();
            let USCUserBorrow = (USCUserBorrow1/(10 ** 16));
            let accruedUSCBorrow = ((((USCBorrowed-(USCBorrowIndex-USCBorrowerIndex))/(10 ** 36))*USCUserBorrow)/(10 ** 18))+((((currentblock-USCBorrowBlock)*USCBorrowSpeeds)*(USCUserBorrow/USCBorrowed))/(10 ** 18));
            console.log(accruedUSCBorrow);
            //USC Supply
            const USCSupplierIndex = await ComptrollerContractMM.methods.compSupplierIndex('0xA11d739365d469c87F3daBd922a82cfF21b71c9B',`${account}`).call();  
            const USCSupplyMarket = await ComptrollerContractMM.methods.compSupplyState('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
            const {0: USCSupplyIndex, 1: USCSupplyBlock} = USCSupplyMarket;
            const USCSupplySpeeds = await ComptrollerContractMM.methods.compSupplySpeeds('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
            const USCSupplied1 = await nUSCContractMM.methods.totalSupply().call();
            let USCSupplied = (USCSupplied1/(10 ** 18));
            const USCUserSupplied1 = await nUSCContractMM.methods.balanceOf(`${account}`).call();
            let USCUserSupplied = (USCUserSupplied1/(10 ** 16));
            let accruedUSCSupply = ((((USCSupplied-(USCSupplyIndex-USCSupplierIndex))/(10 ** 36))*USCUserSupplied)/(10 ** 18))+((((currentblock-USCSupplyBlock)*USCSupplySpeeds)*(USCUserSupplied/USCSupplied))/(10 ** 18));
            console.log(accruedUSCSupply + 'USC Supplied');
            //ETC Borrow
            const ETCBorrowerIndex = await ComptrollerContractMM.methods.compBorrowerIndex('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0',`${account}`).call();  
            const ETCBorrowMarket = await ComptrollerContractMM.methods.compBorrowState('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
            const {0: ETCBorrowIndex, 1: ETCBorrowBlock} = ETCBorrowMarket;
            const ETCBorrowSpeeds = await ComptrollerContractMM.methods.compBorrowSpeeds('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
            console.log(ETCBorrowSpeeds + 'ETCBorrowSpeed');
            const ETCBorrowed1 = await nETCContractMM.methods.totalBorrows().call();
            let ETCBorrowed = (ETCBorrowed1/(10 ** 18));
            console.log(ETCBorrowed + 'ETCBorrowed');
            const ETCUserBorrow1 = await nETCContractMM.methods.borrowBalanceStored(`${account}`).call();
            let ETCUserBorrow = (ETCUserBorrow1/(10 ** 18));
            console.log(ETCUserBorrow + 'ETCUserBorrow');
            let accruedETCBorrow = ((((ETCBorrowed-(ETCBorrowIndex-ETCBorrowerIndex))/(10 ** 36))*ETCUserBorrow)/(10 ** 18))+((((currentblock-ETCBorrowBlock)*ETCBorrowSpeeds)*(ETCUserBorrow/ETCBorrowed))/(10 ** 18));
            console.log(accruedETCBorrow + 'Accrued ETC Borrow');

            //ETC Supply
            const ETCSupplierIndex = await ComptrollerContractMM.methods.compSupplierIndex('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0',`${account}`).call();  
            const ETCSupplyMarket = await ComptrollerContractMM.methods.compSupplyState('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
            const {0: ETCSupplyIndex, 1: ETCSupplyBlock} = ETCSupplyMarket;
            const ETCSupplySpeeds = await ComptrollerContractMM.methods.compSupplySpeeds('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
            console.log(ETCSupplySpeeds + 'ETCSupplySpeed');
            const ETCSupplied1 = await nETCContractMM.methods.totalSupply().call();
            let ETCSupplied = (ETCSupplied1/(10 ** 18));
            const ETCUserSupplied1 = await nETCContractMM.methods.balanceOf(`${account}`).call();
            let ETCUserSupplied = (ETCUserSupplied1/(10 ** 18));
            console.log(ETCUserSupplied);
            let accruedETCSupply = ((((ETCSupplied-(ETCSupplyIndex-ETCSupplierIndex))/(10 ** 36))*ETCUserSupplied)/(10 ** 18))+((((currentblock-ETCSupplyBlock)*ETCSupplySpeeds)*(ETCUserSupplied/ETCSupplied))/(10 ** 18));
            console.log(accruedETCSupply + 'Accrued ETC Supply');

            //ETCPOW Borrow
            const ETCPOWBorrowerIndex = await ComptrollerContractMM.methods.compBorrowerIndex('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d',`${account}`).call();  
            const ETCPOWBorrowMarket = await ComptrollerContractMM.methods.compBorrowState('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call();
            const {0: ETCPOWBorrowIndex, 1: ETCPOWBorrowBlock} = ETCPOWBorrowMarket;
            const ETCPOWBorrowSpeeds = await ComptrollerContractMM.methods.compBorrowSpeeds('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call();
            const ETCPOWBorrowed1 = await nETCPOWContractMM.methods.totalBorrows().call();
            let ETCPOWBorrowed = (ETCPOWBorrowed1/(10 ** 18));
            const ETCPOWUserBorrow1 = await nETCPOWContractMM.methods.borrowBalanceStored(`${account}`).call();
            let ETCPOWUserBorrow = (ETCPOWUserBorrow1/(10 ** 18));
            let accruedETCPOWBorrow = ((((ETCPOWBorrowed-(ETCPOWBorrowIndex-ETCPOWBorrowerIndex))/(10 ** 36))*ETCPOWUserBorrow)/(10 ** 18))+((((currentblock-ETCPOWBorrowBlock)*ETCPOWBorrowSpeeds)*(ETCPOWUserBorrow/ETCPOWBorrowed))/(10 ** 18));
            console.log(accruedETCPOWBorrow);
            //ETCPOW Supply
            const ETCPOWSupplierIndex = await ComptrollerContractMM.methods.compSupplierIndex('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d',`${account}`).call();  
            const ETCPOWSupplyMarket = await ComptrollerContractMM.methods.compSupplyState('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call();
            const {0: ETCPOWSupplyIndex, 1: ETCPOWSupplyBlock} = ETCPOWSupplyMarket;
            const ETCPOWSupplySpeeds = await ComptrollerContractMM.methods.compSupplySpeeds('0x3f1a86FeD9cBF8866D55F21dfd880C0a4065285d').call();
            const ETCPOWSupplied1 = await nETCPOWContractMM.methods.totalSupply().call();
            let ETCPOWSupplied = (ETCPOWSupplied1/(10 ** 18));
            const ETCPOWUserSupplied1 = await nETCPOWContractMM.methods.balanceOf(`${account}`).call();
            let ETCPOWUserSupplied = (ETCPOWUserSupplied1/(10 ** 18));
            let accruedETCPOWSupply = ((((ETCPOWSupplied-(ETCPOWSupplyIndex-ETCPOWSupplierIndex))/(10 ** 36))*ETCPOWUserSupplied)/(10 ** 18))+((((currentblock-ETCPOWSupplyBlock)*ETCPOWSupplySpeeds)*(ETCPOWUserSupplied/ETCPOWSupplied))/(10 ** 18));
            console.log(accruedETCPOWSupply);

            //Calculate Accrued NYKE
            const CurrentAccruedNYKE = await ComptrollerContractMM.methods.compAccrued(`${account}`).call();
            console.log(CurrentAccruedNYKE + 'AccruedNYKE');
            let CurrentNyke = (CurrentAccruedNYKE / (10**18));
            console.log(CurrentNyke + 'AccruedNYKE');
            let accruedRewards = (CurrentNyke + accruedETCPOWSupply + accruedETCPOWBorrow + accruedETCBorrow + accruedETCSupply + accruedUSCBorrow + accruedUSCSupply); 
            accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
            }
                    
