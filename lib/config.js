/**
 * Centralized configuration file for environment variables
 * This ensures type safety and provides default values
 */

export const config = {
  // Database
  database: {
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    name: process.env.DATABASE_NAME || 'codersden_db',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    externalApiKey: process.env.EXTERNAL_API_KEY,
    udemy: {
      apiKey: process.env.UDEMY_API_KEY,
    },
    coursera: {
      apiKey: process.env.COURSERA_API_KEY,
    },
  },

  // Authentication
  auth: {
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
    nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET,
  },

  // Email
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    from: process.env.EMAIL_FROM || 'noreply@codersden.com',
  },

  // Payment
  stripe: {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },

  // Analytics
  analytics: {
    googleId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },

  // Environment
  env: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NODE_ENV === 'staging',

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || './logs/app.log',
  },
};

/**
 * Validate required environment variables
 */
export function validateEnv() {
  const requiredVars = [
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0 && process.env.NODE_ENV === 'production') {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  if (missingVars.length > 0) {
    console.warn(
      `⚠️  Missing environment variables (development): ${missingVars.join(', ')}`
    );
  }
}

// Validate on import
if (typeof window === 'undefined') {
  validateEnv();
}
