(() => {
  // Look at the changes to modify the name format with low coupling (firstName and lastName instead of name)
  // Prioritize composition over inheritance
  type Gender = 'M' | 'F';

  interface PersonProps {
    //name: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    // public name: string;
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    // constructor({ name, gender, birthdate }: PersonProps) {
    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      // this.name = name;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // New User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    // name: string;
    firstName: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      // name,
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      // this.person = new Person({ name, gender, birthdate });
      this.person = new Person({ firstName, lastName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1985-10-21'),
    email: 'example@mail.com',
    gender: 'M',
    lastFolderOpen: '/home',
    // name: 'William',
    firstName: 'William',
    lastName: 'Shakespeare',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
