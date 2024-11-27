import { SignInSchema } from './../schema/auth/signin';
import { SignUpSchema } from "@/schema/auth/signup";

export interface IUser {
    _id: string;
    email: string;
    username: string;
    user_id: string;
    isStudent: boolean;
}

export default class UserProvider {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "https://user.cloudt.com.br";
    }

    async createUser(signUpSchema: SignUpSchema) {
        // Create teacher
        const response = await fetch(`${this.baseUrl}/createUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: signUpSchema.email,
                username: signUpSchema.username,
                password: signUpSchema.password
            }),
        });
        return response.json();
    }

    async signup(signUpSchema: SignUpSchema) {
        // Create student
        const response = await fetch(`${this.baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: signUpSchema.email,
                username: signUpSchema.username,
                password: signUpSchema.password
            }),
        });
        return response.json();
    }
    
    async login(signInSchema: SignInSchema) {
        const response = await fetch(`${this.baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signInSchema),
        });
        return response.json();
    }

    async getUsers() {
        const response = await fetch(`${this.baseUrl}/getUsers`);
        return response.json();
    }

    async getUserById(id: string): Promise<IUser> {
        const response = await fetch(`${this.baseUrl}/getUserByID/${id}`);
        return response.json();
    }

    async getStudents() {
        const response = await fetch(`${this.baseUrl}/getStudents`);
        return response.json();
    }

    async getTeachers() {
        const response = await fetch(`${this.baseUrl}/getProfessors`);
        return response.json();
    }
}