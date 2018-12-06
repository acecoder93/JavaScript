//Creating Container div
var container = document.getElementById('container');


// Header
var headerDiv = document.createElement('div');
container.appendChild(headerDiv);

var nav = document.createElement('nav');
headerDiv.appendChild(nav);
// div.textContent = 'HighOnCoding'

var nav_col1 = document.createElement('col-1');
nav.appendChild(nav_col1);
var nav_col2 = document.createElement('col-1');
nav.appendChild(nav_col2);
var nav_col3 = document.createElement('col-10');
nav.appendChild(nav_col3);
nav_col1.textContent = 'HighOnCoding'
nav_col2.textContent = 'Home'
nav_col3.textContent = 'Categories'

nav.setAttribute('class', 'row text-white p-3')
nav.setAttribute('style','background-color: #59b8fc; height: 95px;')
nav_col1.setAttribute('style', 'padding: 10px; font-size: 25px' )
nav_col2.setAttribute('style', 'padding: 10px; margin: 10px; font-size: 20px' )
nav_col3.setAttribute('style', 'padding: 10px; margin: 10px; font-size: 20px' )


// Curse of the Current Review
var curseDiv = document.createElement('div');
container.appendChild(curseDiv);

var curseCol1 = document.createElement('col-1');
curseDiv.appendChild(curseCol1);
var curseCol2 = document.createElement('col-10');
curseDiv.appendChild(curseCol2);
var curseCol3 = document.createElement('col-1');
curseDiv.appendChild(curseCol3);

curseDiv.setAttribute('class', 'row')
curseDiv.setAttribute('style','height: 170px; margin-top: 20px; margin-bottom: 12px')
curseCol1.setAttribute('style','width: 25%')
curseCol2.setAttribute('style','background-color: rgb(223, 213, 213); width: 800px; height: 175px')
curseCol3.setAttribute('style','width: 25%')

var h3 = document.createElement('h3');
curseCol2.appendChild(h3);
h3.textContent = 'Curse of the Current Review'
h3.setAttribute('style','padding: 10px')

var p = document.createElement('p');
curseCol2.appendChild(p);
p.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
p.setAttribute('style','padding: 10px; font-size: 13px')


// Hello WatchKit
var watchKit =  document.createElement('div');
container.appendChild(watchKit);

var watchRow1 = document.createElement('div');
watchKit.appendChild(watchRow1);
var watchRow2 = document.createElement('div');
watchKit.appendChild(watchRow2);

//watchRow1
var watchCol1 = document.createElement('col-1');
watchRow1.appendChild(watchCol1);
var watchCol2 = document.createElement('col-10');
watchRow1.appendChild(watchCol2);
var watchCol3 = document.createElement('col-1');
watchRow1.appendChild(watchCol3);

var h4 = document.createElement('h4');
watchCol2.append(h4);
h4.textContent = 'Hello Watch Kit'


var p2 = document.createElement('p');
watchCol2.appendChild(p2)
p2.textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


//watchRow2
var watchCol4 = document.createElement('col-1');
watchRow2.appendChild(watchCol4);
var watchCol5 = document.createElement('col-10');
watchRow2.appendChild(watchCol5);
var watchCol6 = document.createElement('col-1');
watchRow2.appendChild(watchCol6);

watchRow1.setAttribute('class', 'row')
watchRow1.setAttribute('style', 'height: 175px; margin-top 20px; padding-top: 7px; padding-bottom: 0px; margin-bottom: 0px;')
watchRow2.setAttribute('class', 'row')

p2.setAttribute('style','padding-top: 10px; ')




watchCol1.setAttribute('style','width: 25%')
watchCol2.setAttribute('style','width: 800px; font-size: 13px')
watchCol3.setAttribute('style','width: 25%')
watchCol4.setAttribute('style','width: 25%')
watchCol5.setAttribute('style',' height: 20px; width: 800px; background-color: orange')
watchCol6.setAttribute('style','width: 25%')



// Introduction to Swift

var swiftDiv = document.createElement('div');
container.appendChild(swiftDiv);

var swiftDiv1 = document.createElement('div');
swiftDiv.appendChild(swiftDiv1);
var swiftDiv2 = document.createElement('div');
swiftDiv.appendChild(swiftDiv2);

swiftDiv1.setAttribute('class','row justify-content-center');
swiftDiv2.setAttribute('class','row justify-content-center');

var swiftDiv1col1 = document.createElement('col-1');
swiftDiv1.appendChild(swiftDiv1col1);
var swiftDiv1col2 = document.createElement('col-10');
swiftDiv1.appendChild(swiftDiv1col2);
var swiftDiv1col3 = document.createElement('col-1');
swiftDiv1.appendChild(swiftDiv1col3);

// swiftDiv1col1.setAttribute('class','col');
// swiftDiv1col2.setAttribute('class','col');
// swiftDiv1col3.setAttribute('class','col');


var swiftDiv2col1 = document.createElement('col-1');
swiftDiv2.appendChild(swiftDiv2col1);
var swiftDiv2col2 = document.createElement('col-10');
swiftDiv2.appendChild(swiftDiv2col2);
var swiftDiv2col3 = document.createElement('col-1');
swiftDiv2.appendChild(swiftDiv2col3);


// swiftDiv2col1.setAttribute('class','col');
// swiftDiv2col2.setAttribute('class','col');
// swiftDiv2col3.setAttribute('class','col');

// swiftDiv2col1.setAttribute('style',; background-color: red')
swiftDiv2col2.setAttribute('style','background-color: orange; height: 20px; width: 800px; margin-left: 149px')


var swiftHead = document.createElement('h4');
swiftDiv1col2.appendChild(swiftHead);

swiftHead.textContent = 'Introduction to Swift'


swiftDiv1col1.setAttribute('style','width: 109px')
swiftDiv1col2.setAttribute('style','width: 800px; margin-left: 40px ')

var p3 = document.createElement('p');
swiftDiv1col2.appendChild(p3);
p3.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
p3.setAttribute('style','font-size: 13px')

