"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { RegisterSchema } from "@/schema";
import Link from "next/link";

type RegisterData = z.infer<typeof RegisterSchema>;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterData) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
        router.push("/festival");
      } else {
        setError("Error, try again");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const { pending } = useFormStatus();

  return (
    <Card className="max-w-[500px] mx-auto bg-white">
      <CardHeader className="flex flex-col items-center text-center">
        <Image
          src="/kitfest-logo.svg"
          alt="KITFest logo"
          width={150}
          height={100}
        />
        <h1 className="text-xl font-bold">Create an Account</h1>
        <p>Register to access our services and features.</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-4">
        <p>
          Already have an account?
          <span className="pl-1 text-[#005925]">
            <Link href="/festival">Login</Link>
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Register;
