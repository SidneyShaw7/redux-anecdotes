import { useSelector } from 'react-redux'
// import { notifications } from ''

const Notification = () => {
  const notification = useSelector(({ notifications }) => {
    if (!notifications.message) {
      return null
    } else {
      return notifications.message
    }
  })
  const style = {
    // border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return <div style={style}>{notification}</div>
}

export default Notification
