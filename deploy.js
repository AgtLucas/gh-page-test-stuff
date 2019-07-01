const gh = require('gh-pages')
const path = require('path')
const fs = require('fs')

const DIST_PATH = 'dist';

fs.copyFile('package-lock.json', `${DIST_PATH}/package-lock.json`, (err) => {
  if (err) throw err
  console.log('File copied!!!')
})

gh.publish(DIST_PATH, (err) => {
  if (err) {
    console.log('Ops!', err)
  } else {
    console.log('Update site [ci skip]!')
  }
})
