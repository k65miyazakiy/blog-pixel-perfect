interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  metadata?: {
    lastLogin?: Date;
    preferences: {
      theme: 'light' | 'dark';
      notifications: boolean;
    };
  };
}

class UserService {
  private users: User[] = [];

  addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }

  updateUserPreferences(
    userId: number, 
    preferences: Partial<User['metadata']['preferences']>
  ): boolean {
    const user = this.getUserById(userId);
    if (!user) return false;

    user.metadata = {
      ...user.metadata,
      preferences: {
        ...user.metadata?.preferences,
        ...preferences,
      },
    };
    return true;
  }
}

// 使用例
const userService = new UserService();

const newUser = userService.addUser({
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true,
  metadata: {
    preferences: {
      theme: 'dark',
      notifications: true,
    },
  },
});

console.log('Created user:', newUser);
