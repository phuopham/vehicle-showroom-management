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
import { CellAction  } from "../model/components/cell-action"
import { VehicleColumn  } from "./components/column"

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
    const modelColumns: ModelColumn[] = data.map((item) => ({
        modelId: item.modelId,
        modelName: item.modelName,
        modelAvatar: item.modelAvatar,
        brandAvatar: item.brandAvatar,
        modelCreatedAt: item.modelCreatedAt,
        modelUpdatedAt: item.modelUpdatedAt,
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
                        {modelColumns.map((row) => (
                            <TableRow key={row.modelId}>
                                <TableCell>{row.modelName}</TableCell>
                                <TableCell>
                                    <img
                                        src={row.modelAvatar}
                                        alt={`Model Avatar for ${row.modelName}`}
                                        width={50} // Điều chỉnh chiều rộng của hình ảnh
                                        height={50} // Điều chỉnh chiều cao của hình ảnh
                                    />
                                </TableCell>
                                <TableCell>
                                    <img
                                        src={row.brandAvatar}
                                        alt={`Brand Avatar for ${row.modelName}`}
                                        width={50} // Điều chỉnh chiều rộng của hình ảnh
                                        height={50} // Điều chỉnh chiều cao của hình ảnh
                                    />
                                </TableCell>
                                <TableCell>{row.modelCreatedAt}</TableCell>
                                <TableCell>{row.modelUpdatedAt}</TableCell>
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