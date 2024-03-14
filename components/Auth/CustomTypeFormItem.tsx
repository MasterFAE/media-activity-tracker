import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { type FormField as FormFieldType } from "@/types";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
  field: ControllerRenderProps<any, any>;
  formField: FormFieldType<any>;
};

const CustomTypeFormItem = ({ field, formField }: Props) => {
  switch (typeof field.value) {
    case "boolean":
      return (
        <FormItem>
          <div className="flex space-x-2 items-center">
            <FormControl>
              <Checkbox
                {...field}
                value={field.value.toString()}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>{formField.label}</FormLabel>
          </div>
          <FormMessage className="text-xs" />

          {formField.description && (
            <FormDescription>{formField.description}</FormDescription>
          )}
        </FormItem>
      );
    default:
      return (
        <FormItem>
          <div className="flex flex-col space-y-1">
            <FormLabel>{formField.label}</FormLabel>
            <FormMessage className="text-xs" />
          </div>
          <FormControl>
            <Input
              type={formField.password ? "password" : "text"}
              placeholder={formField.placeholder}
              {...field}
            />
          </FormControl>
          {formField.description && (
            <FormDescription>{formField.description}</FormDescription>
          )}
        </FormItem>
      );
  }
};

export default CustomTypeFormItem;
