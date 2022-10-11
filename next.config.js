/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["default", "en", "tr"],
    defaultLocale: "default",
  },
  trailingSlash: true, // adds slash end of the url
};

module.exports = nextConfig;
