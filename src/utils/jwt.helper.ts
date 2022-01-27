export const jwtAuthFactory = async () => ({
  secret: 'supersecret',
  signOptions: { expiresIn: '72h' }
});
