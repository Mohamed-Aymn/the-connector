import { FieldMeta } from "@/components/shared/form/formAbstraction";
import { ACCEPTED_FILE_TYPES } from "@/lib/formUtils/fileUploadUtils";
import { zFileOrUrl } from "@/lib/formUtils/zFileOrUrl";
import z from "zod";

export interface Example {
  id?: string;
  title: string;
  titleAr: string;
  image: File | string;
}

export const ExampleModel = z.object({
  title: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .meta({
      type: "text",
      placeholder: "Enter title",
    } satisfies FieldMeta.Text),
  titleAr: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .meta({
      type: "text",
      placeholder: "Enter title",
      label: "Title - Arabic",
    } satisfies FieldMeta.Text),
  image: zFileOrUrl(ACCEPTED_FILE_TYPES, 3).meta({
    type: "file",
    label: "Image",
  } satisfies FieldMeta.File),
});
