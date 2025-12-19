function isLeap(year) {
  const isDividedBy4 = year % 4 === 0;
  const isDividedBy100 = year % 100 === 0;
  const isDividedBy400 = year % 400 === 0;
  
  if (isDividedBy4) {
    if (isDividedBy100) {
      if (isDividedBy400) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}


module.exports = isLeap;