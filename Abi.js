const nETCAbi = [
	{
		"inputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "comptroller_",
				"type": "address"
			},
			{
				"internalType": "contract InterestRateModel",
				"name": "interestRateModel_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "initialExchangeRateMantissa_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			},
			{
				"internalType": "address payable",
				"name": "admin_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AcceptAdminPendingAdminCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "actualAddAmount",
				"type": "uint256"
			}
		],
		"name": "AddReservesFactorFreshCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BorrowCashNotAvailable",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "BorrowComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BorrowFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateAccrueBorrowInterestFailed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateAccrueCollateralInterestFailed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCloseAmountIsUintMax",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCloseAmountIsZero",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCollateralFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateLiquidatorIsBorrower",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateRepayBorrowFreshFailed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateSeizeComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateSeizeLiquidatorIsBorrower",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "MintComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "RedeemComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RedeemFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RedeemTransferOutNotPossible",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesAdminCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesCashNotAvailable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesCashValidation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesFreshCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "RepayBorrowComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RepayBorrowFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetComptrollerOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetInterestRateModelFreshCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetInterestRateModelOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetPendingAdminOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorAdminCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorBoundsCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorFreshCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "TransferComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferNotAllowed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferNotEnough",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferTooMuch",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cashPrior",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "interestAccumulated",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "borrowIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "AccrueInterest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountBorrows",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "Borrow",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "LiquidateBorrow",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "mintAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "mintTokens",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "NewAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract ComptrollerInterface",
				"name": "oldComptroller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract ComptrollerInterface",
				"name": "newComptroller",
				"type": "address"
			}
		],
		"name": "NewComptroller",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract InterestRateModel",
				"name": "oldInterestRateModel",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract InterestRateModel",
				"name": "newInterestRateModel",
				"type": "address"
			}
		],
		"name": "NewMarketInterestRateModel",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldPendingAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newPendingAdmin",
				"type": "address"
			}
		],
		"name": "NewPendingAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldReserveFactorMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newReserveFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "NewReserveFactor",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redeemAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "Redeem",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "payer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountBorrows",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "RepayBorrow",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "benefactor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "addAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotalReserves",
				"type": "uint256"
			}
		],
		"name": "ReservesAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reduceAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotalReserves",
				"type": "uint256"
			}
		],
		"name": "ReservesReduced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "NO_ERROR",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_acceptAdmin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_addReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reduceAmount",
				"type": "uint256"
			}
		],
		"name": "_reduceReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "newComptroller",
				"type": "address"
			}
		],
		"name": "_setComptroller",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract InterestRateModel",
				"name": "newInterestRateModel",
				"type": "address"
			}
		],
		"name": "_setInterestRateModel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "newPendingAdmin",
				"type": "address"
			}
		],
		"name": "_setPendingAdmin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newReserveFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "_setReserveFactor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "accrualBlockNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "accrueInterest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOfUnderlying",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			}
		],
		"name": "borrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "borrowBalanceCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "borrowBalanceStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowRatePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "comptroller",
		"outputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exchangeRateCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exchangeRateStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAccountSnapshot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCash",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "comptroller_",
				"type": "address"
			},
			{
				"internalType": "contract InterestRateModel",
				"name": "interestRateModel_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "initialExchangeRateMantissa_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "interestRateModel",
		"outputs": [
			{
				"internalType": "contract InterestRateModel",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isCToken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "contract CToken",
				"name": "cTokenCollateral",
				"type": "address"
			}
		],
		"name": "liquidateBorrow",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pendingAdmin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "protocolSeizeShareMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "redeem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "redeemAmount",
				"type": "uint256"
			}
		],
		"name": "redeemUnderlying",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "repayBorrow",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			}
		],
		"name": "repayBorrowBehalf",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reserveFactorMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "seize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supplyRatePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBorrows",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBorrowsCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

