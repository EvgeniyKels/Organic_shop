export interface User {
  uuid: string;
  displayedName: string;
  email: string;
}
export abstract class AuthService {
  abstract getUser(): User;
  abstract loginWithGoogle();
  abstract logout();

  abstract isAdmin(): boolean ;
}
