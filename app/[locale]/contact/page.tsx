"use client"

import FormAbstraction, { FieldMeta } from '@/components/shared/form/formAbstraction'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function Page() {
  const schema = z.object({
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
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
    }
  })

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const id = toast.loading("Creating...");
    console.log(values)
    setTimeout(() => {
      console.log("sent")
    }, 3000);
    toast.dismiss(id);
    toast.success("Item created successfully");
    form.reset()
  }
  return (
    <FormAbstraction
      zodSchema={schema}
      reactHookForm={form}
      onSubmit={onSubmit}
    />
  )
}

export default Page