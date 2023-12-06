export const generateShortId = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      id += charset[randomIndex];
    }
    return id;
  };