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

    constructor() {
        this.baseUrl = "https://feedback.cloudt.com.br";
    }

    async getFeedbacksByUserID(id: string) {
        const response = await fetch(`${this.baseUrl}/getFeedbacksByUserID/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }

    async getUsers() {
        const response = await fetch(`${this.baseUrl}/getUsers`);
        return response.json();
    }

    async createFeedback(feedbackSchema: FeedbackSchema): Promise<IFeedback | { detail: string }> {
        const response = await fetch(`${this.baseUrl}/createFeedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...feedbackSchema
            }),
        });
        return response.json();
    }
}