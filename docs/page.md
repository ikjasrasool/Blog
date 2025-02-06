# Pages 📄

## 1. Public Pages 🌍  
These pages are accessible to all users, even if they are not logged in.

### **1.1 Home Page (`/`)** 🏠  
- Displays latest blogs, trending posts, and featured authors.  
- Provides search functionality to find blogs by title, author, or category.  
- Has options to **Sign Up** or **Log In** for full access.  

### **1.2 Login Page (`/login`)** 🔑  
- **Fields**:  
  - Email 📧  
  - Password 🔒  
- **Features**:  
  - Secure user authentication with JWT.  
  - Google and Facebook OAuth login options.  
  - "Forgot Password?" option to reset passwords.  

### **1.3 Signup Page (`/signup`)** 📝  
- **Fields**:  
  - Name  
  - Email  
  - Password  
  - Confirm Password  
- **Features**:  
  - User registration with email verification.  
  - Option to sign up with Google/Facebook.  

### **1.4 Blog Listing Page (`/blogs`)** 📚  
- Displays all published blogs with search and filter options.  
- Filters: **By Category, Most Popular, Most Recent**.  
- Pagination for browsing older posts.  

### **1.5 Blog Detail Page (`/blog/:id`)** 🖊️  
- Shows a **full blog post** with title, author, and content.  
- Features:  
  - **Like ❤️, Comment 💬, and Share 📤** options.  
  - Related blog suggestions at the end.  

---

## 2. Private Pages 🔐  
These pages are only accessible to logged-in users.

### **2.1 Dashboard (`/dashboard`)** 📊  
- Personalized view for users to manage their blogs and engagement stats.  
- Sections:  
  - **My Blogs** – List of blogs written by the user.  
  - **Drafts** – Blogs saved but not published.  
  - **Engagement** – Views, likes, and comments analytics.  

### **2.2 Create Blog (`/create`)** ✍️  
- Rich text editor to write and format blog content.  
- Features:  
  - **Upload Images 📸**  
  - **Save as Draft 💾 or Publish 📢**  
  - Add **tags & categories** for better organization.  

### **2.3 Edit Blog (`/edit/:id`)** 🛠️  
- Allows authors to **update** their blog content.  
- Features:  
  - Change title, content, or category.  
  - Update images.  
  - Delete blog if needed.  

### **2.4 Profile Page (`/profile`)** 👤  
- Displays user details and allows updates.  
- **Sections:**  
  - **Personal Info** – Name, Email, Profile Picture.  
  - **User Activity** – List of written blogs and saved blogs.  
  - **Settings** – Change password and account preferences.  

### **2.5 Saved Blogs (`/saved-blogs`)** 📑  
- Displays blogs that the user has bookmarked to read later.  

### **2.6 Notifications (`/notifications`)** 🔔  
- Shows notifications for:  
  - **New likes & comments** on user’s blogs.  
  - **Admin updates** about flagged content.  

---

## 3. Admin Pages 🛠️  
These pages are **only accessible to Admin users**.

### **3.1 Admin Dashboard (`/admin/dashboard`)** 🏆  
- Overview of all blogs, users, and reports.  
- Statistics on active users and engagement.  

### **3.2 Manage Users (`/admin/users`)** 👥  
- Admin can:  
  - View **all registered users**.  
  - Suspend or delete user accounts.  

### **3.3 Flagged Content (`/admin/reports`)** 🚨  
- Displays **blogs & comments flagged for inappropriate content**.  
- Admin can:  
  - **Approve ✅ or Reject ❌** content.  
  - Delete content permanently.  

### **3.4 Manage Categories (`/admin/categories`)** 🏷️  
- Admin can:  
  - Create **new categories** for blogs.  
  - Rename or remove existing categories.  

---

## 4. Error Pages ❌  
These pages handle errors and system issues.

### **4.1 404 Not Found (`/error-404`)** 🔍  
- Shown when a user tries to access a non-existent page.  

### **4.2 403 Forbidden (`/error-403`)** 🚫  
- Displayed when a user **tries to access a restricted page** without permission.  

### **4.3 500 Server Error (`/error-500`)** 🛑  
- Shown when an internal server error occurs.  


