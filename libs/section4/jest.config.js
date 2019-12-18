module.exports = {
  name: 'section4',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/section4',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
