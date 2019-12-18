module.exports = {
  name: 'section6',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section6',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
