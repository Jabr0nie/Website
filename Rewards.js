                  //Mobile Menu Modal

                  function openMobileMenu() {
                    document.getElementById('Mobilemodal-container').style.display = "block";
                    document.getElementById('mobileMenuClose1').style.display = "block";
                    document.getElementById('mobileMenu1').style.display = "none";
                }
                
                function closeMobileMenu() {
                    document.getElementById('Mobilemodal-container').style.display = "none";
                    document.getElementById('mobileMenuClose1').style.display = "none";
                    document.getElementById('mobileMenu1').style.display = "block";
                }
                
                document.getElementById('mobileMenu1').onclick = openMobileMenu;
                document.getElementById('mobileMenuClose1').onclick = closeMobileMenu;

                
              // Setting getblock node as HTTP provider
              const provider = new Web3.providers.HttpProvider("https://go.getblock.io/60e5a3f8fbcd4953b12b226760d7e5e1/");
              // Creating web3 instance with given provider
                  const web3 = new Web3(provider);
              // Initializing web3.eth method
                  var block = web3.eth.getBlockNumber().then(console.log);
  
  
  
                  //connect to MetaMask
  
                  window.onload = async function() {
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

                  const NykeOracleAddress = '0x261bAa91c19F94050AABcd62A1D24C649fC3bA39';
                  const NykeOracleContract = new web3.eth.Contract(NykeOracleabi, NykeOracleAddress);
                  const NykeOracleContractMM = new web3m.eth.Contract(NykeOracleabi, NykeOracleAddress);

                  const NykeAddress = '0x9aa2901007fCE996e35305FD9bA196e17fCd2605';
                  const NykeContract = new web3.eth.Contract(Nykeabi, NykeAddress);
                  const NykeContractMM = new web3m.eth.Contract(Nykeabi, NykeAddress);

                  const V2ReservesAddress = '0x67ad140f5536Bc4921dBC0498922aaad6f595a1E';
                  const V2ReservesContract = new web3.eth.Contract(V2Reservesabi, V2ReservesAddress);
                  const V2ReservesContractMM = new web3m.eth.Contract(V2Reservesabi, V2ReservesAddress);
  

           
                  const main = async () => {
                    const BlocksPerYear = 2425790;
                    const _NykePrice = await NykeOracleContract.methods.GetUnderlyingPrice().call();
                  
                    //NYKE PRICE
                    let NYKEPrice = (_NykePrice / (10 ** 18));
                    document.getElementById('nykePrice').innerText = `$${NYKEPrice.toLocaleString('en-US', {minimumFractionDigits:5, maximumFractionDigits:5})}`;
                    document.getElementById('nykePrice1').innerText = `$${NYKEPrice.toLocaleString('en-US', {minimumFractionDigits:5, maximumFractionDigits:5})}`;
                    let comprolleraddress = '0x0040DCf62C380833dE60a502649567e939635fdB';
                    let vestingaddress = '0x5790cA87eb0E6D5d73d5450Ba1864342FCA0DD72';
                    let burnwallet = '0x000000000000000000000000000000000000dEaD';
                    let _ComptrollerBalance = await NykeContract.methods.balanceOf(`${comprolleraddress}`).call();
                    let _VestingBalance = await NykeContract.methods.balanceOf(`${vestingaddress}`).call();
                    let _BurnedNyke = await NykeContract.methods.balanceOf(`${burnwallet}`).call();
                    _ComptrollerBalance = _ComptrollerBalance / (10 ** 18);
                    _VestingBalance = _VestingBalance / (10 ** 18);
                    _BurnedNyke = _BurnedNyke / (10 ** 18);
                    let CirculatingNyke = (100000000 - _ComptrollerBalance - _VestingBalance - _BurnedNyke);
                    document.getElementById('nykeCirculating').innerText = `${CirculatingNyke.toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:0})}`;
                    document.getElementById('NykeBurned').innerText = `${_BurnedNyke.toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:0})}`;
                };

                main();
   

                  
           //claim Nyke Rewards
           function claimNykeRewards() {
            let account = document.getElementById('connectbutton').innerHTML;
            ComptrollerContractMM.methods.claimComp(`${account}`).send({from:`${account}`});
           }
                  
               

                  document.getElementById("claimRewards").onclick = claimNykeRewards;

