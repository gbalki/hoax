import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { register } from "timeago.js";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Sign Up": "Sing Up",
        "Password MisMatch": "Password MisMatch",
        "User Name": "User Name",
        "Display Name": "Display Name",
        Password: "Password",
        "Password Repeat": "Password Repeat",
        Login: "Login",
        Logout: "Logout",
        Users: "Users",
        Next: "Next >",
        Previous: "< Previous",
        "Load Failure": "Load Failure",
        "User not found": "User not found",
        Edit: "Edit",
        "Change Display Name": "Change Display Name",
        Save: "Save",
        Cancel: "Cancel",
        "My Profile": "My Profile",
        "There are no hoaxes": "There are no hoaxes",
        "Load all hoaxes": "Load all hoaxes",
        "There are new hoaxes": "There are new hoaxes",
        "Delete Hoax": "Delete Hoax",
        "Are you sure to delete hoax?": "Are you sure to delete hoax?",
        "Delete My Account": "Delete My Account",
        "Are you sure to delete your account":
          "Are you sure to delete your account",
      },
    },
    tr: {
      translations: {
        "Sign Up": "Kayıt Ol",
        "Password MisMatch": "Şifre Eşleşmedi",
        "User Name": "Kullanıcı Adı",
        "Display Name": "Tercih Edilen İsim",
        Password: "Şifre",
        "Password Repeat": "Şifreyi Tekrarla",
        Login: "Giriş Yap",
        Logout: "Çıkış Yap",
        Users: "Kullanıcılar",
        Next: "Sonraki >",
        Previous: "< Önceki",
        "Load Failure": "Liste Alınamadı",
        "User not found": "Kullanıcı Bulunamadı",
        Edit: "Düzenle",
        "Change Display Name": "Görünür İsminizi Değiştirin",
        Save: "Kaydet",
        Cancel: "İptal Et",
        "My Profile": "Hesabım",
        "There are no hoaxes": "Hoax Bulunamadı",
        "Load all hoaxes": "Tüm hoaxları yükle",
        "There are new hoaxes": "Yeni Hoaxlar var",
        "Delete Hoax": "Hoax'u sil",
        "Are you sure to delete hoax?":
          "Hoax'u silmek istediğinizden emin misiniz?",
        "Delete My Account": "Hesabımı Sil",
        "Are you sure to delete your account":
          "Hesabınızı silmek istediğinizden eminmisiniz",
      },
    },
  },
  fallbackLng: "en",
  ns: ["translations"],
  defaultNs: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

const timeagoTR = (number, index) => {
  return [
    ["az önce", "şimdi"],
    ["%s saniye önce", "%s saniye içinde"],
    ["1 dakika önce", "1 dakika içinde"],
    ["%s dakika önce", "%s dakika içinde"],
    ["1 saat önce", "1 saat içinde"],
    ["%s saat önce", "%s saat içinde"],
    ["1 gün önce", "1 gün içinde"],
    ["%s gün önce", "%s gün içinde"],
    ["1 hafta önce", "1 hafta içinde"],
    ["%s hafta önce", "%s hafta içinde"],
    ["1 ay önce", "1 ay içinde"],
    ["%s ay önce", "%s ay içinde"],
    ["1 yıl önce", "1 yıl içinde"],
    ["%s yıl önce", "%s yıl içinde"],
  ][index];
};

register("tr", timeagoTR);

export default i18n;
