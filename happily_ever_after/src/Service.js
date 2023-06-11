import axios from 'axios'

const url = 'http://localhost:3000/user/email/'
const url1 = 'http://localhost:3000/user/id/'
const url2 = 'http://localhost:3000/user/'
const url3 = 'http://localhost:3000/user/'
const url4 = 'http://localhost:3000/service/'
const url5 = 'http://localhost:3000/service/'

class UserService {
  static async getUsers(token) {
    try {
      const res = await axios.get(url + token)
      const data = res.data
      return data.map((post) => ({
        ...post,
        _id: post._id,
        name: post.name,
        username: post.username,
        password: post.password,
        email: post.email,
        picture: post.picture,
        createdAt: new Date(post.createdAt)
      }))
    } catch (error) {
      throw new Error(error)
    }
  }
  static async saveUser(userId, userData) {
    try {
      // Make an API request to save user data
      const response = await axios.put(url1 + userId, userData)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  static getAllUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url2)
        const data = res.data
        resolve(
          data.map((post) => ({
            ...post,
            _id: post._id,
            name: post.name,
            username: post.username,
            password: post.password,
            email: post.email,
            picture: post.picture
          }))
        )
      } catch (error) {
        reject(error)
      }
    })
  }
  async created() {
    try {
      this.posts = await UserService.getAllUsers()
    } catch (error) {}
  }
  static async deleteUser(userId) {
    try {
      const response = await axios.delete(url3 + userId)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  static getAllServices() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url4)
        const data = res.data
        resolve(
          data.map((post) => ({
            ...post,
            _id: post._id,
            name: post.name,
            type: post.type,
            store: post.store,
            location: post.location,
            phoneNumber: post.phoneNumber
          }))
        )
      } catch (error) {
        reject(error)
      }
    })
  }
  async created() {
    try {
      this.posts = await UserService.getAllServices()
    } catch (error) {}
  }
  static async deleteService(serviceId) {
    try {
      const response = await axios.delete(url5 + serviceId)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default UserService
/*import axios from 'axios'
const userEmail = localStorage.getItem('token')
const url = 'http://localhost:3000/user/email/' + localStorage.getItem('token')

class UserService {
  //get uusers
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map((post) => ({
            ...post,
            name: post.name,
            username: post.username,
            password: post.password,
            email: post.email,
            //picture: post.picture,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  //create user
  static created() {
    try {
      this.posts = UserService.getUsers()
    } catch (error) {}
  }
}

export default UserService*/
