const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.Image = window.Image;
global.Node = window.Node;
global.Blob = dom.window.Blob;
global.URL = dom.window.URL;
global.URL.createObjectURL = function (blob) {
  return new Blob();
};
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(200, 200);

const FileIcon = require('../dist/FileIcon').default;

describe('Create FileIcon', () => {
  it('should return an image', async () => {
    const icon = new FileIcon();
    const isImage = await icon.create('jpg').then(function (icon) {
      return icon instanceof Image;
    });
    expect(isImage).to.equal(true);
  });
});

describe('Create FileIcon with a purple theme', () => {
  it('should return image with a data-theme=purple attribute', async () => {
    const icon = new FileIcon({ theme: 'purple' });
    const isPurple = await icon.create('jpg').then(function (icon) {
      return icon.dataset.theme == 'purple';
    });
    expect(isPurple).to.equal(true);
  });
});
