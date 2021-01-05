import './App.css';
import data from './data.json';
import JobListing from './JobListing';

function App() {
  return (
    <>
	<nav><img className="topBar" src={window.location.origin + '/images/bg-header-desktop.svg'} alt=""></img></nav>
	<div className="jobContainer">
		{data.map((job) => {
			return <JobListing key={job.id} {... job} />
		})}
	</div>
    </>
  );
}

export default App;
