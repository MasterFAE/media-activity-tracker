"use client";
import React, { useEffect } from "react";
import { PlusIcon } from "lucide-react";
import DialogWithDrawer from "../DialogWithDrawer";
import { Button } from "../ui/button";
import { z } from "zod";
import { CategoryTypes } from "@/types/mock";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { type FormField as FormFieldType } from "@/types";
import CustomTypeFormItem from "../Auth/CustomTypeFormItem";
import ButtonWithLoading from "../ButtonWithLoading";
import { v4 as uuidv4 } from "uuid";

type FormSchema = z.infer<typeof formSchema>;
const formSchema = z.object({
  categoryName: z.string(),
  name: z.string().min(3).max(32),
  description: z.string().max(500).optional(),
  type: z.string().optional(),
  length: z.preprocess(Number, z.number()),
});

const initialFormState: FormSchema = {
  categoryName: "",
  name: "",
  description: "",
  type: "",
  length: 0,
};

const CreateMediaDialog = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formFields, setFormFields] = React.useState(FormFields);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  return (
    <DialogWithDrawer
      onClose={() => form.reset(initialFormState)}
      title={"Create Tracker"}
      footer={undefined}
      description={"Create a new tracker to keep track of your progress."}
      trigger={
        <Button variant={"ghost"} size={"icon"}>
          <PlusIcon />
        </Button>
      }>
      <CreateMediaForm
        {...{ isSubmitting, setIsSubmitting, formFields, setFormFields, form }}
      />
    </DialogWithDrawer>
  );
};

type CreateMediaFormProps = {
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  formFields: FormFieldType<FormSchema>[];
  setFormFields: (value: FormFieldType<FormSchema>[]) => void;
  form: UseFormReturn<FormSchema>;
};

const CreateMediaForm = ({
  isSubmitting,
  setIsSubmitting,
  formFields,
  setFormFields,
  form,
}: CreateMediaFormProps) => {
  useEffect(() => {
    let value = form.watch("categoryName");
    !value || value.length === 0
      ? setFormFields([...FormFields])
      : setFormFields([...FormFields, ...newFormFields(value)]);
  }, [form.watch("categoryName")]);

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        {formFields.map((formField) => (
          <FormField
            key={uuidv4()}
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
        <div className="flex space-x-2">
          <ButtonWithLoading
            className="w-full lg:w-auto"
            type="submit"
            isLoading={isSubmitting}>
            Submit
          </ButtonWithLoading>
          <Button
            onClick={() => form.reset(initialFormState)}
            type="button"
            variant={"outline"}>
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};

function newFormFields(value: string): FormFieldType<FormSchema>[] {
  let lengthType =
    value == CategoryTypes.Book
      ? "Pages"
      : value == CategoryTypes.Movie
      ? "Minutes"
      : "Episodes";
  return [
    {
      label: "Name",
      name: "name",
      placeholder: "What do you want to track?",
    },
    {
      label: lengthType,
      name: "length",
      placeholder: `How many ${lengthType.toLowerCase()}?`,
      type: "number",
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Add a description, optional.",
    },
  ];
}

const FormFields: FormFieldType<FormSchema>[] = [
  {
    label: "Category",
    name: "categoryName",
    type: "dropdown",
    dropdownItems: Object.values(CategoryTypes).map((category) => ({
      label: category,
      value: category,
    })),
  },
];

export default CreateMediaDialog;
