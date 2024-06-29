
//(()=> {	modeSwitcher()})();

(()=> {	
 	if( sessionStorage.getItem('theme') === '' || sessionStorage.getItem('theme') == null  ){
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', sessionStorage.getItem('theme'));
		sessionStorage.setItem('theme', sessionStorage.getItem('theme'));
	} 
	if( sessionStorage.getItem('switch-checked') === 'true')
	  document.documentElement.getElementsByClassName('switch')[0].checked = true;
})()

function modeSwitcher() {
	//document.documentElement.setAttribute('data-theme', 'dark');
	//sessionStorage.setItem('theme', 'dark');
	let currentTheme = document.documentElement.getAttribute('data-theme');
	
	if (currentTheme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.documentElement.getElementsByClassName('switch')[0].checked =true;
		sessionStorage.setItem('switch-checked', 'true');
	} 
	
	if (currentTheme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.documentElement.getElementsByClassName('switch')[0].checked = false;
		sessionStorage.setItem('switch-checked', 'false');
	} 
}

// 	if (currentTheme === "dark") {
// 		document.documentElement.setAttribute('data-theme', 'light');
// 		sessionStorage.setItem('theme', 'light');
// 	}	else if (currentTheme === "light") {
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		sessionStorage.setItem('theme', 'dark');
// 	}else{
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		sessionStorage.setItem('theme', 'dark');
// 	}
// }
