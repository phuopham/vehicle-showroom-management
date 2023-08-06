'use client'

import {  ModelClient } from "./components/client"
import { ModelColumn } from "./components/column"
import { formatter } from "@/lib/utils"
import axios from "axios";
import React, { useState, useEffect } from "react";
const BrandPage = ({ params }: { params: { storeId: string } }) => {
  const [model, SetModel] = useState([{
    modelId: "",
    modelName: "",
    modelAvatar: "",
    brand:
    {
      brandId: "",
      brandName: "",
      brandPhone: "",
      brandAddress: "",
      brandEmail: "",
      brandAvatar: "",
      brandCreatedAt: "",
      brandUpdatedAt: ""
    }
    ,
    modelCreatedAt: "",
    modelUpdatedAt: ""
  }]);
  useEffect(() => {
    fetchBrandData();
  }, []);
  const fetchBrandData = async () => {
    try {
      const response = await axios.get("http://localhost:5152/Model");
      const data = response.data; // Dữ liệu trả về từ API
      console.log(data)
      SetModel(data);
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };
  const formattedModel: ModelColumn[] = model.map((item) => (
    console.log(item),
    {
      modelId: item.modelId,
      modelName: item.modelName,
      modelAvatar: item.modelAvatar,
      brandAvatar: item.brand.brandAvatar,
      modelCreatedAt: item.modelCreatedAt,
      modelUpdatedAt: item.modelUpdatedAt
    }))

  return (
    <div className="flex-col space-y-4 p-8 pt-6">

      <ModelClient data={formattedModel} />
    </div>
  )
}

export default BrandPage
