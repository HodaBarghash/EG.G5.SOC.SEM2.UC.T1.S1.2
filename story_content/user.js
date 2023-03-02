function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5biKmT9yTLl":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx-wx6cWRbmpd1Qwe3TKkiw_wsUM5qRHfRXrTN5vh04OzH3C4_b2utwifhBm3zkDtm1QA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

