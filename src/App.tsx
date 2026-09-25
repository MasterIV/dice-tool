import './App.css'
import DicePool from "./components/DicePool.tsx";
import {dice} from "./sytems/exovoid.ts";

export default function App() {
  return <DicePool dice={dice} selection={{}} onChange={() => {}} />;
}
