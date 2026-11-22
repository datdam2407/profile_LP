"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language";

export default function Apps() {
  const { lang } = useLanguage();
  const vi = lang === "vi";

  return (
    <main className="shell inner-page">
      <div className="eyebrow">{vi ? "SẢN PHẨM CỦA CHÚNG TÔI" : "OUR PRODUCTS"}</div>
      <h1>
        {vi ? (
          <>
            Ứng dụng tạo ra <span>vì người dùng.</span>
          </>
        ) : (
          <>
            Apps built around <span>people.</span>
          </>
        )}
      </h1>
      <p className="page-intro">
        {vi
          ? "Khám phá những trải nghiệm di động thiết thực, được thiết kế cho việc học tập, cá nhân hóa thiết bị và các công việc hằng ngày."
          : "Explore practical mobile experiences designed for learning, personalization, and everyday tasks."}
      </p>

      <div className="app-grid page-app-grid">
        <article className="app-card">
          <div className="app-card-top">
            <div className="app-icon">A1</div>
            <span className="app-tag">Android · Education</span>
          </div>
          <div className="eyebrow">{vi ? "HỌC TẬP" : "LEARNING"}</div>
          <h3>Ôn Thi GPLX A1</h3>
          <p>
            {vi
              ? "Ứng dụng đồng hành giúp người học ôn tập lý thuyết thi giấy phép lái xe A1, luyện câu hỏi và theo dõi tiến độ học."
              : "A learning companion for reviewing A1 motorcycle driving theory, practicing questions, and tracking study progress."}
          </p>
          <ul className="feature-list">
            {(vi
              ? [
                  "Ôn tập lý thuyết có hệ thống",
                  "Luyện câu hỏi và theo dõi tiến độ",
                  "Thiết kế cho các buổi học tập trung",
                ]
              : [
                  "Structured theory review",
                  "Practice questions and learning progress",
                  "Designed for focused study sessions",
                ]
            ).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <span className="text-link" style={{ marginTop: 18 }}>
            {vi ? "Liên kết Google Play sẽ được cập nhật" : "Google Play link coming soon"}{" "}
            <ArrowUpRight size={16} />
          </span>
        </article>

        <article className="app-card">
          <div className="app-card-top">
            <div className="app-icon kuro-icon">4K</div>
            <span className="app-tag">
              {vi ? "Android · Closed Testing" : "Android · Closed Testing"}
            </span>
          </div>
          <div className="eyebrow">{vi ? "CÁ NHÂN HÓA" : "PERSONALIZATION"}</div>
          <h3>Kuro Anime Live Wallpapers 4K</h3>
          <p>
            {vi
              ? "Ứng dụng cá nhân hóa màn hình điện thoại với bộ sưu tập hình nền anime 4K tĩnh và hình nền video động sắc nét."
              : "A personalization app featuring crisp 4K static anime wallpapers and smooth live video wallpapers for Android devices."}
          </p>
          <ul className="feature-list">
            {(vi
              ? [
                  "Hình nền anime tĩnh 4K & hình nền động mượt mà",
                  "Đặt nhanh cho Màn hình chính & Màn hình khóa",
                  "Chỉ dùng quyền đặt hình nền, không truy cập ảnh cá nhân",
                ]
              : [
                  "4K static anime & live video wallpapers",
                  "One-tap Home and Lock screen wallpaper setup",
                  "Uses Set Wallpaper only without accessing personal photos",
                ]
            ).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <div className="app-preview-wrap">
            <Image
              src="/assets/aistudio/Screenshot_20261115_214619_94057a80.png"
              alt="Kuro Anime Live Wallpapers 4K Android lock screen preview"
              width={64}
              height={138}
              referrerPolicy="no-referrer"
              className="app-preview-thumb"
            />
            <div className="app-preview-meta">
              <strong>{vi ? "Xem trước giao diện thực tế" : "Live lock-screen preview"}</strong>
              {vi
                ? "Đang ở giai đoạn thử nghiệm kín trên Google Play. Liên kết cửa hàng sẽ được cập nhật khi phát hành công khai."
                : "Currently in Closed Testing on Google Play. Store listing link will be added upon public release."}
            </div>
          </div>
        </article>
      </div>

      <div className="notice">
        {vi
          ? "Thông tin mô tả, hình ảnh, tình trạng phát hành và liên kết cửa hàng được cập nhật đồng bộ với hồ sơ phát hành trên Google Play Console."
          : "App descriptions, availability, screenshots, and store links are kept synchronized with our published and testing releases on Google Play Console."}
      </div>

      <p style={{ marginTop: 24 }}>
        <Link href="/support" className="text-link">
          {vi ? "Cần hỗ trợ? Liên hệ chúng tôi" : "Need help? Contact support"} <ArrowUpRight size={16} />
        </Link>
      </p>
    </main>
  );
}