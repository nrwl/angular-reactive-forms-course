module.exports = {
  name: 'section3',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
