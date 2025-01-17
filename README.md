# Surveys System

Survey System using Laravel and React, with beautiful and usefull analytics.

![image](https://github.com/user-attachments/assets/11504b09-4dfc-4048-93c7-fead73e03dcb)


## Run Locally

1. Clone the project

```bash
  # using https
  git clone https://github.com/ojpro/survey.git

  # using ssh
  git clone git@github.com:ojpro/survey.git

```

2. Go to the project directory

```bash
  cd survey
```

3. Install dependencies

```bash
  # using npm
  npm install

  # using yarn
  yarn
```

4. Setup Environment Variables

```bash
  # for laravel
  cp .env.example .env

  # then configure database connection
  nano .env

  # for react and vite
  echo "VITE_API_BASE_URL='http://127.0.0.1:8000'" > ./survey-frontend/.env
```

5. Start the server

```bash
  # inside main directory (survey)
  php artisan serve
```

6. Start the React application

```bash
   cd survey-frontend

   # using npm
   npm run dev

   # using yarn
   yarn dev
```

🚀 Congratulations the surveys system is up and running,
visit: [http://localhost:3000](http://localhost:3000)

## License

[MIT](https://choosealicense.com/licenses/mit/)
