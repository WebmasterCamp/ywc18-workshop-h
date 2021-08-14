// user profile section

const USER_PROFILE_KEY = 'USER_PROFILE';
const QUEUE_KEY = 'QUEUE_KEY';

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
  localStorage.setItem(QUEUE_KEY, JSON.stringify([]));
};

export const clearLocalUserProfile = () => {
  localStorage.removeItem(USER_PROFILE_KEY);
  localStorage.removeItem(QUEUE_KEY);
};

// queue  section
export const getQueueList = () => {
  const queue = localStorage.getItem(QUEUE_KEY);
  if (queue === null) {
    return [];
  }

  return JSON.parse(queue);
};

//queue
// {
//   queueId: 1 (create)
// {
//   id: 1,
//   category: 1,
//   filter: 2,
//   cover:
//     'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//   avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//   title: 'นายแพทย์เบล',
//   rating: 4,
//   location: 'บางรัก',
//   archive
// },
export const addQueue = (queue) => {
  let list = getQueueList();

  let max = 0;
  for (let i of list) {
    if (max < i.queueId) {
      max = i.queueId;
    }
  }
  list = [...list, { ...queue, queueId: max + 1 }];
  localStorage.setItem(QUEUE_KEY, JSON.stringify(list));
};

export const removeQueue = (id) => {
  let list = getQueueList();
  list = list.filter(({ queueId }) => queueId !== id);
  localStorage.setItem(QUEUE_KEY, JSON.stringify(list));
};
