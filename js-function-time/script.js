function time(){
	const event = (
  	<div>
  	  <h1>Current Time:</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
  	</div>
  );
  ReactDOM.render(
  	event,
    document.getElementById("root")
  );
}
setInterval(time, 1000);



