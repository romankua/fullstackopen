const Filter = ({ value, onChange }) => {
  return (
    <div>
      <div>
        <label htmlFor="country-filter">find countries: </label>
        <input type="text" id="country-filter" value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default Filter