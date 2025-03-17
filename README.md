# [Library Management System](https://library-management-system-nextjs.vercel.app/)  

**A modern library management system built with Next.js that allows users to browse, search, and manage books. The application provides a seamless experience for both library administrators and patrons.**

![Application Screenshot](/library-management-system.png "Application Screenshot")  

## 🚀 Features  

- **Book Catalog**: Browse and search through an extensive collection of books.  
- **Book Details**: View comprehensive information about each book including summaries and availability.
- **User Authentication**: Secure login system for patrons and administrators.
- **Book Management**: Add, edit, and remove books from the library collection.
- **Borrowing System**: Track book checkouts and returns.
- **Rating System**: Rate books on a 5-star scale.
- **Responsive Design**: Works seamlessly on all device sizes.


## 🛠️ Technologies Used  

- **Frontend**:  
  - [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.  
  - [React 19](https://react.dev/) - JavaScript library for building user interfaces.

- **Backend**:  
  - [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) - Serverless functions for backend logic.
  - [Auth.js](https://authjs.dev/) - Authentication solution for Next.js applications.
  - [Neon Database](https://neon.tech/) - Serverless Postgres database.  
  - [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for SQL databases.

- **Programming Language**:  
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for robust development.  

- **Styling**:  
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.  
  - [Shadcn UI](https://ui.shadcn.com/) - A collection of accessible and customizable UI components.  

## 📦 NPM Packages  

- [React Hook Form](https://www.react-hook-form.com/) - Performant form validation.
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [React Colorful](https://www.npmjs.com/package/react-colorful) - Color picker component.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing.
- [Upstash Rate Limit](https://upstash.com/) - Rate limiting for API routes.
- [Upstash Redis](https://upstash.com/) - Redis client for caching.


## 💻 Setup

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/KayqueGoldner/library-management-system-nextjs.git
cd library-management-system-nextjs
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```
### 3. Configure Environment Variables

```bash
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000
NEXT_PUBLIC_PROD_API_ENDPOINT=
DATABASE_URL=
AUTH_SECRET=
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
QSTASH_URL=
QSTASH_TOKEN=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=
RESEND_TOKEN=
```

### 4. Set Up the Database

```bash
npm run db:generate
npm run db:migrate
npm run seed
```

### 5. Run the Application

```bash
npm run dev
```

### 6. Access the Application

**You can access the application by opening the following URL in your browser:
http://localhost:3000**

## 📚 Database Management  

- Generate database schema: `npm run db:generate`
- Apply migrations: `npm run db:migrate`
- Seed the database with sample data: `npm run seed`
- Open Drizzle Studio to manage database: `npm run db:studio`
