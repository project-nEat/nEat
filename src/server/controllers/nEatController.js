const db = require('../models/nEatModels');

const nEatController = {};

nEatController.deleteFoodTable = () => {
	const queryString = 'drop table public.food';
	db.query(queryString).then(data => {
		console.log("trying to delete food table in database.")
		// console.log('queired data: ', data);
		//res.locals.queryResult = data;
		//next();
	  });

};



nEatController.deleteUserTable = () => {
	const queryString = 'drop table public.user';
	db.query(queryString)
	.then(data => {
		console.log('deleted user table');
	});
}

nEatController.createUserTable = () => {
	const queryString = `
	CREATE TABLE public.user (
	"_id" serial NOT NULL,
	"email" varchar NOT NULL,
	"passhash" varchar NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
)
	`;
	db.query(queryString).then(data => {
		console.log("trying to create user table in database.")
		// console.log('queired data: ', data);
		//res.locals.queryResult = data;
		//next();
	  });


};
nEatController.createFoodTable = () => {
  const queryString = `
  CREATE TABLE public.food (
	"_id" serial NOT NULL,
	"user_id" bigint, 
	"name" varchar NOT NULL,
	"expires" date NOT NULL,
	"opened" date NOT NULL,
	"open_life" integer,
	"notify" integer,
	CONSTRAINT "food_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
)
  `;
  const queryString2 = 'ALTER TABLE public.food ADD CONSTRAINT "food_fk0" FOREIGN KEY ("user_id") REFERENCES  public.user("_id")';


  db.query(queryString).then(data => {
    console.log("trying to create food table in database.");
	db.query(queryString2).then(data2 => {
		console.log("linking user reference.")
	});
    // console.log('queired data: ', data);
    //res.locals.queryResult = data;
    //next();
  });

  
};

nEatController.addFood = (user_id, foodItem, expires, opened, open_life, notify) => {


	const queryString = 'INSERT INTO public.food (_id, user_id, name, expires, opened, open_life, notify) VALUES (DEFAULT, $1,$2,$3,$4,$5,$6)';
  const values = [user_id, foodItem, expires, opened, open_life, notify];
  db.query(queryString, values).then(data => {
    console.log('added a new food item');
  });

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};

nEatController.getAllFoodFor = (user_id) => {


	const queryString = `SELECT * FROM public.food WHERE user_id='${user_id}'`;
  
  db.query(queryString).then(data => {
    console.log(`all food for ${user_id}: ${JSON.stringify(data)}` );
  });

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};

nEatController.deleteFood = (foodItem) => {


	const queryString = `DELETE FROM public.food WHERE name='${foodItem}'`;
  
  db.query(queryString).then(data => {
    console.log('deleted a new food item');
  });

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};



nEatController.addUser = (email, passHash, res, next) => {


	const queryString = 'INSERT INTO public.user (_id, email, passHash) VALUES (DEFAULT, $1, $2)';
	const values = [email,passHash];
	db.query(queryString, values).then(data => {
		console.log('added a new user');
		res.locals.response = {'status':'ok'};
		next();
	});

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};

nEatController.getAllUsers = () => {


	const queryString = `SELECT * FROM public.user`;
  
  db.query(queryString).then(data => {
    console.log(`all users : ${JSON.stringify(data)}` );
  });

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};

nEatController.deleteUser = (email) => {


	const queryString = `DELETE FROM public.user WHERE email='${email}'`;
  
  db.query(queryString).then(data => {
    console.log('deleted a user');
  });

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};

