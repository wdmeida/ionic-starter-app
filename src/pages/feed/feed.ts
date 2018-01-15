import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public obj_feed = {
    title: 'Wagner Almeida',
    date: 'February 28, 1987',
    description: 'Estou aprendendo a desenvolver utilizando Ionic.',
    qtd_likes: 12,
    qtd_comments: 4,
    time_comments: '11h ago' 
  }

  public lista_filmes= new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.lista_filmes = obj_return.results;
        console.log(obj_return);
      }, error => {
        console.log(error);
      });
  }
}
