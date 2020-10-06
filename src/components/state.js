import React, { createContext, useState, useEffect} from 'react';

const DataContext = createContext({
	state: {},
	setState: () => {}
});

export const DataProvider = ({ children }) => {
	const [ state, setState ] = useState({
		list: [
			{
				name: 'Laolu',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'green'
			},
			{
				name: 'Izu',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'red'
			},
			{
				name: 'SegunFlames',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'blue'
			},
			{
				name: 'Dayo',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'pink'
			},
			{
				name: 'Shomz',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'gray'
			},
			{
				name: 'Wiz',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'orange'
			},
			{
				name: 'Babajide',
				imgUrl:
					'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				num: 0,
				color: 'yellow'
			}
		],
		total: 15,
		error:null
	});
        
    useEffect (()=>{

		window.localStorage.setItem('state',JSON.stringify(state))
		
		
		  
     
})
    
      
	return (
		<DataContext.Provider
			value={{
				setState: setState,
				// what I did before was 'state: localStorage.getItem('state')? JSON.parse(localStorage.getItem('state') ): state,' causes a lag.
				state: state
				
			
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
