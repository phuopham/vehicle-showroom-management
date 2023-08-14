"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BrandColumn, columns } from "./column"

export const BrandClient = ({ data }: { data: BrandColumn[] }) => {
    const router = useRouter()
    const params = useParams()
    console.log("data2",data)
    
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title='Product' description={`Manage ${data.length} brand of the store`} />
                <Button onClick={() => router.push(`/brand/brandId`)}>
                    <Plus className="w-4 h-4" /> Add new
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    )
}
