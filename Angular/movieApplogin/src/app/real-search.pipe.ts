import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realSearch'
})
export class RealSearchPipe implements PipeTransform {

  transform(  allMovies : any , word : string  ): any {

    return allMovies.filter(function(el:any) {

      return el.title.toLocaleLowerCase().includes(word.toLocaleLowerCase())
    
    })


  }

}
