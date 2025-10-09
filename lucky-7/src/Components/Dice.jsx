import Die from "./Die";

export default function Dice({ numDice }) {
  return (
    <div>
      {numDice.map((value, index) => (
        <Die key={index} value={value} />
      ))}
    </div>
  );
}
