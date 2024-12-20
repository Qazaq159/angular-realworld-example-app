import { Article } from "../models/article.model";
import {
  joulaniProfile,
  zelenskyProfile,
} from "../../profile/services/mockProfile";

export let articles: Article[] = [
  {
    slug: "palestine-genocide-ends",
    title: "Palestine Genocide is on end",
    description: "sdasd asdasd asdjskald asd asjkd asdaksjd asd asjkdlasd",
    body:
      "ashdasjd asdh asjkdasas  j dkj  jkashdjksa hdkjash khdjkash djkashd jkashd jkashdkj" +
      " ashshdjk ashdj h sajkdh asjhd jkashdjk  ajskdhsajkdh  ajkshd jkashdjk h djhsa dksjahd" +
      " jkashd j asdjashjk asjkdhasjk hjkash djaks sadadj asdhsajh sadjhs ajdh jakshd ajskhd sa" +
      "asdasdjd asd hsajkd assdj hsakdh jkashd jaskhd aj",
    tagList: ["politics"],
    createdAt: "2024-12-15 17:31",
    updatedAt: "2024-12-15 17:31",
    favorited: true,
    favoritesCount: 45345,
    author: joulaniProfile,
  },
  {
    slug: "war-in-ukraine-comes-to-its-end",
    title: "Ukraine War in Cryme becoming better",
    description: "sdasd Ukraine asdjskald asd asjkd Ukraine asd asjkdlasd",
    body:
      "ashdasjd asdh asjkdasas  j dkj  jkashdjksa hdkjash khdjkash djkashd jkashd jkashdkj" +
      " ashshdjk ashdj h Ukraine asjhd jkashdjk  ajskdhsajkdh  ajkshd jkashdjk h djhsa dksjahd" +
      " Ukraine j asdjashjk asjkdhasjk hjkash Ukraine sadadj asdhsajh sadjhs ajdh jakshd ajskhd sa" +
      "asdasdjd asd hsajkd assdj Ukraine jkashd jaskhd aj",
    tagList: ["politics"],
    createdAt: "2024-12-12 17:31",
    updatedAt: "2024-12-12 17:31",
    favorited: true,
    favoritesCount: 22284,
    author: zelenskyProfile,
  },
];
