'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

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

describe('generator-phaser-3-ts-boilerplate:app', () => {
  it('generate a project', function() {
    // The object returned acts like a promise, so return it to wait until the process is done
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        projectName: 'testProject',
        projectDesc: 'testProject Description',
        projectAuthor: 'Test Developer',
        projectAuthorEmail: 'test@Developer.com'
      })
      .then(function() {
        assert.file(['.gitignore']);
      });
  });
});
