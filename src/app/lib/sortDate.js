function sortDate(newData) {
  let myData = newData

  myData.forEach(element => {
    element.data.date = new Date(element.data.date)    
  });

  let sortedDate = myData.sort((a, b) => b.data.date - a.data.date)

  return sortedDate
}