const nETCPOWabi = [
	{
		"inputs": [],
		"name": "_acceptAdmin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "addAmount",
				"type": "uint256"
			}
		],
		"name": "_addReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "compLikeDelegatee",
				"type": "address"
			}
		],
		"name": "_delegateCompLikeTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reduceAmount",
				"type": "uint256"
			}
		],
		"name": "_reduceReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "newComptroller",
				"type": "address"
			}
		],
		"name": "_setComptroller",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract InterestRateModel",
				"name": "newInterestRateModel",
				"type": "address"
			}
		],
		"name": "_setInterestRateModel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "newPendingAdmin",
				"type": "address"
			}
		],
		"name": "_setPendingAdmin",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newReserveFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "_setReserveFactor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "underlying_",
				"type": "address"
			},
			{
				"internalType": "contract ComptrollerInterface",
				"name": "comptroller_",
				"type": "address"
			},
			{
				"internalType": "contract InterestRateModel",
				"name": "interestRateModel_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "initialExchangeRateMantissa_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			},
			{
				"internalType": "address payable",
				"name": "admin_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AcceptAdminPendingAdminCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "accrueInterest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "actualAddAmount",
				"type": "uint256"
			}
		],
		"name": "AddReservesFactorFreshCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BorrowCashNotAvailable",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "BorrowComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BorrowFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateAccrueBorrowInterestFailed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateAccrueCollateralInterestFailed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCloseAmountIsUintMax",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCloseAmountIsZero",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateCollateralFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateLiquidatorIsBorrower",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateRepayBorrowFreshFailed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "LiquidateSeizeComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LiquidateSeizeLiquidatorIsBorrower",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "MintComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "RedeemComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RedeemFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RedeemTransferOutNotPossible",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesAdminCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesCashNotAvailable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesCashValidation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ReduceReservesFreshCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "RepayBorrowComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "RepayBorrowFreshnessCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetComptrollerOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetInterestRateModelFreshCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetInterestRateModelOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetPendingAdminOwnerCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorAdminCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorBoundsCheck",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SetReserveFactorFreshCheck",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "errorCode",
				"type": "uint256"
			}
		],
		"name": "TransferComptrollerRejection",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferNotAllowed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferNotEnough",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferTooMuch",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cashPrior",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "interestAccumulated",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "borrowIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "AccrueInterest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOfUnderlying",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			}
		],
		"name": "borrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountBorrows",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "Borrow",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "borrowBalanceCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exchangeRateCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "underlying_",
				"type": "address"
			},
			{
				"internalType": "contract ComptrollerInterface",
				"name": "comptroller_",
				"type": "address"
			},
			{
				"internalType": "contract InterestRateModel",
				"name": "interestRateModel_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "initialExchangeRateMantissa_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "comptroller_",
				"type": "address"
			},
			{
				"internalType": "contract InterestRateModel",
				"name": "interestRateModel_",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "initialExchangeRateMantissa_",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			},
			{
				"internalType": "contract CTokenInterface",
				"name": "cTokenCollateral",
				"type": "address"
			}
		],
		"name": "liquidateBorrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "LiquidateBorrow",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mintAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "mintAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "mintTokens",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "NewAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract ComptrollerInterface",
				"name": "oldComptroller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract ComptrollerInterface",
				"name": "newComptroller",
				"type": "address"
			}
		],
		"name": "NewComptroller",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract InterestRateModel",
				"name": "oldInterestRateModel",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract InterestRateModel",
				"name": "newInterestRateModel",
				"type": "address"
			}
		],
		"name": "NewMarketInterestRateModel",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldPendingAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newPendingAdmin",
				"type": "address"
			}
		],
		"name": "NewPendingAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldReserveFactorMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newReserveFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "NewReserveFactor",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "redeem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redeemAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "Redeem",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "redeemAmount",
				"type": "uint256"
			}
		],
		"name": "redeemUnderlying",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			}
		],
		"name": "repayBorrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "payer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountBorrows",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalBorrows",
				"type": "uint256"
			}
		],
		"name": "RepayBorrow",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			}
		],
		"name": "repayBorrowBehalf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "benefactor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "addAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotalReserves",
				"type": "uint256"
			}
		],
		"name": "ReservesAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reduceAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newTotalReserves",
				"type": "uint256"
			}
		],
		"name": "ReservesReduced",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "seize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract EIP20NonStandardInterface",
				"name": "token",
				"type": "address"
			}
		],
		"name": "sweepToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBorrowsCurrent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "accrualBlockNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "borrowBalanceStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowRatePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "comptroller",
		"outputs": [
			{
				"internalType": "contract ComptrollerInterface",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exchangeRateStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAccountSnapshot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCash",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "interestRateModel",
		"outputs": [
			{
				"internalType": "contract InterestRateModel",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isCToken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NO_ERROR",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pendingAdmin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "protocolSeizeShareMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reserveFactorMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supplyRatePerBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBorrows",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "underlying",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const USCabi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "previousAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "AdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "beacon",
                "type": "address"
            }
        ],
        "name": "BeaconUpgraded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "EIP712DomainChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "CONTRACT_VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "CONTROLLED_ACCESS_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINTER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MODERATOR_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "UPGRADER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            }
        ],
        "name": "allow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            }
        ],
        "name": "deny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eip712Domain",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "fields",
                "type": "bytes1"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifyingContract",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "salt",
                "type": "bytes32"
            },
            {
                "internalType": "uint256[]",
                "name": "extensions",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name_",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol_",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "automator_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "client_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "defaultAdmin_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "upgrader_",
                "type": "address"
            },
            {
                "internalType": "enum BraleToken.ControlledAccessType",
                "name": "controlledAccessType_",
                "type": "uint8"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proxiableUUID",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];

const Comptrollerabi = [
	{
		"inputs": [
			{
				"internalType": "contract Unitroller",
				"name": "unitroller",
				"type": "address"
			}
		],
		"name": "_become",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "_grantComp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newBorrowCapGuardian",
				"type": "address"
			}
		],
		"name": "_setBorrowCapGuardian",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "_setBorrowPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newCloseFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "_setCloseFactor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "newCollateralFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "_setCollateralFactor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken[]",
				"name": "cTokens",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "supplySpeeds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "borrowSpeeds",
				"type": "uint256[]"
			}
		],
		"name": "_setCompSpeeds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "compSpeed",
				"type": "uint256"
			}
		],
		"name": "_setContributorCompSpeed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newLiquidationIncentiveMantissa",
				"type": "uint256"
			}
		],
		"name": "_setLiquidationIncentive",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken[]",
				"name": "cTokens",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "newBorrowCaps",
				"type": "uint256[]"
			}
		],
		"name": "_setMarketBorrowCaps",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "_setMintPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newPauseGuardian",
				"type": "address"
			}
		],
		"name": "_setPauseGuardian",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract PriceOracle",
				"name": "newOracle",
				"type": "address"
			}
		],
		"name": "_setPriceOracle",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "_setSeizePaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "_setTransferPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "_supportMarket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "action",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "pauseState",
				"type": "bool"
			}
		],
		"name": "ActionPaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "action",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "pauseState",
				"type": "bool"
			}
		],
		"name": "ActionPaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			}
		],
		"name": "borrowAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			}
		],
		"name": "borrowVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "contract CToken[]",
				"name": "cTokens",
				"type": "address[]"
			}
		],
		"name": "claimComp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "holders",
				"type": "address[]"
			},
			{
				"internalType": "contract CToken[]",
				"name": "cTokens",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "borrowers",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "suppliers",
				"type": "bool"
			}
		],
		"name": "claimComp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "claimComp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldCompAccrued",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCompAccrued",
				"type": "uint256"
			}
		],
		"name": "CompAccruedAdjusted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newSpeed",
				"type": "uint256"
			}
		],
		"name": "CompBorrowSpeedUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CompGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldCompReceivable",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCompReceivable",
				"type": "uint256"
			}
		],
		"name": "CompReceivableUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newSpeed",
				"type": "uint256"
			}
		],
		"name": "CompSupplySpeedUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newSpeed",
				"type": "uint256"
			}
		],
		"name": "ContributorCompSpeedUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "compDelta",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "compBorrowIndex",
				"type": "uint256"
			}
		],
		"name": "DistributedBorrowerComp",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "supplier",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "compDelta",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "compSupplyIndex",
				"type": "uint256"
			}
		],
		"name": "DistributedSupplierComp",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "cTokens",
				"type": "address[]"
			}
		],
		"name": "enterMarkets",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenAddress",
				"type": "address"
			}
		],
		"name": "exitMarket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "error",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "info",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "detail",
				"type": "uint256"
			}
		],
		"name": "Failure",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "affectedUsers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"name": "fixBadAccruals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "getUnderlyingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenBorrowed",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			}
		],
		"name": "liquidateBorrowAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenBorrowed",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "actualRepayAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "liquidateBorrowVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MarketEntered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "MarketExited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "MarketListed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "mintAmount",
				"type": "uint256"
			}
		],
		"name": "mintAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "actualMintAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mintTokens",
				"type": "uint256"
			}
		],
		"name": "mintVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newBorrowCap",
				"type": "uint256"
			}
		],
		"name": "NewBorrowCap",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldBorrowCapGuardian",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newBorrowCapGuardian",
				"type": "address"
			}
		],
		"name": "NewBorrowCapGuardian",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldCloseFactorMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCloseFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "NewCloseFactor",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldCollateralFactorMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCollateralFactorMantissa",
				"type": "uint256"
			}
		],
		"name": "NewCollateralFactor",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldLiquidationIncentiveMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newLiquidationIncentiveMantissa",
				"type": "uint256"
			}
		],
		"name": "NewLiquidationIncentive",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldPauseGuardian",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newPauseGuardian",
				"type": "address"
			}
		],
		"name": "NewPauseGuardian",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract PriceOracle",
				"name": "oldPriceOracle",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "contract PriceOracle",
				"name": "newPriceOracle",
				"type": "address"
			}
		],
		"name": "NewPriceOracle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_asset",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousPriceMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestedPriceMantissa",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newPriceMantissa",
				"type": "uint256"
			}
		],
		"name": "PricePosted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "redeemAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "redeemAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			}
		],
		"name": "redeemVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "payer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "repayAmount",
				"type": "uint256"
			}
		],
		"name": "repayBorrowAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "payer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "actualRepayAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "borrowerIndex",
				"type": "uint256"
			}
		],
		"name": "repayBorrowVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenBorrowed",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "seizeAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenBorrowed",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "liquidator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "borrower",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "seizeTokens",
				"type": "uint256"
			}
		],
		"name": "seizeVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transferTokens",
				"type": "uint256"
			}
		],
		"name": "transferAllowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "transferTokens",
				"type": "uint256"
			}
		],
		"name": "transferVerify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			}
		],
		"name": "updateContributorRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_borrowGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "_getUnderlyingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_mintGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accountAssets",
		"outputs": [
			{
				"internalType": "contract CToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allMarkets",
		"outputs": [
			{
				"internalType": "contract CToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "asset",
				"type": "address"
			}
		],
		"name": "assetPrices",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowCapGuardian",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "borrowCaps",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "borrowGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "checkMembership",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closeFactorMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compAccrued",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compBorrowerIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compBorrowSpeeds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compBorrowState",
		"outputs": [
			{
				"internalType": "uint224",
				"name": "index",
				"type": "uint224"
			},
			{
				"internalType": "uint32",
				"name": "block",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compContributorSpeeds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "compInitialIndex",
		"outputs": [
			{
				"internalType": "uint224",
				"name": "",
				"type": "uint224"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "compRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compReceivable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compSpeeds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compSupplierIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compSupplySpeeds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "compSupplyState",
		"outputs": [
			{
				"internalType": "uint224",
				"name": "index",
				"type": "uint224"
			},
			{
				"internalType": "uint32",
				"name": "block",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "comptrollerImplementation",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ETCswapV3Pool",
		"outputs": [
			{
				"internalType": "contract IETCswapV3PoolState",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAccountLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMarkets",
		"outputs": [
			{
				"internalType": "contract CToken[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getAssetsIn",
		"outputs": [
			{
				"internalType": "contract CToken[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlockNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCompAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenModify",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "redeemTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "borrowAmount",
				"type": "uint256"
			}
		],
		"name": "getHypotheticalAccountLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isComptroller",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract CToken",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "isDeprecated",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isPriceOracle",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastContributorBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cTokenBorrowed",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cTokenCollateral",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "actualRepayAmount",
				"type": "uint256"
			}
		],
		"name": "liquidateCalculateSeizeTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidationIncentiveMantissa",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "markets",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isListed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "collateralFactorMantissa",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isComped",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxAssets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "mintGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oracle",
		"outputs": [
			{
				"internalType": "contract PriceOracle",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pauseGuardian",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pendingAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pendingComptrollerImplementation",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposal65FixExecuted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seizeGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transferGuardianPaused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const Oracleabi = [
	{
		"inputs": [],
		"name": "ETCswapV3Pool",
		"outputs": [
			{
				"internalType": "contract IETCswapV3PoolDerivedState",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "cToken",
				"type": "address"
			}
		],
		"name": "GetUnderlyingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const Nykeabi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "delegator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "fromDelegate",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "toDelegate",
				"type": "address"
			}
		],
		"name": "DelegateChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "delegate",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "previousBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newBalance",
				"type": "uint256"
			}
		],
		"name": "DelegateVotesChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DELEGATION_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DOMAIN_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "checkpoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "fromBlock",
				"type": "uint32"
			},
			{
				"internalType": "uint96",
				"name": "votes",
				"type": "uint96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegatee",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "delegatee",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "delegateBySig",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "delegates",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getCurrentVotes",
		"outputs": [
			{
				"internalType": "uint96",
				"name": "",
				"type": "uint96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "blockNumber",
				"type": "uint256"
			}
		],
		"name": "getPriorVotes",
		"outputs": [
			{
				"internalType": "uint96",
				"name": "",
				"type": "uint96"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "numCheckpoints",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "src",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dst",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rawAmount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


const V2Reservesabi = [
	{
		"inputs": [],
		"name": "getLiquidityETC",
		"outputs": [
			{
				"internalType": "uint112",
				"name": "reserve0",
				"type": "uint112"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLiquidityNYKE",
		"outputs": [
			{
				"internalType": "uint112",
				"name": "reserve1",
				"type": "uint112"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const NykeOracleabi = [
	{
		"inputs": [],
		"name": "ETCswapV3Pool",
		"outputs": [
			{
				"internalType": "contract IETCswapV3PoolDerivedState",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetUnderlyingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const ETCPOWabi =[
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name_",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol_",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const USCAdminabi = [
	{
	"name": "DistributorV3",
	"address": "0xabcde72909f1958e53c5c481c4428bde372d3d57",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "amountApprove",
			"type": "uint256"
		  }
		],
		"name": "_approveUSC",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "cToken",
			"type": "address"
		  }
		],
		"name": "acceptCTokenAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "addAmount",
			"type": "uint256"
		  }
		],
		"name": "addreserves",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "BurnAmount",
			"type": "uint256"
		  }
		],
		"name": "burnNYKE",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "collectRevenue",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "NewComptroller",
			"type": "address"
		  }
		],
		"name": "setCTokenComptroller",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "NewInterestRateModel",
			"type": "address"
		  }
		],
		"name": "setCTokenInterestRateModel",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "newReserveFactorMantissa",
			"type": "uint256"
		  }
		],
		"name": "setCTokenReserveFactor",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "newDistributorAdmin",
			"type": "address"
		  }
		],
		"name": "SetDistributorAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "amountApprove",
			"type": "uint256"
		  }
		],
		"name": "transferUSC",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_pool",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_token0",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_token1",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"inputs": [
		  {
			"internalType": "int256",
			"name": "amount0Delta",
			"type": "int256"
		  },
		  {
			"internalType": "int256",
			"name": "amount1Delta",
			"type": "int256"
		  },
		  {
			"internalType": "bytes",
			"name": "data",
			"type": "bytes"
		  }
		],
		"name": "uniswapV3SwapCallback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "cToken",
			"type": "address"
		  },
		  {
			"internalType": "address payable",
			"name": "newCTokenAdmin",
			"type": "address"
		  }
		],
		"name": "updateCTokenAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"stateMutability": "payable",
		"type": "receive"
	  },
	  {
		"inputs": [],
		"name": "pool",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "token0",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "token1",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  }
	],
	"filePath": "null/NYKE PROTOCOL - Comptroller with Oracle/contracts/DistributorV3.sol",
	"pinnedAt": 1722655201367
  }
]

