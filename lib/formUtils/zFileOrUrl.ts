import z from "zod";
import { fromMegaToBits } from "@/lib/formUtils/fileUploadUtils";

// A helper function to create the file + string union schema
export function zFileOrUrl(
  acceptedFileTypes: string[],
  maxSizeInMB: number
) {
  const MAX_UPLOAD_SIZE = fromMegaToBits(maxSizeInMB);

  const fileSchema = z
    .any()
    .refine(
      (files) => {
        if (!files || files.length === 0) return false;
        return files.length === 1;
      },
      { message: "File is required." }
    )
    .refine(
      (files) =>
        files && files.length === 1
          ? acceptedFileTypes.includes(files[0].type)
          : true,
      { message: `Invalid file. Allowed types: ${acceptedFileTypes.join(", ")}` }
    )
    .refine(
      (files) =>
        files && files.length === 1 ? files[0].size <= MAX_UPLOAD_SIZE : true,
      { message: `Max file size allowed is ${maxSizeInMB} MB.` }
    )
    .transform((files) => (files && files.length === 1 ? files[0] : null));

  return z.union([
    z.string().url().min(1, "Image URL is required"),
    fileSchema,
  ]);
}
