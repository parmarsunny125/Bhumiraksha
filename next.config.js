// /** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
        missingSuspenseWithCSRBailout: false
    }
}

const withPWA = require('next-pwa')({
    dest: 'public'
})

module.exports = withPWA({})
