const getDate = () => {
  const date = new Date()
  const getYear = date.getFullYear()
  const getMonth = date.getMonth() + 1
  const getDay = date.getDate()
  const getHours = date.getHours()
  const getMinutes = date.getMinutes()

  const arr = [
    '0' + getDay,
    '0' + getMonth,
    '0' + getHours,
    '0' + getMinutes,
  ].map(item => {
    return item.slice(-2)
  })

  const dateObj = {
    date: arr.slice(0, 2).join('.') + '.' + getYear,
    time: arr.slice(2).join(':')
  }
  return dateObj
}

export default getDate
