"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import { type FormField as FormFieldType } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomTypeFormItem from "./CustomTypeFormItem";
import ButtonWithLoading from "../ButtonWithLoading";
import { Button } from "../ui/button";
import Link from "next/link";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSchema = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormSchema) {
    // ✅ This will be type-safe and validated.
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // router.push("app");
    }, 2500);
    console.log(values);
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
          <Link href={""}>
            <div className="mt-2 text-sm text-muted-foreground">
              Forgot my password
            </div>
          </Link>

          <div className="flex space-x-4 justify-end">
            <Link href={"/auth/sign-up"}>
              <Button type="button" variant={"outline"}>
                Sign Up
              </Button>
            </Link>

            <ButtonWithLoading
              isLoading={isSubmitting}
              disabled={isSubmitting}
              type="submit">
              Sign In
            </ButtonWithLoading>
          </div>
        </form>
      </Form>
    </>
  );
};

const FormFields: FormFieldType<FormSchema>[] = [
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
];

export default LoginForm;
