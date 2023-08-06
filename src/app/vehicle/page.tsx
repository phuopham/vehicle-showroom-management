'use client'

import { ModelClient } from "./components/client"
import { VehicelVolumn } from "./components/column"
import { formatter } from "@/lib/utils"
import axios from "axios";
import React, { useState, useEffect } from "react";
const BrandPage = ({ params }: { params: { storeId: string } }) => {
  const [vehicle, SetVehicle] = useState([{
    vehicleId: "",
    vehicleIdentified: "",
    vehiclePrice: "",
    model: {
      modelId: "",
      modelName: "",
      modelAvatar: "",
      brand: {
        brandId: "",
        brandName: "",
        brandPhone: "",
        brandAddress: "",
        brandEmail: "",
        brandAvatar: "",
        brandCreatedAt: "",
        brandUpdatedAt: ""
      },
      modelCreatedAt: "",
      modelUpdatedAt: ""
    },
    color: {
      colorId: "63a4db54-7896-4672-b01b-9eca053d9c1b",
      colorName: "Red Mix",
      colorCode: "#123",
      colorIsDeleted: false,
      colorCreatedAt: "2023-07-01T00:00:00",
      colorUpdatedAt: null
    },
    showroom: {
      showroomId: "cd3f782a-9c7e-4c3d-ad67-b8def566cccb",
      showroomName: "duc beo",
      showroomPhone: "0912345678",
      showroomAddress: "La Thanh",
      showroomEmail: "ngtrongduc106@gmail.com",
      showroomIsDeleted: "",
      showroomCreatedAt: "2023-07-03T00:00:00",
      showroomUpdatedAt: "null"
    },
    image: [
      {
        imageId: "3",
        imageLink: "a",
        vehicleId: "",
        imageIsDeleted: "",
      },
    ],
    isNew: "",
    isDeleted: "",
    isSolid: "",
    vehicleCreatedAt: "",
    vehicleUpdatedAt: ""
  }]);
  useEffect(() => {
    fetchBrandData();
  }, []);
  const fetchBrandData = async () => {
    try {
      const response = await axios.get("http://localhost:5152/Vehicle");
      const data = response.data; // Dữ liệu trả về từ API
      console.log(data)
      SetVehicle(data);
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };
  const formattedModel: VehicelVolumn[] = vehicle.map((item) => (
    console.log(item, "item1=="),
    {
      vehicleId: item.vehicleId,
      vehicleIdentified: item.vehicleIdentified,
      vehiclePrice: item.vehiclePrice,
      modelName: item.model.modelName,
      brandName: item.model.brand.brandName,
      colorCode: item.color.colorCode,
      showroomName: item.showroom.showroomName,
      image: item.image[0]?.imageLink,
      isNew: item.isNew,
      isDeleted: item.isDeleted,
      isSolid: item.isSolid,
      vehicleCreatedAt: item.vehicleCreatedAt,
      vehicleUpdatedAt: item.vehicleUpdatedAt,
    }))

  return (
    <div className="flex-col space-y-4 p-8 pt-6">

      <ModelClient data={formattedModel} />
    </div>
  )
}

export default BrandPage
