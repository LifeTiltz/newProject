import { useEffect, useState } from "react"
import Card from "./components/Card";
import Header from "./Header";
import { SuitValueOutput } from "./components/SuitValueOutput";
import isValueMatches from "./utils/isValueMatches";
import isSuitMatches from './utils/isSuitMatches';

function App() {

  const [deckId, setDeckId] = useState("")
  const [rightCard, setRightCard] = useState(null)
  const [leftCard, setLeftCard] = useState(null)
  const [suitCount, setSuitCount] = useState(0)
  const [valueCount, setValueCount] = useState(0)
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    getDeckIdApi()
  }, [])

  const getDeckIdApi = async () => {
    await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => res.json()).then(res => setDeckId(res.deck_id)).catch(err => console.log(err))
  }

  const shuffle = async () => {

    await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(res => res.json()).then(res => {
      setLeftCard(rightCard);
      if (res.remaining === 0) {
        setFinish(true); setRightCard(null)
      } else {
        setRightCard(res.cards[0])
      }
    }).catch(err => console.log(err))

    if (isValueMatches(leftCard, rightCard)) {
      setValueCount((valueCount) => valueCount + 1)
    }
    if (isSuitMatches(leftCard, rightCard)) {
      setSuitCount((suitCount) => suitCount + 1)
    }

  }

  return (
    <>
      <Header />

      <SuitValueOutput leftCard={leftCard} rightCard={rightCard} />

      <div className="cards">
        <div>
          <Card object={leftCard} />
        </div>
        <div>
          <Card object={rightCard} />
        </div>
      </div>
      <div className="button-scoreboard">
        {!finish && <button onClick={() => shuffle()}>Draw Card</button>}
        {finish &&
          <div className="final-score">
            <p>Value Matches: {valueCount}</p>
            <p>Suit Matches: {suitCount}</p>
          </div>
        }
      </div>

    </>
  );
}

export default App;
