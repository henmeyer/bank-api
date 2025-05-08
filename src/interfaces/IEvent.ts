interface IEvent {
  id: string;
  type: "deposit" | "transfer" | "withdraw";
  origin: string;
  destination: string;
  amount: number;
}

export default IEvent;
