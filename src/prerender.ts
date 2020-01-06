import { renderModuleFactory } from '@angular/platform-server'
import { writeFileSync } from 'fs'
const { AppServerModuleNgFactory } = require('../dist/LaymanWoods-server/main')

renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/'
})
    .then(html => {
        console.log('Prerendering successfull!');
        writeFileSync('./prerender.html', html);
    })
    .catch(error => {
        console.error('Error occured:', error);
    })