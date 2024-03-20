import Image from "next/image";
import {
  banner1,
  banner2,
  banner3,
  danhmuc1,
  danhmuc2,
  danhmuc3,
  danhmuc4,
  icon1,
  icon2,
  icon3,
  icon4,
  khung,
  sale1,
  sale2,
} from "../../public";
import Deal from "./ui/deal";
import Section5 from "./ui/section5";

export default function Page() {
  return (
    <>
      <div className="max-w-[1300px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] m-[auto]">
        <div className="flex m-auto pb-[50px]">
          <div className=" border-[2px] border-solid border-[#dd0115] rounded-[5px] mx-[10px]">
            <h3 className="text-[16px] px-[10px] bg-[#dd0115] leading-[45px] text-[#fff]">
              Danh mục sản phẩm
            </h3>
            <ul>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] hover:text-[#FFF]">
                Nồi Chảo
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] hover:text-[#FFF]">
                Dao, Kéo
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] hover:text-[#FFF]">
                Trang Trí Bàn Ăn
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] hover:text-[#FFF]">
                Phụ Kiện Bếp
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] hover:text-[#FFF]">
                Dụng Cụ Làm Bánh
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] ">
                Ly, Tách, Decanter
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] ">
                Bình, Ly Giữ Nhiệt
              </li>
              <li className="py-[10px] pr-[35px] pl-[40px] hover:bg-[#FFB416] ">
                Hộp Đựng Cơm
              </li>
            </ul>
          </div>
          <div className="px-[10px]">
            <Image
              src={banner1}
              alt="Banner 1"
              className="w-[625px] aspect-[625/405] rounded-[5px]"
            />
          </div>
          <div className="px-[10px]">
            <Image
              src={banner2}
              alt="banner 2"
              className="w-[316px] aspect-[500/319] pb-5 rounded-[5px]"
            />
            <Image
              src={banner3}
              alt="banner 3"
              className="w-[316px] aspect-[500/319] rounded-[5px]"
            />
          </div>
        </div>

        {/* section 1 */}
        <div className="flex mb-[50px]">
          <div className="flex border-[2px] border-solid border-[#dd0115] rounded-[5px] max-w-[100%/4] p-[10px] mx-[10px]">
            <div className="w-[60px] h-[60px] bg-[#dd0115] rounded-full items-center flex">
              <Image src={icon1} alt="Icon" className="w-[40px] m-auto" />
            </div>
            <div className="pl-[10px] w-[80%]">
              <h3 className="font-bold">Miễn phí vận chuyển</h3>
              <p className="text-[14px]">
                Áp dụng freeship cho tất cả đơn hàng từ 300 nghìn
              </p>
            </div>
          </div>
          <div className="flex border-[2px] border-solid border-[#dd0115] rounded-[5px] max-w-[100%/4] p-[10px] mx-[10px]">
            <div className="w-[60px] h-[60px] bg-[#dd0115] rounded-full items-center flex">
              <Image src={icon2} alt="Icon" className="w-[40px] m-auto" />
            </div>
            <div className="pl-[10px] w-[80%]">
              <h3 className="font-bold">Đổi trả dễ dàng</h3>
              <p className="text-[14px]">
                Đổi ngay trong ngày nếu như bánh không đúng yêu cầu
              </p>
            </div>
          </div>
          <div className="flex border-[2px] border-solid border-[#dd0115] rounded-[5px] max-w-[100%/4] p-[10px] mx-[10px]">
            <div className="w-[60px] h-[60px] bg-[#dd0115] rounded-full items-center flex">
              <Image src={icon3} alt="Icon" className="w-[40px] m-auto" />
            </div>
            <div className="pl-[10px] w-[80%]">
              <h3 className="font-bold">Hỗ trợ nhanh chóng</h3>
              <p className="text-[14px]">
                Gọi Hotline: 19006750 để được hỗ trợ ngay
              </p>
            </div>
          </div>
          <div className="flex border-[2px] border-solid border-[#dd0115] rounded-[5px] max-w-[100%/4] p-[10px] mx-[10px]">
            <div className="w-[60px] h-[60px] bg-[#dd0115] rounded-full items-center flex">
              <Image src={icon4} alt="Icon" className="w-[40px] m-auto" />
            </div>
            <div className="pl-[10px] w-[80%]">
              <h3 className="font-bold">Thanh toán đa dạng</h3>
              <p className="text-[14px]">
                Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex mb-[50px]">
          <div className="px-[10px] w-[50%]">
            <div className="p-[10px] bg-[#dd0115] rounded-[5px] ">
              <h1 className="font-bold text-[#fff] text-[30px] mb-[15px]">
                Tìm theo nhu cầu
              </h1>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm..."
                className="px-[10px] py-[5px] border-[1px] border-solid border-[#ffb416] rounded-[5px] w-full mb-[10px]"
              />
              <div className="flex mb-[10px]">
                <div className="w-[33%] pr-[5px]">
                  <select
                    name="brand"
                    className="border-[1px] border-solid border-[#ffb416] rounded-[5px] h-[40px] w-full"
                    defaultValue="defaultValue"
                  >
                    <option>Tất cả thương hiệu</option>
                  </select>
                </div>
                <div className="w-[33%] px-[5px]">
                  <select
                    name="type"
                    className="border-[1px] border-solid border-[#ffb416] rounded-[5px]  h-[40px] w-full"
                    defaultValue="defaultValue"
                  >
                    <option>Tất cả loại</option>
                  </select>
                </div>
                <div className="w-[34%] pl-[5px]">
                  <select
                    name="price"
                    className="border-[1px] border-solid border-[#ffb416] rounded-[5px] h-[40px] w-full"
                    defaultValue="defaultValue"
                  >
                    <option>Tất cả giá</option>
                  </select>
                </div>
              </div>
              <button className="bg-[#ffb416] rounded-[5px] mb-[10px] w-full text-[#fff] h-[40px] text-[18px] font-semibold">
                Tìm ngay
              </button>
            </div>
          </div>
          <div className="px-[10px] w-[50%]">
            <div className="p-[10px] bg-[#dd0115] rounded-[5px] ">
              <h1 className="font-bold text-[#fff] text-[30px] mb-[15px]">
                Từ khóa tìm nhiều
              </h1>
              <div>
                <ul className="flex flex-wrap">
                  <li className="px-[10px] py-[3px] mr-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Nồi chảo
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Dao
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Kéo
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Phụ kiện
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Trang trí bàn ăn
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Phụ kiện bếp
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Dụng cụ làm bánh
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Mỳ Ý
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Ly
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Tách
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Decanter
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Bình
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Ly giữ nhiệt
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Hộp đựng cơm
                  </li>
                  <li className="px-[10px] py-[3px] mx-[2px] mb-[6px] text-[16px] text-[#231F30] bg-[#fff] rounded-[5px] font-semibold">
                    Dụng cụ vệ sinh nhà cửa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* section3  */}
        <div className="flex mb-[50px]">
          <div className="px-[15px]">
            <div className="relative">
              <Image src={danhmuc1} alt="danh muc" className="rounded-[5px] " />
              <div className="absolute p-[10px]  top-[52%] bg-[#21988a] w-full rounded-[5px] text-[#fff] opacity-80 z-[0]">
                <h1 className="text-[16px] font-semibold pb-[5px]">Nồi chảo</h1>
                <ul>
                  <li className="pb-[2px]">Nồi</li>
                  <li className="pb-[2px]">Chảo</li>
                  <li className="pb-[2px]">Nồi áp suất</li>
                  <li className="pb-[2px]">Wok, Xửng hấp</li>
                </ul>
              </div>
            </div>
            <button className="p-[10px] font-semibold mt-[10px] text-[16px] text-[#fff] bg-[#21988a] w-full rounded-[5px] hover:bg-[#ffb416] hover:text-[#000]">
              Xem tất cả
            </button>
          </div>
          <div className="px-[15px]">
            <div className="relative">
              <Image src={danhmuc2} alt="danh muc" className="rounded-[5px] " />
              <div className="absolute p-[10px]  top-[52%] bg-[#5e516c] w-full rounded-[5px] text-[#fff] opacity-80 z-[0]">
                <h1 className="text-[16px] font-semibold pb-[5px]">Dao, kéo</h1>
                <ul>
                  <li className="pb-[2px]">Dao</li>
                  <li className="pb-[2px]">Dao Đức</li>
                  <li className="pb-[2px]">Dao Nhật</li>
                  <li className="pb-[2px]">Kéo</li>
                </ul>
              </div>
            </div>
            <button className="p-[10px] font-semibold mt-[10px] text-[16px] text-[#fff] bg-[#5e516c] w-full rounded-[5px] hover:bg-[#ffb416] hover:text-[#000]">
              Xem tất cả
            </button>
          </div>
          <div className="px-[15px]">
            <div className="relative">
              <Image src={danhmuc3} alt="danh muc" className="rounded-[5px] " />
              <div className="absolute p-[10px]  top-[52%] bg-[#f26a0f] w-full rounded-[5px] text-[#fff] opacity-80 z-[0]">
                <h1 className="text-[16px] font-semibold pb-[5px]">
                  Phụ kiện & trang trí bàn ăn
                </h1>
                <ul>
                  <li className="pb-[2px]">Tô, Chén, Dĩa</li>
                  <li className="pb-[2px]">Dao, Muỗng, Nĩa</li>
                  <li className="pb-[2px]">Bình Nước</li>
                  <li className="pb-[2px]">Trang Trí Bàn Ăn</li>
                </ul>
              </div>
            </div>
            <button className="p-[10px] font-semibold mt-[10px] text-[16px] text-[#fff] bg-[#f26a0f] w-full rounded-[5px] hover:bg-[#ffb416] hover:text-[#000]">
              Xem tất cả
            </button>
          </div>
          <div className="px-[15px]">
            <div className="relative">
              <Image src={danhmuc4} alt="danh muc" className="rounded-[5px] " />
              <div className="absolute p-[10px]  top-[52%] bg-[#de2432] w-full rounded-[5px] text-[#fff] opacity-80 z-[0]">
                <h1 className="text-[16px] font-semibold pb-[5px]">
                  Phụ kiện bếp
                </h1>
                <ul>
                  <li className="pb-[2px]">Dụng Cụ Nhà Bếp</li>
                  <li className="pb-[2px]">Phụ Kiện Dao</li>
                  <li className="pb-[2px]">Hũ Đựng Thực Phẩm</li>
                  <li className="pb-[2px]">Lót Nồi & Tay Cầm</li>
                </ul>
              </div>
            </div>
            <button className="p-[10px] mt-[10px] text-[16px] text-[#fff] bg-[#de2432] w-full rounded-[5px] hover:bg-[#ffb416] hover:text-[#000]">
              Xem tất cả
            </button>
          </div>
        </div>

        {/* section 4 */}
        <Deal />

        {/* section 5 */}

        <Section5 />
        {/* sec tion 6 */}
        <div className="flex">
          <Image src={sale1} alt="Sale" className="px-[15px] w-[50%]" />
          <Image src={sale2} alt="Sale" className="px-[15px] w-[50%]" />
        </div>
      </div>
    </>
  );
}
