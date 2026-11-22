"use client";

import { useLanguage } from "@/components/language";

type PrivacySubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  bullets?: string[];
  subsections?: PrivacySubsection[];
  links?: { label: string; href: string }[];
};

const sections: Record<"vi" | "en", PrivacySection[]> = {
  vi: [
    {
      title: "1. Giới thiệu",
      paragraphs: [
        "Chào mừng bạn đến với các ứng dụng được phát triển và phát hành bởi JollyD App, bao gồm Kuro Anime Live Wallpapers 4K và Ôn Thi GPLX A1.",
        "Chúng tôi phát triển các ứng dụng di động nhằm hỗ trợ cá nhân hóa thiết bị, học tập, tra cứu thông tin, nâng cao kiến thức và phục vụ những nhu cầu thiết thực trong cuộc sống hằng ngày.",
        "Chính sách quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ thông tin khi bạn sử dụng các ứng dụng do JollyD App phát triển (liên hệ hỗ trợ: damtiendat24072000@gmail.com).",
        "Chính sách áp dụng cho tất cả các ứng dụng thuộc JollyD App có liên kết hoặc dẫn chiếu đến trang này, bao gồm Kuro Anime Live Wallpapers 4K và Ôn Thi GPLX A1. Tùy theo chức năng và công nghệ được tích hợp, mỗi ứng dụng có thể có những hoạt động xử lý dữ liệu khác nhau."
      ]
    },
    {
      title: "2. Thông tin chúng tôi thu thập",
      paragraphs: [
        "Tùy thuộc vào chức năng của từng ứng dụng, chúng tôi có thể xử lý một hoặc nhiều loại thông tin sau:"
      ],
      subsections: [
        {
          title: "2.1. Thông tin do người dùng cung cấp",
          paragraphs: [
            "Một số ứng dụng có thể không yêu cầu người dùng đăng ký tài khoản hoặc cung cấp thông tin cá nhân.",
            "Đối với những ứng dụng có chức năng tài khoản, liên hệ hoặc phản hồi, chúng tôi có thể xử lý thông tin mà người dùng chủ động cung cấp, chẳng hạn như:"
          ],
          bullets: [
            "Họ tên hoặc tên hiển thị.",
            "Địa chỉ email.",
            "Nội dung phản hồi, câu hỏi hoặc yêu cầu hỗ trợ.",
            "Thông tin khác cần thiết để cung cấp chức năng tương ứng."
          ]
        },
        {
          title: "2.2. Dữ liệu sử dụng ứng dụng",
          paragraphs: [
            "Tùy chức năng, ứng dụng có thể lưu hoặc xử lý:"
          ],
          bullets: [
            "Lịch sử và tiến độ sử dụng.",
            "Kết quả học tập, bài kiểm tra hoặc hoạt động.",
            "Tùy chọn và cài đặt của người dùng.",
            "Nội dung đã đánh dấu, lưu hoặc tương tác.",
            "Thông tin về thời điểm và tần suất sử dụng ứng dụng."
          ]
        },
        {
          title: "2.3. Dữ liệu thiết bị và dữ liệu kỹ thuật",
          paragraphs: [
            "Một số dịch vụ hoặc SDK được tích hợp trong ứng dụng có thể thu thập:"
          ],
          bullets: [
            "Địa chỉ IP.",
            "Loại thiết bị và phiên bản hệ điều hành.",
            "Phiên bản ứng dụng.",
            "Mã nhận dạng thiết bị hoặc mã nhận dạng quảng cáo.",
            "Thông tin tương tác với ứng dụng.",
            "Dữ liệu chẩn đoán, báo lỗi và hiệu suất."
          ]
        },
        {
          title: "2.4. Quyền thiết bị và tính năng hình nền",
          paragraphs: [
            "Đối với các ứng dụng hình nền và cá nhân hóa như Kuro Anime Live Wallpapers 4K, ứng dụng sử dụng các quyền hệ thống cần thiết để cung cấp tính năng cốt lõi:",
            "Ứng dụng không truy cập, quét, đọc hay thu thập ảnh cá nhân, thư viện ảnh riêng tư hoặc tệp cá nhân trên thiết bị của bạn."
          ],
          bullets: [
            "Đặt hình nền (Set Wallpaper / dịch vụ hình nền động): Cho phép áp dụng hình nền tĩnh 4K hoặc hình nền video động lên màn hình chính và/hoặc màn hình khóa theo thao tác của bạn.",
            "Kết nối mạng để tải nội dung: Tải hình ảnh và video hình nền từ máy chủ ngoài khi bạn xem trước hoặc cài đặt hình nền.",
            "Lưu trữ nội dung (nếu bạn chủ động chọn tải về): Chỉ lưu tệp hình nền do ứng dụng cung cấp vào bộ nhớ thiết bị theo yêu cầu của bạn."
          ]
        }
      ],
      paragraphsAfter: [
        "Chúng tôi chỉ xử lý các thông tin cần thiết cho mục đích đã thông báo.",
        "Dữ liệu sử dụng ứng dụng có thể được lưu trực tiếp trên thiết bị hoặc trên hệ thống máy chủ, tùy thiết kế của từng ứng dụng.",
        "Việc thu thập dữ liệu thiết bị và dữ liệu kỹ thuật phụ thuộc vào chức năng, cấu hình và nhà cung cấp dịch vụ được sử dụng trong từng ứng dụng."
      ]
    },
    {
      title: "3. Mục đích sử dụng dữ liệu",
      paragraphs: [
        "Thông tin được xử lý nhằm phục vụ một hoặc nhiều mục đích sau:"
      ],
      bullets: [
        "Cung cấp và duy trì các chức năng của ứng dụng.",
        "Lưu tiến độ, lịch sử và tùy chọn của người dùng.",
        "Cải thiện trải nghiệm và chất lượng ứng dụng.",
        "Phát hiện, xử lý lỗi và nâng cao hiệu suất.",
        "Hiển thị và đo lường quảng cáo nếu ứng dụng có tích hợp quảng cáo.",
        "Phòng chống gian lận, lạm dụng và các hoạt động gây ảnh hưởng đến dịch vụ.",
        "Tiếp nhận và phản hồi yêu cầu hỗ trợ.",
        "Tuân thủ các nghĩa vụ pháp lý áp dụng."
      ],
      paragraphsAfter: [
        "Chúng tôi không sử dụng thông tin cho những mục đích không phù hợp với nội dung đã thông báo và cơ sở xử lý dữ liệu tương ứng."
      ]
    },
    {
      title: "4. Quảng cáo và dịch vụ của bên thứ ba",
      paragraphs: [
        "Một số ứng dụng của JollyD App có thể tích hợp dịch vụ quảng cáo, phân tích và chẩn đoán lỗi của bên thứ ba, chẳng hạn như Google AdMob (Google Mobile Ads SDK) và Firebase (bao gồm Firebase Analytics và Firebase Crashlytics) hoặc các dịch vụ tương tự.",
        "Các nhà cung cấp này có thể xử lý một số thông tin như:"
      ],
      bullets: [
        "Địa chỉ IP.",
        "Mã nhận dạng quảng cáo.",
        "Thông tin thiết bị và phiên bản ứng dụng.",
        "Dữ liệu tương tác với ứng dụng và quảng cáo.",
        "Dữ liệu chẩn đoán, sự cố (crash logs) và phòng chống gian lận."
      ],
      paragraphsAfter: [
        "Dữ liệu có thể được sử dụng để cung cấp quảng cáo, đo lường hiệu quả quảng cáo, phân tích mức độ ổn định, xử lý lỗi và bảo vệ dịch vụ.",
        "Việc xử lý dữ liệu của các nhà cung cấp bên thứ ba tuân theo chính sách quyền riêng tư và lựa chọn quyền riêng tư tương ứng của họ.",
        "Không phải tất cả ứng dụng của JollyD App đều sử dụng quảng cáo hoặc cùng một nhà cung cấp dịch vụ."
      ],
      links: [
        {
          label: "Google Mobile Ads",
          href: "https://developers.google.com/admob/android/privacy/play-data-disclosure"
        },
        {
          label: "Quyền riêng tư và bảo mật của Firebase",
          href: "https://firebase.google.com/support/privacy"
        },
        {
          label: "Chính sách quyền riêng tư của Google",
          href: "https://policies.google.com/privacy?hl=vi"
        }
      ]
    },
    {
      title: "5. Nội dung và dịch vụ từ bên ngoài",
      paragraphs: [
        "Một số ứng dụng có thể sử dụng nội dung được cung cấp từ máy chủ, website hoặc dịch vụ bên ngoài, ví dụ như hình ảnh, video, tài liệu và dữ liệu tham khảo.",
        "Khi thiết bị kết nối để tải những nội dung này, máy chủ bên ngoài có thể nhận địa chỉ IP và thông tin kỹ thuật cần thiết để xử lý yêu cầu.",
        "Các website và dịch vụ bên ngoài có thể có chính sách quyền riêng tư riêng. Chúng tôi khuyến nghị người dùng tham khảo chính sách của các nhà cung cấp đó khi sử dụng dịch vụ."
      ]
    },
    {
      title: "6. Lưu trữ và thời gian lưu giữ dữ liệu",
      paragraphs: [
        "Tùy theo thiết kế của từng ứng dụng, dữ liệu có thể được lưu trữ theo một trong các hình thức:"
      ],
      bullets: [
        "Trên thiết bị: Dữ liệu được lưu trong vùng dữ liệu riêng của ứng dụng.",
        "Trên máy chủ: Dữ liệu được lưu trên hệ thống máy chủ hoặc nền tảng dịch vụ được sử dụng.",
        "Thông qua bên thứ ba: Một số dữ liệu có thể được nhà cung cấp dịch vụ xử lý và lưu giữ theo chính sách riêng của họ."
      ],
      paragraphsAfter: [
        "Thời gian lưu giữ phụ thuộc vào mục đích xử lý, chức năng ứng dụng, cài đặt của người dùng và nghĩa vụ pháp lý liên quan.",
        "Khi dữ liệu không còn cần thiết cho mục đích xử lý và không có nghĩa vụ phải tiếp tục lưu giữ, dữ liệu sẽ được xóa hoặc xử lý theo quy định áp dụng."
      ]
    },
    {
      title: "7. Sao lưu và đồng bộ dữ liệu",
      paragraphs: [
        "Tùy cấu hình ứng dụng và thiết bị, dữ liệu có thể được hệ điều hành Android sao lưu hoặc khôi phục thông qua các dịch vụ sao lưu của hệ thống.",
        "Việc sao lưu có thể phụ thuộc vào:"
      ],
      bullets: [
        "Cài đặt sao lưu của thiết bị.",
        "Tài khoản và dịch vụ hệ thống mà người dùng sử dụng.",
        "Khả năng hỗ trợ sao lưu của từng ứng dụng."
      ],
      paragraphsAfter: [
        "Việc xóa dữ liệu trong ứng dụng không nhất thiết đồng nghĩa với việc mọi bản sao lưu hoặc dữ liệu do bên thứ ba lưu giữ cũng được xóa ngay lập tức.",
        "Tham khảo thông tin sao lưu Android:"
      ],
      links: [
        {
          label: "Sao lưu tự động Android",
          href: "https://developer.android.com/identity/data/autobackup"
        }
      ]
    },
    {
      title: "8. Chia sẻ và chuyển giao dữ liệu",
      paragraphs: ["Chúng tôi không bán dữ liệu cá nhân của người dùng."],
      bullets: [
        "Nhà cung cấp dịch vụ quảng cáo.",
        "Nhà cung cấp dịch vụ lưu trữ, máy chủ và cơ sở dữ liệu.",
        "Nhà cung cấp dịch vụ phân tích, chẩn đoán và báo lỗi.",
        "Các đơn vị hỗ trợ kỹ thuật hoặc vận hành ứng dụng.",
        "Cơ quan có thẩm quyền khi có yêu cầu hợp pháp."
      ],
      paragraphsAfter: [
        "Trong phạm vi cần thiết để cung cấp dịch vụ, dữ liệu có thể được chia sẻ hoặc xử lý bởi các bên nêu trên.",
        "Các nhà cung cấp dịch vụ có thể đặt máy chủ tại Việt Nam hoặc quốc gia khác. Khi có hoạt động chuyển dữ liệu xuyên biên giới, việc xử lý sẽ được thực hiện theo quy định pháp luật hiện hành áp dụng."
      ]
    },
    {
      title: "9. Quyền và lựa chọn của người dùng",
      paragraphs: [
        "Theo quy định pháp luật áp dụng, người dùng có thể thực hiện các quyền liên quan đến dữ liệu cá nhân, bao gồm:"
      ],
      bullets: [
        "Được biết về hoạt động xử lý dữ liệu.",
        "Yêu cầu truy cập hoặc chỉnh sửa thông tin.",
        "Yêu cầu xóa dữ liệu trong trường hợp phù hợp.",
        "Yêu cầu hạn chế hoặc phản đối việc xử lý khi có căn cứ.",
        "Rút lại sự đồng ý khi việc xử lý dựa trên sự đồng ý.",
        "Gửi phản ánh hoặc khiếu nại liên quan đến quyền riêng tư."
      ],
      paragraphsAfter: [
        "Đối với dữ liệu được lưu trực tiếp trên thiết bị, người dùng có thể sử dụng chức năng xóa dữ liệu trong ứng dụng hoặc cài đặt Android nếu ứng dụng hỗ trợ.",
        "Đối với dữ liệu do nhà cung cấp bên thứ ba xử lý, người dùng có thể cần thực hiện yêu cầu thông qua cơ chế quản lý dữ liệu của nhà cung cấp tương ứng.",
        "Để gửi yêu cầu liên quan đến dữ liệu cá nhân, vui lòng liên hệ email được cung cấp tại mục 12."
      ]
    },
    {
      title: "10. Bảo mật thông tin",
      paragraphs: [
        "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp nhằm bảo vệ thông tin khỏi nguy cơ truy cập, sử dụng, thay đổi, tiết lộ hoặc phá hủy trái phép.",
        "Các biện pháp bảo vệ có thể bao gồm:"
      ],
      bullets: [
        "Cơ chế phân quyền và bảo vệ dữ liệu của hệ điều hành.",
        "Kết nối được mã hóa khi sử dụng các dịch vụ hỗ trợ.",
        "Giới hạn quyền truy cập dữ liệu cần thiết.",
        "Cập nhật và khắc phục lỗi bảo mật khi phát hiện."
      ],
      paragraphsAfter: [
        "Tuy nhiên, không có phương thức lưu trữ hoặc truyền tải dữ liệu nào có thể đảm bảo an toàn tuyệt đối."
      ]
    },
    {
      title: "11. Quyền riêng tư của trẻ em",
      paragraphs: [
        "Các ứng dụng của chúng tôi không hướng đến trẻ em dưới 13 tuổi và chúng tôi không cố ý thu thập dữ liệu cá nhân từ trẻ em dưới 13 tuổi.",
        "Nếu bạn là phụ huynh hoặc người giám hộ và phát hiện trẻ em dưới 13 tuổi đã cung cấp dữ liệu cá nhân cho chúng tôi, vui lòng liên hệ qua email tại mục 12 để chúng tôi xem xét và xóa thông tin kịp thời."
      ]
    },
    {
      title: "12. Liên hệ",
      paragraphs: [
        "Nếu bạn có câu hỏi, yêu cầu hỗ trợ hoặc vấn đề liên quan đến chính sách quyền riêng tư, vui lòng liên hệ:",
        "Email: damtiendat24072000@gmail.com"
      ]
    },
    {
      title: "13. Thay đổi chính sách",
      paragraphs: [
        "Chính sách quyền riêng tư có thể được cập nhật khi:"
      ],
      bullets: [
        "Chúng tôi phát hành ứng dụng mới.",
        "Chức năng hoặc công nghệ của ứng dụng thay đổi.",
        "Có sự thay đổi về nhà cung cấp dịch vụ hoặc SDK.",
        "Quy định pháp luật hoặc yêu cầu của nền tảng phân phối thay đổi."
      ],
      paragraphsAfter: [
        "Phiên bản mới sẽ được đăng tải trên trang này cùng ngày cập nhật.",
        "Người dùng nên kiểm tra chính sách định kỳ để nắm được những thay đổi liên quan đến quyền riêng tư."
      ]
    }
  ],
  en: [
    {
      title: "1. Introduction",
      paragraphs: [
        "Welcome to the applications developed and published by JollyD App, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1.",
        "We develop mobile applications for device personalization, learning, information lookup, knowledge building, and practical everyday needs.",
        "This Privacy Policy explains how we collect, use, store, share, and protect information when you use applications developed by JollyD App (contact: damtiendat24072000@gmail.com).",
        "This policy applies to all JollyD App applications that link to or reference it, including Kuro Anime Live Wallpapers 4K and Ôn Thi GPLX A1. Each application may process data differently depending on its features and integrated technologies."
      ]
    },
    {
      title: "2. Information we collect",
      paragraphs: [
        "Depending on the features of an application, we may process one or more of the following types of information:"
      ],
      subsections: [
        {
          title: "2.1. Information you provide",
          paragraphs: [
            "Some applications may not require users to register an account or provide personal information.",
            "For applications with account, contact, or feedback features, we may process information you choose to provide, such as:"
          ],
          bullets: [
            "Your name or display name.",
            "Your email address.",
            "Feedback, questions, or support requests.",
            "Other information needed to provide the relevant feature."
          ]
        },
        {
          title: "2.2. App usage data",
          paragraphs: [
            "Depending on the features, an application may store or process:"
          ],
          bullets: [
            "Usage history and progress.",
            "Learning results, test results, or activity.",
            "Your preferences and settings.",
            "Content you bookmark, save, or interact with.",
            "Information about when and how often you use the application."
          ]
        },
        {
          title: "2.3. Device and technical data",
          paragraphs: [
            "Some services or SDKs integrated into an application may collect:"
          ],
          bullets: [
            "IP address.",
            "Device type and operating system version.",
            "App version.",
            "Device identifiers or advertising identifiers.",
            "Information about interactions with the application.",
            "Diagnostics, crash reports, and performance data."
          ]
        },
        {
          title: "2.4. Device permissions and wallpaper features",
          paragraphs: [
            "For personalization and wallpaper apps such as Kuro Anime Live Wallpapers 4K, the application uses only the system permissions required to deliver its core wallpaper functionality:",
            "The application does not access, scan, read, or collect your personal photos, private media library, or private device files."
          ],
          bullets: [
            "Set Wallpaper (SET_WALLPAPER / Live Wallpaper service): Used solely to apply 4K static or live video wallpapers to your Home screen and/or Lock screen when you choose to set one.",
            "Network access to load wallpapers: Downloads wallpaper images and videos from external servers when you browse, preview, or apply wallpapers.",
            "Device storage (if you choose to save a wallpaper): Stores only the wallpaper media provided by the app when explicitly initiated by you."
          ]
        }
      ],
      paragraphsAfter: [
        "We process only the information necessary for the purposes described.",
        "App usage data may be stored directly on your device or on a server system, depending on the design of each application.",
        "Collection of device and technical data depends on the features and configuration of each application and the service providers it uses."
      ]
    },
    {
      title: "3. How we use data",
      paragraphs: [
        "Information is processed for one or more of the following purposes:"
      ],
      bullets: [
        "Providing and maintaining app features.",
        "Saving your progress, history, and preferences.",
        "Improving the app experience and quality.",
        "Detecting and fixing errors and improving performance.",
        "Displaying and measuring ads if the application includes advertising.",
        "Preventing fraud, abuse, and activities that may affect the service.",
        "Receiving and responding to support requests.",
        "Complying with applicable legal obligations."
      ],
      paragraphsAfter: [
        "We do not use information for purposes that are inconsistent with the notices provided and the applicable legal basis for processing."
      ]
    },
    {
      title: "4. Advertising and third-party services",
      paragraphs: [
        "Some JollyD App applications may integrate third-party advertising, analytics, and crash-reporting SDKs, such as Google AdMob (Google Mobile Ads SDK) and Firebase (including Firebase Analytics and Firebase Crashlytics), or similar services.",
        "These providers may process information such as:"
      ],
      bullets: [
        "IP address.",
        "Advertising identifier.",
        "Device information and app version.",
        "Interactions with the app and ads.",
        "Diagnostics, crash logs, and fraud-prevention data."
      ],
      paragraphsAfter: [
        "This data may be used to serve ads, measure ad effectiveness, monitor app stability, fix crashes, analyze usage, and protect the services.",
        "Third-party providers process data under their own privacy policies and privacy controls.",
        "Not all JollyD App applications use advertising or the same service providers."
      ],
      links: [
        {
          label: "Google Mobile Ads",
          href: "https://developers.google.com/admob/android/privacy/play-data-disclosure"
        },
        {
          label: "Firebase Privacy and Security",
          href: "https://firebase.google.com/support/privacy"
        },
        {
          label: "Google Privacy Policy",
          href: "https://policies.google.com/privacy?hl=en"
        }
      ]
    },
    {
      title: "5. External content and services",
      paragraphs: [
        "Some applications may use content provided by external servers, websites, or services, such as images, videos, documents, and reference data.",
        "When your device connects to download this content, the external server may receive your IP address and the technical information needed to process the request.",
        "External websites and services may have their own privacy policies. We recommend reviewing those providers’ policies when you use their services."
      ]
    },
    {
      title: "6. Data storage and retention",
      paragraphs: [
        "Depending on the design of each application, data may be stored in one of the following ways:"
      ],
      bullets: [
        "On your device: Data is stored in the application’s private storage area.",
        "On a server: Data is stored on a server system or service platform in use.",
        "By a third party: Some data may be processed and retained by a service provider under its own policies."
      ],
      paragraphsAfter: [
        "Retention periods depend on the purpose of processing, app features, your settings, and relevant legal obligations.",
        "When data is no longer needed for its processing purpose and there is no obligation to retain it, it will be deleted or handled as required by applicable rules."
      ]
    },
    {
      title: "7. Data backup and synchronization",
      paragraphs: [
        "Depending on the application and device settings, Android may back up or restore data through system backup services.",
        "Backup availability may depend on:"
      ],
      bullets: [
        "Your device’s backup settings.",
        "The system account and services you use.",
        "Whether the application supports backup."
      ],
      paragraphsAfter: [
        "Deleting data in an application does not necessarily mean that every backup or data held by a third party is deleted immediately.",
        "For more information about Android backup:"
      ],
      links: [
        {
          label: "Android Auto Backup",
          href: "https://developer.android.com/identity/data/autobackup"
        }
      ]
    },
    {
      title: "8. Data sharing and transfers",
      paragraphs: [
        "We do not sell users’ personal data.",
        "To the extent necessary to provide our services, data may be shared with or processed by:"
      ],
      bullets: [
        "Advertising service providers.",
        "Hosting, server, and database providers.",
        "Analytics, diagnostics, and crash-reporting providers.",
        "Technical support or app operations providers.",
        "Competent authorities when legally required."
      ],
      paragraphsAfter: [
        "Service providers may host servers in Vietnam or other countries. Where data is transferred across borders, processing will be carried out in accordance with applicable current laws."
      ]
    },
    {
      title: "9. Your rights and choices",
      paragraphs: [
        "Under applicable law, you may exercise rights relating to your personal data, including:"
      ],
      bullets: [
        "The right to know about data processing.",
        "The right to request access to or correction of information.",
        "The right to request deletion where appropriate.",
        "The right to request restriction of or object to processing where grounds apply.",
        "The right to withdraw consent where processing is based on consent.",
        "The right to submit feedback or a complaint about privacy."
      ],
      paragraphsAfter: [
        "For data stored directly on your device, you may use an in-app data deletion feature or Android settings if the application supports it.",
        "For data processed by a third-party provider, you may need to submit your request through that provider’s data management process.",
        "To submit a request relating to personal data, please contact us using the email in Section 12."
      ]
    },
    {
      title: "10. Information security",
      paragraphs: [
        "We use appropriate technical and organizational measures to protect information against unauthorized access, use, alteration, disclosure, or destruction.",
        "Safeguards may include:"
      ],
      bullets: [
        "Operating system access controls and data protections.",
        "Encrypted connections when supported services are used.",
        "Limiting access to the data needed.",
        "Applying updates and addressing security issues when identified."
      ],
      paragraphsAfter: [
        "However, no method of storing or transmitting data can guarantee absolute security."
      ]
    },
    {
      title: "11. Children’s privacy",
      paragraphs: [
        "Our applications are not directed to children under 13, and we do not knowingly collect personal data from children under 13.",
        "If you are a parent or guardian and believe that a child under 13 has provided personal data to us, please contact us using the email in Section 12 so we can review and promptly remove the information."
      ]
    },
    {
      title: "12. Contact us",
      paragraphs: [
        "If you have questions, need support, or have concerns about this Privacy Policy, please contact:",
        "Email: damtiendat24072000@gmail.com"
      ]
    },
    {
      title: "13. Changes to this policy",
      paragraphs: [
        "This Privacy Policy may be updated when:"
      ],
      bullets: [
        "We release a new application.",
        "An application’s features or technology change.",
        "Our service providers or SDKs change.",
        "Applicable laws or distribution platform requirements change."
      ],
      paragraphsAfter: [
        "The updated version will be posted on this page with its revision date.",
        "We recommend checking this policy periodically for privacy-related changes."
      ]
    }
  ]
};

