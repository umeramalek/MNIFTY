import decode from "jwt-decode";

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpires(token);
    }
}