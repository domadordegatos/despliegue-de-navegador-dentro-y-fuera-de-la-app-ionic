import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private inBro:InAppBrowser) {}

  notices = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://casanare.extra.com.co/noticias/local/noticias-positivas-anunciaron-la-construccion-de-una-variant-606338"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://casanare.extra.com.co/noticias/local/personeria-municipal-sigue-trabajando-603974"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://casanare.extra.com.co/noticias/econom%C3%ADa/productores-de-semilla-seleccionada-en-el-casanare-acatan-la-603427"
      }
  ]

  openURL(url:string, target:string){
    const link = url;
    let options: InAppBrowserOptions = {
      zoom: 'no',
      footercolor: 'red'
    }
    this.inBro.create(link,target,options);
    /* this.inBro.create('https://www.google.com','_system'); */
  }

  }
