import { z } from "zod";
export const productSchema = z.object({
  name: z.string().min(1, "name is required"),
  quantity: z.number().gt(1, "quantity greater then 1"),
  categorey: z.string().min(1, "categorey is required"),
  sellerid: z.string().min(1, "sellerid is required"),
  images: z.array(z.instanceof(File)).min(1, "at least one image is required"),
});
