"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ProductColumn, columns } from "./column"

export const ProductClient = ({ data }: { data: ProductColumn[] }) => {
    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title='Product' description={`Manage ${data.length} products of the store`} />
                <Button onClick={() => router.push(`/products/new`)}>
                    <Plus className="w-4 h-4" /> Add new
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    )
}
