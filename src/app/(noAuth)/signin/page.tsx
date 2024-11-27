"use client";

import Student from "@/components/molecules/signin/student";
import Teacher from "@/components/molecules/signin/teacher";
import TemplateNoAuth from "@/components/templates/TemplateNoAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [isSignInStudent, setIsSignInStudent] = useState<boolean | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("user") === "student") {
      setIsSignInStudent(true);
    }
  }, [searchParams]);

  return (
    <TemplateNoAuth withlinks={false}>
      <div className="min-h-screen flex items-center justify-center font-poppins">
        <div className="bg-fb-white-100 p-8 shadow-lg w-full max-w-xl">
          <h2 className="text-fb-black-400 font-bold text-center text-4xl mb-6">
            Sign In Feedback
          </h2>
          <div className="flex justify-center mb-6">
            <button
              className={`${
                isSignInStudent
                  ? `bg-fb-pink-300 text-fb-white-200 hover:bg-fb-pink-300 px-[6rem]`
                  : `bg-fb-white-200 text-black hover:bg-fb-gray-100 `
              } px-[6rem] py-2 text-xl`}
              onClick={() => setIsSignInStudent(true)}
            >
              Student
            </button>
            <button
              className={`${
                isSignInStudent
                  ? `bg-fb-white-200 text-black hover:bg-fb-gray-100`
                  : `bg-fb-pink-300 text-fb-white-200 hover:bg-fb-pink-300 px-[6rem]`
              } px-[6rem] py-2 text-xl`}
              onClick={() => setIsSignInStudent(false)}
            >
              Teacher
            </button>
          </div>
          {isSignInStudent ? <Student /> : <Teacher />}
        </div>
      </div>
    </TemplateNoAuth>
  );
}
