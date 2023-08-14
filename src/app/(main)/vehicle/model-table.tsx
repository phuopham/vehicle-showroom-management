"use client"

import { useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CellAction } from "./components/cell-action"
import { VehicelVolumn } from "./components/column"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    searchKey: string;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    searchKey,
}: DataTableProps<TData, TValue>) {
    console.log(data, "data table==")

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        }
    })
    const vehicles: VehicelVolumn[] = data.map((item) =>
    (
        console.log(item,"item2"),
        {
            vehicleId: item.vehicleId,
            vehicleIdentified: item.vehicleIdentified,
            vehiclePrice: item.vehiclePrice,
            modelName: item.modelName,
            brandName: item.brandName,
            colorCode: item.colorCode,
            showroomName: item.showroomName,
            image: item.image,
            isNew: item.isNew,
            isDeleted: item.isDeleted,
            isSolid: item.isSolid,
            vehicleCreatedAt: item.vehicleCreatedAt,
            vehicleUpdatedAt: item.vehicleUpdatedAt,
        }));

    return (
        <div>
            <div className="flex items-center py-4">
                <Input
                    placeholder="Search"
                    value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn(searchKey)?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
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
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {vehicles.map((row) => (
                            <TableRow key={row.vehicleId}>
                                <TableCell>{row.vehicleIdentified}</TableCell>
                                <TableCell>{row.vehiclePrice}</TableCell>
                                <TableCell>{row.brandName}</TableCell>
                                <TableCell>{row.colorCode}</TableCell>
                                <TableCell>{row.showroomName}</TableCell>
                                <TableCell>{row.isSolid ? "Avalible" : "solid"}</TableCell>
                                <TableCell>{row.vehicleCreatedAt}</TableCell>
                                <TableCell>{row.upda}</TableCell>
                                <TableCell>
                                    <CellAction data={row} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>


                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}