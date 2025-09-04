"use client"

import { Example } from '@/models/example'
import React from 'react'
import Image from 'next/image'
import CardEditDeleteButtons from '../cardEditDeleteButtons'
import { useRouter } from '@/i18n/navigation'
import { toast } from 'sonner'
import { deleteAdminDbItem } from '@/services/firebaseAdminServices/dbAdminService'

interface ExampleItemCardProps {
  item: Example
}

function ExampleItemCard({ item }: ExampleItemCardProps) {
  const router = useRouter()

  const deleteHandler = async () => {
    const id = toast.loading("Deleting...");
    const { error } = await deleteAdminDbItem<Example>("example", item.id as string, ["/admin/example-item"]);
    toast.dismiss(id);
    if (error) {
      console.error(error)
      toast.error("Item not deleted");
      return;
    }
    toast.success("Item deleted successfully");
    router.replace("/admin/example-item")
  }

  const editHandler = () => {
    router.push(`/admin/example-item/${item.id}`)
  }

  return (
    <div
      key={item.id}
      className='flex w-full justify-between items-center gap-2 border-2 rounded-2xl h-22'
    >
      <div className='flex gap-2 justify-center items-center'>
        <div className="relative h-22 w-22">
          <Image
            src={item.image as string}
            alt={item.title}
            fill
            className="object-cover rounded-l-2xl"
          />
        </div>
        <div>{item.title}</div>
      </div>
      <CardEditDeleteButtons
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  )
}

export default ExampleItemCard
