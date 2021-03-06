import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: any;
  searchText: any;
storedArray: any;
loader = true;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe((res: any) => {
      res.Search.forEach(element => {
        element.checked = false;
      });
      this.movieList = res.Search;
      this.storedArray = res.Search;
      this.loader = false;
  });
}
searchData(val) {
  const listArray =  this.storedArray;
  if (val && val.trim() != '') {
    this.movieList = listArray.filter((item) => {
      return (item.Title.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
    });
  } else {
    this.movieList = this.storedArray;
  }
}
onChangeCheck(i) {
 const a = this.movieList.splice(i, 1);
 a[0].checked = true;
 this.movieList.push(a[0]);
}

}
