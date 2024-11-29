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
    private apiKey: string;

    constructor() {
        this.baseUrl = "https://user.cloudt.com.br";
        this.apiKey = "85681994-85d1-4587-ae66-fd82717445c7";
    }

    private getHeaders(): HeadersInit {
        return {
            "Content-Type": "application/json",
            "X-APY-Key": this.apiKey,
        };
    }

    async createUser(signUpSchema: SignUpSchema) {
        // Create teacher
        const response = await fetch(`${this.baseUrl}/createUser`, {
            method: "POST",
            headers: this.getHeaders(),
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
            headers: this.getHeaders(),
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
            headers: this.getHeaders(),
            body: JSON.stringify(signInSchema),
        });
        return response.json();
    }

    async getUsers() {
        const response = await fetch(`${this.baseUrl}/getUsers`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return response.json();
    }

    async getUserById(id: string): Promise<IUser> {
        const response = await fetch(`${this.baseUrl}/getUserByID/${id}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return response.json();
    }

    async getStudents() {
        const response = await fetch(`${this.baseUrl}/getStudents`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return response.json();
    }

    async getTeachers() {
        const response = await fetch(`${this.baseUrl}/getProfessors`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        return response.json();
    }
}
