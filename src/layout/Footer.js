import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <div className="w-full bg-primary py-5">
        <div className="container m-auto text-left text-white">
          <h2 className="text-xl mb-3 font-medium">
            Thủy Anh • Chuyên Các Loại Trà Ngon Nhất Tại Việt Nam
          </h2>
          <p className="text-base w-[1110px] leading-8">
            Thủy Anh chuyên kinh doanh các loại trà Tân Cương Thái Nguyên ngon,
            cao cấp nhất như Trà Đinh, Trà Nõn Tôm, Trà Móc Câu. Ngoài ra, chúng
            tôi còn cung cấp các loại trà đặc sản của các vùng miền khác như trà
            ô long Lâm Đồng, trà sen, trà lài, trà shan tuyết cổ thụ Tà Xùa,
            Suối Giàng,...& các loại quà tặng, dụng cụ trà cao cấp. HOTLINE:
            0123.456.789
          </p>
        </div>
      </div>
      <div className="w-full bg-secondary py-5">
        <div className="container flex m-auto">
          <div className="w-[50%] text-justify">
            <h2 className="text-xl font-medium uppercase">
              CÔNG TY TNHH Thủy Anh
            </h2>
            <p className="">
              <span className="font-medium">Mã Số Thuế : </span>
              0123456789
            </p>
            <p className="">
              <span className="font-medium">Nhà Máy Sản Xuất :</span>
              Xóm Nam Hưng, Xã Tân Cương, TP.Thái Nguyên
            </p>
            <p className="">Cửa hàng tại Hà Nội:</p>
            <p className="w-[470px] text-sm">
              ○ Số 189 Giáp Nhất, Thượng Đình, Thanh Xuân, Hà Nội (Đối diện Ga
              Láng)
              <span className="italic">
                (8h - 18h, từ T2 - CN, Lễ làm bình thường)
              </span>
            </p>
          </div>
          <div className="w-[25%]">
            <h2 className="text-xl font-medium uppercase">Liên Hệ</h2>
            <p className="text-sm text-justify">
              Tại Hà Nội:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                (012)3456789
              </span>
            </p>
            <p className="text-sm text-justify">
              Tại TPHCM:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                (012)3456789
              </span>
            </p>
            <p className="text-sm text-justify">
              Hotline / Zalo:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                0901.345.678
              </span>
            </p>
            <p className="text-sm text-justify">Email: ThuyAnh@gmail.com</p>
            <p className="text-sm text-justify">Website: https://thuyanh.com</p>

            <YouTubeIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>

          <div className="w-[25%]">
            <h2 className="text-xl font-medium uppercase">
              Cam Kết Tới khách hàng
            </h2>
            <p className="text-sm text-justify">
              Thanh Toán và nhận hàng nhanh gọn
            </p>
            <p className="text-sm text-justify">Đảm bảo chính sách bảo mật</p>
            <p className="text-sm text-justify">Hàng Đạt chuẩn về chất lượng</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
