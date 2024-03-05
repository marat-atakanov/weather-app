export const getDateFunc = () => {
  const date = new Date();

  // Day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const day = days[date.getDay()]
  
  
  // Month
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = months[date.getMonth()]

  // Day num
  const dayNum = date.getDate() || ""

  // Year
  const year = date.getFullYear() || ""

  return {day, month, dayNum, year};
};
