import axios from 'axios';

const url = 'http://localhost:3000/users/username/:julija'

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
                        username: post.username,
                        password: post.password,
                        email: post.email,
                        picture: post.picture,
                        createdAt: new Date(post.createdAt),

                        
                    }))
                );
            } catch (error) {
                reject(error);
                
            }
        })
    }

    //create user
    static async created() {
        try {
            this.posts = await UserService.getUsers()
        } catch (error) {
            
        }
    }
}

export default UserService;