function test_level_0 () {
	
	cube.set_cube(5 , 5);

	// level 1

	create_portal(2 , 2);

	create_obstacle(2 , 1);

	create_obstacle(1 , 2);

	create_obstacle(2 , 3);

	// level 2

	create_portal(5 , 5);

	create_obstacle(5 , 4);

	create_obstacle(6 , 5);

	create_obstacle(5 , 6);
	
}

function test_level_1 () {
	
	cube.set_cube(2 , 2);

	// level 1

	create_portal(5 , 5);

	create_obstacle(5 , 4);

	create_obstacle(6 , 5);

	create_obstacle(5 , 6);

	// level 2

	create_portal(2 , 2);

	create_obstacle(2 , 1);

	create_obstacle(1 , 2);

	create_obstacle(2 , 3);
	
}

function dev_level_1 () {
	
	cube.set_cube(7 , 7);
	
	// level 1

	create_portal(1 , 3);
	
	var obst = [
		{x: 0 , y: 3},{x: 0 , y: 4},{x: 1 , y: 1},{x: 1 , y: 6},{x: 2 , y: 1},{x: 2 , y: 2},{x: 2 , y: 3},{x: 2 , y: 4},{x: 2 , y: 5},{x: 2 , y: 6},{x: 3 , y: 2},{x: 4 , y: 0},{x: 4 , y: 2},{x: 4 , y: 4},{x: 4 , y: 5},{x: 4 , y: 6},{x: 4 , y: 7},{x: 5 , y: 2},{x: 5 , y: 4},{x: 6 , y: 1},{x: 6 , y: 2},{x: 6 , y: 4},{x: 6 , y: 6},{x: 7 , y: 6},
	];
	
	for (var i = 0; i < obst.length; i++) {
		
		create_obstacle(obst[i].x , obst[i].y);
		
	}
	
	// level 2

	create_portal(7 , 7);
	
	var obst = [
		{x: 1 , y: 1},{x: 1 , y: 2},{x: 1 , y: 4},{x: 1 , y: 5},{x: 1 , y: 6},{x: 2 , y: 2},{x: 2 , y: 3},{x: 3 , y: 0},{x: 3 , y: 2},{x: 3 , y: 5},{x: 3 , y: 6},{x: 3 , y: 7},{x: 4 , y: 0},{x: 4 , y: 2},{x: 4 , y: 4},{x: 5 , y: 2},{x: 5 , y: 4},{x: 5 , y: 6},{x: 6 , y: 1},{x: 6 , y: 2},{x: 6 , y: 4},{x: 6 , y: 6},{x: 7 , y: 6},
	];
	
	for (var i = 0; i < obst.length; i++) {
		
		create_obstacle(obst[i].x , obst[i].y);
		
	}
	
	// level 3
	
	create_portal(0 , 0);
	
	var obst = [
		{x: 1 , y: 1},{x: 1 , y: 3},{x: 1 , y: 4},{x: 1 , y: 5},{x: 1 , y: 7},{x: 2 , y: 1},{x: 2 , y: 3},{x: 2 , y: 5},{x: 2 , y: 7},{x: 3 , y: 3},{x: 4 , y: 0},{x: 4 , y: 1},{x: 4 , y: 5},{x: 4 , y: 6},{x: 5 , y: 3},{x: 5 , y: 4},{x: 6 , y: 1},{x: 6 , y: 2},{x: 6 , y: 6},{x: 6 , y: 7},{x: 7 , y: 4},
	];
	
	for (var i = 0; i < obst.length; i++) {
		
		create_obstacle(obst[i].x , obst[i].y);
		
	}
	
}

function dev_level_2 () {
	
	cube.set_cube(7 , 7);
	
	// level 1

	create_portal(3 , 5);
	
	var obst = [
		{x: 1 , y: 1},{x: 1 , y: 2},{x: 1 , y: 3},{x: 1 , y: 4},{x: 1 , y: 5},{x: 1 , y: 6},{x: 2 , y: 1},{x: 2 , y: 6},{x: 3 , y: 1},{x: 3 , y: 3},{x: 3 , y: 4},{x: 3 , y: 6},{x: 4 , y: 1},{x: 4 , y: 3},{x: 4 , y: 4},{x: 4 , y: 5},{x: 4 , y: 6},{x: 5 , y: 1},{x: 6 , y: 1},{x: 6 , y: 2},{x: 6 , y: 3},{x: 6 , y: 4},{x: 6 , y: 5},{x: 6 , y: 6},{x: 6 , y: 7},
	];
	
	for (var i = 0; i < obst.length; i++) {
		
		create_obstacle(obst[i].x , obst[i].y);
		
	}
	
	// level 2

	create_portal(7 , 7);
	
	var obst = [
		{x: 1 , y: 1},{x: 1 , y: 2},{x: 1 , y: 3},{x: 1 , y: 4},{x: 1 , y: 5},{x: 1 , y: 6},{x: 2 , y: 1},{x: 2 , y: 6},{x: 3 , y: 1},{x: 3 , y: 3},{x: 3 , y: 4},{x: 3 , y: 6},{x: 4 , y: 1},{x: 4 , y: 3},{x: 4 , y: 4},{x: 4 , y: 5},{x: 4 , y: 6},{x: 5 , y: 1},{x: 6 , y: 1},{x: 6 , y: 2},{x: 6 , y: 3},{x: 6 , y: 4},{x: 6 , y: 5},{x: 6 , y: 6},{x: 6 , y: 7},
	];
	
	for (var i = 0; i < obst.length; i++) {
		
		create_obstacle(obst[i].x , obst[i].y);
		
	}
	
}