import { useEffect, useState } from "react";
import "../Styles/Results.css"
import ballotAbi from "../Contract/ballotAbi";
const Web3 = require("web3")

const Results=()=>{

    var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];


    const [results,setResults]=useState([]);
    const ballotAddress="0xD32348aae59Aa5F85C1dfA4A2667fa214F5a5594";
    const account="0xcEA8Bc885e7E39cBD973DfEC0930eA73966a615c";

    useEffect(()=>{

        const getResults=async ()=>{
            const BallotContract= new web3.eth.Contract(ballotAbi,ballotAddress)
            
            console.log(BallotContract.methods)
            const currBudget= await BallotContract.methods.currBudget().call({from:account,gas:6000000});

            const budget=currBudget.budgetTitle;
            const amount=currBudget.amount;
            const postedBy=currBudget.budgetPostedBy;
            const index="0";

            const vote=currBudget.voteCount;

            // console.log("votes",vote)
    
    
            setResults([[index,budget,postedBy,amount,vote]]);
        }

        getResults();

    },[])

    return(
        <>
            <div>
            <h1>Results</h1>
            <h2>Budget Details</h2>
            <form >
                <table>
                <thead>
                    <tr>
                    <th>Index</th>
                    <th>Budget Name</th>
                    <th>Posted By</th>
                    <th>Amount</th>
                    <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowData.map((cellData, colIndex) => (
                        <td key={colIndex}>
                            <input
                            type="text"
                            value={cellData}
                            onChange={(event) => {
                                const newData = [...results];
                                newData[rowIndex][colIndex] = event.target.value;
                                setResults(newData);
                            }}
                            />
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
        
            </form>
            </div>
        </>
    )
}

export default Results;