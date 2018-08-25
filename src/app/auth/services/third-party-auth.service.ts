import { Injectable } from "@angular/core";

import { FitBitAuthService } from "../../fitbit-auth/services/fit-bit-auth.service";
import { UserService } from "../../shared/services/user.service";
import { User } from "../../shared/models/user";

@Injectable()
export class ThirdPartyAuthService {
  constructor(
    private userService: UserService,
    private fitBitAuthService: FitBitAuthService) {
  }

  getThirdPartyAuthIfNeeded(user: User) {
    this.userService.setUser(user);
    if (!this.fitBitAuthService.authenticated) {
      // navigate to the authentaction service;
      window.location.href = this.fitBitAuthService.authUrl;
    }
  }
}
