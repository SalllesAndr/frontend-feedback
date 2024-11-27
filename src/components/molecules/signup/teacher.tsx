import Button from "@/components/atoms/Button";
import { signUpSchema, SignUpSchema } from "@/schema/auth/signup";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Spinner from "@/components/atoms/Spinner";
import UserProvider from "@/providers/user.provider";

export default function TeacherSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const submitForm = async (signUpSchema: SignUpSchema) => {
    clearErrors();
    try {
      const userProvider = new UserProvider();

      console.log("createUser");

      const signup = await userProvider.createUser(signUpSchema);

      if (signup.detail) {
        setError("root", {
          type: "manual",
          message: signup.detail,
        });
        return;
      }

      localStorage.setItem("fb-user", signup.user.user_id);

      router.push(`/dashboard/teacher`);
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-4">
        <label className="block text-lg">Username</label>
        <input
          type="text"
          {...register("username")}
          className="bg-fb-white-200 text-fb-black-400 w-full p-2 focus:outline-none focus:ring-2 focus:ring-fb-pink-300 text-base"
          placeholder="jhon_doe"
        />
        {errors.username && (
          <span className="text-md text-fb-red-200 text-left">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-lg">Email address</label>
        <input
          type="email"
          {...register("email")}
          className="bg-fb-white-200 text-fb-black-400 w-full p-2 focus:outline-none focus:ring-2 focus:ring-fb-pink-300 text-base"
          placeholder="jhon@doe.com"
        />
        {errors.email && (
          <span className="text-md text-fb-red-200 text-left">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-4 relative">
        <label className="block text-lg">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="bg-fb-white-200 text-fb-black-400 w-full p-2 focus:outline-none focus:ring-2 focus:ring-fb-pink-300 text-base pr-10"
            placeholder="********"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-fb-gray-400 hover:text-fb-gray-600 focus:outline-none"
          >
            {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <span className="text-md text-fb-red-200 text-left">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex justify-between mb-4">
        <a href="/" className="text-sm hover:underline">
          Forgot your password? Click here
        </a>
        <a
          href="/signin?user=teacher"
          className="text-sm hover:underline hover:text-fb-pink-500"
        >
          Sign in? Click here
        </a>
      </div>
      <Button
        label="Continue"
        className="bg-fb-pink-300 text-fb-white-100 hover:bg-fb-pink-500 w-full mt-8 mb-4 py-2 text-xl transition-colors flex justify-center items-center"
        isSubmitting={isSubmitting}
      >
        {isSubmitting ? <Spinner fill="fill-fb-white-100" /> : "Continue"}
      </Button>
      <span className="text-fb-red-200 text-lg flex justify-center items-center">
        {errors.root?.message}
      </span>
    </form>
  );
}
