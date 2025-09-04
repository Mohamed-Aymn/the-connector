"use client"

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pencil, Trash } from 'lucide-react';
import React from 'react'

interface CardEditDeleteButtonsProps {
  onDelete: () => void;
  onEdit: () => void;
}

function CardEditDeleteButtons({ onDelete, onEdit }: CardEditDeleteButtonsProps) {
  return (
    <div className="px-4 flex gap-3 justify-end">
      <Dialog>
        <form>
          <DialogTrigger asChild className="bg-red-500 hover:bg-red-600 rounded p-2 text-secondary cursor-pointer transition duration-300 w-full h-full">
            <Trash className="w-5 h-5" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you sure you want to delete?</DialogTitle>
              <DialogDescription>
                Click &quot;Delete&quot; to confirm.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" className="cursor-pointer">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant={"destructive"}
                  type="submit"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="cursor-pointer"
                >
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="bg-neutral-400 hover:bg-neutral-500 rounded p-2 text-secondary cursor-pointer transition duration-300"
      >
        <Pencil className="w-5 h-5" />
      </button>
    </div>
  )
}

export default CardEditDeleteButtons