nEatController.checkUser = (req, res, next) => {


	const queryString = `SELECT * FROM public.user WHERE email='${req.body.email}'`;
  
	try{

	
		db.query(queryString).then(data => {
			console.log('checked for a user');
			if(data['rows'].length == 0){
				console.log("no such user exists.");
				nEatController.addUser(req.body.email, req.body.password, res, next);
				
			}else if(data['rows'][0]['passhash'] != req.body.password){
				console.log('wrong password');
				res.locals.response = {'status':'fail'};
				next();
			}else{
				console.log('user found');
				res.locals.response = {'status':'ok'};
				
				next();
			}

		})
	}catch{
		console.log("user not found or could not connect to the database.");
		res.locals.response = {'status':'fail'};
		next();
	}
  	

	// const queryString = `
	// INSERT INTO public.food VALUES (${user_id}, ${foodItem}, ${expires}, ${opened}, ${open_life},${notify})
	// `;
	// db.query(queryString).then(data => {
	// 	console.log("trying to insert food item into food table.");
	//   });
	
};
// starWarsController.getCharacters = (req, res, next) => {
//   console.log("trying to get characters from the database.")
//   // write code here
//   // const queryString = 'SELECT p.name, p.gender, species, species_id, birth_year, eye_color, homeworld, homeworld_id, films FROM public.people p RIGHT OUTTER JOIN public.species s LIMIT 100 ';
//   const queryString = 'SELECT p.name, p.gender, s.name AS species, p.species_id, p.birth_year, p.eye_color, p.hair_color, planets.name AS homeworld, p.homeworld_id FROM public.people p LEFT OUTER JOIN public.species s ON p.species_id = s._id LEFT OUTER JOIN planets ON planets._id = p.homeworld_id'
//   // const queryString = 'SELECT * FROM "public"."people" LIMIT 100'
//   db.query(queryString).then(data => {
//     // console.log('queired data: ', data);
//     res.locals.queryResult = data;
//     next();
//   });

  
// };

// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   console.log('req.query.id: ', id);
//   const queryString = 'SELECT s.classification, s.average_height, s.average_lifespan, s.language, s.name, planets.name AS homeworld FROM public.species s LEFT OUTER JOIN planets ON s.homeworld_id = planets._id WHERE s._id=$1';
//   const values = [id];
//   db.query(queryString, values).then(data => {
//     // console.log('queired data for getSpecies: ', data);
//     res.locals.queryResult = data;
//     next();
//   });
  
// };

// starWarsController.getHomeworld = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   const queryString = 'SELECT pl.rotation_period, pl.orbital_period, pl.diameter, pl.climate, pl.gravity, pl.terrain, pl.surface_water, pl.population FROM public.planets pl WHERE pl._id=$1'
//   const values = [id];
//   db.query(queryString, values).then(data => {
    
//     res.locals.queryResult = data;
//     next();
//   });
  
// };

// starWarsController.getFilm = (req, res, next) => {
//   // write code here

//   next();
// };

// starWarsController.addCharacter = (req, res, next) => {
//   // write code here
//   console.log('req.body: ', req.body);
//   const charData = req.body;
//   const queryString = 'INSERT INTO public.people (name, mass, hair_color, skin_color, eye_color, birth_year, gender, species_id, homeworld_id, height) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)';
//   const values = [charData.name, charData.mass, charData.hair_color, charData.skin_color, charData.eye_color, charData.birth_year, charData.gender, charData.species_id, charData.homeworld_id, charData.height];
//   db.query(queryString, values).then(data => {
//     console.log('added a new character');
    
//     next();
//   });
  
// };

//nEatController.createUserTable();
//nEatController.createFoodTable();
//nEatController.deleteFoodTable();
//nEatController.deleteUserTable();

//nEatController.addUser('ashrafkhan2@gmail.com','987654321');
//nEatController.addFood(2, "Apple_Juice", "2024-12-31", "2024-08-31", 7, 2);
//nEatController.addFood(2, "oranges", "2024-12-31", "2024-08-31", 7, 2);

//nEatController.deleteFood('Apple_Juice');
//nEatController.deleteUser('ashrafkhaneetli@gmail.com');
//nEatController.getAllFoodFor(2);
//nEatController.getAllUsers();
 module.exports = nEatController;
