export const validateEnv = () => {
  if (!process.env.DISCORD_TOKEN) {
    console.warn('Discord token is missing!');
    
    return false;
  }
  
  return true;
};
