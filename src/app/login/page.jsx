"use client";

import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });
   
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md p-8 shadow-xl border">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-sm text-default-500 mt-2">
            Login to access BookHub
          </p>
        </div>

        {/* Form */}
        <Form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          {/* Login Button */}
          <Button type="submit" color="primary" className="w-full mt-2">
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login */}
        <Button
          variant="light"
          className="
            w-full
            h-12
            rounded-full
            bg-white
            border
            border-gray-200
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-0.5
            transition-all
            duration-300
            text-gray-700
            font-semibold
            flex
            items-center
            justify-center
            gap-3
          "
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={22} />
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-sm mt-5">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
