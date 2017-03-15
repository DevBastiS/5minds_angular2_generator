"use strict"

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('generate', {type: String, required: true});
  }
  
  start() {
    switch (this.options.generate) {
      case 'module':
        this._modulePrompting();
        break;
      default:
        break;
    }
  }


  _modulePrompting() {
    return this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'Modulname'
    }]).then((answer) => {
      const moduleFileName = answer.moduleName.toLowerCase();
      const moduleName = answer.moduleName.replace(/-/g, '');
      this._createModule(moduleName, moduleFileName);
    });
  }

  _createModule(moduleName, moduleFileName) {
    const moduleCompName = moduleName[0].toLowerCase() + moduleName.substring(1);
    this.fs.copyTpl(
      this.templatePath('module/component.ts'),
      this.destinationPath(`src/app/modules/${moduleFileName}/${moduleFileName}.component.ts`),
      {moduleName: moduleName, moduleFileName: moduleFileName, moduleCompName: moduleCompName}
    );
    this.fs.copyTpl(
      this.templatePath('module/component.html'),
      this.destinationPath(`src/app/modules/${moduleFileName}/${moduleFileName}.component.html`),
      {moduleName: moduleName}
    );
    this.fs.copyTpl(
      this.templatePath('module/component.css'),
      this.destinationPath(`src/app/modules/${moduleFileName}/${moduleFileName}.component.css`)
    );
    this.fs.copyTpl(
      this.templatePath('module/module.ts'),
      this.destinationPath(`src/app/modules/${moduleFileName}/${moduleFileName}.module.ts`),
      {moduleName: moduleName, moduleFileName: moduleFileName}
    );
    this.log('WARNING! Didnt Update App Module')
    this.fs.copyTpl(
      this.templatePath('module/routing.module.ts'),
      this.destinationPath(`src/app/modules/${moduleFileName}/${moduleFileName}-routing.module.ts`),
      {moduleName: moduleName, moduleFileName: moduleFileName}
    );
    this.fs.copyTpl(
      this.templatePath('module/service.ts'),
      this.destinationPath(`src/app/modules/${moduleFileName}/services/${moduleFileName}.service.ts`),
      {moduleName: moduleName, moduleFileName: moduleFileName, moduleCompName: moduleCompName}
    );
    this.fs.copyTpl(
      this.templatePath('module/repository.ts'),
      this.destinationPath(`src/app/modules/${moduleFileName}/repositories/${moduleFileName}.repository.ts`),
      {moduleName: moduleName, moduleFileName: moduleFileName}
    );
    this.log('WARNING! Generating it does not replace checking it!')
  }
};

