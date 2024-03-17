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
  length: z.preprocess(Number, z.number().min(1)),
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

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2500);
  };

  const onSubmitEvent = (e: any) =>
    document.getElementById("submitCreateMediaForm")?.click();

  const onReset = () => form.reset(initialFormState);

  return (
    <DialogWithDrawer
      onClose={() => form.reset(initialFormState)}
      title={"Create Tracker"}
      footer={
        <FooterComponent
          onSubmit={onSubmitEvent}
          onReset={onReset}
          isSubmitting={isSubmitting}
        />
      }
      description={"Create a new tracker to keep track of your progress."}
      trigger={
        <Button variant={"ghost"} size={"icon"}>
          <PlusIcon />
        </Button>
      }>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full">
          <MediaFormFields
            {...{
              formFields,
              setFormFields,
              form,
            }}
          />
          <input type="submit" className="hidden" id="submitCreateMediaForm" />
        </form>
      </Form>
    </DialogWithDrawer>
  );
};

type MediaFormFieldsProps = {
  formFields: FormFieldType<FormSchema>[];
  setFormFields: (value: FormFieldType<FormSchema>[]) => void;
  form: UseFormReturn<FormSchema>;
};

const MediaFormFields = (props: MediaFormFieldsProps) => {
  const { formFields, form, setFormFields } = props;
  useEffect(() => {
    let value = form.watch("categoryName");
    !value || value.length === 0
      ? setFormFields([...FormFields])
      : setFormFields([...FormFields, ...newFormFields<FormSchema>(value)]);
  }, [form.watch("categoryName")]);

  return (
    <>
      {/* app-index.js:35 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components */}
      {formFields.map((formField, key) => (
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
    </>
  );
};

type FooterComponentProps = {
  isSubmitting: boolean;
  onSubmit: (e: any) => void;
  onReset: () => void;
};

const FooterComponent = (props: FooterComponentProps) => {
  const { isSubmitting, onSubmit, onReset } = props;
  return (
    <div className="flex space-x-2">
      <ButtonWithLoading
        className="w-full lg:w-auto"
        type="button"
        onClick={onSubmit}
        isLoading={isSubmitting}>
        Submit
      </ButtonWithLoading>
      <Button onClick={onReset} type="button" variant={"outline"}>
        Clear
      </Button>
    </div>
  );
};

export function newFormFields<T>(value: string): FormFieldType<T>[] {
  let lengthType =
    value == CategoryTypes.Book
      ? "Pages"
      : value == CategoryTypes.Movie
      ? "Minutes"
      : "Episodes";
  return [
    {
      label: "Name",
      name: "name" as keyof T,
      placeholder: "What do you want to track?",
    },
    {
      label: lengthType,
      name: "length" as keyof T,
      placeholder: `How many ${lengthType.toLowerCase()}?`,
      type: "number",
    },
    {
      label: "Description",
      name: "description" as keyof T,
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
