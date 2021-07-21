const { expect } = require('chai');
const FileIcon = require('../dist/FileIcon').default;

describe('Create FileIcon', () => {
  it('should return a blob', () => {
    console.log(FileIcon);
    const icon = new FileIcon();
    const blob = icon.create('jpg');
    console.log(typeof blob);
    const isBlob = blob instanceof Blob;
    expect(isBlob).to.equal(true);
  });
});
