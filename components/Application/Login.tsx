"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

type LoginFormData = z.infer<typeof LoginSchema>;

const Login = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/application");
    }
  }, [sessionStatus, router]);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else if (res?.url) {
        router.replace("/dashboard");
      } else {
        setError("");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const { pending } = useFormStatus();

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Card className="max-w-[500px] mx-auto shadow-md bg-white">
      <CardHeader className="flex flex-col items-center text-center">
        <Image
          src="/kitfest-logo.svg"
          alt="KITFest logo"
          width={150}
          height={100}
        />
        <h1 className="text-xl font-bold">Welcome Back</h1>
        <p>Login to access our services and features.</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={pending || loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className=" flex flex-col gap-y-4">
        <p>
          Don&apos;t have an account?
          <span className=" pl-1 text-[#005925]">
            <Link href="/new-user">Sign Up</Link>
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
