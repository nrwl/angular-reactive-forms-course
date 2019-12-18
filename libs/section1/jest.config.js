module.exports = {
  name: 'section1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
