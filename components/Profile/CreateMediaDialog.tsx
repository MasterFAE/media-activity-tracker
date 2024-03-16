"use client";
import React from "react";
import { PlusIcon } from "lucide-react";
import DialogWithDrawer from "../DialogWithDrawer";
import { Button } from "../ui/button";
import { z } from "zod";
import { CategoryTypes } from "@/types/mock";
import { loginSchema } from "@/lib/schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { type FormField as FormFieldType } from "@/types";
import CustomTypeFormItem from "../Auth/CustomTypeFormItem";
import ButtonWithLoading from "../ButtonWithLoading";
import Link from "next/link";

type Props = {};

const CreateMediaDialog = (props: Props) => {
  return (
    <DialogWithDrawer
      title={"Create Tracker"}
      footer={undefined}
      description={"Create a new tracker to keep track of your progress."}
      trigger={
        <Button variant={"ghost"} size={"icon"}>
          <PlusIcon />
        </Button>
      }>
      <CreateMediaForm />
    </DialogWithDrawer>
  );
};

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(3).max(32),
  description: z.string().max(500).optional(),
  type: z.string().optional(),
  categoryName: z.enum([typeof CategoryTypes]),
});

const CreateMediaForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      categoryName: CategoryTypes[0],
    },
  });

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        {FormFields.map((formField, key) => (
          <FormField
            key={key}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <CustomTypeFormItem
                field={field}
                formField={formField}
                dropdownItems={formField.dropdownItems}
              />
            )}
          />
        ))}
      </form>
    </Form>
  );
};

const FormFields: FormFieldType<FormSchema>[] = [
  {
    label: "Name",
    name: "name",
    placeholder: "What do you want to track?",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Add a description",
  },
  {
    label: "Category",
    name: "categoryName",
    type: "dropdown",
    dropdownItems: CategoryTypes.map((category) => ({
      label: category,
      value: category,
    })),
  },
];

export default CreateMediaDialog;
