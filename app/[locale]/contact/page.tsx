"use client"

import FormAbstraction, { FieldMeta } from '@/components/shared/form/formAbstraction'
import { Card, CardContent } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function Page() {
  const schema = z.object({
    service: z
      .string()
      .min(2)
      .e164()
      .meta({
        type: "select",
        placeholder: "service",
        options: [
          {
            label: "Building Brands",
            value: "1"
          },
          {
            label: "Software Engineering",
            value: "2"
          },
          {
            label: "Staff Augmentation",
            value: "3"
          },
          {
            label: "Soft Landing",
            value: "4"
          },
          {
            label: "More Than One",
            value: "5"
          },
        ]
      } satisfies FieldMeta.Select),
    firstName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .meta({
        type: "text",
        placeholder: "First Name",
      } satisfies FieldMeta.Text),
    lastName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .meta({
        type: "text",
        placeholder: "Last Name",
      } satisfies FieldMeta.Text),
    email: z
      .string()
      .min(2)
      .meta({
        type: "email",
        placeholder: "Email",
      } satisfies FieldMeta.Text),
    phoneNumber: z
      .string()
      .min(2)
      .e164()
      .optional()
      .meta({
        type: "text",
        placeholder: "Phone Number",
      } satisfies FieldMeta.Text),
    message: z
      .string()
      .min(2)
      .e164()
      .optional()
      .meta({
        type: "textarea",
        placeholder: "Phone Number",
      } satisfies FieldMeta.TextArea),
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
    <div className='flex justify-center items-center min-h-screen bg-primary'>
      <Card className='min-w-xl'>
        <CardContent>
          <FormAbstraction
            zodSchema={schema}
            reactHookForm={form}
            onSubmit={onSubmit}
            submitBtnSide='center'
            isShowLabel={false}
            inputFieldsStyles="border-1 border-ring rounded"
            layout={[1, 2, 1]}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default Page