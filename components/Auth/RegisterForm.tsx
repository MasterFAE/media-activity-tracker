"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { type FormField as FormFieldType } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomTypeFormItem from "./CustomTypeFormItem";
import ButtonWithLoading from "../ButtonWithLoading";
import Link from "next/link";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
  acceptTerms: z.boolean(),
});

type FormSchema = z.infer<typeof registerSchema>;
const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    if (!values.acceptTerms) {
      form.setError("acceptTerms", {
        type: "custom",
        message: "You must accept the terms and conditions.",
      });
      return;
    }

    if (values.password !== values.passwordConfirmation) {
      form.setError("passwordConfirmation", {
        type: "custom",
        message: "Passwords do not match.",
      });
      form.setError("password", {
        type: "custom",
        message: "Passwords do not match.",
      });
      return;
    }
    // ✅ This will be type-safe and validated.
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(values);
      router.push("/auth/sign-up");
    }, 2500);
  }

  return (
    <>
      <Alert variant={"destructive"}>
        <XIcon className="w-5 h-5" />
        <AlertTitle>Handle Server Message Title</AlertTitle>
        <AlertDescription>Handle server message description</AlertDescription>
      </Alert>
      <Alert variant={"default"}>
        <XIcon className="w-5 h-5" />
        <AlertTitle>Handle Server Message Title</AlertTitle>
        <AlertDescription>Handle server message description</AlertDescription>
      </Alert>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full">
          {FormFields.map((formField, key) => (
            <FormField
              key={key}
              control={form.control}
              name={formField.name}
              render={({ field }) => (
                <CustomTypeFormItem field={field} formField={formField} />
              )}
            />
          ))}

          <div className="flex space-x-4 justify-end">
            <Link href={"/auth/sign-up"}>
              <Button type="button" variant={"outline"}>
                Sign In
              </Button>
            </Link>

            <ButtonWithLoading
              isLoading={isSubmitting}
              disabled={isSubmitting}
              type="submit">
              Sign Up
            </ButtonWithLoading>
          </div>
        </form>
      </Form>
    </>
  );
};

const FormFields: FormFieldType<FormSchema>[] = [
  {
    label: "Username",
    placeholder: "johndoe22",
    name: "username",
  },
  {
    label: "Email",
    placeholder: "johndoe@mail.com",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "eg. verySecurePassword!123",
    name: "password",
    type: "password",
  },
  {
    label: "Password Confirmation",
    placeholder: "eg. verySecurePassword!123",
    name: "passwordConfirmation",
    type: "password",
  },
  {
    label: "Accept Terms and Conditions",
    name: "acceptTerms",
    type: "checkbox",
    // description: "I agree to the terms and conditions",
  },
];

export default RegisterForm;
