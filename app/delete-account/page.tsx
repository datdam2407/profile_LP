"use client";
import { useLanguage } from "@/components/language";

export default function DeleteAccount() {
  const { lang } = useLanguage();
  const vi = lang === "vi";

  return (
    <main className="shell inner-page legal-page">
      <div className="eyebrow">{vi ? "YÊU CẦU QUYỀN RIÊNG TƯ" : "PRIVACY REQUESTS"}</div>
      <h1>
        {vi ? (
          <>
            Xóa <span>tài khoản &amp; dữ liệu.</span>
          </>
        ) : (
          <>
            Account &amp; data <span>deletion.</span>
          </>
        )}
      </h1>
      <p className="page-intro">
        {vi
          ? "Hướng dẫn xóa dữ liệu ứng dụng hoặc gửi yêu cầu xóa tài khoản đối với các ứng dụng thuộc JollyD App."
          : "Instructions for removing app data or requesting deletion of an account associated with JollyD App applications."}
      </p>

      <div className="notice">
        {vi
          ? "Hiện tại, các ứng dụng đang phát hành của JollyD App gồm Kuro Anime Live Wallpapers 4K và Ôn Thi GPLX A1 không yêu cầu người dùng đăng ký tài khoản hoặc đăng nhập. Dữ liệu lưu cục bộ trên thiết bị (như tùy chọn, bộ nhớ đệm hình nền hoặc tiến độ ôn tập) có thể được xóa ngay lập tức bằng cách xóa dữ liệu ứng dụng trong Cài đặt Android hoặc gỡ cài đặt ứng dụng."
          : "Currently, JollyD App applications—including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1—do not require user registration or account sign-in. Any locally stored data (such as app preferences, cached wallpapers, or study progress) can be deleted immediately by clearing app storage in Android Settings or uninstalling the app."}
      </div>

      <h2>{vi ? "Cách gửi yêu cầu xóa (đối với ứng dụng có tài khoản)" : "How to request deletion (for account-enabled apps)"}</h2>
      <ol>
        {(vi
          ? [
              "Gửi email đến damtiendat24072000@gmail.com với tiêu đề “Yêu cầu xóa tài khoản”.",
              "Nêu rõ tên ứng dụng và thông tin tối thiểu cần thiết để xác định tài khoản hoặc dữ liệu liên quan (ví dụ: địa chỉ email đã dùng).",
              "Chúng tôi có thể liên hệ lại để xác minh quyền sở hữu yêu cầu trước khi thực hiện xóa.",
            ]
          : [
              "Email damtiendat24072000@gmail.com with the subject “Account deletion request”.",
              "Identify the app name and provide the minimum information needed to locate your account or associated data (such as the email address used).",
              "We may contact you to verify ownership of the request before completing deletion.",
            ]
        ).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>

      <h2>{vi ? "Dữ liệu nào sẽ bị xóa?" : "What will be deleted?"}</h2>
      <p>
        {vi
          ? "Đối với các ứng dụng hỗ trợ tài khoản (nếu được phát hành trong tương lai), toàn bộ thông tin hồ sơ tài khoản, địa chỉ email, tùy chọn đồng bộ và dữ liệu người dùng lưu trữ trên hệ thống của chúng tôi sẽ bị xóa vĩnh viễn. Với dữ liệu lưu cục bộ trên máy trong Kuro Anime Live Wallpapers 4K và Ôn Thi GPLX A1, người dùng tự xóa trực tiếp bằng cách gỡ cài đặt hoặc xóa dữ liệu ứng dụng trên thiết bị."
          : "For any account-enabled application (if offered in the future), your account profile, email address, synced preferences, and any associated personal data stored on our systems will be permanently deleted. For locally stored data in Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1, all local data is removed directly when you clear app data or uninstall the app from your device."}
      </p>

      <h2>{vi ? "Dữ liệu nào có thể được giữ lại?" : "What may be retained?"}</h2>
      <p>
        {vi
          ? "Chúng tôi chỉ giữ lại tối thiểu các bản ghi kỹ thuật, bảo mật, phòng chống gian lận hoặc hồ sơ giao dịch trong trường hợp pháp luật hiện hành yêu cầu. Dữ liệu chẩn đoán sự cố hoặc thống kê ẩn danh từ các nhà cung cấp bên thứ ba (như Google AdMob hoặc Firebase) không gắn với danh tính cá nhân của bạn và tuân theo thời hạn lưu trữ riêng của từng nhà cung cấp."
          : "We may retain minimal technical, security, fraud-prevention, or legal-compliance records only where required by applicable law. Aggregated or anonymized crash diagnostics and analytics processed by third-party providers (such as Google AdMob or Firebase) cannot identify you personally and remain subject to those providers’ retention policies."}
      </p>

      <h2>{vi ? "Thời gian xử lý" : "Processing time"}</h2>
      <p>
        {vi
          ? "Các yêu cầu xóa dữ liệu hoặc tài khoản gửi qua email sẽ được xác minh và xử lý hoàn tất trong vòng 7–14 ngày làm việc kể từ khi nhận đủ thông tin xác thực, kèm email phản hồi xác nhận cho bạn."
          : "Deletion requests submitted via email are verified and processed within 7–14 business days after confirming your request, and we will send a confirmation reply once completed."}
      </p>

      <p>
        {vi ? "Liên hệ hỗ trợ: " : "For questions, contact "}
        <a href="mailto:damtiendat24072000@gmail.com">damtiendat24072000@gmail.com</a>.
      </p>
    </main>
  );
}