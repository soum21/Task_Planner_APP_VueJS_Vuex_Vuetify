const getTimeAmPm = (time) => {
  let hour = time.substr(0, 2);
  console.log(hour);
  return hour >= 12 ? 'PM' : 'AM';
};

export default getTimeAmPm;
