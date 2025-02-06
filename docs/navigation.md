# Navigation Flow 🔀

## 1. Public Routes 🌍
These routes are accessible to **all users**, even without authentication.

| Route          | Page Description |
|---------------|----------------|
| `/`           | Home Page – Displays latest blogs, trending blogs, and featured authors. |
| `/login`      | Login Page – Allows users to log in using email/password or social authentication. |
| `/signup`     | Signup Page – New users can register using email and password. |
| `/blogs`      | Blog Listing Page – Displays all published blogs with search and filter options. |
| `/blog/:id`   | Blog Detail Page – Displays a full blog post with comments and like/share options. |

---

## 2. Private Routes 🔐  
These routes require authentication and are **only accessible to logged-in users**.

| Route            | Page Description |
|-----------------|----------------|
| `/dashboard`    | User Dashboard – Displays the user’s published blogs, drafts, and engagement stats. |
| `/create`       | Create Blog – Provides a rich text editor to write and publish new blogs. |
| `/edit/:id`     | Edit Blog – Allows users to edit an existing blog they own. |
| `/profile`      | Profile Page – Users can view and update their profile information. |
| `/my-blogs`     | My Blogs – Shows a list of blogs written by the logged-in user. |
| `/saved-blogs`  | Saved Blogs – Displays blogs bookmarked by the user for later reading. |
| `/notifications` | Notifications Page – Shows new comments, likes, and admin messages. |

---

## 3. Admin Routes 🛠️  
These routes are **only accessible to Admin users** for managing the platform.

| Route                | Page Description |
|----------------------|----------------|
| `/admin/dashboard`   | Admin Dashboard – Overview of all blog posts, users, and reports. |
| `/admin/users`       | Manage Users – View, edit, or ban users from the platform. |
| `/admin/reports`     | Flagged Content – Review and take action on reported blogs or comments. |
| `/admin/categories`  | Manage Categories – Create, edit, or delete blog categories. |

---


---

## 4. Additional Features & Navigations  
### **🔹 Search & Filtering**
- Users can **search for blogs** by title, author, or keywords.
- Blogs can be **filtered by category** or **sorted by popularity/date**.

### **🔹 Social Sharing**
- Users can **share blogs** on social media platforms (Twitter, Facebook, LinkedIn).
- Blogs have a **copy link** button for easy sharing.

### **🔹 Error Handling**
| Error Code | Redirects To |  
|------------|-------------|  
| `404` (Not Found) | `/error-404` – Custom page for missing resources. |  
| `403` (Forbidden) | `/login` – Redirects unauthenticated users to login. |  
| `500` (Server Error) | `/error-500` – Shows a generic server error message. |  
