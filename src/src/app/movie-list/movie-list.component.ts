import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movielist:any;
  searchText:any;
storedArray:any;
loader=true;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    console.log('component called')
    this.movieService.getMovieList().subscribe((res:any)=>{
      res.Search.forEach(element => {
        element['checked'] = false;
      });
      this.movielist = res.Search;
      this.storedArray = res.Search;
      this.loader =false;
      console.log(this.movielist,'with checj list')
  })
}
searchData(val){
  let listArray =  this.storedArray;
  if (val && val.trim() != '') {
    this.movielist = listArray.filter((item) => {
      return (item.Title.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
    })
  } else {
    this.movielist = this.storedArray;
  }
}
onChangeCheck(i){
 let a = this.movielist.splice(i,1);
 a[0]['checked'] = true;
 this.movielist.push(a[0]);
}

}
