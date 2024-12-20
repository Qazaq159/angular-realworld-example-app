import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Profile } from "../models/profile.model";
import { HttpClient } from "@angular/common/http";
import {
  currentProfile,
  joulaniProfile,
  zelenskyProfile,
} from "../services/mockProfile";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(private readonly http: HttpClient) {}

  get(username: string): Observable<Profile> {
    if (username === currentProfile.username) return of(currentProfile);
    else if (username === joulaniProfile.username) return of(joulaniProfile);
    else if (username === zelenskyProfile.username) return of(zelenskyProfile);
    else
      return this.http.get<{ profile: Profile }>("/profiles/" + username).pipe(
        map((data: { profile: Profile }) => data.profile),
        shareReplay(1),
      );
  }

  follow(username: string): Observable<Profile> {
    let resp = { profile: currentProfile };
    if (username === zelenskyProfile.username) resp.profile = zelenskyProfile;
    else if (username === joulaniProfile.username)
      resp.profile = joulaniProfile;

    if (resp.profile === currentProfile)
      return this.http
        .post<{ profile: Profile }>("/profiles/" + username + "/follow", {})
        .pipe(map((data: { profile: Profile }) => data.profile));
    resp.profile.following = true;
    return of(resp).pipe(map((data: { profile: Profile }) => data.profile));
  }

  unfollow(username: string): Observable<Profile> {
    let resp = { profile: currentProfile };
    if (username === zelenskyProfile.username) resp.profile = zelenskyProfile;
    else if (username === joulaniProfile.username)
      resp.profile = joulaniProfile;

    if (resp.profile === currentProfile)
      return this.http
        .delete<{ profile: Profile }>("/profiles/" + username + "/follow")
        .pipe(map((data: { profile: Profile }) => data.profile));
    resp.profile.following = false;
    return of(resp).pipe(map((data: { profile: Profile }) => data.profile));
  }
}
