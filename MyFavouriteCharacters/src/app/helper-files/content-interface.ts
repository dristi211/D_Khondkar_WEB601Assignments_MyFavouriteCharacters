export  interface Content {

    id: number | null; //this will accepts null id values
    year: number;
    ISBN: GLfloat;
    title: string;
    description: string;
    creator: string;
    imageUrl?: string;
    type?: string;
    tags?: string[];
  }