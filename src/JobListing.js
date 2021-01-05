import React from 'react';
import JobDetails from './JobDetails';

const JobListing = (props) => {
	const {logo, role, level, languages} = props;
	console.log(logo.slice(1));
	return (
		<section className="jobListing">
			<article className="jobDescription">
				<img className="logo" src={window.location.origin + logo.slice(1)} alt=""></img>
				<JobDetails {... props} />
			</article>
			<article className="skills">
				<p>{role}</p>
				<p>{level}</p>
				{languages.map((lan) => <p>{lan}</p>)}
			</article>
		</section>
	);
}

export default JobListing;