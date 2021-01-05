import React from 'react';

const JobDetails = (props) => {
	const {company, position, postedAt, contract, location, featured} = props;

	return (
		<div className="jobDetails">
			<div className="jobTitle">
				<p className="company">{company}</p>
				{props.new && <p className="new">NEW!</p>}
				{featured && <p className="featured">FEATURED</p>}
			</div>
			<p className="jobTitle">{position}</p>
			<p className="location">{postedAt} &#183; {contract} &#183; {location}</p>
		</div>
	);
}

export default JobDetails;