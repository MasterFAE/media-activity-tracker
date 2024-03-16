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
import { FormDropdownItem, type FormField as FormFieldType } from "@/types";
import { ControllerRenderProps } from "react-hook-form";
import { Check, ChevronsUpDown, Command } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  field: ControllerRenderProps<any, any>;
  formField: FormFieldType<any>;
  dropdownItems?: FormDropdownItem[];
};

const CustomTypeFormItem = ({ field, formField, dropdownItems }: Props) => {
  return (
    <FormItem>
      <div className="flex flex-col space-y-1">
        {formField.type != "checkbox" && (
          <FormLabel> formField.label</FormLabel>
        )}
        <FormMessage className="text-xs" />
      </div>
      <FormControl>
        <CustomFormFieldBody {...{ field, formField, dropdownItems }} />
      </FormControl>
      {formField.description && (
        <FormDescription>{formField.description}</FormDescription>
      )}
    </FormItem>
  );
};

const CustomFormFieldBody = ({ formField, field, dropdownItems }: Props) => {
  switch (formField.type) {
    case "checkbox":
      return (
        <div className="flex space-x-2 items-center">
          <Checkbox
            {...field}
            value={field.value.toString()}
            onCheckedChange={field.onChange}
          />
          <FormLabel>{formField.label}</FormLabel>
        </div>
      );
    case "dropdown":
      const [open, setOpen] = React.useState(false);
      if (!dropdownItems) return <>No value provided for dropdown</>;
      let selectedValue = dropdownItems.find(
        (type) => type.value === field.value
      );
      let inputLabel = selectedValue
        ? selectedValue.label
        : "Select Media Type";
      return (
        <Popover open={open} onOpenChange={(open) => setOpen(open)}>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "w-[200px] justify-between",
                  !field.value && "text-muted-foreground"
                )}>
                {inputLabel}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <div className="flex flex-col space-y-1">
              {dropdownItems.map((item, key) => (
                <Button
                  type="button"
                  variant={"ghost"}
                  key={key}
                  onClick={() => {
                    field.onChange(item.value);
                    setOpen(false);
                  }}>
                  {item.label}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    default:
      return (
        <Input
          type={formField.password ? "password" : "text"}
          placeholder={formField.placeholder}
          {...field}
        />
      );
  }
};

export default CustomTypeFormItem;
