let nextTodoId = 0
export const openModal = () => {
  return {
    type: 'OPEN_MODAL' 
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}
