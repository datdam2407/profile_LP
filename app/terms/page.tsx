"use client";
import { useLanguage } from "@/components/language";

export default function Terms() {
  const { lang } = useLanguage();
  const vi = lang === "vi";

  const sections = vi
    ? [
        [
          "1. Thỏa thuận",
          "Điều khoản này điều chỉnh việc sử dụng các ứng dụng di động do JollyD App phát triển và phát hành, bao gồm Kuro Anime Live Wallpapers 4K và Ôn Thi GPLX A1. Khi tải xuống hoặc sử dụng ứng dụng, bạn đồng ý với các điều khoản này.",
        ],
        [
          "2. Sử dụng ứng dụng",
          "Bạn cam kết sử dụng ứng dụng đúng mục đích và hợp pháp; không can thiệp vào hoạt động kỹ thuật, không lạm dụng tài nguyên máy chủ, không sao chép trái phép hoặc cố gắng truy cập trái phép vào hệ thống.",
        ],
        [
          "3. Sở hữu trí tuệ",
          "Thương hiệu JollyD App, giao diện, mã nguồn và các tài nguyên do chúng tôi phát triển thuộc quyền sở hữu của JollyD App hoặc các bên cấp phép hợp pháp. Người dùng chỉ được phép sử dụng cho mục đích cá nhân, phi thương mại.",
        ],
        [
          "4. Tuyên bố miễn trừ",
          "Các ứng dụng được cung cấp theo trạng thái hiện có nhằm hỗ trợ cá nhân hóa thiết bị, học tập và tra cứu thông tin tham khảo. Chúng tôi luôn nỗ lực duy trì tính ổn định nhưng không đảm bảo dịch vụ không bao giờ gián đoạn.",
        ],
        [
          "5. Giới hạn trách nhiệm",
          "Trong phạm vi tối đa được pháp luật hiện hành cho phép, JollyD App không chịu trách nhiệm đối với các thiệt hại gián tiếp hoặc phát sinh ngoài tầm kiểm soát hợp lý khi bạn sử dụng ứng dụng hoặc nội dung bên thứ ba.",
        ],
        [
          "6. Thay đổi và liên hệ",
          "Chúng tôi có thể cập nhật điều khoản sử dụng theo từng phiên bản ứng dụng mới. Mọi câu hỏi xin vui lòng liên hệ: damtiendat24072000@gmail.com.",
        ],
      ]
    : [
        [
          "1. Agreement",
          "These terms govern your use of mobile applications developed and published by JollyD App, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1. By downloading or using our apps, you agree to these terms.",
        ],
        [
          "2. Use of the app",
          "You agree to use our applications lawfully and as intended, and not to interfere with technical operations, abuse server resources, or attempt unauthorized access.",
        ],
        [
          "3. Intellectual property",
          "The JollyD App brand, user interfaces, source code, and proprietary assets belong to JollyD App or their respective licensors. Applications are licensed for personal, non-commercial use only.",
        ],
        [
          "4. Disclaimers",
          "Our applications are provided on an “as is” basis for personal device customization, learning, and reference. While we work to keep services reliable, uninterrupted availability cannot be guaranteed.",
        ],
        [
          "5. Limitation of liability",
          "To the fullest extent permitted by applicable law, JollyD App is not liable for indirect or incidental damages arising from your use of the applications or third-party services.",
        ],
        [
          "6. Changes and contact",
          "We may update these terms as our applications evolve. If you have questions, please contact us at damtiendat24072000@gmail.com.",
        ],
      ];

  return (
    <main className="shell inner-page legal-page">
      <div className="eyebrow">LEGAL / PHÁP LÝ</div>
      <h1>
        {vi ? (
          <>
            Điều khoản <span>sử dụng.</span>
          </>
        ) : (
          <>
            Terms of <span>service.</span>
          </>
        )}
      </h1>
      <p className="page-intro">
        {vi
          ? "JollyD App – Developer · Ngày cập nhật: 22/11/2026"
          : "JollyD App – Developer · Last updated: November 22, 2026"}
      </p>
      {sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
    </main>
  );
}