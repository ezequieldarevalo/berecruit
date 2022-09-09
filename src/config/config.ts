export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/recruit',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    },
    admins: [
        'ezequiel.d.arevalo@gmail.com',
        'agusvilla1712@gmail.com'
    ]
}