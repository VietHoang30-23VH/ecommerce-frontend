import axios from "axios";
// cho phép axios gửi cookie qua domain khác
axios.defaults.withCredentials = true;
export const api = axios.create({
    baseURL: 'http://localhost:8080'
});


export const registerUser = async (username, email, password) => {
    try {
        const response = await api.post('/auth/register', { username, email,password});
        return response.data;
    } catch (error) {
        console.error('Can not register ', error);
        throw error;

    }
}

export const loginUser = async(emailOrUserName , password) => {
    try{
        const response = await api.post('/auth/login', {emailOrUserName, password});
    return response.data;
    }catch(error){
        console.log('Can not login', error);
    }
    
}

