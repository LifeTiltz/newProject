import { useEffect, useState } from "react"

export const SuitValueOutput = ({ leftCard, rightCard }) => {

    const [matchedValueSuit, setMatchedValueSuit] = useState(null)

    useEffect(() => {
        if (leftCard != undefined && rightCard != undefined) {
            if (leftCard.suit === rightCard.suit) {
                setMatchedValueSuit("SNAP! Suits")
            }
            if (leftCard.value === rightCard.value) {
                setMatchedValueSuit("SNAP! Value")
            }
            else {
                setMatchedValueSuit(undefined)
            }
        }
    }, [leftCard, rightCard])

    return (
        <>
            <div className="matchedValueSuit">
                {matchedValueSuit && <div> {matchedValueSuit} </div>}
            </div>
        </>
    )
}