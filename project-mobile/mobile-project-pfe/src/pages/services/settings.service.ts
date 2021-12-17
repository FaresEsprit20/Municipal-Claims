import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';

@Injectable()

export class SettingsService {

  constructor(private storage: Storage)
  {

  }

  setValue(key: string, value: any)
  {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);

    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }

  getValue(key: string)
  {
    return this.storage.get(key).then((result) => {
      console.log(result);
      return result;
    });
  }

}
