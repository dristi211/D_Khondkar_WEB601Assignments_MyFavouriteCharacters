export  interface Content {

    id: number;
    year: number;
    ISBN: GLfloat;
    title: string;
    description: string;
    creator: string;
    image?: string;
    type?: string;
    tags?: string[];
  }