const ETCAdminabi = [{
	"name": "DistributorV3",
	"address": "0xcb088a795aeb40d0bd6f867f5318cc072d3e8f1c",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "cToken",
			"type": "address"
		  }
		],
		"name": "acceptCTokenAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "addAmount",
			"type": "uint256"
		  }
		],
		"name": "addreserves",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "amountApprove",
			"type": "uint256"
		  }
		],
		"name": "approveWETC",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "BurnAmount",
			"type": "uint256"
		  }
		],
		"name": "burnNYKE",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "collectRevenue",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address payable",
			"name": "recipient",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "sendETC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "NewComptroller",
			"type": "address"
		  }
		],
		"name": "setCTokenComptroller",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "NewInterestRateModel",
			"type": "address"
		  }
		],
		"name": "setCTokenInterestRateModel",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "newReserveFactorMantissa",
			"type": "uint256"
		  }
		],
		"name": "setCTokenReserveFactor",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "newDistributorAdmin",
			"type": "address"
		  }
		],
		"name": "SetDistributorAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_pool",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_token0",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_token1",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"inputs": [
		  {
			"internalType": "int256",
			"name": "amount0Delta",
			"type": "int256"
		  },
		  {
			"internalType": "int256",
			"name": "amount1Delta",
			"type": "int256"
		  },
		  {
			"internalType": "bytes",
			"name": "data",
			"type": "bytes"
		  }
		],
		"name": "uniswapV3SwapCallback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "cToken",
			"type": "address"
		  },
		  {
			"internalType": "address payable",
			"name": "newCTokenAdmin",
			"type": "address"
		  }
		],
		"name": "updateCTokenAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"stateMutability": "payable",
		"type": "receive"
	  },
	  {
		"inputs": [],
		"name": "pool",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "token0",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "token1",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  }
	],
	"filePath": "null/NYKE PROTOCOL - Comptroller with Oracle/contracts/DistributorV3.sol",
	"pinnedAt": 1722655713630
  }
]