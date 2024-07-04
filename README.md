# Login-structure-with-nestjs-vite-app

>`Note`: Before starting try to have a mongodb database and obtain connection string from there else follow the given steps in `bottom` of this document to get a free mongodb


For the postman collection: https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/blob/main/Login-with-nest-js.postman_collection.json


##  Steps to run the app:

1. Goto backend directory
2. create new file `.env`
3. copy `.env.exapmle` to `.env`
4. Run `yarn` and `yarn start:dev` in a treminal.
5. The backend will be available in `http://localhost:3000`

Frontend:
1. Goto frontend directory
2. create new file `.env`
3. copy `.env.exapmle` to `.env`
4. Run `yarn` and `yarn run dev` in a treminal.
5. The frontend will be available in `http://localhost:5173/`

# screenshots and Video

https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/7992c0c0-baa9-4b9f-99d8-bb78dcf464bb



<img width="1093" alt="Screenshot 2024-07-04 at 5 14 55 PM" src="https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/3e8310d0-28be-4169-afdd-5647f834b691">


 <img width="1345" alt="Screenshot 2024-07-04 at 5 38 28 PM" src="https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/00e7dd7f-6891-401a-8168-e785f5924554">
 
![Screenshot 2024-07-04 at 5 40 46 PM](https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/ec745b35-318c-4792-899e-4c72e062d0ea)

`### As part of the secure coding errors not exposed to public, If you really want to see the logs can check the server logs else you can pass an extra true parameter` here: https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/blob/main/backend/src/helper/responseFormatter.ts#L12-L15

<img width="1728" alt="Screenshot 2024-07-04 at 5 41 38 PM" src="https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/5cef9b48-19f3-4806-a98e-d3ed18d0b6ed">

# Server Logs

<img width="815" alt="Screenshot 2024-07-04 at 5 42 10 PM" src="https://github.com/sabith-prfm/Login-structure-with-nestjs-vite-app/assets/53843262/bfc3fbab-bdde-470e-a3b0-83ae806530c1">

# Security mesurements taken
- Errors not exposed to public
- Proper validations added
- In login section not clearly saying about the error, only showing invalid email or password
- Proper argument validation added in backend
- CORS Policy : only allowed to who connects from `http://localhost:5173`(frontent url- can be updated in env)
- JWT token used and token validity can be reduced to 5m or 10m through env.

# Steps to get free MongoDB DB

 - go to https://cloud.mongodb.com/
 - create New project 
 - `Database` from left menu > `app_name` | create new app > `connect` > copy connection string to MONGODB_URI
 - connction string from cloud.mongodb.com looks like mongodb+srv://<USERNAME>:<PASSWORD>@login-app-database.yb1ze6y.mongodb.net/?appName=<APP_NAME>
