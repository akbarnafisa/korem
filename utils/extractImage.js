const extractImage = (images, type) => {
  let result = {}
  Object.keys(images).map((key) => {
    const data = JSON.parse(images[key])
    if (data.length === 1 || type === 'single') {
      result = {
        ...result,
        [key]: data[0] ? data[0].url : null
      }
    } else {
      const dataArray = data.map((image) => {
        return image.url
      })
      result = {
        ...result,
        [key]: dataArray
      }
    }
  })
  return result
}

export default extractImage
