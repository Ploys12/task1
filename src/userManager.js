class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  
    findUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  
    getAllUsers() {
      return this.users;
    }
  }
  
  module.exports = UserManager;
  