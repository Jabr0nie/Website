

              // Setting getblock node as HTTP provider
              const provider = new Web3.providers.HttpProvider("https://go.getblock.io/60e5a3f8fbcd4953b12b226760d7e5e1/");
              // Creating web3 instance with given provider
                  const web3 = new Web3(provider);
              // Initializing web3.eth method
                  var block = web3.eth.getBlockNumber().then(console.log);
  
                  let web3m = new Web3(window.ethereum);
  
                  //connect to MetaMask
  
                  window.onload = async function() {
                    isConnected();

                 };

         //        async function Chain() {
       //             let chain;
        //            await web3m.eth.getChainId().then(chain => {
       //                 console.log(chain); 
         //               if (chain == 61) {
        //                    console.log('ETC NETWORK');
       //                     document.getElementById('connectbutton').style.background = '#cc0606';
       //                 } else
      //                  console.log('WRONG NETWORK');
     ///                   document.getElementById('connectbutton').innerHTML = 'WRONG NETWORK';
      //                  document.getElementById('connectbutton').style.background = '#cc0606';
////
     //               })}


                    
                

              
        async function isConnected() {
         
           const accounts = await ethereum.request({method: 'eth_accounts'});       
           if (accounts.length) {
              let account;
              const BlocksPerYear = 2425790;
              console.log(`You're connected to: ${accounts[0]}`)
              account = accounts[0];
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
                    ComptrollerContract.methods.compAccrued(`${account}`).call().then(accruedRewards => {
                    accruedRewards = accruedRewards / (10 ** 18);
                    accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                        document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
                    })


                          //In market?
                          ComptrollerContract.methods.checkMembership(`${account}`,'0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(result => {
                            document.getElementById("ETCCheckbox").checked = result;});
                            ComptrollerContract.methods.checkMembership(`${account}`,'0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(result => {
                                document.getElementById("USCCheckbox").checked = result;});
                            //ETC Borrowed
                                nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                ETCBorrow = ETCBorrow / (10 ** 18);
                                document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
                            //USC Borrowed Amount
                            nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                USCBorrow = USCBorrow / (10 ** 6);
                                document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;

                            // Oracle Price Update
                            OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                USCPrice = USCPrice / (10 ** 18);
                             //USC Supplied Amount
                          nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                            nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
                                USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
                                console.log(USCExchangeMantissa);
                            USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
                            USCSup = USCSup;
                            document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;
                            //ETC Supplied
                          nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                           nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                                ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                                console.log(ETCExchangeMantissa);
                            console.log(ETCSupplied);
                           ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
                           ETCSupplied = ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                           document.getElementById('YourETCSupplied').innerText = `${ETCSupplied} ETC`;
                            OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                ETCPrice = ETCPrice / (10 ** 18);
                                ETCPrice = (ETCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
                                let ETCAsset = (ETCPrice * ETCSupplied);
                                let USCAsset = (USCPrice * USCSup);
                                let Assets = (USCAsset + ETCAsset);
                                document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                let ETCLiability = (ETCPrice * ETCBorrow);
                                let USCLiability = (USCPrice * USCBorrow);
                                let Liabilities = ((USCLiability + ETCLiability));
                                document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                            //User APR
                            const BlocksPerYear = 2425790;
                            nETCContract.methods.supplyRatePerBlock().call().then(ETCSupplyRate1 => {
                                ETCSupplyRate1 = ((ETCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                            nETCContract.methods.borrowRatePerBlock().call().then(ETCBorrowRate1 => { 
                                ETCBorrowRate1 = ((ETCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                            nUSCContract.methods.supplyRatePerBlock().call().then(USCSupplyRate1 => {
                                USCSupplyRate1 = ((USCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                            nUSCContract.methods.borrowRatePerBlock().call().then(USCBorrowRate1 => {
                                USCBorrowRate1 = ((USCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                            const UserRate = document.getElementById('UserAPR');
                            let Weight = ((((ETCAsset * ETCSupplyRate1)+(USCAsset * USCSupplyRate1)-(ETCLiability * ETCBorrowRate1)-(USCLiability * USCBorrowRate1))/(ETCAsset+USCAsset-ETCLiability-USCLiability))*100);
                        
                                if (Assets > 0){
                                    document.getElementById('UserAPR').innerText = `${Weight.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                                } 
                                });});});});
                            //Collateral Factor
                                const USCStatus = document.getElementById("USCCheckbox");
                                const ETCStatus = document.getElementById("ETCCheckbox");
                                    let borrowlimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked));
                                    let MaxBorrow =((Liabilities/(borrowlimit))*100);
                                    if (Liabilities > 0){
                                        document.getElementById('UserBorrowLimit').innerText = `${MaxBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;   
                                    } 
                                                                                     
                            });
                            });});
                        });});
                    });
                });});
              
           } else {
              console.log("Metamask is not connected");
           
           }
        };

                  document.getElementById('connectbutton').addEventListener('click', event => {
                
                      let account;
                      let button = event.target;
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
                    ComptrollerContract.methods.compAccrued(`${account}`).call().then(accruedRewards => {
                    accruedRewards = accruedRewards / (10 ** 18);
                    accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                        document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
                    })


                               //In market?
                              ComptrollerContract.methods.checkMembership(`${account}`,'0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(result => {
                                document.getElementById("ETCCheckbox").checked = result;});
                                ComptrollerContract.methods.checkMembership(`${account}`,'0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(result => {
                                    document.getElementById("USCCheckbox").checked = result;});

                                //ETC Borrowed
                                    nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                    ETCBorrow = ETCBorrow / (10 ** 18);
                                    document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
                                //USC Borrowed Amount
                                nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                    USCBorrow = USCBorrow / (10 ** 6);
                                    document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;

                                // Oracle Price Update
                                OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                    USCPrice = USCPrice / (10 ** 18);
                                 //USC Supplied Amount
                              nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                            nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
                                USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
                                console.log(USCExchangeMantissa);
                                USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
                                USCSup = USCSup;
                                document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;
                                //ETC Supplied
                              nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                                nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
                                    ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
                                    console.log(ETCExchangeMantissa);
                                console.log(ETCSupplied);
                               ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
                               ETCSupplied = ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                               document.getElementById('YourETCSupplied').innerText = `${ETCSupplied} ETC`;
                                OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                    ETCPrice = ETCPrice / (10 ** 18);
                                    ETCPrice = (ETCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
                                    let ETCAsset = (ETCPrice * ETCSupplied);
                                    let USCAsset = (USCPrice * USCSup);
                                    let Assets = (USCAsset + ETCAsset);
                                    document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                    let ETCLiability = (ETCPrice * ETCBorrow);
                                    let USCLiability = (USCPrice * USCBorrow);
                                    let Liabilities = ((USCLiability + ETCLiability));
                                    document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
                                //User APR
                                const BlocksPerYear = 2425790;
                                nETCContract.methods.supplyRatePerBlock().call().then(ETCSupplyRate1 => {
                                    ETCSupplyRate1 = ((ETCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                                nETCContract.methods.borrowRatePerBlock().call().then(ETCBorrowRate1 => { 
                                    ETCBorrowRate1 = ((ETCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                                nUSCContract.methods.supplyRatePerBlock().call().then(USCSupplyRate1 => {
                                    USCSupplyRate1 = ((USCSupplyRate1 / (10 ** 18)) * BlocksPerYear);
                                nUSCContract.methods.borrowRatePerBlock().call().then(USCBorrowRate1 => {
                                    USCBorrowRate1 = ((USCBorrowRate1 / (10 ** 18)) * BlocksPerYear);
                                const UserRate = document.getElementById('UserAPR');
                                let Weight = ((((ETCAsset * ETCSupplyRate1)+(USCAsset * USCSupplyRate1)-(ETCLiability * ETCBorrowRate1)-(USCLiability * USCBorrowRate1))/(ETCAsset+USCAsset-ETCLiability-USCLiability))*100);

                                if (Assets > 0){
                                    document.getElementById('UserAPR').innerText = `${Weight.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                                } 
                                    });});});});
                                //Collateral Factor
                                    const USCStatus = document.getElementById("USCCheckbox");
                                    const ETCStatus = document.getElementById("ETCCheckbox");
                                    let borrowlimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked));
                                    let MaxBorrow =((Liabilities/((borrowlimit)))*100).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                                        document.getElementById('UserBorrowLimit').innerText = `${MaxBorrow}%`;
                                });
                                });});
                            });
                        });
                    });});

                        });});});
                         
                  
  
  
 
  
                  const nETCAddress = '0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0';
                  const nETCContract = new web3.eth.Contract(nETCAbi, nETCAddress);
                  const nETCContractMM = new web3m.eth.Contract(nETCAbi, nETCAddress);
  
               //   const ETCPOWAddress = '0x6c3B413C461c42a88160Ed1B1B31d6f7b02a1C83';
                 // const ETCPOWContract = new web3.eth.Contract(ETCPOWabi, ETCPOWAddress);
  
                
                  const nETCPOWAddress = '0x7f86acFA4747B5355E5623483D8c3082c90c2e85';
                  const nETCPOWContract = new web3.eth.Contract(nETCPOWabi, nETCPOWAddress);
  
               
                  const USCAddress = '0xDE093684c796204224BC081f937aa059D903c52a';
                  const USCContract = new web3.eth.Contract(USCabi, USCAddress);
                  const USCContractMM = new web3m.eth.Contract(USCabi, USCAddress);
  
                  const nUSCAddress = '0xA11d739365d469c87F3daBd922a82cfF21b71c9B';
                  const nUSCContract = new web3.eth.Contract(nETCPOWabi, nUSCAddress);
                  const nUSCContractMM = new web3m.eth.Contract(nETCPOWabi, nUSCAddress);
      
                  const ComptrollerAddress = '0x0040DCf62C380833dE60a502649567e939635fdB';
                  const ComptrollerContract = new web3.eth.Contract(Comptrollerabi, ComptrollerAddress);
                  const ComptrollerContractMM = new web3m.eth.Contract(Comptrollerabi, ComptrollerAddress);

                  const OracleAddress = '0x82152D053C8851365715bd533D46615126C8bc30';
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
                      


                    //NYKE PRICE
                    let NYKEPrice = (_NykePrice / (10 ** 18));
                    console.log(NYKEPrice);
                    document.getElementById('nykePrice').innerText = `$${NYKEPrice.toLocaleString('en-US', {minimumFractionDigits:5, maximumFractionDigits:5})}`;
                  

  
                      const totalSupply = (_totalSupply / (10 ** 18) * (_ETCExMant / (10 ** 18)));
                      dataOutput.innerText = `${totalSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
                      
                      //ETC SUPPLY & ETC NYKE SUPPLY
                      let NykeETCSupplyRate = (((NYKEPrice * 5000 * 365)/(totalSupply*(_ETCPrice / (10 ** 18))) * 100));
                      const ETCSupplyRate = ((_ETCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let RewardRate = NykeETCSupplyRate + ETCSupplyRate;
                      ETCSupplyRateOutput.innerText = `${RewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplyRateModal.innerText = `${RewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplyRateModal2.innerText = `${RewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      ETCSupplierSupplyRate.innerText = `${ETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('ETCSupplyRateOutputSupply1').innerText = `${NykeETCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                      const ETCBorrow = _ETCBorrowed / (10 ** 18);
                      ETCBorrowed.innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;

                      //ETC BORROW & ETC NYKE SUPPLY
                      let NykeETCBorrowRate = (((NYKEPrice * 20000 * 365)/(ETCBorrow*(_ETCPrice / (10 ** 18))) * 100));
                     const ETCBorrowRate = ((-_ETCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                     let ETCBorrowRewardRate = NykeETCBorrowRate - ETCBorrowRate;
                     ETCBorrowRateOutput.innerText = `${ETCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     ETCBorrowRateModal.innerText = `${ETCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCBorrowRateModal1').innerText = `${ETCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     ETCBorrowedRate1.innerText = `${ETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                     document.getElementById('ETCBorrowedRate2').innerText = `${NykeETCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                      const ETCUtil = (ETCBorrow /totalSupply) * 100;
                      ETCUtilization.innerText = `${ETCUtil.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
  
                      const USCtotalSupply = (_USCtotalSupply / (10 ** 4))*(_USCExMant / (10 ** 20));
                      USCSupply.innerText = `${USCtotalSupply.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;

                      //USC SUPPLY & USC NYKE SUPPLY
                      const USCSupplyRate = ((_USCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let NykeUSCSupplyRate = (((NYKEPrice * 5000 * 365)/(USCtotalSupply*(_USCPrice / (10 ** 18))) * 100));
                      let USCSupplyRewardRate = NykeUSCSupplyRate + USCSupplyRate;
                      USCSupplyRateOutput.innerText = `${USCSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      USCSupplyRateOutputSupply.innerText = `${USCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCSupplyRateOutputSupply1').innerText = `${NykeUSCSupplyRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCSupplyRateModal1').innerText = `${USCSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                    document.getElementById('USCSupplyRateModal2').innerText = `${USCSupplyRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

                      const USCBorrow = _USCBorrowed / (10 ** 6);
                      USCBorrowed.innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;

                    //USC BORROW & USC NYKE BORROW
                      const USCBorrowRate = ((-_USCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                      let NykeUSCBorrowRate = (((NYKEPrice * 20000 * 365)/(USCBorrow*(_USCPrice / (10 ** 18))) * 100));
                      let USCBorrowRewardRate = NykeUSCBorrowRate - USCBorrowRate;
                      USCBorrowRateOutput.innerText = `${USCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      USCBorrowedRate1.innerText = `${USCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRateModal').innerText = `${USCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRateModal2').innerText = `${USCBorrowRewardRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
                      document.getElementById('USCBorrowRate2').innerText = `${NykeUSCBorrowRate.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
  
                      const USCUtil = (USCBorrow /USCtotalSupply) * 100;
                      USCUtilization.innerText = `${USCUtil.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;

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
  
   //Update BorrowLimit and Borrow Amount Used
   function UpdateBorrowLimit() {
    let account = document.getElementById('connectbutton').innerHTML;
    //ETC Borrowed
        nETCContract.methods.borrowBalanceCurrent(account).call({from: account}, function(err,ETCBorrow){
        ETCBorrow = ETCBorrow / (10 ** 18);
        ETCBorrow = ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow} ETC`;
    //USC Borrowed Amount
    nUSCContract.methods.borrowBalanceCurrent(account).call({from: account}).then(USCBorrow => {
        USCBorrow = USCBorrow / (10 ** 6);
        USCBorrow = USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('USCBorrowedUser').innerText = `${USCBorrow} USC`;
        document.getElementById('USCBorrowBalanceModal').innerText = `${USCBorrow} USC`;
        document.getElementById('USCBorrowBalance').innerText = `${USCBorrow}`;

    // Oracle Price Update
    OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
        USCPrice = USCPrice / (10 ** 18);
        USCPrice = (USCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
     //USC Supplied Amount
  nUSCContract.methods.balanceOf(account).call({from: account}).then(USCSup => {
    nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
        USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
        console.log(USCExchangeMantissa);
        USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
    document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;
    document.getElementById('UserUSCSupply').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;

    //ETC Supplied
  nETCContract.methods.balanceOf(account).call({from: account}, function(err,ETCSupplied){
    nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
        ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
        console.log(ETCExchangeMantissa);
    console.log(ETCSupplied);
   ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
   document.getElementById('YourETCSupplied').innerText = `${ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
    OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
        ETCPrice = ETCPrice / (10 ** 18);
        ETCPrice = (ETCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
        let ETCAsset = (ETCPrice * ETCSupplied);
        let USCAsset = (USCPrice * USCSup);
        let Assets = (USCAsset + ETCAsset);
        document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCLiability = (ETCPrice * ETCBorrow);
        let USCLiability = (USCPrice * USCBorrow);
        let Liabilities = ((USCLiability + ETCLiability));
        document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //Collateral Factor
        const USCStatus = document.getElementById("USCCheckbox");
        const ETCStatus = document.getElementById("ETCCheckbox");
            let BorrowLimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked)).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            document.getElementById('BorrowLimit1').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit2').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit3').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit4').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit5').innerText = `$${BorrowLimit}`;
            document.getElementById('BorrowLimit6').innerText = `$${BorrowLimit}`;
            let MaxBorrow =((Liabilities/((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked)))*100).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
            document.getElementById('BorrowLimitUsed1').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed2').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed3').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed4').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed5').innerText = `${MaxBorrow}%`;
            document.getElementById('BorrowLimitUsed6').innerText = `${MaxBorrow}%`;
    });
    });});
});});
});
});});};
  

   //SafeMax Calculation
   function SafeMaxValue() {
    let account = document.getElementById('connectbutton').innerHTML;
    //ETC Borrowed
        nETCContract.methods.borrowBalanceCurrent(account).call({from: account}, function(err,ETCBorrow){
        ETCBorrow = ETCBorrow / (10 ** 18);
        document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
    //USC Borrowed Amount
    nUSCContract.methods.borrowBalanceCurrent(account).call({from: account}).then(USCBorrow => {
        USCBorrow = USCBorrow / (10 ** 6);
        document.getElementById('USCBorrowedUser').innerText = `${USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;

    // Oracle Price Update
    OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
        USCPrice = USCPrice / (10 ** 18);
        USCPrice = (USCPrice.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}));
     //USC Supplied Amount
  nUSCContract.methods.balanceOf(account).call({from: account}).then(USCSup => {
    nUSCContract.methods.exchangeRateStored().call({from: account}).then(USCExchangeMantissa => {
        USCExchangeMantissa = USCExchangeMantissa / (10 ** 20);
        console.log(USCExchangeMantissa);
        USCSup = (USCSup / (10 ** 4))*USCExchangeMantissa;
    document.getElementById('YourUSCSupplied').innerText = `${USCSup.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USC`;
    //ETC Supplied
  nETCContract.methods.balanceOf(account).call({from: account}, function(err,ETCSupplied){
    nETCContract.methods.exchangeRateStored().call({from: account}).then(ETCExchangeMantissa => {
        ETCExchangeMantissa = ETCExchangeMantissa / (10 ** 18);
        console.log(ETCExchangeMantissa);
    console.log(ETCSupplied);
   ETCSupplied = (ETCSupplied / (10 ** 18))*ETCExchangeMantissa;
   document.getElementById('YourETCSupplied').innerText = `${ETCSupplied.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} ETC`;
    OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
        ETCPrice = ETCPrice / (10 ** 18);
        let ETCAsset = (ETCPrice * ETCSupplied);
        let USCAsset = (USCPrice * USCSup);
        let Assets = (USCAsset + ETCAsset);
        document.getElementById('UserAssetBalance').innerText = `$${Assets.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        let ETCLiability = (ETCPrice * ETCBorrow);
        let USCLiability = (USCPrice * USCBorrow);
        let Liabilities = (USCLiability + ETCLiability);
        document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
    //Utilization

    //Collateral Factor
        const USCStatus = document.getElementById("USCCheckbox");
        const ETCStatus = document.getElementById("ETCCheckbox");
        //ETC Wallet Balance
        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
            let wei = parseInt(result, 16);
            let ETCWallet = wei / (10 ** 18);
        //USC Wallet Balance
        USCContract.methods.balanceOf(`${account}`).call().then(result => {
            USCWallet = (result / (10 ** 6));
            let BorrowLimit = ((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked));
            document.getElementById('BorrowLimit1').innerText = `$${BorrowLimit.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            document.getElementById('BorrowLimit2').innerText = `$${BorrowLimit.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            let MaxBorrow =((Liabilities/((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked)))*100);
            document.getElementById('BorrowLimitUsed1').innerText = `${MaxBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
            document.getElementById('BorrowLimitUsed2').innerText = `${MaxBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}%`;
            let SafeBorrowETC = (((((BorrowLimit * 0.90) - Liabilities)))/ETCPrice);
            let SafeWithdrawlETC = (SafeBorrowETC / 0.75);
            let SafeBorrowUSC = (((((BorrowLimit * 0.90) - Liabilities)))/USCPrice);
            let SafeWithdrawlUSC = (SafeBorrowUSC / 0.75);

            console.log(SafeWithdrawlETC);
            if (SafeWithdrawlETC > 0) {
            document.getElementById('ETCWithdrawl').value = SafeWithdrawlETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:18});
            document.getElementById('ETCBorrow').value = SafeBorrowETC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:18});
        }
            else {document.getElementById('ETCWithdrawl').value = 'Safe Borrow Limit Exceeded';
                document.getElementById('ETCBorrow').value = 'Safe Borrow Limit Exceeded';
            }
            if (SafeWithdrawlUSC > 0) {
                document.getElementById('USCWithdrawl').value = SafeWithdrawlUSC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:6});
                document.getElementById('USCBorrow').value = SafeBorrowUSC.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:6});
            }
                else {document.getElementById('USCWithdrawl').value = 'Safe Borrow Limit Exceeded';
                    document.getElementById('USCBorrow').value = 'Safe Borrow Limit Exceeded';
                }
            if (ETCWallet > ETCBorrow) {
                document.getElementById('ETCRepay').value = ETCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:18});
            }
                else {document.getElementById('ETCRepay').value = ETCWallet.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:18});
                }
            if (USCWallet > USCBorrow) {
                document.getElementById('USCRepay').value = USCBorrow.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:6});
            }
                else {document.getElementById('USCRepay').value = USCWallet.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:6});
                }
});});
    });});
});});
});
});});});};




           //claim Nyke Rewards
           function claimNykeRewards() {
            let account = document.getElementById('connectbutton').innerHTML;
            ComptrollerContractMM.methods.claimComp(`${account}`).send({from:`${account}`});
           }

                  document.getElementById("claimRewards").onclick = claimNykeRewards;
                  



            const ApproveUSCRepay = async () => {
            console.log("Clicked Send Tx")
            document.getElementById('USCApproveSpin').style.display = 'block';
            let USCAmount = document.getElementById('USCRepay').value;
            USCAmount = USCAmount * (10 ** 6);
            let account = document.getElementById('connectbutton').innerHTML;
                USCContractMM.methods.approve('0xA11d739365d469c87F3daBd922a82cfF21b71c9B',`${USCAmount}`).send({from:`${account}`}).then((tx) => {
                    if (tx = true) {
                        console.log("Approval Successful!");
                        document.getElementById('USCRepay1').style.display = 'none';
                        document.getElementById('USCRepay2').style.display = 'block';
                        document.getElementById('USCApproveSpin').style.display = 'none';
                    }
                        else {
                            console.log("Approval Failed!");
                            document.getElementById('USCApproveSpin').style.display = 'none'; }})}


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
                        SupplyModal();
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
                          USCSupplyModal();
                      }


      
                      table.rows[1].onclick = ETCrow;    
                      table.rows[2].onclick = USCrow;
                      table1.rows[1].onclick = ETCrow;
                      table1.rows[2].onclick = USCrow;
                      table2.rows[1].onclick = ETCrow;
                      table2.rows[2].onclick = USCrow;
                  


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
                      }
                    
