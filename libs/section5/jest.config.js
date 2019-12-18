module.exports = {
  name: 'section5',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section5',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
