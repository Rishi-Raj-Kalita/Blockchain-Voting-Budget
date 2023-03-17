import { useEffect, useState } from "react";
import "../Styles/Results.css"
import ballotAbi from "../Contract/ballotAbi";
import admin from "../Contract/adminAddress";
import ballotAddress from "../Contract/ballotAddress";

const Web3 = require("web3")

const Results=()=>{

    var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];
    const [threshold,setThreshold]=useState(0);
    const [endTime,setEndTime]=useState();


    const [results,setResults]=useState([]);

    const receiver="0x69BcdF06efc59729cb298eB9081af04a2b931690";

    useEffect(()=>{

        const getResults=async ()=>{
            const BallotContract= new web3.eth.Contract(ballotAbi,ballotAddress)
            
            // console.log(BallotContract.methods)
            const currBudget= await BallotContract.methods.currBudget().call({from:admin,gas:6000000});

            const budget=currBudget.budgetTitle;
            const amount=currBudget.amount;
            const postedBy=currBudget.budgetPostedBy;
            const index="0";

            const vote=currBudget.voteCount;
            setEndTime(currBudget.expirationDate);

            // console.log("creation time=",currBudget.creationDate);
            // console.log("end time=",currBudget.expirationDate);
            
            const currentTimestamp = Math.floor(Date.now() / 1000);

            // console.log("current time",currentTimestamp)
            setThreshold(currBudget.threshold);

            if(currentTimestamp<currBudget.expirationDate)
            {
                console.log("not over")
            }
            else{
                console.log("over")
                if(currBudget.voteCount<=threshold)
                {
                    const etherAmount = web3.utils.toWei(currBudget.amount, "ether");
                    web3.eth.sendTransaction({
                        from: admin,
                        to: receiver,
                        value: etherAmount
                    }, (error, transactionHash) => {
                        // Handle error and transaction hash
                        console.log(error)
                    });
                }
                
            }
    
    
            setResults([[index,budget,postedBy,amount,vote]]);
        }

        getResults();

    },[])

    return(
        <>
            <div>
            <h1>Results</h1>
            <h2>Budget Details: Threshold {threshold}</h2>
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
                            readOnly
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