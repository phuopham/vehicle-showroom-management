import { BrandForm, ProductFormProps } from "./components/brand-form"

const BrandPage = ({ params }: { params: { storeId: string, productId: string } }) => {

    const product = {
        id: '1',
        name: 'C300',
        images: [
            { id: '1', url: '' }
        ],
        price: '234652',
    }

    const categories = [
        {
            id: '5',
            name: 'SUV'
        },
        {
            id: '7',
            name: 'sedan'
        }
    ]

    const colors = [
        {
            id: '3',
            name: 'red'
        },
        {
            id: '5',
            name: 'blue'
        }

    ]

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BrandForm initialData={product} categories={categories} colors={colors} />
            </div>
        </div>
    )
}

export default BrandPage