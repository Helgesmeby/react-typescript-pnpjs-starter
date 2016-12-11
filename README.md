# React + TypeScript + PnPJS starter
Boilerplate starter repo for React + Typescript + PnPJS. The purpose of this repo is to quickly get started with developing SharePoint framework-ready applications, and to serve as training material for developers who are unfamiliar with the tech. 

## Get started
1. Download [NodeJS](https://nodejs.org/en/download/)
2. Clone [this repo](https://github.com/Helgesmeby/react-typescript-pnpjs-starter.git) to your machine
4. Install gulp & typescript gobally with `npm install -g typescript gulp` 
5. Run `npm init`
6. Edit files in `\src\`
7. Compile with `webpack`

## Installing 
This starter repo supports two modes of installing the app to your tenant. Either by mapping a drive on your file system, or by running powershell. 

### Installing with powershell
Modify and run the installation script in `\install\powershell-example.ps1`

### Installing to a mapped drive
1. Map a network drive to your `/SiteAssets/` library (Remember to check the `Remember me`checkbox when logging in, and the tenant must be in your trusted sites)
2. Edit the `localFilesDirectory` property in `gulpfile.js`
3. Run `gulp`. 