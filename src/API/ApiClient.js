import axios from "axios";
import Cookies from 'js-cookie';
// cho phép axios gửi cookie qua domain khác

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // Đảm bảo gửi cookie với mỗi yêu cầu
});


api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Xử lý lỗi 401 Unauthorized
            Cookies.remove('jwt'); // Xóa JWT từ cookie nếu cần
            window.location.href = '/login'; // Chuyển hướng người dùng đến trang đăng nhập
        }
        return Promise.reject(error);
    }
);


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

