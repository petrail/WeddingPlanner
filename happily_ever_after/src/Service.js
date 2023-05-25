import axios from 'axios';

const url = 'http://localhost:3000/user/'

class UserService {
    //get uusers
    static getUsers(){
        return new Promise(async(resolve, reject) =>
        {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        name: post.name,
                        lastName: post.lastName,
                        password: post.password,
                        phoneNumber: post.phoneNumber,
                        email: post.email,
                        createdAt: new Date(post.createdAt),

                        
                    }))
                );
            } catch (error) {
                reject(error);
                
            }
        })
    }

    //create user
    async created() {
        try {
            this.posts = await UserService.getUsers()
        } catch (error) {
            
        }
    }
}

export default UserService;