const DisplayOptions = ({ value, onChange }) => {
  return (
    <div className='container'>
      <h2>Display Options</h2>
      <div className="controls-container">
        <div className='controls-row'>
          <label htmlFor="person-filter">Filter:</label>
          <input id="person-filter" value={value} onChange={e => onChange(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default DisplayOptions