export const SignalColors = ({ onClick, active, color }) => {
    return (
        <div
            onClick={onClick}
            className={`signal__color ${active ? 'signal__color--active' : ''}`}
            style={{ backgroundColor: color }}
        />
    )
}