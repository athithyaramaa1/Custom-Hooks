const UseAthithya = (value) => {
    let propVal = value
    window.localStorage.setItem("context", propVal)
    window.sessionStorage.setItem("context", propVal)
  return null
}

export default UseAthithya
