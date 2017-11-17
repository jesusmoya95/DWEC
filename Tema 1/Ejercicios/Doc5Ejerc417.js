for (i=1;i<=10;i++){
    document.write('Tabla del ' + i + ':')
    document.write('<br>')
    for (j=1;j<=10;j++){
        document.write(i+ 'x' + j + '=' + i*j)
        document.write('<br>')
    }
    document.write('<br><br>')
}