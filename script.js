window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for(let i =0; i<5;i++){
	const mypromise = new Promise((resolve,reject) =>{
		const time = Math.floor(Math.random() * 5) + 1;
		setTimeout(()=> resolve(`Promise resolved ${i+1} after ${time}`),time * 1000);
	});
	promises.push(mypromise);
}
 Promise.any(promises)
      .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = result;
      });