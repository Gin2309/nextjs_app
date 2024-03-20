import Image from "next/image";
import { logo } from "../../../public";
import Link from "next/link";

export default function Header() {
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
                <div>
                  <input
                    type="text"
                    placeholder="Nhập tên sản phẩm..."
                    className="pr-[80px] pl-[20px] h-[48px] rounded-[6px]"
                  />
                </div>
                <div>
                  <ul className="text-[#fff] flex">
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Hotline 1900 6750
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Đăng nhập Đăng ký
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Hệ thống cửa hàng
                    </li>
                    <li className="ml-[20px] hover:text-[#FFB416]">
                      Sản phẩm yêu thích
                    </li>
                  </ul>
                </div>
                <div>Giỏ hàng</div>
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
