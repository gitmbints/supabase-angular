# SupabaseAngular: Learn Reactive Programming with Supabase & RxJS

Welcome to **SupabaseAngular**!  
This project is designed as a hands-on learning resource for developers who want to:

- **Understand how to convert Promises to Observables**
- **Experiment with RxJS operators**
- **Integrate the Supabase API into Angular applications**

Whether you're new to Reactive Extensions (RxJS) or just getting started with Supabase, this guide will help you build a solid foundation.

---

## 🚀 Introduction

Modern web applications often deal with asynchronous data—think API calls, user events, or real-time updates.  
**RxJS** (Reactive Extensions for JavaScript) provides powerful tools for handling these data streams using Observables.  
**Supabase** is an open-source backend-as-a-service that makes it easy to add authentication, databases, and real-time features to your app.

This project will walk you through converting Promises (common in APIs like Supabase) to Observables, using RxJS operators to transform data, and integrating Supabase into your Angular workflow.

---

## 🛠️ Step-by-Step Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/SupabaseAngular.git
cd SupabaseAngular
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

- [Create a free Supabase account](https://app.supabase.com/)
- Create a new project and get your **API URL** and **anon key**
- Add your Supabase credentials to your Angular environment files (e.g., `src/environments/environment.ts`)

### 4. Run the Development Server

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

### 5. Explore the Code

- **Converting Promises to Observables:**  
  See how Supabase's Promise-based API can be wrapped with RxJS's `from()` function.
- **Experiment with RxJS Operators:**  
  Try out operators like `map`, `filter`, `switchMap`, and more to transform and combine data streams.
- **Supabase Integration:**  
  Learn how to perform CRUD operations, authentication, and real-time updates using Supabase within Angular.

---

## 🧑‍💻 Why Learn This?

- **Reactive programming** makes your code more robust, scalable, and easier to maintain.
- **RxJS** is a core part of Angular and many modern frameworks.
- **Supabase** provides a real-world backend to practice with, including authentication and database features.

---

## 📚 Further Resources

- [RxJS Documentation](https://rxjs.dev/guide/overview)
- [Supabase Documentation](https://supabase.com/docs)
- [Angular CLI Reference](https://angular.dev/tools/cli)

---
