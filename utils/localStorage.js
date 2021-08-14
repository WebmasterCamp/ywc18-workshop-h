// user profile section

const USER_PROFILE_KEY = 'USER_PROFILE';

export const loadLocalUserProfile = () => {
  const profile = localStorage.getItem(USER_PROFILE_KEY);
  if (profile === null)
    return {
      isLogin: false,
      userProfile: null,
    };
  return {
    isLogin: true,
    userProfile: {
      username: profile,
    },
  };
};

export const setLocalUserProfile = (username) => {
  localStorage.setItem(USER_PROFILE_KEY, username);
};

export const clearLocalUserProfile = () => {
  localStorage.removeItem(USER_PROFILE_KEY);
};
