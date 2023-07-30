
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'dummyimage.com',
            'images.unsplash.com',
            'sns-avatar-qc.xhscdn.com',
            "img.wxcha.com",
            "sns-img-qc.xhscdn.com",
            "sns-img-bd.xhscdn.com",
        ]
    },
}

module.exports = nextConfig
