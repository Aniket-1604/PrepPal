/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://preppal_owner:voyWri57bIVS@ep-black-wood-a187vqki.ap-southeast-1.aws.neon.tech/preppal?sslmode=require',
    }
  };