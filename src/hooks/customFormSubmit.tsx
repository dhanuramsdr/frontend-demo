// ============ hooks/customFormSubmit.ts ============
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { ZodSchema } from "zod";

interface UseFormSubmitProps<T> {
  schema: ZodSchema<T>;
  defaultValues: T;
  mutationFn: (data: T) => Promise<any>;
  onSuccess?: (data: any) => void;
}

export function useFormSubmit<T extends Record<string, any>>({
  schema,
  defaultValues,
  mutationFn,
  onSuccess,
}: UseFormSubmitProps<T>) {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues as any,
  });

  const mutation = useMutation({
    mutationFn,
    onSuccess: (data) => {
      reset();
      onSuccess?.(data);
    },
  });

  return {
    register,
    setValue,
    control,
    handleSubmit: handleSubmit((data: T) => mutation.mutate(data)),
    errors,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset,
  };
}
