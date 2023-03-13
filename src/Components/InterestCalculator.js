import { useState } from "react";

// Create a function component.
function InterestCalculator() {   
    const [totalAmount, setTotalAmount] = useState();
    const [timePeriod, setTimePeriod] = useState();
    const [monthlyAmount, setMonthlyAmount] =  useState();
    const [totalWithInterest, setTotalWithInterest] =  useState();
    
    // Create a function to calculate interest.
    function handleClick(){
        let interest = (Number(totalAmount) * Number(timePeriod) * 0.2);
        let totalWithInterest = Number(totalAmount) + interest;
        let monthlyAmount = (totalWithInterest / Number(timePeriod))
        setMonthlyAmount(monthlyAmount);          // set monthlyAmount to the state
        setTotalWithInterest(totalWithInterest);  // set totalWithInterest to the state
    }
 
    return (
      <div className="calculator">      
        <h3>Calculate Interest</h3>
        <div  className="calculator-body">
            <h5>Total amount</h5>
            <input type="text" name="totalAmount" placeholder="Enter the total amount"  onChange={(event) => {
                setTotalAmount(event.target.value); }} /> 
            
            <h5>Time period</h5>
            <input type="text" name="timePeriod" placeholder="Enter the number of months over which you'd like to pay back" onChange={(event) => {
                setTimePeriod(event.target.value); }} />
            <br></br>
            <button onClick={handleClick}  className="calculate-btn">Calculate</button>
            <h5>Amount to pay monthly: <span className="pay-amount">{ monthlyAmount }</span></h5>  
            <h5>Total amount to pay: <span className="pay-amount">{ totalWithInterest }</span> </h5>   
        </div>
      </div>        
    );
            
}

// Export InterestCalculator component.
export default InterestCalculator;