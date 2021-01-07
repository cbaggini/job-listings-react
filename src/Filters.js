import React from 'react';

const Filters = ({jobs, removeJob, clearJobs}) => {
	return (
		<section className="filters">
			<div className="filteredSkills">
				{jobs.map((el) => {
					return (
						<div className="filter">
							<button className="skillFilter">{el}</button><button className="deselect" onClick={removeJob}>X</button>
						</div>
					); 
				})}
			</div>
			<div className="clear" onClick={clearJobs}>Clear</div>
		</section>
	);
}

export default Filters;