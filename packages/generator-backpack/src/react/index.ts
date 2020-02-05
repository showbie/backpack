import * as fs from 'fs';
import * as path from 'path';

import { paramCase, pascalCase } from 'change-case';

import Generator = require('yeoman-generator');

type Fields = {
  pascalName: string;
  slugName: string;
};

export default class ReactComponentGenerator extends Generator {
  public fields: Fields = {
    pascalName: '',
    slugName: '',
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

    this.fields = {
      pascalName: pascalCase(componentName),
      slugName: paramCase(componentName),
    };

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
