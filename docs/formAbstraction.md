# Form Abstraction Component

## What is form abstraction component

It is a component that atutomaitclly generates html for form input fields, validation errors, and input labels given it's schema.

## Why is it created

To reduce the redundant Form's HTML code that may makes the component 100+ lines of dummy repetitive html.

## How to use it

Required Inputs:

1. Zod's schema
2. Reach hook form object to handle validaiton
3. on submit function

Notes:

- In zod's schema of each input item, `.meta()` tag should be added with the type of each input field as described.
- To change the styles of input fields you are free to update styled input fields components that live in `components/shared/form`, for example feel to update these files: `styledInput.tsx`, `styledInputFile.tsx`, `styledSelect.tsx`, and `styledTextArea.tsx`.
- if you want to make an image optional or not, don't use zod's `optional()` function, but add the provided function or remove it
  ```js
  .refine(
    (files) => {
      if (!files || files.length === 0) return false; // require one file
      return files.length === 1;
    },
    { message: "Poster image is required." }
  )
  ```
- To apply render custom label to a specific input field just add it in the `meta()` function as displayed in this example
  ```ts
  .meta({
    type: "textarea",
    placeholder: "Description must not exceed 200 characters",
    label: "custom Label",
  }),
  ```
- If you want to preview an image that comes from database use that line of code
  ```ts
  .meta({ type: "file", imageToView: "<image-url>" }),
  // .meta({ type: "file" })
  ```

Here usage example:

```ts
"use client";

import FormAbstraction from "@/components/shared/form/formAbstraction";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ACCEPTED_FILE_TYPES, fromMegaToBits } from "@/lib/fileUpload";
import { createItemAction } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Page() {
  const MAX_UPLOAD_SIZE = fromMegaToBits(3);
  const router = useRouter();

  const baseSchema = z.object({
    title: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .meta({ type: "text", placeholder: "Enter title" }),
    description: z
      .string()
      .min(2, "Description must be at least 2 characters")
      .max(200, "Description must be at most 200 characters")
      .meta({
        type: "textarea",
        placeholder: "Description must not exceed 200 characters",
        label: "custom Label",
      }),
    image: z
      .any()
      .refine(
        (files) => {
          if (!files || files.length === 0) return false; // require one file
          return files.length === 1;
        },
        { message: "Poster image is required." }
      )
      .refine(
        (files) =>
          files && files.length === 1
            ? ACCEPTED_FILE_TYPES.includes(files[0].type)
            : true,
        { message: "Invalid file. Choose either JPEG or PNG image." }
      )
      .refine(
        (files) =>
          files && files.length === 1 ? files[0].size <= MAX_UPLOAD_SIZE : true,
        { message: "Max file size allowed is 8 MB." }
      )
      .meta({ type: "file", imageToView: initialData.image }),
  });

  const form = useForm<z.infer<typeof baseSchema>>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof baseSchema>) {
    const data = await createAdminDbItem<OnSetWithOnetake>(
      "on-set-with-one-take",
      values
    );
  }

  return (
    <FormAbstraction
      zodSchema={baseSchema}
      reactHookForm={form}
      onSubmit={(values) => onSubmit(values)}
      submitBtnClassName="bg-white text-black rounded-none hover:bg-white/90"
    />
  );
}

export default Page;
```
