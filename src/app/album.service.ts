import { Injectable } from '@angular/core';
import { Album } from './album.model';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.albums = db.list('albums');
  }

  getAlbums() {
      return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
    return this.db.object('albums/' + albumId);
  }
}
