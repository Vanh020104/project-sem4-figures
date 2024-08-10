import React from 'react';

const UserContext = React.createContext({ username: '', auth: false });
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(() => {
        // Lấy dữ liệu từ localStorage nếu có
        const storedToken = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        return {
            username: storedUsername || '',
            auth: !!storedToken,
        };
    });

    const loginContext = (username, token) => {
        setUser({
            username: username,
            auth: true,
        });
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUser({
            username: '',
            auth: false,
        });
        // window.location.reload();
    };

    return <UserContext.Provider value={{ user, loginContext, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
