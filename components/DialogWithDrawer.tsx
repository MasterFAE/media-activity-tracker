"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import useDeviceWidth from "@/hooks/use-device-width";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  trigger: React.ReactNode;
  close?: React.ReactNode;
  onClose?: () => void;
};

const DialogWithDrawer = (props: Props) => {
  const { title, description, children, footer, trigger, close, onClose } =
    props;
  const [isOpen, setIsOpen] = React.useState(false);
  const deviceType = useDeviceWidth();

  const handleChange = (status: boolean) => {
    setIsOpen(status);
    if (!status && onClose) onClose();
  };

  if (deviceType === "phone" || deviceType === "tablet") {
    return (
      <Drawer open={isOpen} onOpenChange={handleChange}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent onOpenAutoFocus={(e) => e.preventDefault()}>
          <DrawerHeader className="text-left">
            <DrawerTitle>{title}</DrawerTitle>
            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
          <div className="p-4">{children}</div>
          <DrawerFooter>
            {footer}
            <DrawerClose asChild>
              {close ? close : <Button variant="outline">Cancel</Button>}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={isOpen} onOpenChange={handleChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent onChange={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWithDrawer;
