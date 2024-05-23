"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RangeDatePicker from "@/components/RangeDatePicker";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { toast } from "sonner";
import { apiClient } from "@/lib/callService";

const loginFormSchema = z.object({
  email: z.string().email('enter email'),
  currency: z.string().min(2).max(50),
  amount: z.string().min(2).max(50),
});

export default function WalletModal({ open, close }) {
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      currency: "",
      amount: "",
    },
  });

  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//   });

  async function sendTransfer(data) {
    // loginForm.reset({});
    // try {
    //   const result = await apiClient
    //     .post("/api", data, { params: { name: "/cashier/transfer" } })
    //     .then((res) => res.data);
    //   if (result.status === 200) {
    //     toast.success(result.message);
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
    console.log(data, "data");
  }



    return (
        <Dialog open={open} onOpenChange={close}>
            <DialogContent
                className="sm:max-w-[60rem]"
                onEscapeKeyDown={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle>CASHIER</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="transfer">
                <TabsList className="grid w-fit grid-cols-3">
                    <TabsTrigger value="transfer">Transfer</TabsTrigger>
                </TabsList>
                    <TabsContent value="transfer">
                        <Card className="py-10 px-4">
                        <div>
                            You can transfer available funds from account to another
                            player’s account. Learn more about player to player transfers.
                        </div>
                        <div className="border-b my-5" />
                        <Form {...loginForm}>
                            <form
                            onSubmit={loginForm.handleSubmit(sendTransfer)}
                            className="space-y-5"
                            >
                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Transfer to :</FormLabel>
                                    <FormControl>
                                    <Input id="email" placeholder="E-mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={loginForm.control}
                                name="currency"
                                render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Currency :</FormLabel>
                                    <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        <SelectItem value="MNT">MNT</SelectItem>
                                        <SelectItem value="USD">USD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={loginForm.control}
                                name="amount"
                                render={({ field : {onChange, ...other} }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>Transfer amount :</FormLabel>
                                    <FormControl>
                                    <Input id="amount" placeholder="" {...other} onChange={(e) => {
                                        console.log('val ===>', e.target.value)
                                        if(e.target.value.match(/^[0-9]*$/g) || e.target.value === '') {
                                        onChange(e.target.value)
                                        }
                                    }} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Transfer
                            </Button>
                            </form>
                        </Form>
                        </Card>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}

// const data = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
// ];

// const columns = [
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));

//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);

//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));

//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);

//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
// ];
