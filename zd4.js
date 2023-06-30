let name = 'пОлИнА нАбЕрЕжНаЯ';
let space = name.indexOf(' ');
alert(`Привет, ${name[0].toUpperCase()}${name.slice(1,space).toLowerCase()} ${name[space+1].toUpperCase()}${name.slice(space+2,name.length).toLowerCase()}!`);