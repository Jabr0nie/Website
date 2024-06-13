function myFunction() {
    var x = document.getElementById("myLinks");
    var m = document.getElementById("connectbutton");
    if (x.style.display === "flex") {
      x.style.display = "none";
      m.style.display = "flex";
    } else {
      x.style.display = "flex";
      m.style.display = "none";
    }
  }
              // Setting getblock node as HTTP provider
              const provider = new Web3.providers.HttpProvider("https://go.getblock.io/60e5a3f8fbcd4953b12b226760d7e5e1/");
              // Creating web3 instance with given provider
                  const web3 = new Web3(provider);
              // Initializing web3.eth method
                  var block = web3.eth.getBlockNumber().then(console.log);
  
  
  
                  //connect to MetaMask
  
                  window.onload = (event) => {
          isConnected();
       };
              
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
                              balance = balance.toFixed(2);
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;});
                          //In market?
                          ComptrollerContract.methods.checkMembership(`${account}`,'0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(result => {
                            document.getElementById("ETCCheckbox").checked = result;});
                            ComptrollerContract.methods.checkMembership(`${account}`,'0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(result => {
                                document.getElementById("USCCheckbox").checked = result;});
                            //ETC Borrowed
                                nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                ETCBorrow = ETCBorrow / (10 ** 18);
                                ETCBorrow = ETCBorrow.toFixed(2);
                                document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow} ETC`;
                            //USC Borrowed Amount
                            nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                USCBorrow = USCBorrow / (10 ** 6);
                                USCBorrow = USCBorrow.toFixed(2);
                                document.getElementById('USCBorrowedUser').innerText = `${USCBorrow} USC`;

                            // Oracle Price Update
                            OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                USCPrice = USCPrice / (10 ** 18);
                                USCPrice = (USCPrice.toFixed(2));
                             //USC Supplied Amount
                          nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                            USCSup = USCSup / (10 ** 4);
                            USCSup = USCSup.toFixed(2);
                            document.getElementById('YourUSCSupplied').innerText = `${USCSup} USC`;
                            //ETC Supplied
                          nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                            console.log(ETCSupplied);
                           ETCSupplied = ETCSupplied / (10 ** 18);
                           ETCSupplied = ETCSupplied.toFixed(2);
                           document.getElementById('YourETCSupplied').innerText = `${ETCSupplied} ETC`;
                            OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                ETCPrice = ETCPrice / (10 ** 18);
                                ETCPrice = (ETCPrice.toFixed(2));
                                let ETCAsset = (ETCPrice * ETCSupplied);
                                let USCAsset = (USCPrice * USCSup);
                                let Assets = ((USCAsset + ETCAsset).toFixed(2));
                                document.getElementById('UserAssetBalance').innerText = `$${Assets}`;
                                let ETCLiability = (ETCPrice * ETCBorrow);
                                let USCLiability = (USCPrice * USCBorrow);
                                let Liabilities = ((USCLiability + ETCLiability).toFixed(2));
                                document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities}`;
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
                            let Weight = ((ETCAsset * ETCSupplyRate1)+(USCAsset * USCSupplyRate1)-(ETCLiability * ETCBorrowRate1)-(USCLiability * USCBorrowRate1)).toFixed(2);
                            UserRate.innerText = `${Weight}%`;
                                });});});});
                            //Collateral Factor
                                const USCStatus = document.getElementById("USCCheckbox");
                                const ETCStatus = document.getElementById("ETCCheckbox");
                                    let MaxBorrow =((Liabilities/((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked)))*100).toFixed(2);
                                    document.getElementById('UserBorrowLimit').innerText = `${MaxBorrow}%`;
                                
                            });
                            });
                        });
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
                              balance = balance.toFixed(2);
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;});

                             
                               //In market?
                              ComptrollerContract.methods.checkMembership(`${account}`,'0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(result => {
                                document.getElementById("ETCCheckbox").checked = result;});
                                ComptrollerContract.methods.checkMembership(`${account}`,'0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(result => {
                                    document.getElementById("USCCheckbox").checked = result;});

                                //ETC Borrowed
                                    nETCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}, function(err,ETCBorrow){
                                    ETCBorrow = ETCBorrow / (10 ** 18);
                                    ETCBorrow = ETCBorrow.toFixed(2);
                                    document.getElementById('UserETCBorrowed').innerText = `${ETCBorrow} ETC`;
                                //USC Borrowed Amount
                                nUSCContract.methods.borrowBalanceCurrent(accounts[0]).call({from: account}).then(USCBorrow => {
                                    USCBorrow = USCBorrow / (10 ** 6);
                                    USCBorrow = USCBorrow.toFixed(2);
                                    document.getElementById('USCBorrowedUser').innerText = `${USCBorrow} USC`;

                                // Oracle Price Update
                                OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call().then(USCPrice => {
                                    USCPrice = USCPrice / (10 ** 18);
                                    USCPrice = (USCPrice.toFixed(2));
                                 //USC Supplied Amount
                              nUSCContract.methods.balanceOf(accounts[0]).call({from: account}).then(USCSup => {
                                USCSup = USCSup / (10 ** 4);
                                USCSup = USCSup.toFixed(2);
                                document.getElementById('YourUSCSupplied').innerText = `${USCSup} USC`;
                                //ETC Supplied
                              nETCContract.methods.balanceOf(accounts[0]).call({from: account}, function(err,ETCSupplied){
                                console.log(ETCSupplied);
                               ETCSupplied = ETCSupplied / (10 ** 18);
                               ETCSupplied = ETCSupplied.toFixed(2);
                               document.getElementById('YourETCSupplied').innerText = `${ETCSupplied} ETC`;
                                OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call().then(ETCPrice => {
                                    ETCPrice = ETCPrice / (10 ** 18);
                                    ETCPrice = (ETCPrice.toFixed(2));
                                    let ETCAsset = (ETCPrice * ETCSupplied);
                                    let USCAsset = (USCPrice * USCSup);
                                    let Assets = ((USCAsset + ETCAsset).toFixed(2));
                                    document.getElementById('UserAssetBalance').innerText = `$${Assets}`;
                                    let ETCLiability = (ETCPrice * ETCBorrow);
                                    let USCLiability = (USCPrice * USCBorrow);
                                    let Liabilities = ((USCLiability + ETCLiability).toFixed(2));
                                    document.getElementById('UserLiabilityBalance').innerText = `$${Liabilities}`;
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
                                let Weight = ((ETCAsset * ETCSupplyRate1)+(USCAsset * USCSupplyRate1)-(ETCLiability * ETCBorrowRate1)-(USCLiability * USCBorrowRate1)).toFixed(2);
                                UserRate.innerText = `${Weight}%`;
                                    });});});});
                                //Collateral Factor
                                    const USCStatus = document.getElementById("USCCheckbox");
                                    const ETCStatus = document.getElementById("ETCCheckbox");
                                        let MaxBorrow =((ETCAsset * 0.75 * ETCStatus.checked) + (USCAsset * 0.75 * USCStatus.checked)).toFixed(2);
                                        document.getElementById('UserBorrowLimit').innerText = `${MaxBorrow}%`;
                                });
                                });
                            });
                        });
                    });});

                        });});
                         
                  
  
  
            let web3m = new Web3(window.ethereum);
  
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
      
                  const ComptrollerAddress = '0xBF8455ACae4741b7e8C37bD8fd6AF147ba293536';
                  const ComptrollerContract = new web3.eth.Contract(Comptrollerabi, ComptrollerAddress);
                  const ComptrollerContractMM = new web3m.eth.Contract(Comptrollerabi, ComptrollerAddress);

                  const OracleAddress = '0xAE1682fD22D10BDF5285dff6FE0026de5Aa12b32';
                  const OracleContract = new web3.eth.Contract(Oracleabi, OracleAddress);
                  const OracleContractMM = new web3m.eth.Contract(Oracleabi, OracleAddress);
  
                  //Get Data
  
                  const dataOutput = document.getElementById('dataOutput');
                  const YourETCSupplied = document.getElementById('YourETCSupplied');
                  const YourUSCSupplied = document.getElementById('YourUSCSupplied');
                  const ETCSupplyRateOutput = document.getElementById('ETCSupplyRateOutput');
                  const ETCSupplyRateModal = document.getElementById('ETCSupplyRateModal');
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

                    
  
                      const totalSupply = _totalSupply / (10 ** 18);
                      dataOutput.innerText = `${totalSupply.toFixed(2)} ETC`;
                      
                      const ETCSupplyRate = ((_ETCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      ETCSupplyRateOutput.innerText = `${ETCSupplyRate.toFixed(2)}%`;
                      ETCSupplyRateModal.innerText = `${ETCSupplyRate.toFixed(2)}%`;
                      ETCSupplierSupplyRate.innerText = `${ETCSupplyRate.toFixed(2)}%`;
                    
                      
                      const ETCBorrowRate = ((_ETCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                      ETCBorrowRateOutput.innerText = `${ETCBorrowRate.toFixed(2)}%`;
                      ETCBorrowRateModal.innerText = `${ETCBorrowRate.toFixed(2)}%`;
                      ETCBorrowedRate1.innerText = `${ETCBorrowRate.toFixed(2)}%`;
                      
                      const ETCBorrow = _ETCBorrowed / (10 ** 18);
                      ETCBorrowed.innerText = `${ETCBorrow.toFixed(2)} ETC`;
  
                      const ETCUtil = (ETCBorrow /totalSupply) * 100;
                      ETCUtilization.innerText = `${ETCUtil.toFixed(2)}%`;
  
                      const USCtotalSupply = _USCtotalSupply / (10 ** 4);
                      USCSupply.innerText = `${USCtotalSupply.toFixed(2)} USC`;
                      
                      const USCSupplyRate = ((_USCSupplyRate / (10 ** 18)) * BlocksPerYear) * 100;
                      USCSupplyRateOutput.innerText = `${USCSupplyRate.toFixed(2)}%`;
                      USCSupplyRateOutputSupply.innerText = `${USCSupplyRate.toFixed(2)}%`;
                      
                      const USCBorrowRate = ((_USCBorrowRate / (10 ** 18)) * BlocksPerYear) * 100;
                      USCBorrowRateOutput.innerText = `${USCBorrowRate.toFixed(2)}%`;
                      USCBorrowedRate1.innerText = `${USCBorrowRate.toFixed(2)}%`;

                      const USCBorrow = _USCBorrowed / (10 ** 6);
                      USCBorrowed.innerText = `${USCBorrow.toFixed(2)} USC`;
  
                      const USCUtil = (USCBorrow /USCtotalSupply) * 100;
                      USCUtilization.innerText = `${USCUtil.toFixed(2)}%`;

                    
                  };
  
                  main();
  
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
  
  
  
                  
                  function ApproveETCPOW() {
                      ETCPOWContract.methods.approve('0x7f86acFA4747B5355E5623483D8c3082c90c2e85','1000000000000000000000000').send({from:'0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B'});}
                  
                  function DepositETCPOW() {
                      ETCPOWContract.methods.transfer('0x7f86acFA4747B5355E5623483D8c3082c90c2e85','100000000000000000000').send({from:'0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B'});}
                  
                  function MintnETCPOW() {
                      nETCPOWContract.methods.mint('200000000000000000000').send({from:'0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B'});}
                  
                  function ApproveUSC() {
                      USCContract.methods.approve('0xA11d739365d469c87F3daBd922a82cfF21b71c9B','1000000000000000000000000').send({from:'0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B'});}
                  
                  function MintnUSC() {
                      nUSCContractMM.methods.mint('1000000').send({from:'0x0B9BC785fd2Bea7bf9CB81065cfAbA2fC5d0286B',});}
  
  
  
              //Create a safe max repayment amount
              //	Here’s the formula: [ \text{Safe Withdrawal Amount} = (\text{Collateral Amount} \times \text{Collateral Price} \times \text{Collateral Factor}) - \text{Current Borrow Balance} ]
  
  
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
                              balance = balance.toFixed(2);
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;
                      //Get Borrowed Balance
                      })}
  
                  function WithdrawlModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "block";
                      document.getElementById('modal-borrow').style.display = "none";
                      document.getElementById('modal-repay').style.display = "none";
                        let account = document.getElementById('connectbutton').innerHTML;
                        let _UserETCSupplied;
                      nETCContractMM.methods.balanceOf(`${account}`).call().then(result => {
                        _UserETCSupplied = result;
                        let UserETCSupply = _UserETCSupplied / (10 ** 18);
                        console.log(result);
                        const UserSuppliedETC = document.getElementById('UserETCSupply');
                          UserSuppliedETC.innerText = `${UserETCSupply.toFixed(2)} ETC`;	
                  })}
  
                  function BorrowModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "none";
                      document.getElementById('modal-borrow').style.display = "block";
                      document.getElementById('modal-repay').style.display = "none";
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalanceModal');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toFixed(2)} ETC`;		
                      });}
                      
  
                  function RepayModal() {
                      document.getElementById('modal-supply').style.display = "none";
                      document.getElementById('modal-withdrawl').style.display = "none";
                      document.getElementById('modal-borrow').style.display = "none";
                      document.getElementById('modal-repay').style.display = "block";
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalance');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toFixed(2)}`;		
                  })}
  
                  function USCSupplyModal() {
                      document.getElementById('USCmodal-supply').style.display = "block";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "none";
                      let account = document.getElementById('connectbutton').innerHTML;
                  ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
                              let wei = parseInt(result, 16);
                              let balance = wei / (10 ** 18);
                              balance = balance.toFixed(2);
                              console.log(balance + "ETC");
                              const ETCBalance = document.getElementById('ETCBalance');
                              ETCBalance.innerText = `${balance}`;
                      //Get Borrowed Balance
                      })}
  
                  function USCWithdrawlModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "block";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "none";
                  }
  
                  function USCBorrowModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "block";
                      document.getElementById('USCmodal-repay').style.display = "none";
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalanceModal');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toFixed(2)} ETC`;		
                      });}
                      
  
                  function USCRepayModal() {
                      document.getElementById('USCmodal-supply').style.display = "none";
                      document.getElementById('USCmodal-withdrawl').style.display = "none";
                      document.getElementById('USCmodal-borrow').style.display = "none";
                      document.getElementById('USCmodal-repay').style.display = "block";
                      let account = document.getElementById('connectbutton').innerHTML;
                      let _UserBorrowETC;
                      nETCContractMM.methods.borrowBalanceStored(`${account}`).call().then(result => {
                          _UserBorrowETC = result;
                          let UserBorrowETC = _UserBorrowETC / (10 ** 18);
                          console.log(result);
                          const ETCBorrowBalance = document.getElementById('ETCBorrowBalance');
                          ETCBorrowBalance.innerText = `${UserBorrowETC.toFixed(2)}`;		
                  })}
  
  
  
                  document.getElementById("ETCDepositButton").onclick = sendETC;
                  document.getElementById("ETCWithdrawlButton").onclick = withdrawlETC;
                  document.getElementById("ETCBorrowButton").onclick = borrowETC;
                  document.getElementById("ETCRepayButton").onclick = repayETC;
                  document.getElementById("USCDepositButton").onclick = MintnUSC;
  
  
                  //Open MODAL
                  var table = document.getElementsByTagName("table")[2];  
   
                      var rows = table.getElementsByTagName("tr");  
                      
                      for (var i = 1; i < rows.length; i++) {  
                      var currentRow = table.rows[i];  
                      var createClickHandler = function(currentRow) { return function() {
                          var row = element.getAttribute('data-row'); 
                          if (row = 1) {
                          document.getElementById('modal-container').style.display = "block";
                          document.getElementById('modal-supply').style.display = "block";
                          SupplyModal();}
                          else {
                              document.getElementById('modal-container').style.display = "block";
                              document.getElementById('USCmodal-supply').style.display = "block";
                          }
                      };  
                      };  
  
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
                      }
      
                      table.rows[1].onclick = ETCrow;  
                      table.rows[2].onclick = USCrow;
                  }
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
                    
