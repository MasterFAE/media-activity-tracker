import React, { useEffect, useState } from "react";
import DialogWithDrawer from "../DialogWithDrawer";
import ButtonWithLoading from "../ButtonWithLoading";
import { PenBoxIcon } from "lucide-react";
import { z } from "zod";
import { FormField as FormFieldType } from "@/types";
import { SavedMock } from "@/types/mock";
import { newFormFields } from "./CreateMediaDialog";
import { UseFormReturn, useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import CustomTypeFormItem from "../Auth/CustomTypeFormItem";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

type FormSchema = z.infer<typeof updateSchema>;
const updateSchema = z.object({
  name: z.string().min(3).max(32),
  description: z.string().max(500).optional(),
  length: z.preprocess(Number, z.number().min(1)),
});

const UpdateMediaDialog = ({ item }: { item: SavedMock }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const defaultValues = {
    name: item.name,
    description: item.description || "",
    length: item.duration,
  };

  const form = useForm<FormSchema>({
    resolver: zodResolver(updateSchema),
    defaultValues,
  });

  const formFields = newFormFields<FormSchema>(
    item.category.name as "Book" | "Movie" | "TV Series"
  );

  const onSubmit = (values: FormSchema) => {
    if (values["length"] < item.duration) {
      form.setError("length", {
        type: "manual",
        message: "Length cannot be less than the current duration",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2500);
  };

  const onSubmitEvent = () =>
    document.getElementById("submitUpdateMediaForm")?.click();

  return (
    <DialogWithDrawer
      onClose={() => form.reset(defaultValues)}
      title={"Update Tracker"}
      footer={
        <FooterComponent
          onReset={() => form.reset(defaultValues)}
          onSubmit={onSubmitEvent}
          isSubmitting={isSubmitting}
        />
      }
      description={"Update your tracker"}
      trigger={
        <div className="w-full flex space-x-2 items-center">
          <PenBoxIcon className="w-3 h-3 mr-2" />
          Update
        </div>
      }>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full">
          <MediaFormFields formFields={formFields} form={form} />
          <input type="submit" className="hidden" id="submitUpdateMediaForm" />
        </form>
      </Form>
    </DialogWithDrawer>
  );
};

type MediaFormFieldsProps = {
  formFields: FormFieldType<FormSchema>[];
  form: UseFormReturn<FormSchema>;
};

const MediaFormFields = (props: MediaFormFieldsProps) => {
  const { formFields, form } = props;
  return (
    <>
      {formFields.map((formField, key) => (
        <FormField
          key={formField.name + key}
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

const FooterComponent = ({ onSubmit, isSubmitting, onReset }: any) => {
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

export default UpdateMediaDialog;
