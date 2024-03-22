import { StaticImageData } from "next/image";
import {
  acs1,
  acs2,
  acs3,
  acs4,
  cup1,
  cup2,
  cup3,
  cup4,
  knife1,
  knife2,
  knife3,
  knife4,
  pan1,
  pan2,
  pan3,
  pan4,
} from "../public";

export interface Product {
  id: number;
  title: string;
  img: StaticImageData;
  status: string;
  price: number;
  saleprice: number | null;
  type: string;
  brand: string;
  categories: string;
  tag: string | null;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Nồi Áp Suất AMT",
    img: pan4,
    status: "Còn hàng",
    price: 6300000,
    type: "Nồi",
    brand: "Amt",
    categories: "pans",
    tag: "sale",
    saleprice: 650000,
  },
  {
    id: 2,
    title: "Khay Oval STAUB Màu Đen",
    img: pan2,
    status: "Còn hàng",
    price: 3190000,
    type: "Khay",
    brand: "Staub",
    categories: "pans",
    saleprice: null,
    tag: null,
  },
  {
    id: 3,
    title: "Lodge - Khay Gang Nướng Đa Năng - 42.55x24.13cm",
    img: pan3,
    status: "Còn hàng",
    price: 2690000,
    type: "Khay",
    brand: "Lodge",
    categories: "pans",
    saleprice: null,
    tag: null,
  },
  {
    id: 4,
    title: "Lodge - Chảo Gang Heat-Treated",
    img: pan1,
    status: "Còn hàng",
    price: 913000,
    brand: "Lodge",
    type: "Chảo",
    categories: "pans",
    saleprice: null,
    tag: null,
  },
  {
    id: 5,
    title: "Dao Nakiri FIN 2 ZWILLING - 17cm",
    img: knife1,
    status: "Còn hàng",
    price: 2390000,
    type: "Dao",
    brand: "ZWILLING",
    categories: "knifies",
    saleprice: null,
    tag: null,
  },
  {
    id: 6,
    title: "Miyabi - Dao Rocking Santoku 5000MCD 67 - 18cm",
    img: knife2,
    status: "Còn hàng",
    price: 10900000,
    type: "Dao",
    brand: "Miyabi",
    categories: "knifies",
    tag: "sale",
    saleprice: 11200000,
  },
  {
    id: 7,
    title: "Dao Thái Thịt Twin Master ZWILLING Màu Xanh - 18cm",
    img: knife3,
    status: "Còn hàng",
    price: 1199000,
    type: "Dao",
    brand: "ZWILLING",
    categories: "knifies",
    saleprice: null,
    tag: null,
  },
  {
    id: 8,
    title: "Dao Nakiri FIN 2 ZWILLING - 17cm",
    img: knife4,
    status: "Còn hàng",
    price: 2390000,
    type: "Dao",
    brand: "ZWILLING",
    categories: "knifies",
    saleprice: null,
    tag: null,
  },
  {
    id: 9,
    title: "Aderia - Arabesque - Bộ Ly Rượu Old Fashioned G&S - 0.3L - 2 Cái",
    img: cup1,
    status: "Còn hàng",
    price: 2600000,
    type: "Ly",
    brand: "Aderia",
    categories: "cups",
    saleprice: null,
    tag: null,
  },
  {
    id: 10,
    title: "Vista Alegre - Bộ Ly Uống Coffee Gold Exotic - 2 Món",
    img: cup2,
    status: "Còn hàng",
    price: 1750000,
    type: "Ly",
    brand: "Vista Alegre",
    categories: "cups",
    saleprice: null,
    tag: null,
  },
  {
    id: 11,
    title: "Vista Alegre - Bộ Ly Uống Coffee Caillouté - 2 Món",
    img: cup3,
    status: "Còn hàng",
    price: 3330000,
    type: "Ly",
    brand: "Vista Alegre",
    categories: "cups",
    saleprice: null,
    tag: null,
  },
  {
    id: 12,
    title: "Vista Alegre - Bộ 2 Ly Uống Coffee Petites Histoires - 4 Món",
    img: cup4,
    status: "Còn hàng",
    price: 5076000,
    type: "Ly",
    brand: "Vista Alegre",
    categories: "cups",
    tag: "sale",
    saleprice: 5200000,
  },
  {
    id: 13,
    title: "Zoku - Bộ Dụng Cụ Làm Kem - 8 Món",
    img: acs1,
    status: "Còn hàng",
    price: 690000,
    type: "Phụ kiện",
    brand: "Zoku",
    categories: "accessory",
    tag: "sale",
    saleprice: 750000,
  },
  {
    id: 14,
    title: "Fresh Choice - Dụng Cụ Khui Hộp Versatile",
    img: acs2,
    status: "Còn hàng",
    price: 330000,
    type: "Phụ kiện",
    brand: "Fresh Choice",
    categories: "accessory",
    saleprice: null,
    tag: null,
  },
  {
    id: 15,
    title: "Bộ Thau Và Rổ Nhựa Fresh Choice",
    img: acs3,
    status: "Còn hàng",
    price: 620000,
    type: "Phụ kiện",
    brand: "Fresh Choice",
    categories: "accessory",
    saleprice: null,
    tag: null,
  },
  {
    id: 16,
    title: "Lodge - Tay Cầm Chống Nóng Citrus",
    img: acs4,
    status: "Còn hàng",
    price: 285000,
    type: "Phụ kiện",
    brand: "Lodge",
    categories: "accessory",
    saleprice: null,
    tag: null,
  },
];

const pansSection = products.filter(
  (products) => products.categories === "pans"
);
const knifiesSection = products.filter(
  (products) => products.categories === "kinfies"
);
const cupsSection = products.filter(
  (products) => products.categories === "cups"
);
const accessorySection = products.filter(
  (products) => products.categories === "accessory"
);

export default {
  pansSection,
  knifiesSection,
  cupsSection,
  accessorySection,
};
