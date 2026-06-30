const Notification = ({ message, category }) => {
  if (!message) {
    return null
  }
  
  return (
    <div className='container'>
      <div className={`notification notification-${category}`}>{message}</div>
    </div>
  )
}

export default Notification