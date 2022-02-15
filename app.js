const form=document.querySelector("#registrar");
const input= form.querySelector("input");
const invitedList=document.querySelector("#invitedList");
const filterList=document.querySelector("filter-list");

//Add new people to the invitee list
form.addEventListener('submit', function(e){
	e.preventDefault();
	const value=input.value;
	const li=document.createElement("li");
	li.innerHTML= `
	<span>${value}</span>
               <label>
              Confirmed
               <input type="checkbox"/>
                </label>
                <button>Edit</button>
                <button>Remove</button>`;
              invitedList.append(li);
              input.value="";
	
});

//Visual cue for confirmed user

invitedList.addEventListener('change', function(e){
	const checkbox=e.target;
	const li=checkbox.parentNode.parentNode;
	if(checkbox.checked){
		li.classList.add("responded");
	} else{
		li.classList.remove("responded");
	}
	
});

// Edit and Delete Functionalities

invitedList.addEventListener('click', function(e){
	console.dir(e.target);
	if(e.target.nodeName==="BUTTON"){
		const button=e.target;
		const li=button.parentNode;
		if(button.textContent==="Remove"){
			li.remove();
		}
		else if(button.textContent==="Edit"){
			const span=li.firstElementChild;
			const input=document.createElement("input");
			input.type="text";
			input.value=span.textContent;
			li.prepend(input);
			span.remove();
			button.textContent="save";


		}
		else if(button.textContent==="save"){
			const input=li.firstElementChild;
			const span=document.createElement("span");
			span.textContent=input.value;
			li.prepend(span);
			input.remove();
			button.textContent="Edit";
		}
	}
}); 

//Filtering the data

filterList.addEventListener('change', function(e){
	const checkbox=e.target;
	
});