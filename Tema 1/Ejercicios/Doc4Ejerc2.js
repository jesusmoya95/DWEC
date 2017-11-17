function helloWorld(a) {
    switch (a){
        case 'en':
            document.write('Hello, world');
            break;
        case 'es':
            document.write('Hola mundo');
            break;
        case 'fr':
            document.write('Salut monde');
            break;
        default:
            document.write('Hello, world');
            break;
             }
}
idioma = prompt('IDIOMA');
helloWorld(idioma)