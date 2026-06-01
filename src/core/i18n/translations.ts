import type { Locale } from "@/core/i18n/types";

export type Translations = {
  nav: {
    dashboard: string;
    search: string;
    reports: string;
    settings: string;
  };
  dashboard: {
    title: string;
    welcome: string;
    tiles: {
      searchTitle: string;
      searchDesc: string;
      reportsTitle: string;
      reportsDesc: string;
    };
  };
  search: {
    lookupTitle: string;
    label: string;
    placeholder: string;
    submit: string;
    searching: string;
    validationRequired: string;
    resultsTitle: string;
    resultsEmpty: string;
    registrationNo: string;
    colSubject: string;
    colScore: string;
  };
  reports: {
    subjectTitle: string;
    selectSubject: string;
    totalStudents: string;
    subjectLoadError: string;
    allTitle: string;
    allLoadError: string;
    topTitle: string;
    topLoadError: string;
    colRank: string;
    colSbd: string;
    colMath: string;
    colPhysics: string;
    colChemistry: string;
    colTotal: string;
    bands: {
      gte8: string;
      from6to8: string;
      from4to6: string;
      lt4: string;
    };
  };
  settings: {
    title: string;
    language: string;
    languageVi: string;
    languageEn: string;
    theme: string;
    themeDark: string;
    themeLight: string;
  };
  subjects: Record<string, string>;
  scoreFields: Record<string, string>;
};

const SUBJECT_KEYS = [
  "toan",
  "ngu_van",
  "ngoai_ngu",
  "vat_li",
  "hoa_hoc",
  "sinh_hoc",
  "lich_su",
  "dia_li",
  "gdcd",
] as const;

