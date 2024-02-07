export  interface Content {
    id: number;
    year: number;
    ISBN: GLfloat;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
  }