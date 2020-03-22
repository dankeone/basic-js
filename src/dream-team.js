module.exports = function createDreamTeam(members) {
  let res="";
  if (!Array.isArray(members)) return(false)	; else{
 	for(let i = 0; i < members.length; i++) 
 		if (typeof(members[i]) == "string")
 		res += members[i][members[i].search(/[a-z]/i)];
  }
 return(res.toUpperCase().split("").sort().join(""));
};