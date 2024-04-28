'use client'
import React, { useState } from 'react'
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
// import axios from "axios";
// import { toast } from "sonner";
// import { apiClient } from "@/lib/callService";

const loginFormSchema = z.object({
    email: z.string().email('enter email'),
    currency: z.string().min(2).max(50),
    amount: z.string().min(2).max(50),
});


const data = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ];
  
  const columns = [
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
    
            const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            }).format(amount);
    
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
    
            const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            }).format(amount);
    
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
];
  

export default function Page() {

    const [active, setActive] = useState('transfer')
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
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return <section className='w-full h-full text-white rounded flex flex-col gap-0'>
        <div className='w-fit h-[45px] min-h-[45px] bg-[#1c1c1c] rounded-t flex flex-row overflow-hidden'>
            <div onClick={() => {setActive('transfer')}} className={`flex justify-center items-center px-5 py-1 ${active === 'transfer' && 'bg-[#3c3c3c]'} cursor-pointer hover:bg-[#202020] transition-all border-r border-r-[#414749]`}>
                Transfer
            </div>
            <div onClick={() => {setActive('history')}} className={`flex justify-center items-center px-5 py-1 ${active === 'history' && 'bg-[#3c3c3c]'} cursor-pointer hover:bg-[#202020] transition-all border-r border-r-[#414749]`}>
                Transfer history
            </div>
            <div onClick={() => {setActive('switch')}} className={`flex justify-center items-center px-5 py-1 ${active === 'switch' && 'bg-[#3c3c3c]'} cursor-pointer hover:bg-[#202020] transition-all`}>
                Switch $
            </div>
        </div>
        <div className='w-full h-full bg-[#1c1c1c] rounded-b rounded-tr p-10'>
            {
                active === 'transfer' && <div className='w-full h-full'>
                    <div>
                        You can transfer available funds from account to another
                        player’s account. Learn more about player to player transfers.
                    </div>
                    <div className="border-b my-5 border-b-[#313739]" />
                    <Form {...loginForm}>
                        <form
                            onSubmit={loginForm.handleSubmit(() => {console.log('qwertyu')})}
                            className="space-y-5 [&_button[role=combobox]]:!bg-transparent [&_button[role=combobox]]:!border-[#313739]"
                        >
                            <FormField
                            control={loginForm.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                <FormLabel>Transfer to :</FormLabel>
                                <FormControl>
                                    <Input id="email" placeholder="E-mail" {...field} className={'bg-transparent border-[#313739]'}/>
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
                                                <SelectValue placeholder="Select currency"/>
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
                                    <Input id="amount" placeholder="" {...other} 
                                        onChange={(e) => {
                                            console.log('val ===>', e.target.value)
                                            if(e.target.value.match(/^[0-9]*$/g) || e.target.value === '') {
                                                onChange(e.target.value)
                                            }
                                        }} 
                                        className={'bg-transparent border-[#313739]'}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <div className='flex flex-col gap-3'>
                                <div className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    Your Balance:
                                </div>
                                <div className='flex flex-row flex-wrap gap-2'>
                                    <Input readOnly placeholder='placeholder' className={'max-w-[300px] bg-transparent border-[#313739]'}/>
                                    <Input readOnly placeholder='placeholder' className={'max-w-[300px] bg-transparent border-[#313739]'}/>
                                    <Input readOnly placeholder='placeholder' className={'max-w-[300px] bg-transparent border-[#313739]'}/>
                                </div>
                            </div>
                            <Button type="submit" className="w-full">
                            Transfer
                            </Button>
                        </form>
                    </Form>
                </div>
            }
            {
                active === 'history' && <div className='flex flex-col gap-5'>
                    <div className="w-full flex justify-end">
                        <RangeDatePicker date={date} setDate={setDate} />
                    </div>
                    <div className="rounded-md border">
                        <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                );
                                })}
                            </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                    </TableCell>
                                ))}
                                </TableRow>
                            ))
                            ) : (
                            <TableRow>
                                <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                                >
                                No results.
                                </TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                        </Table>
                    </div>
                </div>
            }
            {
                active === 'switch' && <div>switch</div>
            }
        </div>
    </section>
}
