const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'your_secret_key',
  mongoUri: 'mongodb+srv://Rishabh:Rishabh.4912@cluster0.iv8iv2e.mongodb.net/mern-expense-tracker?retryWrites=true&w=majority&appName=Cluster0'
}

export default config;
