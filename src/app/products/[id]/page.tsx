"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "../../../../contants";
import Link from "next/link";
import { formatCurrency } from "@/app/components/helper";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  const { img, title, price, type, status, brand, saleprice } = product;

  return (
    <>
      <div className="breadcrumb-image mt-[-20px] text-center h-[290px] mb-[40px] ">
        <div className="mx-[40px] px-[15px] h-[290px] py-[7%]">
          <h1 className="text-[#fff] text-[50px] font-semibold">{title}</h1>
          <ul className="text-[14px] flex p-[10px] justify-center">
            <Link href={"/"} className="text-[#fff] hover:text-[#ffd406] ">
              Home {">"}
            </Link>
            <li className="text-[#ffd406]"> {title}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto mb-[50px]">
        <div className="flex ">
          <div className="px-[15px] mb-[15px]">
            <Image
              src={img}
              alt="mm"
              className="h-[400px] w-[400px] shadow-md"
            />
          </div>
          <div>
            <div className="font-semibold">
              <h3 className="text-[24px] font-bold mb-[15px] ">{title}</h3>
              <h4>
                Loại:
                <span className="text-[#dd0115]"> {type}</span>
              </h4>
              <h4>
                Tình trạng:
                <span className="text-[#dd0115]"> {status}</span>
              </h4>
              <div className="p-[10px] rounded-[5px] bg-[#FBEFF0] my-[20px]">
                <h4>
                  Thương hiệu: <span className="text-[#dd0115]">{brand}</span>
                </h4>
              </div>
            </div>
            <div>
              <div className="flex p-[10px] rounded-[5px] bg-[#FBEFF0]">
                <span className="text-[#dd0115] text-[30px] ">
                  {formatCurrency(price)}
                </span>
                <span className="line-through text-[#666] ml-[10px] items-center flex">
                  {formatCurrency(saleprice)}
                </span>
              </div>
              <div>
                <div className="flex my-[20px]">
                  <div className="px-[5px] w-[40%]">
                    <div className="flex border-[1px] border-solid border-[#dd0115] rounded-[5px] p-[2px] ">
                      <button className="bg-[#dd0115] rounded-[5px] text-[#fff] h-[35px] w-[35px]">
                        -
                      </button>
                      <input
                        type="number"
                        defaultValue={1}
                        className="text-center w-[60%]"
                      />
                      <button className="bg-[#dd0115] rounded-[5px] text-[#fff] h-[35px] w-[35px]">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="px-[5px]">
                    <div>
                      <button className="bg-[#dd0115] hover:bg-[#ffb416] text-[#fff] rounded-[5px] text-[14px] font-semibold h-[40px] w-[155%]">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-[5px] py-[10px] bg-[#dd0115] hover:bg-[#ffb416] text-[#fff] rounded-[5px] text-center">
                    <h4>
                      Liên hệ{" "}
                      <span className="hover:text-[#dd0115] text-[#ffb416] font-semibold">
                        1900 6750
                      </span>
                    </h4>
                    <h5 className="text-[14px]">
                      Để được tư vấn và hỗ trợ ngay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="px-[15px]">
              <div className=" border-solid border-[#dd0115] border-[1px] rounded-[5px] mb-[20px]">
                <h3 className="font-semibold text-[#fff] bg-[#dd0115] px-[15px] py-[5px]">
                  Cam kết bán hàng
                </h3>
                <ul className="p-[15px] list-disc pl-[25px]">
                  <li>Hàng chính hãng. Nguồn gốc rõ ràng</li>
                  <li>Tặng máy nếu phát hiện máy sửa chữa</li>
                  <li>Giao hàng ngay (nội thành TPHCM)</li>
                  <li>Dùng thử 7 ngày miễn phí</li>
                </ul>
              </div>
            </div>
            <div className="px-[15px] ">
              <div className=" border-solid border-[#dd0115] border-[1px] rounded-[5px] mb-[20px]">
                <h3 className="font-semibold text-[#fff] bg-[#dd0115] px-[15px] py-[5px]">
                  Danh sách khuyến mãi
                </h3>
                <ul className="p-[15px] list-disc pl-[25px]">
                  <li>Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành hàng.</li>
                  <li>Giảm giá 10% khi mua từ 5 sản phẩm trở lên.</li>
                  <li>
                    Tặng 100.000₫ mua hàng tại website thành viên Dola Fashion
                    Accessories, áp dụng khi mua Online tại Hồ Chí Minh và 1 số
                    khu vực khác.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
