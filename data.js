const fs = require("fs")
const addPerson = (id, fname, lname, age) => {
  const allData = loadInfo()

  const duplicatedData = allData.filter((obj) => {
    return obj.id === id
  })

  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age
    })
    savealldata(allData)
  } else {
    console.log("error duplicated data")
  }
}
const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
  }
  catch {
    return []
  }
}
const savealldata = (allData) => {
  const saveallDataJson = JSON.stringify(allData)
  fs.writeFileSync("data.json", saveallDataJson)
}
// delete data 

const deleteData = (id) => {
  const allData = loadInfo()

  const dataTokeep = allData.filter((obj) => {
    return obj.id !== id
  })
  savealldata(dataTokeep)

}

const readData = (id) => {
  const allData = loadInfo()

  const itemNeeded = allData.find((obj) => {
    return obj.id == id
  })
  if (itemNeeded) {
    console.log(itemNeeded)
  } else {
    console.log("id needed not found")
  }
}
const listData = () => {
  const allData = loadInfo()
  allData.forEach((obj) => {
    console.log(obj.fname, obj.city)
  })
}
module.exports = {
  addPerson,
  deleteData,
  readData,
  listData
}