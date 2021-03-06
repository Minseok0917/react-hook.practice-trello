import styled from 'styled-components';



export const Container = styled.div`
	width:1440px;
	height:100%;
	margin:0 auto;
`;



export const Markdown = styled.div`
	font-weight: 300;
	p,ol,ul{
		line-height: 1.7;
	}
	a{
		font-size: 1rem;
		color: #7a83ff;
		&:hover{ text-decoration: underline; }
	}
	h1,h2,h3,h4,h5,h6{
		a{ 
			font-size: inherit;
			float: left;
			display: inline-block;
			text-align: right;
			width: 20px;
			margin-left: -20px;
			padding-right: 4px;
			visibility: hidden; 
			&:hover{ text-decoration: underline; }
		}
		&:hover a{ 
			visibility: visible; 
			color: #7a83ff;
		}
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}

	h1{
		font-size: 2rem;
		border-bottom: 1px solid #d8dee4;
		padding-bottom: 0.3rem;
	}
	h2{
		font-size: 1.5rem;
	}
	h3{
		font-size: 1.25rem;
	}
	h4{
		font-size: 1em;
	}
	h5{
		font-size: 0.875rem;
	}
	h6{
		font-size: 0.85rem;
	}

	ul,ol{ padding-left: 2rem; }
	li{ list-style:inherit; }

	hr{ border: 1px solid #d8dee4; }
	strong{ font-weight: 500; color: #9570d0; }

	p>code{
		font-size: 0.75rem;
		padding: 0.2rem 0.4rem;
		border-radius: 5px;
		color: #9570d0;
		background: #efe5ff;

	}

	div[class*="language-"]{
		margin: 1.5rem 0 1rem;
		pre{
			line-height: 1.4;
			padding: 1.25rem 1.5rem;
		}
		code,span{
			font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace';
			font-size: 0.75rem;
		}
	}
	pre>code{
		color: #fff;
		span{
			color: #fff;
		}
	}
`;