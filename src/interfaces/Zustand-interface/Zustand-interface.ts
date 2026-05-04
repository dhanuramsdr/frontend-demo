export interface HeaderState {
  header: boolean;
  setHeader: (value: boolean) => void;
  toggleHeader: () => void;
}

export interface SidenavState {
  sidenav: boolean;
  setSidenav: (value: boolean) => void;
  toggleHeader: () => void;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Userdatainterface {
  userDetails: UserData | null;
  setUserDetails: (value: UserData) => void;
  clearData: () => void;
}

export interface exprotButtonInterface {
  isRequired: boolean;
  setIsrequired: (value: boolean) => void;
  toggleIsrequired: () => void;
}

export interface usersDetails {
  data: [string];
}
