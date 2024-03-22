import { products } from "../../../contants";
import Image from "next/image";
import { khung, coupon1, coupon2, coupon3, coupon4 } from "../../../public";
import Link from "next/link";
import { formatCurrency } from "../components/helper";

export default function Deal() {
  const saleProducst = products.filter((products) => products.tag === "sale");

  return (
    <>
      <div className=" px-[10px] mb-[50px]">
        <div className="bg-gradient-to-br from-[#dd0115] to-[#ffb416] rounded-[5px] px-[10px] py-5">
          <h1 className="text-[#fff] text-[30px] font-bold">Deal nổi bật</h1>
          <div className="flex">
            <div className="mx-[10px]">
              <div className="flex">
                {saleProducst.map((item) => {
                  return (
                    <Link
                      href={`/products/${item.id}`}
                      key={item.id}
                      className="bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#ddd] mr-[10px] w-[222px]"
                    >
                      <div className="relative">
                        <Image
                          src={item.img}
                          alt={item.title}
                          className="w-[222px]"
                        />
                        <Image
                          src={khung}
                          alt="khung anh"
                          className="absolute top-0 rounded-[5px]"
                        />
                      </div>
                      <div className="p-[10px]">
                        <h3 className="text-[#231f20] font-bold line-clamp-2 hover:text-[#ffb416]">
                          {item.title}
                        </h3>
                        <div className="flex">
                          <span className="text-[#dd0115] font-bold">
                            {formatCurrency(item.price)}
                          </span>
                          <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                            {formatCurrency(item.saleprice)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div>
                <button className="ml-[43%] bg-[#fff] mt-[15px] rounded-[5px] hover:bg-[#dd0115] hover:text-[#fff] text-[#dd0115] border-[1px] border-solid border-[#ffb416] font-bold px-5 py-[7px]">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>
              <div className="border-[2px] border-solid border-[#dd0115] flex bg-[#fff] rounded-[5px] mb-[10px]">
                <Image
                  src={coupon1}
                  alt="coupon"
                  className="w-[50px] p-[8px] border-solid border-[#dd0115] border-r-[1px]"
                />
                <div className="text-[12px] p-[5px]">
                  <h3>DOLA10</h3>
                  <h4>Giảm: 10.000đ</h4>
                  <button className="bg-[#dd0115] hover:bg-[#ffb416] px-[10px] py-[5px] text-[#fff] rounded-[5px] mt-[5px]">
                    Sao chép
                  </button>
                </div>
              </div>
              <div className="border-[2px] border-solid border-[#dd0115] flex bg-[#fff] rounded-[5px] mb-[10px]">
                <Image
                  src={coupon2}
                  alt="coupon"
                  className="w-[50px] p-[8px] border-solid border-[#dd0115] h border-r-[1px]"
                />
                <div className="text-[12px] p-[5px]">
                  <h3>FREESHIP</h3>
                  <h4>Miễn ship</h4>
                  <button className="bg-[#dd0115] hover:bg-[#ffb416] px-[10px] py-[5px] text-[#fff] rounded-[5px] mt-[5px]">
                    Sao chép
                  </button>
                </div>
              </div>
              <div className="border-[2px] border-solid border-[#dd0115] flex bg-[#fff] rounded-[5px] mb-[10px]">
                <Image
                  src={coupon3}
                  alt="coupon"
                  className="w-[50px] p-[8px] border-solid border-[#dd0115] h border-r-[1px]"
                />
                <div className="text-[12px] p-[5px]">
                  <h3>DOLA20</h3>
                  <h4>Giảm: 20.000đ</h4>
                  <button className="bg-[#dd0115] hover:bg-[#ffb416] px-[10px] py-[5px] text-[#fff] rounded-[5px] mt-[5px]">
                    Sao chép
                  </button>
                </div>
              </div>
              <div className="border-[2px] border-solid border-[#dd0115] flex bg-[#fff] rounded-[5px]">
                <Image
                  src={coupon4}
                  alt="coupon"
                  className="w-[50px] p-[8px] border-solid border-[#dd0115] h border-r-[1px]"
                />
                <div className="text-[12px] p-[5px]">
                  <h3>DOLA50</h3>
                  <h4>Giảm: 50.000đ</h4>
                  <button className="bg-[#dd0115] hover:bg-[#ffb416] px-[10px] py-[5px] text-[#fff] rounded-[5px] mt-[5px]">
                    Sao chép
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
