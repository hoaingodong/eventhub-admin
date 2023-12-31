// in src/authProvider.js
const authProvider = {
    login: ({username, password}) => {
        console.log(username, password)
        const email = username
        const request = new Request('https://event-booking-app.onrender.com/api/v1/me/login-admin', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                throw new Error('Invalid username or password')
            });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }

        return Promise.resolve();
    },
    getIdentity: () => {
        let auth = localStorage.getItem('auth');
            auth = JSON.parse(auth);

        if (auth) {
            const fullName = auth.user.name;
            console.log(fullName)

            return Promise.resolve({
                id: 'user',
                fullName: fullName,
            });
        }

        return Promise.resolve({
            id: 'user',
            fullName: 'Default Name',
        });
    },
    getPermissions: () => Promise.resolve(''),
};
export default authProvider;