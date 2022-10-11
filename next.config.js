/** @type {import('next').NextConfig} */
const translations = require("./constants/translations");
const langs = Object.keys(translations);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["default", ...langs],
    defaultLocale: "default",
  },
  trailingSlash: true, // adds slash end of the url
};

module.exports = nextConfig;
