import "./App.css"
import {useEffect} from 'react'
const Web3 = require("web3")

function App() {
  
    var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];

  let abi=[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedBallots",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "budget",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "budgetAmount",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "budgetCreator",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "hour",
          "type": "uint256"
        }
      ],
      "name": "startElect",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDeployedBallots",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

  let account="0xb6d10f4AD962ca27A0D3149b8b9c07fa9eC87195"


  let  bytecode="0x608060405234801561001057600080fd5b50611737806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80639b935abf146200004b578063c7651b34146200006d578063cdf74c3e146200008d575b600080fd5b62000055620000c3565b60405162000064919062000352565b60405180910390f35b6200008b600480360381019062000085919062000527565b62000153565b005b620000ab6004803603810190620000a59190620005f6565b62000202565b604051620000ba919062000639565b60405180910390f35b606060008054806020026020016040519081016040528092919081815260200182805480156200014957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620000fe575b5050505050905090565b60008484843385604051620001689062000242565b62000178959493929190620006f0565b604051809103906000f08015801562000195573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b600081815481106200021357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610f9f806200076383390190565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002a9826200027c565b9050919050565b620002bb816200029c565b82525050565b6000620002cf8383620002b0565b60208301905092915050565b6000602082019050919050565b6000620002f58262000250565b6200030181856200025b565b93506200030e836200026c565b8060005b8381101562000345578151620003298882620002c1565b97506200033683620002db565b92505060018101905062000312565b5085935050505092915050565b600060208201905081810360008301526200036e8184620002e8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003df8262000394565b810181811067ffffffffffffffff82111715620004015762000400620003a5565b5b80604052505050565b60006200041662000376565b9050620004248282620003d4565b919050565b600067ffffffffffffffff821115620004475762000446620003a5565b5b620004528262000394565b9050602081019050919050565b82818337600083830152505050565b6000620004856200047f8462000429565b6200040a565b905082815260208101848484011115620004a457620004a36200038f565b5b620004b18482856200045f565b509392505050565b600082601f830112620004d157620004d06200038a565b5b8135620004e38482602086016200046e565b91505092915050565b6000819050919050565b6200050181620004ec565b81146200050d57600080fd5b50565b6000813590506200052181620004f6565b92915050565b6000806000806080858703121562000544576200054362000380565b5b600085013567ffffffffffffffff81111562000565576200056462000385565b5b6200057387828801620004b9565b945050602085013567ffffffffffffffff81111562000597576200059662000385565b5b620005a587828801620004b9565b935050604085013567ffffffffffffffff811115620005c957620005c862000385565b5b620005d787828801620004b9565b9250506060620005ea8782880162000510565b91505092959194509250565b6000602082840312156200060f576200060e62000380565b5b60006200061f8482850162000510565b91505092915050565b62000633816200029c565b82525050565b600060208201905062000650600083018462000628565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200069257808201518184015260208101905062000675565b60008484015250505050565b6000620006ab8262000656565b620006b7818562000661565b9350620006c981856020860162000672565b620006d48162000394565b840191505092915050565b620006ea81620004ec565b82525050565b600060a08201905081810360008301526200070c81886200069e565b905081810360208301526200072281876200069e565b905081810360408301526200073881866200069e565b905062000749606083018562000628565b620007586080830184620006df565b969550505050505056fe60806040523480156200001157600080fd5b5060405162000f9f38038062000f9f83398181016040528101906200003791906200035b565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060c00160405280868152602001858152602001848152602001600081526020014281526020018242620000af91906200046f565b81525060016000820151816000019081620000cb9190620006eb565b506020820151816001019081620000e39190620006eb565b506040820151816002019081620000fb9190620006eb565b50606082015181600301556080820151816004015560a082015181600501559050505050505050620007d2565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001918262000146565b810181811067ffffffffffffffff82111715620001b357620001b262000157565b5b80604052505050565b6000620001c862000128565b9050620001d6828262000186565b919050565b600067ffffffffffffffff821115620001f957620001f862000157565b5b620002048262000146565b9050602081019050919050565b60005b838110156200023157808201518184015260208101905062000214565b60008484015250505050565b6000620002546200024e84620001db565b620001bc565b90508281526020810184848401111562000273576200027262000141565b5b6200028084828562000211565b509392505050565b600082601f830112620002a0576200029f6200013c565b5b8151620002b28482602086016200023d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002e882620002bb565b9050919050565b620002fa81620002db565b81146200030657600080fd5b50565b6000815190506200031a81620002ef565b92915050565b6000819050919050565b620003358162000320565b81146200034157600080fd5b50565b60008151905062000355816200032a565b92915050565b600080600080600060a086880312156200037a576200037962000132565b5b600086015167ffffffffffffffff8111156200039b576200039a62000137565b5b620003a98882890162000288565b955050602086015167ffffffffffffffff811115620003cd57620003cc62000137565b5b620003db8882890162000288565b945050604086015167ffffffffffffffff811115620003ff57620003fe62000137565b5b6200040d8882890162000288565b9350506060620004208882890162000309565b9250506080620004338882890162000344565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200047c8262000320565b9150620004898362000320565b9250828201905080821115620004a457620004a362000440565b5b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004fd57607f821691505b602082108103620005135762000512620004b5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200057d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200053e565b6200058986836200053e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005cc620005c6620005c08462000320565b620005a1565b62000320565b9050919050565b6000819050919050565b620005e883620005ab565b62000600620005f782620005d3565b8484546200054b565b825550505050565b600090565b6200061762000608565b62000624818484620005dd565b505050565b5b818110156200064c57620006406000826200060d565b6001810190506200062a565b5050565b601f8211156200069b57620006658162000519565b62000670846200052e565b8101602085101562000680578190505b620006986200068f856200052e565b83018262000629565b50505b505050565b600082821c905092915050565b6000620006c060001984600802620006a0565b1980831691505092915050565b6000620006db8383620006ad565b9150826002028217905092915050565b620006f682620004aa565b67ffffffffffffffff81111562000712576200071162000157565b5b6200071e8254620004e4565b6200072b82828562000650565b600060209050601f8311600181146200076357600084156200074e578287015190505b6200075a8582620006cd565b865550620007ca565b601f198416620007738662000519565b60005b828110156200079d5784890151825560018201915060208501945060208101905062000776565b86831015620007bd5784890151620007b9601f891682620006ad565b8355505b6001600288020188555050505b505050505050565b6107bd80620007e26000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630121b93f1461005c578063481c6a75146100785780638831e7d214610096578063a3ec138d146100b9578063e7b3387c146100e9575b600080fd5b6100766004803603810190610071919061047c565b610107565b005b6100806101d5565b60405161008d91906104ea565b60405180910390f35b61009e6101f9565b6040516100b0969594939291906105a4565b60405180910390f35b6100d360048036038101906100ce9190610646565b6103bb565b6040516100e0919061068e565b60405180910390f35b6100f16103db565b6040516100fe91906106a9565b60405180910390f35b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561015e57600080fd5b806001600301600082825461017391906106f3565b925050819055506001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600180600001805461020a90610756565b80601f016020809104026020016040519081016040528092919081815260200182805461023690610756565b80156102835780601f1061025857610100808354040283529160200191610283565b820191906000526020600020905b81548152906001019060200180831161026657829003601f168201915b50505050509080600101805461029890610756565b80601f01602080910402602001604051908101604052809291908181526020018280546102c490610756565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b50505050509080600201805461032690610756565b80601f016020809104026020016040519081016040528092919081815260200182805461035290610756565b801561039f5780601f106103745761010080835404028352916020019161039f565b820191906000526020600020905b81548152906001019060200180831161038257829003601f168201915b5050505050908060030154908060040154908060050154905086565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043657600080fd5b600160030154905090565b600080fd5b6000819050919050565b61045981610446565b811461046457600080fd5b50565b60008135905061047681610450565b92915050565b60006020828403121561049257610491610441565b5b60006104a084828501610467565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104d4826104a9565b9050919050565b6104e4816104c9565b82525050565b60006020820190506104ff60008301846104db565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561053f578082015181840152602081019050610524565b60008484015250505050565b6000601f19601f8301169050919050565b600061056782610505565b6105718185610510565b9350610581818560208601610521565b61058a8161054b565b840191505092915050565b61059e81610446565b82525050565b600060c08201905081810360008301526105be818961055c565b905081810360208301526105d2818861055c565b905081810360408301526105e6818761055c565b90506105f56060830186610595565b6106026080830185610595565b61060f60a0830184610595565b979650505050505050565b610623816104c9565b811461062e57600080fd5b50565b6000813590506106408161061a565b92915050565b60006020828403121561065c5761065b610441565b5b600061066a84828501610631565b91505092915050565b60008115159050919050565b61068881610673565b82525050565b60006020820190506106a3600083018461067f565b92915050565b60006020820190506106be6000830184610595565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106fe82610446565b915061070983610446565b9250828201905080821115610721576107206106c4565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061076e57607f821691505b60208210810361078157610780610727565b5b5091905056fea2646970667358221220da94991aebbf50ff3ec3a13b40240cc6b19bddfe1454ea69231d7f08d305775064736f6c63430008130033a26469706673582212209c04a997a36e9c6485f89193d964daf03917ede77ade6455601077e7465f5d3e64736f6c63430008130033"

  useEffect(()=>{
    let Electioncreationcontract = new web3.eth.Contract(abi);

  let payload = {
    data: bytecode
  }

  let parameter = {
    from: account,
    gas: Web3.utils.toHex(5000000),
    gasPrice: Web3.utils.toHex(Web3.utils.toWei('30', 'gwei'))
	}

  var contractAddress;

  Electioncreationcontract.deploy(payload)
  .send(parameter)
  .then(receipt => {
    // Contract address
    contractAddress = receipt.options.address;
    console.log("contract address=="+contractAddress);
  }).then(()=>{
    console.log("contract address===="+contractAddress);
    const budgets=["incand","techno","internit"]
    const amout=["20","30","40"]
  
    Electioncreationcontract= new web3.eth.Contract(abi,contractAddress)
    Electioncreationcontract.options.address=contractAddress
  
    let hours=5
  
    const secondFunct= async()=>{
      console.log("contarct address= ",contractAddress)
      const results=await Electioncreationcontract.methods.startElect("incand","20","gymkhana",hours).send({from : account, gas: 6000000})
       let ballots=await Electioncreationcontract.methods.getDeployedBallots().call({from : account, gas: 6000000});
  
       console.log("ballots=",ballots)
    }
  
    secondFunct()
  })
  .catch(error => {
    console.error(error);
  });

  
  },[])

  

  return (
    <>
     <div id="content-container" >
			<div id="_bg__start_election"  ></div>
			<div id="election_" >
				Election:
			</div>
			
			<div id="select_start_time__" >
			Enter no. of hours:
			</div>
			</div>
			<form>
			<div id="starttim"><input type="text"/></div>
			</form>
			<div id="back" ><button className="button button1">Back</button>
				
			</div>

			<div id="group_2"  ><button className="button button2"type="Submit" >Confirm</button>
			</div>

		
    </>
   
  );
}

export default App;
