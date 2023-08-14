"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type VehicelVolumn = {
    vehicleId: string
    vehicleIdentified: string
    vehiclePrice: string
    modelName: string
    brandName: string
    colorCode: string
    showroomName: string
    image: string
    isNew: string
    isDeleted: string
    isSolid: string
    vehicleCreatedAt: string
    vehicleUpdatedAt: string

}

export const columns: ColumnDef<VehicelVolumn>[] = [
    {
        accessorKey: "vehicleIdentified",
        header: "Vehicle Indentified",
    },
    {
        accessorKey: "vehiclePrice",
        header: "Price",
    },
    {
        accessorKey: "brandName",
        header: "Brand name",
    },
    {
        accessorKey: "colorCode",
        header: "Color code",
    },
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "isSolid",
        header: "Solid",
    },
    {
        accessorKey: "vehicleCreatedAt",
        header: "Update At",
    },
    {
        accessorKey: "vehicleUpdatedAt",
        header: "Update At",
    },
    
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
]