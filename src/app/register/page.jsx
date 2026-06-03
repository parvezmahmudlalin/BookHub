"use client";

import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "../../lib/auth-client";

const Register = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data,error} = await authClient.signUp.email({
      email,
      password,
      name,
      photo: photoUrl,
      callbackURL: "/"
    });

    console.log("Register response:", { data, error });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10" >
      <Card className="w-full max-w-md p-8 shadow-xl border">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-sm text-default-500 mt-2">
            Register to access BookHub
          </p>
        </div>

        {/* Form */}
        <Form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your full name" />
            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="photoUrl" type="url">
            <Label>Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              At least 8 characters, one uppercase letter and one number.
            </Description>
            <FieldError />
          </TextField>

          {/* Register Button */}
          <Button type="submit" color="primary" className="w-full mt-2">
            Register
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-default-500">OR</span>
          <div className="flex-1 border-t"></div>
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
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </Button>

        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
