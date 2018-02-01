import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.fetchMovies();
  }

  ionViewDidEnter() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.presentLoading();

    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const obj_return = JSON.parse(response._body);
        this.lista_filmes = obj_return.results;
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      });
  }
}
