'use client'
 
import { BrandClient } from "./components/client"
import { BrandColumn } from "./components/column"
import { formatter } from "@/lib/utils"
import axios from "axios";
import React, { useState, useEffect } from "react";
const BrandPage =  ({ params }: { params: { storeId: string } }) => {
    const [brand, setBrand] = useState([{
        brandId: "", 
        brandName: "",
        brandPhone:"",
        brandAddress: "",
        brandEmail: "",
        brandCreatedAt: "",
        brandUpdatedAt:""
    }]);
    useEffect(() => {
        fetchBrandData();
      }, []);
      const fetchBrandData = async () => {
        try {
          const response = await axios.get("http://localhost:5152/Brand");
          const brandData = response.data; // Dữ liệu trả về từ API

          setBrand(brandData);
        } catch (error) {
          console.error("Error fetching brand data:", error);
        }
      };
    const formattedBrand: BrandColumn[] = brand.map((item) => (
        {
        id: item.brandId,
        name: item.brandName,
        phone: item.brandPhone,
        address:item.brandAddress,
        email:item.brandCreatedAt,
        createdAt: item.brandCreatedAt,
        updateAt:item.brandUpdatedAt
    }))

    return (
        <div className="flex-col space-y-4 p-8 pt-6">
            
            <BrandClient data={formattedBrand} />
        </div>
    )
}

export default BrandPage
