
export function matchStateToTerm(state, value) {
    const regex = new RegExp(`${value.toLowerCase()}`);
    const title = state.title.toLowerCase();
    return regex.test(title);
    // state.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 
}
  
  
export function fakeRequest(value, list, cb) {

  return setTimeout(cb, 500, value ?
    list.filter(state => matchStateToTerm(state, value)).slice(0, 6)
    : list
  )
}
  
  