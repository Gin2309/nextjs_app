"use client";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = router.query;

  // Tìm thông tin sản phẩm tương ứng trong mảng dữ liệu
  const product = productPage.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>; // Xử lý trường hợp không tìm thấy sản phẩm
  }

  const { img, title, price } = product;

  return (
    <>
      <div>
        <div>
          <Image src={img} alt="mm" />
        </div>
      </div>
    </>
  );
};

export default Page;
