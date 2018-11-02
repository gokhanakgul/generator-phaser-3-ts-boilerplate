'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const basedir = path.join(__dirname, '../generators/app');

const projectNameVal = 'test projectName';
const projectDescVal = 'test projectDesc';
const projectAuthorVal = 'test Author';
const projectAuthorEmailVal = 'test@test.com';

describe('generator-phaser-3-ts-boilerplate:app', () => {
  describe('test with options', () => {
    it('projectName, projectDesc, projectAuthor, projectAuthorEmail', done => {
      helpers
        .run(basedir)
        .withPrompts({
          projectName: projectNameVal,
          projectDesc: projectDescVal,
          projectAuthor: projectAuthorVal,
          projectAuthorEmail: projectAuthorEmailVal
        })
        .on('end', () => {
          assert.file(['.gitignore']);
          done();
        });
    });
  });
});
/*
It('generate a project', function() {
  // The object returned acts like a promise, so return it to wait until the process is done
  return helpers
    .run(basedir)
    .withPrompts({
      projectName: projectNameVal,
      projectDesc: 'testProject Description',
      projectAuthor: 'Test Developer',
      projectAuthorEmail: 'test@Developer.com'
    })
    .then(function() {
      assert.file(['.gitignore']);
    });
});
*/
// Const fs = require('fs');
// const fsextra = require('fs-extra');

/*
Describe('generator-phaser-3-ts-boilerplate:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      projectName: 'testProject',
      projectDesc: 'testProject Description',
      projectAuthor: 'Test Developer',
      projectAuthorEmail: 'test@Developer.com'
    });
  });

  it('creates files', () => {
    assert.file(['.gitignore']);
  });
});
*/
