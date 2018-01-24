import { Injectable } from '@angular/core';

const CONFIG_KEY_NAME = 'config'

@Injectable()
export class ConfigProvider {

  private config: object = {
    showSlide: false,
    name: '',
    username: ''
  }

  constructor() {}

  public getConfigData(): any {
    return localStorage.getItem(CONFIG_KEY_NAME)
  }

  public setConfigData(showSlide?: boolean, name?: string, username?: string): void {
    let config = {
      showSlide: false,
      name: '',
      username: ''
    }

    if (showSlide) {
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(CONFIG_KEY_NAME, JSON.stringify(config));
  }
}
