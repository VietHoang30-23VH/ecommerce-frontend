import axios from "axios";
import Cookies from 'js-cookie';

// Tạo một instance của Axios với cấu hình cơ bản
export const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // Đảm bảo gửi cookie với mỗi yêu cầu
});


// Thêm interceptor để thêm token JWT vào headers của mỗi yêu cầu
api.interceptors.request.use(
    config => {
        const token = Cookies.get('jwt'); // Lấy token từ cookies
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Thêm token vào headers
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Thêm interceptor để xử lý các lỗi response
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

// Hàm đăng ký người dùng
export const registerUser = async (username, email, password) => {
    try {
        const response = await api.post('/auth/register', { username, email, password });
        return response.data;
    } catch (error) {
        console.error('Can not register', error);
        throw error;
    }
}

// Hàm đăng nhập người dùng
export const loginUser = async (emailOrUserName, password) => {
    try {
        const response = await api.post('/auth/login', { emailOrUserName, password })
        return response.data;  
    } catch (error) {
        console.log('Can not login', error);
        throw error;
    }
}

// export const checkAuth = async () => {
//     try {
//         const response = await api.get('/auth/check'); 
//         return response.data; 
//     } catch (error) {
//         console.log('Cannot check authentication', error);
//         // throw error;
//     }
// };


