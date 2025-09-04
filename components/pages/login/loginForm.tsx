"use client"

import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import FormAbstraction from '@/components/shared/form/formAbstraction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { signInWithEmail } from '@/services/firebaseSdkServices/authSdkService';

function LoginForm() {
  const router = useRouter();
  const baseSchema = z.object({
    email: z
      .string()
      .email()
      .meta({ type: "email", placeholder: "Enter email address" }),
    password: z
      .string()
      .min(1, "Password is required")
      .meta({ type: "password", placeholder: "********" }),
  });

  const form = useForm<z.infer<typeof baseSchema>>({
    resolver: zodResolver(baseSchema),
  });

  async function onSubmit(values: z.infer<typeof baseSchema>) {
    const { error } = await signInWithEmail(
      values.email,
      values.password
    );
    if (error) {
      toast.error(error as string);
      form.setValue("password", "");
      return;
    }
    toast.success("Login successful");
    router.replace("/admin");
  }


  return (
    <FormAbstraction
      zodSchema={baseSchema}
      reactHookForm={form}
      onSubmit={(values) => onSubmit(values)}
      submitBtnClassName="rounded-none !cursor-pointer"
    />

  )
}

export default LoginForm