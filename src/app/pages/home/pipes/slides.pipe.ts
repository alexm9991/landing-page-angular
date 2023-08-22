import { Pipe, PipeTransform } from '@angular/core';

const COUNT_SLIDES_BY = 3;

@Pipe({
  name: 'Slides'
})
export class SlidesPipe implements PipeTransform {

  transform(list: any[]): any[] {

    if (!list) return []

    const slides = list.reduce((previousValue, _, i, array) => {

      if (i % COUNT_SLIDES_BY === 0) {
        previousValue.push(array.slice(i, i + COUNT_SLIDES_BY));
      }

      return previousValue;

    }, []);

    return slides;
  }

}
