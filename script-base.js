'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');
var _ = require('underscore.string');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = _.slugify(_.humanize(this.appname));
  this.scriptAppName = _.camelize(this.appname) + angularUtils.appName(this);

  this.cameledName = _.camelize(this.name);
  this.classedName = _.classify(this.name);

  this.filters = this.config.get('filters');
  this.sourceRoot(path.join(__dirname, '/templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase);
