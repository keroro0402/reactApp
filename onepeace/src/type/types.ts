interface Ob {
  name: string;
  url: string;
}

export interface naviLinkType {
  title: Ob;
  top: Ob;
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