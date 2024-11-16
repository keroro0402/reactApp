import axios from 'axios'
const agent = {
  kikyakuGet: async () => {
    return await axios.get(
      'https://firestore.googleapis.com/v1/projects/axios-kiyaku/databases/(default)/documents/kiyaku'
    )
  },
  imageInfoGet: async () => {
    return await axios.get(
      'https://firestore.googleapis.com/v1/projects/axios-image/databases/(default)/documents/images'
    )
  }
}

export default agent
