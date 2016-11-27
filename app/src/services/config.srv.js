export default () => {
    return{
        'ToolBar' : {
            'scrollShadow' : 2,
            'scrollShrink' : true
        },
        'Achitecture' : [
            {
                display:'app',
                items:[
                        {
                            display: 'assets', item: [
                                {
                                    display: 'svg', item: [
                                        {
                                            display:'angular-logo.svg',
                                            stateName: 'angular-logo.svg'
                                        },
                                        {
                                            display:'menu.svg',
                                            stateName: 'menu.svg'
                                        }

                                    ]
                                },
                                {
                                    display:'vscode.gif',
                                    stateName: 'vscode.gif'
                                },
                                {
                                    display:'whashedout.png',
                                    stateName: 'whashedout.png'
                                }
                            ]
                        },
                        {
                            display : 'src', item: [
                                
                            ]
                        },
                        {
                            display: 'styles', item: [
                                {
                                    display:'main.css',
                                    stateName: 'main.css'
                                }
                            ]
                        },
                        {
                            display:'boot.js',
                            stateName: 'boot.js'
                        }
                ]
            },
            {
                display:'app.js',
                stateName:'app.js'
            },
            {
                display:'gulpfile.js',
                stateName:'gulpfile.js'
            },
            {
                display:'index.html',
                stateName:'index.html'
            },
            {
                display:'package.json',
                stateName:'package.json'
            },
            {
                display:'README.md',
                stateName:'README.md'
            }
        ]
    }
    
}