import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import our component from this folder
import Grid from './Grid';
import StyledRootGrid from './StyledRootGrid';
import StyledPaper from './StyledPaper';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('Grid Size')
	.add('Basic grid with normal breakpoints xs', () => (
		<div style={{flexGrow:1}}>
			<Grid isContainer={true} spacing = {2}>
				<Grid xs = {12} item>
					<StyledPaper> xs = 12</StyledPaper>
				</Grid>
				<Grid xs = {6} item>
					<StyledPaper> xs = 6</StyledPaper>
				</Grid>
				<Grid xs = {6} item>
					<StyledPaper> xs = 6</StyledPaper>
				</Grid>
				<Grid xs = {3} item>
					<StyledPaper> xs = 3</StyledPaper>
				</Grid>
				<Grid xs = {3} item>
					<StyledPaper> xs = 3</StyledPaper>
				</Grid>
				<Grid xs = {3} item>
					<StyledPaper> xs = 3</StyledPaper>
				</Grid>
				<Grid xs = {3} item>
					<StyledPaper> xs = 3</StyledPaper>
				</Grid>
			</Grid>
		</div>
	))
	storiesOf('Grid Direction')
	.add('direction row', () => (
		<Grid isContainer={true} direction={'row'}>
			<Grid xs={6}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('direction row-reverse', () => (
		<Grid isContainer={true} direction={'row-reverse'}>
			<Grid xs={6}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('direction column', () => (
		<Grid isContainer={true} direction={'column'}>
			<Grid xs={6}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('direction column-reverse', () => (
		<Grid isContainer={true} direction={'column-reverse'}>
			<Grid xs={6}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={6}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	storiesOf('Grid Alignment')
	.add('alignItems flex-start', () => (
		<Grid isContainer={true} direction={'column'} alignItems={'flex-start'}>
			<Grid xs={2}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('alignItems center', () => (
		<Grid isContainer={true} direction={'column'} alignItems={'center'}>
			<Grid xs={2}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('alignItems flex-end', () => (
		<Grid isContainer={true} direction={'column'} alignItems={'flex-end'}>
			<Grid xs={2}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('alignItems stretch', () => (
		<Grid isContainer={true} direction={'column'} alignItems={'stretch'}>
			<Grid xs={2}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('alignItems baseline', () => (
		<Grid isContainer={true} direction={'column'} alignItems={'baseline'}>
			<Grid xs={2}>
				<StyledPaper> 1 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 2 </StyledPaper>
				</Grid>
				<Grid xs={2}>
					<StyledPaper> 3 </StyledPaper>
				</Grid>
		</Grid>
	))
	.add('auto layout', () => (
		<StyledRootGrid>
			<Grid isContainer={true}>
				<Grid item={'item'}>
					<StyledPaper> xs </StyledPaper>
				</Grid>
				<Grid item={'item'}>
					<StyledPaper> xs </StyledPaper>
				</Grid>
				<Grid item={'item'}>
					<StyledPaper> xs </StyledPaper>
				</Grid>
			</Grid>
			<Grid isContainer={true}>
				<Grid item={'item'}>
					<StyledPaper> xs </StyledPaper>
				</Grid>
				<Grid xs = {6} item={'item'}>
					<StyledPaper> xs = 6 </StyledPaper>
				</Grid>
				<Grid item={'item'}>
					<StyledPaper> xs </StyledPaper>
				</Grid>
			</Grid>
		</StyledRootGrid>
	))
