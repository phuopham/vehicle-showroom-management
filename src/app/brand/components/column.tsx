"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type BrandColumn = {
    id: string,
    name: string,
    avatar: string,
    brandAvatar:string,
    brandCreatedAt: string,
    brandUpdatedAt:string
}

export const columns: ColumnDef<BrandColumn>[] = [
    {
        accessorKey: "name",
        header: "Brand Name",
    },
    {
        accessorKey: "phone",
        header: "Brand Phone",
    },
    {
        accessorKey: "address",
        header: "Brand Address",
    },
    {
        accessorKey: "email",
        header: "Brand Email",
    },
    
    {
        accessorKey: "createdAt",
        header: "Create At",
    },
    {
        accessorKey: "updateAt",
        header: "Update At",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
]