const SCORE_FIELD_KEYS = [
  "toan",
  "nguVan",
  "ngoaiNgu",
  "vatLi",
  "hoaHoc",
  "sinhHoc",
  "lichSu",
  "diaLi",
  "gdcd",
  "maNgoaiNgu",
] as const;

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      dashboard: "Dashboard",
      search: "Search Scores",
      reports: "Reports",
      settings: "Settings",
    },
    dashboard: {
      title: "Dashboard",
      welcome: "Welcome to G-Scores — choose a feature below.",
      tiles: {
        searchTitle: "Score Lookup",
        searchDesc: "Enter a registration number to view subject scores",
        reportsTitle: "Statistics & Reports",
        reportsDesc: "Score distribution charts and Top 10 Group A",
      },
    },
    search: {
      lookupTitle: "Score Lookup",
      label: "Registration Number",
      placeholder: "Enter registration number",
      submit: "Search",
      searching: "Searching...",
      validationRequired: "Please enter a registration number.",
      resultsTitle: "Detailed Scores",
      resultsEmpty:
        "Enter a registration number and click Search to view subject scores.",
      registrationNo: "Registration No.",
      colSubject: "Subject",
      colScore: "Score",
    },
    reports: {
      subjectTitle: "Score Distribution by Band (Per Subject)",
      selectSubject: "Select subject:",
      totalStudents: "Students with scores:",
      subjectLoadError: "Failed to load score distribution.",
      allTitle: "Statistics Across All Subjects",
      allLoadError: "Failed to load overall statistics.",
      topTitle: "Top 10 Group A Students (Math + Physics + Chemistry)",
      topLoadError: "Failed to load leaderboard.",
      colRank: "#",
      colSbd: "Registration No.",
      colMath: "Math",
      colPhysics: "Physics",
      colChemistry: "Chemistry",
      colTotal: "Total",
      bands: {
        gte8: "≥ 8 points",
        from6to8: "6 – < 8 points",
        from4to6: "4 – < 6 points",
        lt4: "< 4 points",
      },
    },
    settings: {
      title: "Settings",
      language: "Language",
      languageVi: "Vietnamese",
      languageEn: "English",
      theme: "Theme",
      themeDark: "Dark",
      themeLight: "Light",
    },
    subjects: {
      toan: "Mathematics",
      ngu_van: "Literature",
      ngoai_ngu: "Foreign Language",
      vat_li: "Physics",
      hoa_hoc: "Chemistry",
      sinh_hoc: "Biology",
      lich_su: "History",
      dia_li: "Geography",
      gdcd: "Civic Education",
    },
    scoreFields: {
      toan: "Mathematics",
      nguVan: "Literature",
      ngoaiNgu: "Foreign Language",
      vatLi: "Physics",
      hoaHoc: "Chemistry",
      sinhHoc: "Biology",
      lichSu: "History",
      diaLi: "Geography",
      gdcd: "Civic Education",
      maNgoaiNgu: "Foreign Language Code",
    },
  },
  vi: {
    nav: {
      dashboard: "Trang chủ",
      search: "Tra cứu điểm",
      reports: "Báo cáo",
      settings: "Cài đặt",
    },
    dashboard: {
      title: "Trang chủ",
      welcome: "Chào mừng đến G-Scores — chọn chức năng bên dưới.",
      tiles: {
        searchTitle: "Tra cứu điểm",
        searchDesc: "Nhập số báo danh để xem điểm từng môn",
        reportsTitle: "Báo cáo thống kê",
        reportsDesc: "Biểu đồ phân bố điểm và Top 10 khối A",
      },
    },
    search: {
      lookupTitle: "Tra cứu điểm",
      label: "Số báo danh",
      placeholder: "Nhập số báo danh",
      submit: "Tìm kiếm",
      searching: "Đang tìm...",
      validationRequired: "Vui lòng nhập số báo danh.",
      resultsTitle: "Chi tiết điểm",
      resultsEmpty: "Nhập số báo danh và bấm Tìm kiếm để xem điểm.",
      registrationNo: "Số báo danh",
      colSubject: "Môn",
      colScore: "Điểm",
    },
    reports: {
      subjectTitle: "Phân bố điểm theo mức (từng môn)",
      selectSubject: "Chọn môn:",
      totalStudents: "Tổng thí sinh có điểm:",
      subjectLoadError: "Không tải được phân bố điểm.",
      allTitle: "Thống kê theo tất cả các môn",
      allLoadError: "Không tải được thống kê tổng hợp.",
      topTitle: "Top 10 thí sinh khối A (Toán + Lý + Hóa)",
      topLoadError: "Không tải được bảng xếp hạng.",
      colRank: "#",
      colSbd: "SBD",
      colMath: "Toán",
      colPhysics: "Lý",
      colChemistry: "Hóa",
      colTotal: "Tổng",
      bands: {
        gte8: "≥ 8 điểm",
        from6to8: "6 – < 8 điểm",
        from4to6: "4 – < 6 điểm",
        lt4: "< 4 điểm",
      },
    },
    settings: {
      title: "Cài đặt",
      language: "Ngôn ngữ",
      languageVi: "Tiếng Việt",
      languageEn: "Tiếng Anh",
      theme: "Giao diện",
      themeDark: "Tối",
      themeLight: "Sáng",
    },
    subjects: {
      toan: "Toán",
      ngu_van: "Ngữ văn",
      ngoai_ngu: "Ngoại ngữ",
      vat_li: "Vật lý",
      hoa_hoc: "Hóa học",
      sinh_hoc: "Sinh học",
      lich_su: "Lịch sử",
      dia_li: "Địa lý",
      gdcd: "GDCD",
    },
    scoreFields: {
      toan: "Toán",
      nguVan: "Ngữ văn",
      ngoaiNgu: "Ngoại ngữ",
      vatLi: "Vật lý",
      hoaHoc: "Hóa học",
      sinhHoc: "Sinh học",
      lichSu: "Lịch sử",
      diaLi: "Địa lý",
      gdcd: "GDCD",
      maNgoaiNgu: "Mã ngoại ngữ",
    },
  },
};

export { SUBJECT_KEYS, SCORE_FIELD_KEYS };
