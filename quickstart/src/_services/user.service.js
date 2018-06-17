export const userService = {

    login,
    logout,
    register
};



function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    };

    return fetch(`http://localhost:8000/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}


function logout() {
    // Remove user from  local storage  to log user out
    localStorage.removeItem('user');
}


function register(user){

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:8000/users/register',requestOptions).then(handleResponse);

}

function handleResponse(response){

    return response.json().then(data=>{
        if(data.error){
            if(response.status === 401){
                logout();
                //location.reload(true);
            }

            const error = (data && data.error )|| response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}


