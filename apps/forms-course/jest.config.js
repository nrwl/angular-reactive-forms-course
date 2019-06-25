module.exports = {
  name: 'forms-course',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/forms-course',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
