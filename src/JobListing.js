import React from 'react';
import JobDetails from './JobDetails';

const JobListing = (props) => {
	const {logo, role, level, languages, tools, filterJobs} = props;
	return (
		<section className="jobListing">
			<article className="jobDescription">
				<img className="logo" src={window.location.origin + logo.slice(1)} alt=""></img>
				<JobDetails {... props} />
			</article>
			<article className="skills">
				<button onClick={filterJobs}>{role}</button>
				<button onClick={filterJobs}>{level}</button>
				{languages.map((lan) => <button onClick={filterJobs}>{lan}</button>)}
				{tools.map((lan) => <button onClick={filterJobs}>{lan}</button>)}
			</article>
		</section>
	);
}
 
export default JobListing;