#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let Template = require('./project/TemplateModules/Template.js')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
  let success = await createReactApp()
  if (!success) {
    console.log('Something went wrong while trying to create a new React app using create-react-app.'.red)
    return false;
  }
  await cdIntoNewApp()
  await installDevPackages()
  await installProdPackages()
  await createFolders()
  await writeTemplates()

  console.log('\nAll done and ready to go!\n'.green)
}

const createReactApp = () => {
  return new Promise(resolve => {
    console.log('Running create-react-app...'.cyan)
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, () => {
        console.log('\nSuccessfully ran create-react-app\n'.green)
        resolve(true)
      })
    } else {
      console.log('\nNo app name was provided.'.red)
      console.log('\nProvide an app name in the following format: ')
      console.log('\ncreate-fukuro-react-app your-app-name\n'.cyan)
      resolve(false)
    }
  })
}

const cdIntoNewApp = () => {
  return new Promise(resolve => {
    shell.cd(appDirectory)
    resolve()
  })
}

const installDevPackages = () => {
  return new Promise(resolve => {
    console.log('\nInstalling react-router-dom and node-sass...\n'.cyan)
    shell.exec(`npm install -D react-router-dom node-sass --save`, () => {
      console.log('\nSuccessfully installed packages\n'.green)
      resolve()
    })
  })
}

const installProdPackages = () => {
  return new Promise(resolve => {
    console.log('\nInstalling axios, highcharts, bootstrap, jquery and popper.js...\n'.cyan)
    shell.exec(`npm install axios highcharts bootstrap jquery popper.js --save`, () => {
      console.log('\nSuccessfully installed packages\n'.green)
      resolve()
    })
  })
}

const createFolders = () => {
  return new Promise(resolve => {
    console.log('\nCreating folder structure...'.cyan)
    shell.cd('src')
    shell.mkdir('Services')
    shell.mkdir('Data')
    shell.mkdir('Assets')
    shell.cd('Assets')
    shell.mkdir('Img')
    shell.mkdir('Styles')
    shell.cd('../')
    shell.mkdir('Components')
    shell.cd('Components')
    shell.mkdir('Pages')
    shell.mkdir('Layout')
    shell.cd('../')
    shell.mkdir('Contexts')
    console.log('\nSuccessfully Created folder structure\n'.green)
    resolve()
  })
}

const writeTemplates = () => {
  return new Promise(resolve => {
    console.log('\nWriting template files...'.cyan)
    let promises = []
    Object.keys(Template).forEach((fileName, i) => {
      promises[i] = new Promise(resolve => {
        fs.writeFile(`${appDirectory}/${fileName}`, Template[fileName], function (err) {
          if (err) { return console.log(err) }
          resolve()
        })
      })
    })
    Promise.all(promises).then(() => {
      console.log('\nSuccessfully wrote all template files.\n'.green)
      resolve()
    })
  })
}

run()
