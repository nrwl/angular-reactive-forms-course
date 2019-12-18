module.exports = {
  name: 'section2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
