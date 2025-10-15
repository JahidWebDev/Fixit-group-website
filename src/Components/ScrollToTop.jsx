import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, state } = location;

  useEffect(() => {
    if (state?.showBanner) {
      // যদি showBanner = true হয় → banner এ স্ক্রল করো
      const bannerSection = document.getElementById("banner");
      if (bannerSection) {
        bannerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (state?.scrollTop) {
      // scrollTop থাকলে উপরে স্ক্রল করো
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, state]);

  return null;
}

