// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
//     а принимала всего два параметра allUsers и userName и возвращала промис.
export default function taskTwo() {
  console.clear();
  console.log('Task Two:');
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usersCheck = Array.isArray(allUsers);
        const nameCheck = users.find(user => user.name === userName)
          ? true
          : false;

        if (usersCheck && nameCheck) {
          const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
          resolve(updatedUsers);
        } else {
          const e = 'Input error or user does not exist';
          reject(e);
        }
      }, 1000);
    });
  };

  const logger = updatedUsers => console.table(updatedUsers);
  const errorHandler = e => console.warn(e);

  toggleUserState(users, 'Mango').then(logger).catch(errorHandler);
  toggleUserState(users, 'Lux').then(logger).catch(errorHandler);
  //toggleUserState(users, 'asd').then(logger).catch(errorHandler);
}
