import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notifications }) => {
    return notifications.message && notifications.message
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return <div style={notification && style}>{notification}</div>
}

export default Notification
