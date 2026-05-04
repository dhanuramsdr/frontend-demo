// ============ pages/FormInput.tsx ============
import { Controller } from "react-hook-form";

interface FormInputProps {
  name: string;
  register: any;
  setValue?: any;
  control?: any; // Add control prop
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiple?: boolean;
  accept?: string;
}

export function FormInput({
  name,
  register,
  setValue,
  control, // Add control
  label,
  type = "text",
  placeholder,
  required,
  multiple = false,
  accept,
}: FormInputProps) {
  // Handle file input separately
  if (type === "file") {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <input
              {...field}
              type="file"
              multiple={multiple}
              accept={accept}
              onChange={(e) => {
                const files = e.target.files;
                if (multiple) {
                  onChange(files ? Array.from(files) : []);
                } else {
                  onChange(files ? files[0] : null);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
      </div>
    );
  }

  // Handle number inputs with valueAsNumber
  if (type === "number") {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          {...register(name, { valueAsNumber: true })}
          type="number"
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }

  // Regular input fields (text, email, etc.)
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
