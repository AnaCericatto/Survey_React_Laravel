# Surveys System

Survey System using Laravel and Reacts.

## Demo

![image](https://github.com/user-attachments/assets/11504b09-4dfc-4048-93c7-fead73e03dcb)
![image](https://github.com/user-attachments/assets/f8b2c786-116e-496b-9406-df7bf0bc47e3)
![image](https://github.com/user-attachments/assets/21079583-fd3b-4a97-8057-6d7bf4b1ab3c)
![image](https://github.com/user-attachments/assets/bceea396-a409-413e-8b96-e1e581bb146c)


https://github.com/user-attachments/assets/7bdae60a-fd48-45fd-b7ef-e1725f58e3ba


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
