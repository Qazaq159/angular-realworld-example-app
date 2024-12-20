import { Profile } from "../models/profile.model";
import { User } from "../../../core/auth/user.model";

export let currentProfile: Profile = {
  username: "yerke0422",
  bio: "Hey i am first here",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcN9bA44ervDF9H7yCsD35s7QOD9ggQM12p3A0WlFAdaGMNgE94_SzSmh1iSG2VWPwSo&usqp=CAU",
  following: true,
};

export let joulaniProfile: Profile = {
  username: "al_joulany",
  bio: "Al Ahaba ben hulaqo",
  image:
    "https://www.pbs.org/wgbh/frontline/wp-content/uploads/2021/06/Jolani.jpg",
  following: false,
};

export let zelenskyProfile: Profile = {
  username: "vladik_zelenskiy",
  bio: "Sholomni Euro Union!",
  image:
    "https://s7d1.scene7.com/is/image/wbcollab/zelensky-2?qlt=90&fmt=webp&resMode=sharp2",
  following: false,
};

export let currentUser: User = {
  email: "yerke@gmail.com",
  token: "JWT:256:sdsadsad123213213",
  username: currentProfile.username,
  bio: currentProfile.bio,
  image: currentProfile.image,
};

export let joulaniUser: User = {
  email: "aljoulany@gov.sy",
  token: "JWT:256:asdsa2213213sadsad$",
  username: joulaniProfile.username,
  bio: joulaniProfile.bio,
  image: joulaniProfile.image,
};

export let zelenskyUser: User = {
  email: "zelensky@gov.ua",
  token: "JWT:256:1231jhsadsadsad$$@213",
  username: zelenskyProfile.username,
  bio: zelenskyProfile.bio,
  image: zelenskyProfile.image,
};
