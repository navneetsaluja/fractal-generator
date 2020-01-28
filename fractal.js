const canvas = document.querySelector(".canvas");

const ctx = canvas.getContext('2d');        
ctx.fillStyle = 'rgb(0, 0, 0)';     

var n, r, sumx = 0, sumy = 0;

function calc() {
	    var p = [];

    for (var i = 0; i < n; ++i)
    {
    	p[i] = 0;
    }
    console.log("Length is", p.length);
    for (var i =0; i < p.length; ++i) 
    {
        p[i] = [];
    }

    var angle = 2 * Math.PI / n;
    console.log(angle);

	for (var i = 0; i < p.length; ++i)
	{
		p[i][0] = 200 * Math.cos(i * angle) + 500;
		p[i][1] = 200 * Math.sin(i * angle) + 500;
		sumx += p[i][0];
		sumy += p[i][1];

		console.log("p[i][0] is" , p[i][0]);
		console.log("p[i][1] is" , p[i][1]);
	}

	console.log("SUM X, Y IS ", sumx, ",", sumy);

	var pline = [(sumx / n), (sumy / n)];

	for (var i = 0; i <= 40000; ++i)
	{
		var vno =  Math.floor(Math.random() * n);
		var vert = new Array(2);

		for (var j = 0; j < n; ++j)
		{
			if (vno == j) 
			{
				vert[0] = p[j][0];
				vert[1] = p[j][1];
			}
		}

		pline[0] = (pline[0] + vert[0]) * r;
		pline[1] = (pline[1] + vert[1]) * r;

		    ctx.fillRect(pline[0], pline[1], 1, 1);


	}
}

function enter() {
    n = document.getElementById("sides--input").value;
    r = document.getElementById("radius--input").value;
    calc();
}

function clr() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
