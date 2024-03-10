export type SavedMock = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  category: CategoryMock;
  totalProgress: number;
  duration: number;
};

export type CategoryMock = {
  id: string;
  name: string;
};

export type ProgressMock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  saved: SavedMock;
  beforeProgress: number;
  afterProgress: number;
  comment: string;
  initialProgress: number;
};

export type UserMock = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
  saved: SavedMock[];
  progress: ProgressMock[];
  loggedIn: boolean;
};

export const categories: CategoryMock[] = [
  { id: "1", name: "Book" },
  { id: "2", name: "Movie" },
  { id: "3", name: "TV Series" },
];

export const savedMock: SavedMock[] = [
  {
    id: "1",
    name: "The Alchemist",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: categories[0],
    totalProgress: 177,
    duration: 660,
  },
  {
    id: "2",
    name: "The Matrix",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: categories[1],
    totalProgress: 5,
    duration: 120,
  },
  {
    id: "3",
    name: "Breaking Bad",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: categories[2],
    totalProgress: 32,
    duration: 990,
  },
];

export const progress: ProgressMock[] = [
  {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    saved: savedMock[0],
    beforeProgress: 0,
    afterProgress: 77,
    comment: "I'm loving this book!",
    initialProgress: 0,
  },
  {
    id: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    saved: savedMock[0],
    beforeProgress: 77,
    afterProgress: 177,
    comment: "I'm loving this book!",
    initialProgress: 100,
  },
  {
    id: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    saved: savedMock[1],
    beforeProgress: 0,
    afterProgress: 5,
    comment: "I'm loving this movie!",
    initialProgress: 5,
  },
  {
    id: "3",
    createdAt: new Date(),
    updatedAt: new Date(),
    saved: savedMock[2],
    beforeProgress: 0,
    afterProgress: 32,
    comment: "I'm loving this series!",
    initialProgress: 32,
  },
];

export const userMock: UserMock = {
  id: "1",
  username: "shadcn",
  email: "",
  avatarUrl: "https://github.com/shadcn.png",
  createdAt: new Date(),
  updatedAt: new Date(),
  saved: savedMock,
  progress: progress,
  loggedIn: true,
};
