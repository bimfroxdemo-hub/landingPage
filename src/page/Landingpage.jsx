import React, { useEffect } from "react";
import logo from "../assets/bimfroxb.png";

const PHONE_NUMBER = "918401809966"; // Bimfrox WhatsApp number
const DEFAULT_MESSAGE =
  "Hello Bimfrox Team! I scanned your QR and would like to connect *'एक वेबसाइट मुझे भी चाहिए'*";

function getQueryParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    phone: params.get("phone") || null,
    msg: params.get("msg") || null,
    autoredirect: params.get("autoredirect") || params.get("redirect") || null,
  };
}

function buildWhatsAppUrl(phone, message) {
  const safePhone = (phone || PHONE_NUMBER).replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${safePhone}?text=${encoded}`;
}

const Landingpage = () => {
  useEffect(() => {
    const { phone, msg, autoredirect } = getQueryParams();
    if (autoredirect === "1" || autoredirect === "true") {
      const url = buildWhatsAppUrl(phone, msg);
      window.location.href = url;
    }
  }, []);

  const { phone, msg } = getQueryParams();
  const waUrl = buildWhatsAppUrl(phone, msg);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 text-center max-w-md w-full border border-green-100">
        {/* Bimfrox Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Bimfrox Logo"
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Welcome to Bimfrox
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for scanning our QR code! Tap below to chat with our team on WhatsApp.
        </p>

        {/* Highlight Hindi Message */}
        <div className="text-xl font-bold text-green-700 mb-6">
          “एक वेबसाइट मुझे भी चाहिए”
        </div>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.08L0 24l6.21-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 01-5.1-1.39l-.36-.21-3.68.97.98-3.59-.23-.37A9.92 9.92 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.41-7.59c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.1 8.1 0 01-2.38-1.47 9.05 9.05 0 01-1.67-2.07c-.18-.3 0-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.11c.15.2 2.12 3.24 5.12 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
          Chat with Bimfrox
        </a>

        {/* Info Section */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <span className="font-medium">Phone:</span> {phone || PHONE_NUMBER}
          </p>
          <p className="mt-1">
            <span className="font-medium">Message:</span>{" "}
            {msg || "Hello Bimfrox Team! I scanned your QR and would like to connect "}
            <span className="font-bold text-green-700">
              “एक वेबसाइट मुझे भी चाहिए”
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-400">
          <a
            href="https://www.bimfrox.com/"
            target="_blank"
            className="underline hover:text-green-600 transition"
          >
            Visit Bimfrox Website
          </a>
          <a href={waUrl} className="underline hover:text-green-600 transition">
            Open WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
