import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'contentTypeFilterPipe',
  standalone: true
})

export class ContentTypeFilterPipePipe implements PipeTransform {
transform(contents: Content[], type: string): Content[] {
  if (!type) {
    return contents.filter(content => !content.type);
  } else {
    return contents.filter(content => content.type === type);
  }
}
}


/* export class ContentTypeFilterPipePipe implements PipeTransform {

  // transform(contents: unknown, ...args: unknown[]): unknown {
  //   return null;
  }

} */
