import React, {useState} from 'react';
import './App.css';
import data from './data.json';
import JobListing from './JobListing';
import Filters from './Filters';

function App() {
	const [jobs, setJobs] = useState({selected: [], jobData: data});

	const filterJobs = (e) => {
		if (jobs.selected.includes(e.target.textContent)) {
			console.log("not adding anything");
		} else {
			const jobItems = jobs.selected.concat(e.target.textContent);
			let selectedJobs = data.filter((el) => jobItems.includes(el.role) || jobItems.includes(el.level) || el.languages.some(lan => jobItems.includes(lan)) || el.tools.some(lan => jobItems.includes(lan)));
			setJobs({...jobs, jobData: selectedJobs, selected: jobItems});
		}
	}

	const removeJob = (e) => {
		const toRemove = e.target.previousElementSibling.innerText;
		const jobItems = jobs.selected.slice(0,jobs.selected.indexOf(toRemove)).concat(jobs.selected.slice(jobs.selected.indexOf(toRemove)+1, jobs.selected.length));
		if (jobItems.length > 0) {
			let selectedJobs = data.filter((el) => jobItems.includes(el.role) || jobItems.includes(el.level) || el.languages.some(lan => jobItems.includes(lan)) || el.tools.some(lan => jobItems.includes(lan)));
			setJobs({...jobs, selected: jobItems, jobData: selectedJobs});
		} else {
			setJobs({...jobs, selected: jobItems, jobData: data});
		}		
	}

	const clearJobs = () => {
		setJobs({...jobs, jobData: data, selected: []});
	}

	return (
		<>
		<nav><img className="topBar" src={window.location.origin + '/images/bg-header-desktop.svg'} alt=""></img></nav>
		<div className="jobContainer">
			{jobs.selected.length > 0 && <Filters jobs={jobs.selected} removeJob={removeJob} clearJobs={clearJobs} />}
			{jobs.jobData.map((job) => {
				return <JobListing key={job.id} {... job} filterJobs={filterJobs} />
			})}
		</div>
		</>
	);
}

export default App;
 