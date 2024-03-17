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
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

type Props = {
  field: ControllerRenderProps<any, any>;
  formField: FormFieldType<any>;
  dropdownItems?: FormDropdownItem[];
};

const CustomTypeFormItem = ({
  field,
  formField,
  dropdownItems,
  ...props
}: Props) => {
  return (
    <FormItem>
      <div className="flex flex-col space-y-1">
        {formField.type != "checkbox" && (
          <FormLabel>{formField.label}</FormLabel>
        )}
        <FormMessage className="text-xs" />
      </div>
      <FormControl>
        <CustomFormFieldBody {...{ field, formField, dropdownItems, props }} />
      </FormControl>
      {formField.description && (
        <FormDescription>{formField.description}</FormDescription>
      )}
    </FormItem>
  );
};

const CustomFormFieldBody = ({
  formField,
  field,
  dropdownItems,
  ...props
}: Props) => {
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
      if (!dropdownItems) return <>DEBUG: No value provided for dropdown</>;
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
                  "justify-between w-full",
                  !field.value && "text-muted-foreground"
                )}>
                {inputLabel}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent align="start" side="top" className="w-full p-0">
            <div className="flex flex-col min-w-[150px]">
              {dropdownItems.map((item, key) => (
                <span
                  key={item.label}
                  className={` ${
                    selectedValue?.value == item.value &&
                    "bg-primary-foreground"
                  }`}>
                  <Button
                    type="button"
                    variant={"ghost"}
                    key={key}
                    className="text-center rounded-none w-full"
                    onClick={() => {
                      field.onChange(item.value);
                      setOpen(false);
                    }}>
                    {item.label}
                  </Button>
                  <Separator />
                </span>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    default:
      return (
        <Input
          placeholder={formField.placeholder}
          {...field}
          type={formField.type}
        />
      );
  }
};

export default CustomTypeFormItem;
