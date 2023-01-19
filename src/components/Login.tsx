import Link from "next/link";
import Button from "@/components/Button";
import authService, { Provider } from "@/frontend/services/auth";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [providerList, setProviderList] = useState<Provider[]>([]);

  const fetchAuthProviders = async () => {
    const response = await authService.getProviders();
    setProviderList(response);
  };

  useEffect(() => {
    fetchAuthProviders();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen font-primary w-100">
      <div className="flex flex-col w-10/12 p-4 text-center items-center md:justify-center h-5/6 md:w-3/5 md:h-3/4">
        <span className="text-2xl font-bold">Log in</span>
        <span className="my-5 font-semibold opacity-80 md:my-3">
          Fill in your log in details to proceed
        </span>
        <form>
          <input
            type="text"
            className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
            placeholder="Enter your password"
          />
          <Button type="submit" full>
            Login
          </Button>
          <div className="flex justify-between mt-3">
            <span className="text-dark-400">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer accent-dark-400"
              />
              Remember me
            </span>
            <Link href="/forgot-password" className="text-dark-700">
              Forgot password?
            </Link>
          </div>
        </form>
        {providerList.map((provider) => (
          <button
            onClick={() =>
              signIn(provider.id, { redirect: true, callbackUrl: "/dashboard" })
            }
            key={provider.id}
            type="button"
            className="mt-4"
          >
            Sign in with {provider.name}
          </button>
        ))}
        <div className="flex flex-col justify-center mt-8 md:flex-row">
          <p className="mr-2 text-dark-400">Don&apos;t have an account?</p>
          <Link href="/signup" className="text-dark-700">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
