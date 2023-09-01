export const displayLoader = (status = false) => {
  return {
    type: 'DISPLAY_LOADER',
    payload: status,
  }
}