export default function Privacy() {
  const { lang } = useLanguage();
  const vi = lang === "vi";
  const content = sections[vi ? "vi" : "en"];

  return (
    <main className="shell inner-page legal-page">
      <div className="eyebrow">LEGAL / PHÁP LÝ</div>
      <h1>
        {vi ? (
          <>
            Chính sách <span>quyền riêng tư.</span>
          </>
        ) : (
          <>
            Privacy <span>policy.</span>
          </>
        )}
      </h1>
      <p className="page-intro">
        {vi ? "JollyD App – Developer · Ngày cập nhật: 22/11/2026" : "JollyD App – Developer · Last updated: November 22, 2026"}
      </p>
      {content.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.subsections?.map((subsection) => (
            <div key={subsection.title}>
              <h3>{subsection.title}</h3>
              {subsection.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {subsection.bullets && (
                <ul>
                  {subsection.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {section.paragraphsAfter?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.links?.map((link) => (
            <p key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </p>
          ))}
        </section>
      ))}
      <p>
        <strong>
          {vi
            ? "Chúng tôi tôn trọng quyền riêng tư và cam kết minh bạch về cách dữ liệu được xử lý trong các ứng dụng của mình."
            : "We respect your privacy and are committed to being transparent about how data is handled in our applications."}
        </strong>
      </p>
    </main>
  );
}
