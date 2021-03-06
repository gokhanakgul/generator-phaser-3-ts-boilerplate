'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');
const path = require('path');
const chalk = require('chalk');
const foldername = path.basename(process.cwd());

module.exports = class extends Generator {


  initializing() {
    this.props = {};
  }

  prompting() {
    this.log(
      yosay(
        `Welcome to the good ${chalk.red('generator-phaser-3-ts-boilerplate')} generator!`
      )
    );
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: "What's the name of your application(in English Please)",
        default: foldername
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: "What's the description of your application(optional):"
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: "Who's the author of your application(optional):"
      },
      {
        type: 'input',
        name: 'projectAuthorEmail',
        message: "What's the author's email of your application(optional):"
      }
    ]).then(answers => {
      this.projectName = answers.projectName ? answers.projectName : foldername;
      this.projectDesc = answers.projectDesc ? answers.projectDesc : '';
      this.projectAuthor = answers.projectAuthor ? answers.projectAuthor : '';
      this.projectAuthorEmail = answers.projectAuthorEmail
        ? answers.projectAuthorEmail
        : '';
    });
  }
  configuring() {
    this.config.set('projectName', this.projectName);
    this.config.set('projectDesc', this.projectDesc);
    this.config.set('projectAuthor', this.projectAuthor);
    this.config.set('projectAuthorEmail', this.projectAuthorEmail);
  }

  writing() {
    this.fs.copy(this.templatePath('assets'), this.destinationPath('assets'), this);

    this.fs.copy(this.templatePath('src'), this.destinationPath('src'), this);

    this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'),this);

    this.fs.copyTpl(this.templatePath('_index.html'), this.destinationPath('index.html'),this);

    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'),this);

    this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'),this);

    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'),this);

    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'),this);

    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'),this);
  }

  install() {
    this.installDependencies();
  }

};

