import { FeedbackSchema } from '@/schema/feedback/feedback';
import { SignInSchema } from './../schema/auth/signin';
import { SignUpSchema } from "@/schema/auth/signup";

export interface IFeedback {
    _id: string;
    target_id: string;
    given_by: string;
    feedback: string;
    feedback_id: string;
}
  
export default class FeedBackProvider {
    private baseUrl: string;
    private apiKey: string;

    constructor() {
        this.baseUrl = "https://feedback.cloudt.com.br";
        this.apiKey = "85681994-85d1-4587-ae66-fd82717445c7";
    }

    private getHeaders(): HeadersInit {
        return {
            "Content-Type": "application/json",
            "X-APY-Key": this.apiKey,
        };
    }

    async getFeedbacksByUserID(id: string) {
        const response = await fetch(`${this.baseUrl}/getFeedbacksByUserID/${id}`, {
            method: "GET",
            headers: this.getHeaders(),
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

    async createFeedback(feedbackSchema: FeedbackSchema): Promise<IFeedback | { detail: string }> {
        const response = await fetch(`${this.baseUrl}/createFeedback`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({
                ...feedbackSchema
            }),
        });
        return response.json();
    }
}
