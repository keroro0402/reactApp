import { EmblaOptionsType } from 'embla-carousel';
interface Obj {
  name: string;
  url: string;
}

export interface naviLinkType {
  title: Obj;
  subNavi: {
    top: Obj;
    info: Obj;
    todo: Obj;
  };
}

export interface TodoObjType {
  id: string;
  title: string;
}
export interface ImageItem {
  id: string; // 画像ID
  fullpath: string; // 画像のフルパス
}

export interface ImageAPIOb {
  fields: {
    id: {
      stringValue: string;
      integerValue: string;
    };
    path: {
      stringValue: string;
      integerValue: string;
    };
    filename: {
      stringValue: string;
      integerValue: string;
    };
    [key: string]: {
      stringValue: string;
      integerValue: string;
    };
  };
}

export type LinkType = {
  linkInfo: {
    name: string;
    url: string;
  };
};

export type TodoListType = {
  todoInfo: {
    id: string;
    title: string;
  };
  deleteTodo: (id: string) => void;
};

export type TodoFormType = {
  addTodo: (todo: TodoObjType) => void;
};

export type MessageType = {
  complete: string;
  add: string;
  nothingTodo: string;
};

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type PropType_Carousel = {
  slides: string[];
  options?: EmblaOptionsType;
};

export type Comment = {
  id: number;
  comment: string;
};
