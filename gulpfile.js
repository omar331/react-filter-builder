var gulp = require('gulp');
let webpack = require('gulp-webpack')
var log = console.log.bind(console)
var chalk = require('chalk');
let gulpWebpack = require('gulp-webpack');

let deployHelper = require('./deploy-helper.js')

const exec = require('child_process').exec

/*
     -- Configurações gerais para execução da tarefa selecionada
*/
let application = process.env.APPLICATION_TASK
let environment = process.env.ENVIRONMENT_TASK

// -- Servidor para a onde a aplicação deve ser "deploada" (ver docker/config.yml)
let deployServer = process.env.DEPLOY_SERVER

// --- configurações gerais da aplicação (ver docker/config.yml)
let configs = JSON.parse(process.env.CONFIGS)

/* --- configurações padrão --- */
let entryPoint = 'src/main'


/*
     --- make dist ---
 */
gulp.task('make-dist', function() {

    let extraConfig = {}
    webpackHelper.makeDist(application, environment, extraConfig, entryPoint)
})

