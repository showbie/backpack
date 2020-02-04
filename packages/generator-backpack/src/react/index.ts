import * as fs from 'fs';
import * as path from 'path';

import Generator = require('yeoman-generator');

type Fields = {
  componentName: string;
};

export default class ReactComponentGenerator extends Generator {
  public fields: Fields = {
    componentName: '',
  };

  constructor(args: any, opts: any) {
    super(args, opts);

    this.argument('componentName', { type: String, required: true });
    this.option('path', { type: String, default: process.cwd() });
  }

  // public async prompting() {}

  public writing(): void {
    let templateDir = `${__dirname}/templates`;
    let { componentName, path: destPath } = this.options;

    this.fields.componentName = componentName;

    fs.readdirSync(templateDir).forEach((file) => {
      this.fs.copyTpl(
        // util.format()
        this.templatePath(path.join(templateDir, file)),
        this.destinationPath(path.join(destPath, componentName, file)),
        this.fields
      );
    });
  }
}
