import { Pipe, PipeTransform } from '@angular/core';
import { LoginDataList } from '../list-login/list-login'; // adjust the path as needed

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: LoginDataList[], searchText: string): LoginDataList[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.username.toLowerCase().includes(searchText)||
       item.password.toLowerCase().includes(searchText)

    );
  }
}
