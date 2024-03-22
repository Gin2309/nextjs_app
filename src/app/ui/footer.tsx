import React from "react";
import {
  logo,
  laz,
  yt,
  gg,
  sendo,
  tiki,
  shopee,
  fb,
  zl,
} from "../../../public";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer-image flex">
        <div className="px-[15px] w-[60%] pl-[60px]">
          <div className="px-[20px] py-[50px] text-[#fff] bg-[#B51B29]">
            <div>
              <Image src={logo} alt="logo" className="h-[70px]" />
            </div>
            <p className="my-[20px]">
              Dola Cook là một cửa hàng chuyên cung cấp vật dụng nhà bếp chất
              lượng cao và đa dạng. Chúng tôi tự hào là địa chỉ đáng tin cậy cho
              khách hàng có nhu cầu mua sắm các sản phẩm từ các thương hiệu nổi
              tiếng và uy tín trên thị trường.
            </p>
            <ul>
              <li>
                <span className="text-[#ffb406] font-semibold">Địa chỉ: </span>{" "}
                70 Lữ Gia, Phường 15, Quận 11, TP.HCM
              </li>
              <li>
                <span className="text-[#ffb406] font-semibold">
                  Điện thoại:{" "}
                </span>
                1900 6750
              </li>
              <li>
                <span className="text-[#ffb406] font-semibold">Email: </span>
                support@sapo.vn
              </li>
            </ul>
            <div>
              <h3 className="text-[#ffb406] text-[18px] font-semibold my-[10px]">
                Liên kết sàn
              </h3>
              <div className=" flex">
                <Image
                  src={tiki}
                  alt="mxh"
                  className="h-[32px] w-[32px] mx-[5px]"
                />
                <Image
                  src={shopee}
                  alt="mxh"
                  className="h-[32px] w-[32px] mx-[5px]"
                />
                <Image
                  src={sendo}
                  alt="mxh"
                  className="h-[32px] w-[32px] mx-[5px]"
                />
                <Image
                  src={laz}
                  alt="mxh"
                  className="h-[32px] w-[32px] mx-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="py-[50px] px-[15px]">
            <ul className="text-[#fff]">
              <h3 className="text-[20px] font-semibold text-[#ffb406] mb-[20px]">
                Chính sách
              </h3>
              <li className="hover:text-[#ffb406]">Chính sách thành viên</li>
              <li className="hover:text-[#ffb406]">Chính sách thanh toán</li>
              <li className="hover:text-[#ffb406]">
                Chính sách bảo hành và bảo trì
              </li>
              <li className="hover:text-[#ffb406]">
                Chính sách vận chuyển vào giao nhận
              </li>
              <li className="hover:text-[#ffb406]">
                Bảo mật thông tin cá nhân
              </li>
            </ul>
          </div>
          <div className="py-[50px] px-[15px]">
            <ul className="text-[#fff]">
              <h3 className="text-[20px] font-semibold text-[#ffb406] mb-[20px]">
                Hướng dẫn
              </h3>
              <li className="hover:text-[#ffb406]">Chính sách thành viên</li>
              <li className="hover:text-[#ffb406]">Chính sách thanh toán</li>
              <li className="hover:text-[#ffb406]">
                Chính sách bảo hành và bảo trì
              </li>
              <li className="hover:text-[#ffb406]">
                Chính sách vận chuyển vào giao nhận
              </li>
              <li className="hover:text-[#ffb406]">
                Bảo mật thông tin cá nhân
              </li>
            </ul>
          </div>
          <div className="py-[50px] px-[15px]">
            <ul className="text-[#fff] text-[14px]">
              <h3 className="text-[20px] font-semibold text-[#ffb406] mb-[20px]">
                Hỗ trợ
              </h3>
              <li className="font-semibold">
                MUA ONLINE (08:00 - 21:00 mỗi ngày){" "}
                <span className="text-[#ffb406] text-[16px] hover:text-[#dd0115]">
                  19006750
                </span>
              </li>
              <li className="italic text-[14px]">
                Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
              </li>
              <li className="font-semibold">
                GÓP Ý & KHIẾU NẠI (08:30 - 20:30){" "}
                <span className="text-[#ffb406] text-[16px] hover:text-[#dd0115]">
                  19006750
                </span>
              </li>
              <li className="italic text-[14px]">
                Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
              </li>
              <li>
                <h3 className="text-[#ffb406] font-semibold my-[10px] text-[18px]">
                  Mạng xã hội
                </h3>
                <div className=" flex">
                  <Image
                    src={zl}
                    alt="mxh"
                    className="h-[32px] w-[32px] mx-[5px]"
                  />
                  <Image
                    src={gg}
                    alt="mxh"
                    className="h-[32px] w-[32px] mx-[5px]"
                  />
                  <Image
                    src={fb}
                    alt="mxh"
                    className="h-[32px] w-[32px] mx-[5px]"
                  />
                  <Image
                    src={yt}
                    alt="mxh"
                    className="h-[32px] w-[32px] mx-[5px]"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
