import decode from "jwt-decode";

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        // This checks to see if there is a saved token and if it is still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        // function responsible for checking token validity
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            console.log("error");
            console.error(err);
            return false;
        }
    }

    getToken() {
        // Pulls user token from localStorage
        return localStorage.getItem("id_token");
    }

    login(idToken) {
        // responsible for saving user token to localStorage
        localStorage.setItem("id_token", idToken);

        window.location.assign("/");
    }

    logout() {
        // Clears user token and profile data from localStorage. Second Half reloads page and resets the state
        localStorage.removeItem("id_token");

        window.location.assign("/");
    }
}

export default new AuthService();