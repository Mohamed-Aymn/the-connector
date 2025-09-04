"use client"

import React from 'react'
import FormAbstraction from '@/components/shared/form/formAbstraction'
import { zodResolver } from "@hookform/resolvers/zod";
import { Example, ExampleModel } from '@/models/example';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { toast } from 'sonner';
import { updateAdminDbItem } from '@/services/firebaseAdminServices/dbAdminService';
import { useRouter } from '@/i18n/navigation';

interface EditExampleItemFormProps {
  initialData: Example
}

function EditExampleItemForm({ initialData }: EditExampleItemFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof ExampleModel>>({
    resolver: zodResolver(ExampleModel),
    defaultValues: {
      image: initialData?.image || undefined,
      title: initialData?.title || "",
      titleAr: initialData?.titleAr || "",
    }
  })

  const onSubmit = async (values: z.infer<typeof ExampleModel>) => {
    const id = toast.loading("Creating...");
    const { error } = await updateAdminDbItem<Example>("example", initialData?.id as string, values, ["/admin/example-item"]);
    toast.dismiss(id);
    if (error) {
      console.error(error)
      return;
    }
    toast.success("Item updated successfully");
    router.replace("/admin/example-item")
  }


  return (
    <FormAbstraction
      zodSchema={ExampleModel}
      reactHookForm={form}
      onSubmit={onSubmit}
    />
  )
}

export default EditExampleItemForm