import { Link } from 'react-router-dom';



export default function(props){
	return (
		<Link to={props.path}>{props.name}</Link>
	);
}