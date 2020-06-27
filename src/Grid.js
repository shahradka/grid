import React, {Children} from 'react';
import MatGrid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const Grid = ({xs, sm, md, lg, direction, justify, alignItems, spacing, isContainer,children, className, item}) => {
	console.log("xs",xs);
  let grid;
	if(xs)
		grid = (
			<MatGrid container = {isContainer? 'container' : ''} item={item} xs={xs? xs:'xs'} sm={sm} md={md} lg={lg} direction={direction}
			justify={justify} alignItems={alignItems} spacing={spacing} classes={{root:className}}>
				{Children.toArray(children)}
			</MatGrid>
		);
		else
			grid = (
				<MatGrid container = {isContainer? 'container' : ''} item={item} xs sm={sm} md={md} lg={lg} direction={direction}
				justify={justify} alignItems={alignItems} spacing={spacing} classes={{root:className}}>
					{Children.toArray(children)}
				</MatGrid>
			);


  return <React.Fragment>{grid}</React.Fragment>;
}

Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  direction: PropTypes.string,
  item: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
  spacing: PropTypes.number,
  children: PropTypes.node.isRequired,
  isContainer : PropTypes.bool,
};

export default Grid;
