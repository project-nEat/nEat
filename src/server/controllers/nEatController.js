const db = require('../models/nEatModels');

const nEatController = {};

nEatController.deleteFoodTable = () => {
	const queryString = 'drop table public.food';
	db.query(queryString).then(data => {
		console.log("trying to delete food table in database.")
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
  });

  
};

nEatController.addFood = (req, res, next) => {

	console.log('running addFood middle ware');
	const { name, expires, opened, open_life, notify } = req.body;
	console.log("req.cookies", req.cookies);
	const user_id = req.cookies.user_id;
	const queryString = 'INSERT INTO public.food (_id, user_id, name, expires, opened, open_life, notify) VALUES (DEFAULT, $1,$2,$3,$4,$5,$6)';
	const values = [user_id, name, expires, opened, open_life, notify];
	db.query(queryString, values).then(data => {
		console.log('added a new food item');
		res.locals.response = {'status':'ok', 'req.cookies': req.cookies};
				
		next();
	});

};

nEatController.getAllFoodFor = (user_id) => {


	const queryString = `SELECT * FROM public.food WHERE user_id='${user_id}'`;
  
  db.query(queryString).then(data => {
    console.log(`all food for ${user_id}: ${JSON.stringify(data)}` );
  });

	
};

nEatController.deleteFood = (foodItem) => {


	const queryString = `DELETE FROM public.food WHERE name='${foodItem}'`;
  
  db.query(queryString).then(data => {
    console.log('deleted a new food item');
  });

	
};



nEatController.addUser = (email, passHash, res, next) => {


	const queryString = 'INSERT INTO public.user (_id, email, passHash) VALUES (DEFAULT, $1, $2)';
	const values = [email,passHash];
	db.query(queryString, values).then(data => {
		console.log('query sent for adding user: ', queryString);
		console.log('added a new user');
		console.log('data received after creating new user: ', data);
		//res.locals.response = {'status':'ok'};

		//next();
	});

	
};

nEatController.getAllUsers = () => {


	const queryString = `SELECT * FROM public.user`;
  
  db.query(queryString).then(data => {
    console.log(`all users : ${JSON.stringify(data)}` );
  });

	
};

nEatController.deleteUser = (email) => {


	const queryString = `DELETE FROM public.user WHERE email='${email}'`;
  
  db.query(queryString).then(data => {
    console.log('deleted a user');
  });

	
};

nEatController.checkUser = (req, res, next) => {


	const queryString = `SELECT * FROM public.user WHERE email='${req.body.email}'`;
  
	try{

	
		db.query(queryString).then(data => {
			console.log('checked for a user');
			if(data['rows'].length == 0){
				console.log("no such user exists.");
				nEatController.addUser(req.body.email, req.body.password, res, next);
				nEatController.checkUser(req, res, next);
				
			}else if(data['rows'][0]['passhash'] != req.body.password){
				console.log('wrong password');

				res.locals.response = {'status':'fail'};
				next();
			}else{
				console.log('user found');
				console.log('user id: ', data['rows'][0]['_id']);
				res.cookies('user_id', data['rows'][0]['_id']);
				res.locals.response = {'status':'ok', 'res.cookies': res.cookies};
				
				next();
			}

		})
	}catch{
		console.log("user not found or could not connect to the database.");
		res.locals.response = {'status':'fail'};
		next();
	}

  	
	
};
 module.exports = nEatController;
