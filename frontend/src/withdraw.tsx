import { useState } from "react";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  async function handleWithdraw() {
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/withdraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: Number(amount) })
      });

      if (!response.ok) {
        throw new Error("Deposit failed");
      }

      const data = await response.json();
      setBalance(data.balance);
      setAmount("");
      setMessage("Deposit successful");
    } catch (error) {
      setMessage("Something went wrong");
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Withdraw</h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleWithdraw}>Withdraw Money</button>
      </div>

      {message && <p>{message}</p>}
      {balance !== null && <p>Current balance: ${balance}</p>}
    </div>
  );
}

export default Withdraw;