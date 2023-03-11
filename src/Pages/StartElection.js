import "../Styles/StartElection.css"
import {useEffect} from 'react'
import bytecode from "../Contract/bytecode"
import abi from "../Contract/contractAbi"
const Web3 = require("web3")


const StartElection=()=> {
  
    var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];

  

  let account="0x2c0c264ac767916891d305F91F80Ea04949b43DB"

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
    // console.log("contract address=="+contractAddress);
  }).then(()=>{
    // console.log("contract address===="+contractAddress);
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

export default StartElection;
