import decode from "jwt-decode";

class AuthService {
    getProfile() {
        console.log("auth/getProfile")
        return decode(this.getToken());
    }

    loggedIn() {
        console.log("auth/loggedIn")
        // This checks to see if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        console.log("auth/isTokenExpired(token)")
        // function responsible for checking token validity
        try {
            const decoded = decode(token);
            console.log(token)
            console.log(Date.now() / 1000, decoded.exp)
            if (decoded.exp > Date.now() / 1000) {
                console.log("this is returning true")
                return true;
            } else console.log("this is returning false"); return false;
        } catch (err) {
            console.log("error");
            console.error(err);
            return false;
        }
    }

    getToken() {
        console.log("auth/getToken")
        // Pulls user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        console.log("auth/login(idToken)")
        // responsible for saving user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
      }

    logout() {
        console.log("auth/logout")
        // Clears user token and profile data from localStorage. Second Half reloads page and resets the state
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
      }
    }
    
    export default new AuthService();