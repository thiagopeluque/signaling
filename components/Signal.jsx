import { useState } from "react"
import { SignalColors } from "./SignalColors";

export const Signal = ({ colors = [] }) => {
    const [colorActive, setColorActive] = useState('');
    return (
        <div className="signal">
            {colors.map((color) => (
                <SignalColors
                    key={color}
                    onClick={() => setColorActive(color)}
                    active={color === colorActive}
                    color={color.color}
                />
            ))}
        </div>
    )
}