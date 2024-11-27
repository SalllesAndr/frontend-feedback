"use client";

import Button from "@/components/atoms/Button";
import Spinner from "@/components/atoms/Spinner";
import FeedBackProvider, { IFeedback } from "@/providers/feedback.provider";
import UserProvider, { IUser } from "@/providers/user.provider";
import { feedbackSchema, FeedbackSchema } from "@/schema/feedback/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IUserFeedback {
  username: string;
  feedback: string;
}

const TeacherFeedback = () => {
  const [selectedStudent, setSelectedStudent] = useState<{
    username: string;
    given_by: string;
  }>();
  const [feedback, setFeedback] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");

  const [feedbacks, setFeedbacks] = useState<IFeedback[] | any>();
  const [userFeedbacks, setUserFeedbacks] = useState<IUserFeedback[]>();
  const [user, setUser] = useState<IUser>();
  const [students, setStudents] = useState<IUser[]>();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
    setValue,
    setError,
    reset,
  } = useForm<FeedbackSchema>({
    resolver: zodResolver(feedbackSchema),
  });

  const handleFeedbackSubmit = () => {
    if (selectedStudent && feedback.trim()) {
      setFeedbacks((prev: any) => [
        ...prev,
        { student: selectedStudent, feedback },
      ]);
      setFeedback("");
    }
  };

  useEffect(() => {
    async function getInfos() {
      const user: IUser = await new UserProvider().getUserById(
        localStorage.getItem("fb-user")!
      );

      if (user.isStudent) {
        router.push("/dashboard/student");
      }

      const [feedbacks, students]: [IFeedback[], IUser[]] = await Promise.all([
        new FeedBackProvider().getFeedbacksByUserID(
          localStorage.getItem("fb-user")!
        ),
        new UserProvider().getStudents(),
      ]);

      const listUserFeedbacks: IUserFeedback[] = await Promise.all(
        feedbacks.map(async (feedback) => {
          const user = await new UserProvider().getUserById(feedback.given_by);

          return {
            username: user.username,
            feedback: feedback.feedback,
          };
        })
      );

      setUserFeedbacks(listUserFeedbacks);
      setStudents(students);
      setUser(user);
      setFeedbacks(feedbacks);
      setValue("given_by", user.user_id);
    }

    getInfos();
  }, []);

  const submitForm = async (feedbackSchema: FeedbackSchema) => {
    clearErrors();
    try {
      setMessageSuccess("");

      const feedbackResponse: any = await new FeedBackProvider().createFeedback(
        feedbackSchema
      );

      if (feedbackResponse.detail) {
        setError("root", {
          type: "manual",
          message: "Feedback has already been sent to the user.",
        });
        return;
      }

      reset();
      setMessageSuccess("Feedback sent successfully!");
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <section className="mt-28">
      <div className="text-center m-4 text-2xl">Olá {user?.username}</div>
      <div className="flex space-x-4 p-4 bg-gray-100">
        <div className="w-1/4 bg-white p-4 shadow">
          <h2 className="font-bold mb-4 text-lg">Students</h2>
          <ul>
            {students?.map((student) => (
              <li
                key={student.user_id}
                className={`cursor-pointer p-2 ${
                  selectedStudent?.username === student.username
                    ? "bg-blue-100 font-bold"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  setSelectedStudent({
                    username: student.username,
                    given_by: student.user_id,
                  });
                  setValue("target_id", student.user_id);
                }}
              >
                {student.username}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="w-2/4 bg-white p-4 shadow"
        >
          <h2 className="font-bold mb-4 text-lg">
            {selectedStudent
              ? `Feedback to ${selectedStudent.username}`
              : "Select a student"}
          </h2>
          <input
            type="hidden"
            value={selectedStudent?.given_by || ""}
            {...register("given_by")}
          />
          <input
            type="hidden"
            value={user?.user_id || ""}
            {...register("target_id")}
          />
          <textarea
            className="w-full border p-2 mb-4"
            rows={5}
            placeholder="Digite seu feedback aqui..."
            {...register("feedback")}
            defaultValue=""
          ></textarea>
          <Button
            label="Enviar Feedback"
            className="bg-fb-pink-400 text-white px-4 py-2"
            isSubmitting={isSubmitting}
          >
            {isSubmitting ? (
              <Spinner fill="fill-fb-white-100" />
            ) : (
              "Enviar Feedback"
            )}
          </Button>
          <span className="text-fb-red-200 text-lg ml-2">
            {errors.root?.message}
          </span>
          {errors.target_id && (
            <span className="text-md text-fb-red-200 text-left">
              Select a student.
            </span>
          )}
          {messageSuccess && (
            <span className="text-md text-green-500 text-left">
              {messageSuccess}
            </span>
          )}
        </form>
        <div className="w-1/4 bg-white p-4 shadow ">
          <h2 className="font-bold mb-4 text-lg">Your Feedbacks</h2>
          <div className="overflow-y-auto max-h-52">
            {userFeedbacks ? (
              userFeedbacks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border p-2 mb-2 bg-gray-50 shadow-sm"
                  >
                    <h3 className="font-bold text-sm">{item.username}</h3>
                    <p className="text-sm">{item.feedback}</p>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-500">Nenhum feedback enviado.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherFeedback;
