require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
const env = require('./env');
const User = require('./models/User');
const UserProfile = require('./models/UserProfile');

async function seed() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log('Connected to DB');

    await User.deleteMany({});
    await UserProfile.deleteMany({});

    const admin = await User.create({ email: env.ADMIN_EMAIL, password: env.ADMIN_PASSWORD, roles: ['admin', 'user'] });
    await UserProfile.create({ userId: admin.id, clientId: 1000001, firstName: 'Admin', lastName: 'User' });

    const user = await User.create({ email: env.USER_EMAIL, password: env.USER_PASSWORD, roles: ['user'] });
    await UserProfile.create({ userId: user.id, clientId: 1000002, firstName: 'Test', lastName: 'User' });

    console.log('Seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
