import { ProductClient } from "./components/client"
import { ProductColumn } from "./components/column"
import { formatter } from "@/lib/utils"

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {

    const products = [
        {
            id: "1", name: "BMW X10",
            isFeatured: true,
            isArchived: false,
            price: 24235,
            category: { name: "class C" },
            color: { value: "red" },
            createdAt: "2023-04-04"
        }
    ]

    const formattedProducts: ProductColumn[] = products.map((item) => ({
        id: item.id,
        name: item.name,
        isFeatured: item.isFeatured,
        isArchived: item.isArchived,
        price: formatter.format(item.price),
        category: item.category.name,
        color: item.color.value,
        createdAt: item.createdAt
    }))

    return (
        <div className="flex-col space-y-4 p-8 pt-6">
            <ProductClient data={formattedProducts} />
        </div>
    )
}

export default ProductsPage