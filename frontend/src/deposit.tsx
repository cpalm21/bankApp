import { useState } from "react";


function Deposit() {
    const [amount, setAmount] = useState("");

    function handleDeposit(){
        console.log("Depositing:", amount);
    }
    
  return (
    <div>
      <h2>Deposit</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleDeposit}>
          Deposit Money
        </button>
      </div>
    </div>
  );
}

export default Deposit;