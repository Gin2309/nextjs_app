import Link from "next/link";
import { products } from "../../../contants";
import Image from "next/image";
import { khung } from "../../../public";
import { formatCurrency } from "../components/helper";

const Section5 = () => {
  const pansSection = products.filter(
    (products) => products.categories === "pans"
  );
  const knifiesSection = products.filter(
    (products) => products.categories === "knifies"
  );
  const cupsSection = products.filter(
    (products) => products.categories === "cups"
  );
  const accessorySection = products.filter(
    (products) => products.categories === "accessory"
  );
  return (
    <>
      <div className="mb-[50px]">
        <div className="flex">
          {/* 1 */}
          <div className="px-[10px]">
            <div className=" p-[10px] border-[1px] border-solid border-[#21988a] rounded-[5px] border-t-[5px]">
              <div className="flex mb-[20px]">
                <h1 className="text-[#231f20] text-[30px] font-bold ml-[10px]">
                  Nồi chảo
                </h1>
                <div className="ml-[48%]">
                  <button className=" bg-[#fff] rounded-[5px] hover:bg-[#21988a] hover:text-[#fff] text-[#21988a] border-[1px] border-solid border-[#21988a] font-bold px-5 py-[7px]">
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex">
                <Link
                  href={`/products/${pansSection[0].id}`}
                  className=" mb-[20px] border-[1px] border-solid border-[#ccc] mx-[10px] rounded-[5px]"
                >
                  <div className="relative">
                    <Image
                      src={pansSection[0].img}
                      alt={pansSection[0].title}
                      className="w-[188px]"
                    />
                    <Image
                      src={khung}
                      alt="khung anh"
                      className="absolute top-0 rounded-[5px]"
                    />
                  </div>
                  <div className="p-[10px]">
                    <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416] my-[20px]">
                      {pansSection[0].title}
                    </h3>
                    <div className="flex">
                      <span className="text-[#dd0115] font-bold">
                        {formatCurrency(pansSection[0].price)}
                      </span>
                      <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                        {formatCurrency(pansSection[0].saleprice)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-[10px] mb-[20px]">
                  {pansSection.slice(1, 5).map((item) => {
                    return (
                      <Link
                        href={`/products/${item.id}`}
                        key={item.id}
                        className="border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] last:mb-0 mb-[16px] flex"
                      >
                        <div>
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-[93px]"
                          />
                        </div>
                        <div className="pl-[20px]">
                          <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416]">
                            {item.title}
                          </h3>
                          <span className="text-[#dd0115] font-bold">
                            {formatCurrency(item.price)}
                          </span>
                          <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                            {formatCurrency(item.saleprice)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="px-[10px] max-w-[50%]">
            <div className=" p-[10px] border-[1px] border-solid border-[#dd0115] rounded-[5px] border-t-[5px]">
              <div className="flex mb-[20px]">
                <h1 className="text-[#231f20] text-[30px] font-bold ml-[10px]">
                  Dao, kéo
                </h1>
                <div className="ml-[48%]">
                  <button className=" bg-[#fff] rounded-[5px] hover:bg-[#dd0115] hover:text-[#fff] text-[#dd0115] border-[1px] border-solid border-[#dd0115] font-bold px-5 py-[7px]">
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex">
                <Link
                  href={`/products/${knifiesSection[0].id}`}
                  className=" mb-[20px] border-[1px] border-solid border-[#ccc] mx-[10px] rounded-[5px]"
                >
                  <div className="relative">
                    <Image
                      src={knifiesSection[0].img}
                      alt={knifiesSection[0].title}
                      className="w-[188px]"
                    />
                    <Image
                      src={khung}
                      alt="khung anh"
                      className="absolute top-0 rounded-[5px]"
                    />
                  </div>
                  <div className="p-[10px]">
                    <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416] my-[20px]">
                      {knifiesSection[0].title}
                    </h3>
                    <div className="flex">
                      <span className="text-[#dd0115] font-bold">
                        {formatCurrency(knifiesSection[0].price)}
                      </span>
                      <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                        {formatCurrency(knifiesSection[0].saleprice)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-[10px] mb-[20px]">
                  {knifiesSection.slice(1, 5).map((item) => {
                    return (
                      <Link
                        href={`/products/${item.id}`}
                        key={item.id}
                        className="border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] last:mb-0 mb-[16px] flex"
                      >
                        <div>
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-[93px]"
                          />
                        </div>
                        <div className="pl-[20px]">
                          <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416]">
                            {item.title}
                          </h3>
                          <span className="text-[#dd0115] font-bold">
                            {formatCurrency(item.price)}
                          </span>
                          <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                            {formatCurrency(item.saleprice)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[15px]">
          {/* 3 */}
          <div className="px-[10px] max-w-[50%]">
            <div className=" p-[10px] border-[1px] border-solid border-[#21988a] rounded-[5px] border-t-[5px]">
              <div className="flex mb-[20px]">
                <h1 className="text-[#231f20] text-[30px] font-bold ml-[10px]">
                  Nồi chảo
                </h1>
                <div className="ml-[48%]">
                  <button className=" bg-[#fff] rounded-[5px] hover:bg-[#21988a] hover:text-[#fff] text-[#21988a] border-[1px] border-solid border-[#21988a] font-bold px-5 py-[7px]">
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex">
                <Link
                  href={`/products/${cupsSection[0].id}`}
                  className="w-[379px] mb-[20px] border-[1px] border-solid border-[#ccc] mx-[10px] rounded-[5px]"
                >
                  <div className="relative">
                    <Image
                      src={cupsSection[0].img}
                      alt={cupsSection[0].title}
                      className="w-[188px]"
                    />
                    <Image
                      src={khung}
                      alt="khung anh"
                      className="absolute top-0 rounded-[5px]"
                    />
                  </div>
                  <div className="p-[10px]">
                    <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416] my-[20px]">
                      {cupsSection[0].title}
                    </h3>
                    <div className="flex">
                      <span className="text-[#dd0115] font-bold">
                        {formatCurrency(cupsSection[0].price)}
                      </span>
                      <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                        {formatCurrency(cupsSection[0].saleprice)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-[10px] mb-[20px]">
                  {cupsSection.slice(1, 5).map((item) => {
                    return (
                      <Link
                        href={`/products/${item.id}`}
                        key={item.id}
                        className="border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] last:mb-0 mb-[16px] flex"
                      >
                        <div>
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-[93px]"
                          />
                        </div>
                        <div className="pl-[20px]">
                          <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416]">
                            {item.title}
                          </h3>
                          <span className="text-[#dd0115] font-bold">
                            {formatCurrency(item.price)}
                          </span>
                          <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                            {formatCurrency(item.saleprice)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="px-[10px]">
            <div className=" p-[10px] border-[1px] border-solid border-[#dd0115] rounded-[5px] border-t-[5px]">
              <div className="flex mb-[20px]">
                <h1 className="text-[#231f20] text-[30px] font-bold ml-[10px]">
                  Phụ kiện bếp
                </h1>
                <div className="ml-[37%]">
                  <button className=" bg-[#fff] rounded-[5px] hover:bg-[#dd0115] hover:text-[#fff] text-[#dd0115] border-[1px] border-solid border-[#dd0115] font-bold px-5 py-[7px]">
                    Xem tất cả
                  </button>
                </div>
              </div>
              <div className="flex">
                <Link
                  href={`/products/${accessorySection[0].id}`}
                  className=" mb-[20px] border-[1px] border-solid border-[#ccc] mx-[10px] rounded-[5px]"
                >
                  <div className="relative">
                    <Image
                      src={accessorySection[0].img}
                      alt={accessorySection[0].title}
                      className="w-[188px]"
                    />
                    <Image
                      src={khung}
                      alt="khung anh"
                      className="absolute top-0 rounded-[5px]"
                    />
                  </div>
                  <div className="p-[10px]">
                    <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416] my-[20px]">
                      {accessorySection[0].title}
                    </h3>
                    <div className="flex">
                      <span className="text-[#dd0115] font-bold">
                        {formatCurrency(accessorySection[0].price)}
                      </span>
                      <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                        {formatCurrency(accessorySection[0].saleprice)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="px-[10px] mb-[20px]">
                  {accessorySection.slice(1, 5).map((item) => {
                    return (
                      <Link
                        href={`/products/${item.id}`}
                        key={item.id}
                        className="border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] last:mb-0 mb-[16px] flex"
                      >
                        <div>
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-[93px]"
                          />
                        </div>
                        <div className="pl-[20px]">
                          <h3 className="text-[#231f20] font-bold line-clamp-2 line-clamps hover:text-[#ffb416]">
                            {item.title}
                          </h3>
                          <span className="text-[#dd0115] font-bold">
                            {formatCurrency(item.price)}
                          </span>
                          <span className="line-through text-[#666] text-[14px] ml-[10px] items-center flex">
                            {formatCurrency(item.saleprice)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
