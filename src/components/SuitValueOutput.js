import { useEffect, useState } from "react"

export const SuitValueOutput = ({ leftCard, rightCard }) => {

    const [matchedValueSuit, setMatchedValueSuit] = useState(null)

    useEffect(() => {
        if (leftCard != undefined && rightCard != undefined) {
            if (leftCard.suit === rightCard.suit) {
                setMatchedValueSuit("SNAP SUIT!")
            }
            if (leftCard.value === rightCard.value) {
                setMatchedValueSuit("SNAP VALUE!")
            }
            if (leftCard.value !== rightCard.value && leftCard.suit !== rightCard.suit) {
                setMatchedValueSuit(undefined)
            }
        }
    }, [leftCard, rightCard])

    return (
        <>
            <div className="matched-valuesuit">
                {matchedValueSuit && <div> {matchedValueSuit} </div>}
            </div>
        </>
    )
}