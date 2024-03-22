"use client";

import Image from "next/image";
import { logo } from "../../../public";
import Link from "next/link";
import { products, Product } from "../../../contants";
import { useState, ChangeEvent } from "react";
import { formatCurrency } from "../components/helper";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value.trim() === "") {
      setSearchResults([]);
    }
  };

  let count = searchResults.length;

  return (
    <>
      <div className="h-[117px] mb-5 bg-[#dd0115] flex justify-center">
        <div className="max-w-[1300px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] m-[auto]">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="px-[15px]" />
            </Link>
            <div className="px-[15px]">
              <div className="flex">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nhập tên sản phẩm..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="pr-[80px] pl-[20px] h-[48px] rounded-[6px]"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute inset-y-0 right-0 h-[48px] rounded-[5px] px-4 bg-[#ffb416] border-[2px] border-solid border-[#ffb416] text-[#dd0115] hover:bg-[#dd0115] hover:text-[#fff] font-semibold focus:outline-none"
                  >
                    Tìm kiếm
                  </button>
                  <div className="absolute shadow-md w-full max-w-md">
                    {searchResults.length > 0 && (
                      <ul className="bg-[#fff] border rounded-lg shadow-md">
                        <h4 className="font-semibold text-[#dd0115] ml-2 mt-3">
                          Có {count} sản phẩm
                        </h4>
                        {searchResults.slice(0, 4).map((product) => (
                          <li key={product.id} className=" py-3 border-b flex">
                            <Image
                              src={product.img}
                              alt={product.title}
                              className="h-[70px] w-[70px] mx-2"
                            />
                            <div className="justify-center flex flex-col">
                              <div className="truncate text-[14px] w-[220px]">
                                {product.title}
                              </div>
                              <div className="flex text-[14px]">
                                <h5 className="text-[#dd0115] font-bold">
                                  {formatCurrency(product.price)}
                                </h5>
                                <h5 className="line-through text-[#666] ml-[10px]">
                                  {formatCurrency(product.saleprice)}
                                </h5>
                              </div>
                            </div>
                          </li>
                        ))}
                        <button className="border-[2px] hover:bg-[#dd0115] hover:text-[#fff] font-semibold border-solid border-[#dd0115] text-[#dd0115] rounded-[5px] px-[20px] py-2 w-full">
                          Xem tất cả
                        </button>
                      </ul>
                    )}
                  </div>
                </div>
                <div>
                  <ul className="text-[#fff] flex">
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Hotline <br /> 1900 6750
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Đăng nhập <br /> Đăng ký
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Hệ thống <br /> cửa hàng
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Sản phẩm <br /> yêu thích
                    </li>
                    <li className="border-[2px] ml-[15px] border-solid border-[#ffb416] rounded-[5px] text-center w-[15%]">
                      <h3>Giỏ hàng</h3>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-[18px]">
                <ul className="text-[#fff] text-[18px] flex ">
                  <Link href={"/"} className="pr-[10px] hover:text-[#FFB416]">
                    Trang chủ
                  </Link>
                  <li className="px-[10px] hover:text-[#FFB416]">Giới thiệu</li>
                  <li className="px-[10px] hover:text-[#FFB416]">Sản phẩm</li>
                  <li className="px-[10px] hover:text-[#FFB416]">Khuyến mãi</li>
                  <li className="px-[10px] hover:text-[#FFB416]">Tin tức</li>
                  <li className="px-[10px] hover:text-[#FFB416]">Liên hệ</li>
                  <li className="px-[10px] hover:text-[#FFB416]">
                    Hệ thống cửa hàng
                  </li>
                  <li className="px-[10px] hover:text-[#FFB416]">Q&A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
