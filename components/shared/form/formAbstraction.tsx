/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { z } from "zod";
import { Path, UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import StyledTextarea from "./styledTextArea";
import StyledInput from "./styledInput";
import StyledInputFile from "./styledInputFile";
import StyledSelect from "./styledSelect";
import StyledDatePicker from "./styledDatePicker";
import { useState } from "react";


interface BaseMeta {
  label?: string;
  placeholder?: string;
  ariaLabel?: string;
}

// Specific field metas
interface TextMeta extends BaseMeta {
  type: "text" | "number" | "email" | "password" | "textarea";
}

interface TextAreaMeta extends BaseMeta {
  type: "textarea";
}

interface FileMeta extends BaseMeta {
  type: "file";
  multipleFiles?: boolean;
  imageToView?: string;
}

interface SelectMeta extends BaseMeta {
  type: "select";
  options: { label: string; value: string | number }[];
}

interface DateMeta extends BaseMeta {
  type: "date";
}

// Discriminated union
export type FieldMeta = TextMeta | FileMeta | SelectMeta | DateMeta;

// Namespaced grouping for convenience
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FieldMeta {
  export type Text = TextMeta;
  export type TextArea = TextAreaMeta;
  export type File = FileMeta;
  export type Select = SelectMeta;
  export type Date = DateMeta;
}

interface FormAbstractionProps<T extends z.ZodObject<any>> {
  zodSchema: T;
  reactHookForm: UseFormReturn<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => Promise<void> | void;
  labelsClassName?: string;
  errorsClassName?: string;
  submitBtnClassName?: string;
  submitBtnSide?: "right" | "left" | "center";
  layout?: number[];
  isShowLabel?: boolean;
  inputFieldsStyles?: string;
}

function FormAbstraction<T extends z.ZodObject<any>>({
  zodSchema,
  reactHookForm,
  onSubmit,
  labelsClassName,
  errorsClassName,
  submitBtnClassName,
  submitBtnSide = "right",
  layout = [], // default empty -> fallback to one per row
  isShowLabel = true,
  inputFieldsStyles
}: FormAbstractionProps<T>) {
  const [isDisabledSubmit, setIsDisabledSubmit] = useState(false);
  const shape = zodSchema.shape;
  const fields = Object.keys(shape);

  async function handleFormSubmit(values: z.infer<typeof zodSchema>) {
    try {
      setIsDisabledSubmit(true);
      await onSubmit(values);
    } finally {
      setIsDisabledSubmit(false);
    }
  }

  // Utility: group fields according to layout
  function groupFields(fields: string[], layout: number[]) {
    const groups: string[][] = [];
    let i = 0;

    for (const count of layout) {
      groups.push(fields.slice(i, i + count));
      i += count;
    }

    // if there are leftover fields, put them each in their own row
    if (i < fields.length) {
      while (i < fields.length) {
        groups.push([fields[i]]);
        i++;
      }
    }

    return groups;
  }

  const groupedFields = groupFields(fields, layout);

  return (
    <Form {...reactHookForm}>
      <form
        onSubmit={reactHookForm.handleSubmit(handleFormSubmit)}
        className="space-y-6"
      >
        {groupedFields.map((group, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-6`}
            style={{
              gridTemplateColumns: `repeat(${group.length}, minmax(0, 1fr))`,
            }}
          >
            {group.map((field) => {
              const fieldName = field as Path<z.infer<T>>;
              const error = reactHookForm.formState.errors[fieldName];

              // const meta = shape[field as keyof typeof shape]?.meta?.() || {};
              const meta = (shape[field as keyof typeof shape]?.meta?.() ||
                {}) as FieldMeta;
              const inputType = meta.type;

              return (
                <div key={field} className="flex flex-col">
                  {
                    isShowLabel && (
                      <label
                        className={`block mb-1 text-sm font-medium capitalize ${labelsClassName ?? ""
                          }`}
                      >
                        {meta.label || field}
                      </label>
                    )
                  }

                  {inputType === "textarea" ? (
                    <StyledTextarea
                      name={fieldName}
                      register={reactHookForm.register}
                      placeholder={meta.placeholder || ""}
                      ariaLabel={meta.ariaLabel || field}
                      className={inputFieldsStyles}
                    />
                  ) : inputType === "date" ? (
                    <StyledDatePicker
                      name={fieldName}
                      register={reactHookForm.register}
                      placeholder={meta.placeholder || ""}
                      ariaLabel={meta.ariaLabel || field}
                      className={inputFieldsStyles}
                    />
                  ) : inputType === "file" ? (
                    <StyledInputFile
                      name={fieldName}
                      register={reactHookForm.register}
                      ariaLabel={meta.ariaLabel || field}
                      // accept={meta.accept || "*/*"}
                      initialImage={reactHookForm.getValues(fieldName) as string | undefined}
                      className={inputFieldsStyles}
                    />
                  ) : inputType === "select" ? (
                    <StyledSelect
                      name={fieldName}
                      register={reactHookForm.register}
                      options={meta.options || []}
                      ariaLabel={meta.ariaLabel || field}
                      placeholder={meta.placeholder || ""}
                      className={inputFieldsStyles}
                    />
                  ) : (
                    <StyledInput
                      name={fieldName}
                      register={reactHookForm.register}
                      type={inputType}
                      placeholder={meta.placeholder || ""}
                      ariaLabel={meta.ariaLabel || field}
                      className={inputFieldsStyles}
                    />
                  )}

                  {error && (
                    <p
                      className={`text-red-500 mt-2 text-sm ${errorsClassName ?? ""
                        }`}
                    >
                      {error.message?.toString()}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        <div
          className={`w-full flex ${submitBtnSide === "right"
            ? "justify-end"
            : submitBtnSide === "left"
              ? "justify-start"
              : "justify-center"
            }`}
        >
          <Button
            className={`${submitBtnClassName ?? ""} ${submitBtnSide === "center" ? "w-full" : ""}`}
            type="submit"
            disabled={isDisabledSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormAbstraction;
