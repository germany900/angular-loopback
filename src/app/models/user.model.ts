export interface RegisterUser {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}

export interface RegisterUserResponse {
    email: string;
    firstname: string;
    id: string;
    lastname: string;
    role: string;
    username: string;
}