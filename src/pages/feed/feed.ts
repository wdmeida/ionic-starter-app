import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public nome_usuario: string = "Wagner Almeida";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
}
