import "../Styles/Voting.css"
import {useEffect, useState} from 'react'
import bytecode from "../Contract/bytecode"
import ballotAbi from "../Contract/ballotAbi"
const Web3 = require("web3")

// ballot address 
//0xDa72974eD69e407Baf39FCf7ec88e247dD2ce6d4

const Voting=()=>{

    var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];

    const [budget,setBudget]=useState("")
    const [amount,setAmount]=useState("")
    const [postedBy,setPostedBy]=useState("")
    const [index,setIndex]=useState("")
    const [tableData, setTableData] = useState([]);


    
      // for multiple budgets how to vote???? Authentication logic???

      const [budgetIndex, setBudgetIndex] = useState('');
      const [tokens, setTokens] = useState('');
    
      const handleInputChange1 = (event) => {
        setBudgetIndex(event.target.value);
      };
    
      const handleInputChange2 = (event) => {
        setTokens(event.target.value);
      };

      const vote=async()=>{
        console.log("tokens",tokens)
        const BallotContract= new web3.eth.Contract(ballotAbi,ballotAddress)
        const voting= await BallotContract.methods.vote(tokens).send({from : account, gas: 6000000})
        const currBudget= await BallotContract.methods.currBudget().call({from:account,gas:6000000});

        const vote=currBudget.voteCount;

        console.log("votes",vote)

        // BallotContract.vote()
      
          // Updates the vote element.
          // document.getElementById("vote-" + candidate).innerText = votes;
      }

      let ballotAddress= "0xDa72974eD69e407Baf39FCf7ec88e247dD2ce6d4"

      let account = "0x7CF40F19671582f08a6a651624DCd4124caB1cf7"

     useEffect(()=>{
        const getData=async()=>{
            const BallotContract= new web3.eth.Contract(ballotAbi,ballotAddress)
            
            console.log(BallotContract.methods)
            const currBudget= await BallotContract.methods.currBudget().call({from:account,gas:6000000});

            const budget=currBudget.budgetTitle;
            const amount=currBudget.amount;
            const postedBy=currBudget.budgetPostedBy;
            const index="0";

            const vote=currBudget.voteCount;

            // console.log("votes",vote)
    
    
            setTableData([[index,budget,postedBy,amount]]);
    
            // console.log(tableData)
          }

          getData();
     },[])

    
      

    //   getData();



    return (
        <div>
          <h1>Vote</h1>
          <h2>Budget Details</h2>
          <form >
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Budget Name</th>
                  <th>Posted By</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    {rowData.map((cellData, colIndex) => (
                      <td key={colIndex}>
                        <input
                          type="text"
                          value={cellData}
                          onChange={(event) => {
                            const newData = [...tableData];
                            newData[rowIndex][colIndex] = event.target.value;
                            setTableData(newData);
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
      
          </form>
          <input type="text" value={index} placeholder="Enter Index" onChange={(event)=>setIndex(event.target.value)} />
          <input type="text" value={tokens} placeholder="Enter Token Amount" onChange={(event)=>setTokens(event.target.value)} />
          <button type="submit" onClick={()=>vote()}>Submit</button>
        </div>
      );
}

export default Voting