const DisplayOptions = ({ value, onChange }) => {
  return (
    <div>
      <h2>Display Options</h2>
      <div>
        filter shown with <input value={value} onChange={e => onChange(e.target.value)} />
      </div>
    </div>
  )
}

export default DisplayOptions