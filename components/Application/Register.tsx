"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as z from "zod";
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
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

// Schema for form validation
const registerSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full Name is required.",
  }),
  country: z.string().min(1, {
    message: "Country is required.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone Number is required.",
  }),
  emailAddress: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Confirm Password is required.",
    })
    .refine((val, ctx) => {
      if (val !== ctx.parent.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords must match.",
        });
      }
      return true;
    }),
});

const Register = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [countryCode, setCountryCode] = useState<string>("");
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      country: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log({ values });
  };

  // Fetch the list of countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data.map(
          (country: any) => country.name.common
        );
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

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
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-y-6"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setCountryCode(e.target.value); // Get country code based on the selected country
                      }}
                      className="w-full p-2 border rounded"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Phone Number"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@mail.com"
                      type="email"
                      {...field}
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
                    <Input
                      placeholder="Your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Register
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
