import { CategoryTypes } from "@/types/mock";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormField as FormFieldType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateMediaFormFields<T>(value: string): FormFieldType<T>[] {
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
