module.exports = {
  name: 'sfb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sfb',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
