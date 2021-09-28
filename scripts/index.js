if(localStorage.getItem('theme')!==undefined){
        const theme = localStorage.getItem('theme');
        document.getElementById('main').className = theme;
        if(theme==='light'){
        }
        else if(theme==='dark'){
        }
    }
    else{
        document.getElementById('main').className = 'light';
    }
    
    function switchTheme(){
        const element = document.getElementById('main');
        if(element.className==='light'){
            element.className='dark';
            localStorage.setItem('theme', 'dark');
        }
        else{
            element.className='light';
            localStorage.setItem('theme', 'light');
        }
    }