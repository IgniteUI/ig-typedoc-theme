import * as path from 'path';
import * as fs from 'fs';

export function getConfigData(prop: string, lang: any) {
  const fileName = 'config.json';
  let config;
  let data;

  if (this.settings && fs.existsSync(this.settings.theme)) {
      const normalizedPath = path.join(this.settings.theme, fileName);
      config = JSON.parse(fs.readFileSync(normalizedPath, 'utf8'));
  }

  const settingOpt = this.settings && this.settings.localize ? this.settings.localize : 'en';
  const getLang = lang.name ? settingOpt : lang;
  
  if (config && getLang && process.env.NODE_ENV) {
      data = config[getLang][process.env.NODE_ENV.trim()];
  }

  return data ? data[prop] : '';
}