export function getWeather(id){
    if(id < 300)
        return {
            name : "storm",
            bg: '#7CB9E8', 
        };
    else if( id >= 300 && id <= 499)
    	return  {
            name :"drizzle",
            bg: '##F0F8FF',
        }
    else if( id >= 500 && id <= 599)
    	return {
            name :"rain",
            bg: '#a2b6d5'
        }
    else if( id >= 600 && id <= 699)
        return {
            name :"snow",
            bg: '#B9D9EB'
        }
    else if( id >= 700 && id <= 799)
        return {
            name :"fog",
            bg: '#B0C4DE'
        }
    else if (id === 800) 
        return {
            name :"clear",
            bg: '#2490ff'
        }
    else if (id === 801)
        return {
            name :"partlycloudy",
            bg: '#E1EBEE'
        }
    else if (id > 801 && id <= 805)
        return {
            name :"mostlycloudy",
            bg: '#AFDBF5'
        }
    else 
        return {};
}