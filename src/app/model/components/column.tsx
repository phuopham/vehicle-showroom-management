"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ModelColumn = {
    modelId: string
    modelName: string
    modelAvatar: string
    brandAvatar: string
    modelCreatedAt: string
    modelUpdatedAt: string

}

export const columns: ColumnDef<ModelColumn>[] = [
    {
        accessorKey: "modelName",
        header: "Brand Name",
    },
    {
        accessorKey: "modelAvatar",
        header: "Model name",
    },
    {
        accessorKey: "brandAvatar",
        header: "Brand Avatar",
    },
    {
        accessorKey: "modelCreatedAt",
        header: "Create At",
    },
    {
        accessorKey: "modelUpdatedAt",
        header: "Update At",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
]