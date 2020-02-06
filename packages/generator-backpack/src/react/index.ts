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

  /**
   * @todo Possible options for generating components:
   *       1. Functional or Class-based
   *       2. Tests or no tests
   */
  // public async prompting() {}

  public writing(): void {
    let templateDir = `${__dirname}/templates`;
    let { componentName, path: destPath } = this.options;

    this.fields = {
      pascalName: pascalCase(componentName),
      slugName: paramCase(componentName),
    };

    fs.readdirSync(templateDir).forEach((file) => {
      let fileName = file.replace(/component/, pascalCase(componentName));

      this.fs.copyTpl(
        this.templatePath(path.join(templateDir, file)),
        this.destinationPath(path.join(destPath, componentName, fileName)),
        this.fields
      );
    });
  }
}
