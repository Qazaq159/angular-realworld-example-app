import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class TagsService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<string[]> {
    let tags = ["history", "gamedev", "politics"];

    return of(tags);
    //   return this.http
    //     .get<{ tags: string[] }>("/tags")
    //     .pipe(map((data) => data.tags));
  }
}
