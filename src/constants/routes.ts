import { toUrl } from "@/utils";

export enum ApiRoutes {}

export enum PageRoutes {
  Home = "/",
  Signin = "/auth/signin",
  Signup = "/auth/signup",
  CompetitionList = "/competition/list",
  CompetitionRegister = "/competition/register",
  CompetitionDetail = "/competition/:id?",
  LessonList = "/lesson/list",
  LessonRegister = "/lesson/register",
  ClubList = "/club/list",
  ClubRegister = "/club/register",
  PlayerList = "/player/list",
  PlayerRegister = "/player/register",
}

export const menu = [
  { label: "대회 목록", url: toUrl(PageRoutes.CompetitionList) },
  { label: "선수 목록", url: toUrl(PageRoutes.PlayerList) },
  { label: "레슨 목록", url: toUrl(PageRoutes.LessonList) },
  { label: "클럽 목록", url: toUrl(PageRoutes.ClubList) },
];