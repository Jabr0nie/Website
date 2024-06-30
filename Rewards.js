
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
                    //rewards accrued
                    ComptrollerContract.methods.compAccrued(`${account}`).call().then(accruedRewards => {
                    accruedRewards = accruedRewards / (10 ** 18);
                    accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                        document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
                    })
              
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
                        });

                             //rewards accrued
                             ComptrollerContract.methods.compAccrued(`${account}`).call().then(accruedRewards => {
                                accruedRewards = accruedRewards / (10 ** 18);
                                accruedRewards = accruedRewards.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
                                    document.getElementById('accruedRewards').innerText = `${accruedRewards} NYKE`;
                             })});
                             

                  
  
  
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
      
                  const ComptrollerAddress = '0x0040DCf62C380833dE60a502649567e939635fdB';
                  const ComptrollerContract = new web3.eth.Contract(Comptrollerabi, ComptrollerAddress);
                  const ComptrollerContractMM = new web3m.eth.Contract(Comptrollerabi, ComptrollerAddress);

                  const OracleAddress = '0x82152D053C8851365715bd533D46615126C8bc30';
                  const OracleContract = new web3.eth.Contract(Oracleabi, OracleAddress);
                  const OracleContractMM = new web3m.eth.Contract(Oracleabi, OracleAddress);

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
                      const _ETCReserves = await V2ReservesContract.methods.getLiquidityETC().call();
                      const _ETCPrice = await OracleContract.methods.GetUnderlyingPrice('0x2896c67c0cea9D4954d6d8f695b6680fCfa7C0e0').call();
                      const _NYKEReserves = await V2ReservesContract.methods.getLiquidityNYKE().call();
                      const _USCPrice = await OracleContract.methods.GetUnderlyingPrice('0xA11d739365d469c87F3daBd922a82cfF21b71c9B').call();
                      
                      let ETCReserves = ((_ETCReserves / (10 ** 18))*(_ETCPrice / (10 ** 18)));
                      let NYKEPrice = (ETCReserves/(_NYKEReserves / (10 ** 18)));
                      console.log(NYKEPrice);
  
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



   
                  
           //claim Nyke Rewards
           function claimNykeRewards() {
            let account = document.getElementById('connectbutton').innerHTML;
            ComptrollerContractMM.methods.claimComp(`${account}`).send({from:`${account}`});
           }
                  
               

                  document.getElementById("claimRewards").onclick = claimNykeRewards;
