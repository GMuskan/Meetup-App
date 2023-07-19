const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getDateAndTime = (DateAndTime) => {
  let dateUTC = new Date(DateAndTime);
  dateUTC = dateUTC.getTime();
  const dateIST = new Date(dateUTC);

  let meridiem = "AM";
  let hours = dateIST.getHours() % 12;
  if (dateIST.getHours() > 12) {
    meridiem = "PM";
  }
  const minutes =
    dateIST.getMinutes() === 0
      ? dateIST.getMinutes() + "0:00"
      : dateIST.getMinutes() + ":00";
  const dateTime =
    weekdays[dateIST.getDay()] +
    " " +
    months[dateIST.getMonth()] +
    " " +
    dateIST.getDate() +
    " " +
    dateIST.getFullYear() +
    " " +
    hours +
    ":" +
    minutes +
    " " +
    meridiem;

  return dateTime;
};
