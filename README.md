# [Aswaq Demo](https://aswaq-bns.vercel.app)

# 🛒 Aswaq - E-commerce Platform for Steel Products


Aswaq is a full-featured e-commerce web application built with modern technologies. It is designed specifically for businesses that sell steel and reinforcement products, providing a seamless and organized shopping experience for customers, delivery staff, warehouse managers, and admins.

---

## ✨ Features

### 🧑‍💼 Customer Panel
- User registration and login
- Product browsing and filtering
- Product details with ratings and reviews
- Add to favorites
- Shopping cart and checkout flow
- Track orders and view order history
- Address book management
- Wallet balance and coupons
- Notifications and account settings

### 📦 Stockkeeper Panel
- Manage product inventory
- Monitor stock levels
- Handle shipping statuses
- Generate inventory reports

### 🚚 Delivery Panel
- Dashboard for drivers
- View and manage assigned deliveries
- Update delivery statuses

### 🔧 Admin Panel
- Full user management (admins, customers, drivers, stockkeepers)
- Product management (CRUD)
- Orders and delivery management
- Site settings and notifications
- Financial reports (income statement, balance sheet, etc.)
- Cash flow, expenses, returns, and purchases management

---

## 🧰 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Database**: PostgreSQL
- **ORM**: Prisma
- **API**: GraphQL
- **Authentication**: JWT
- **Media Handling**: Cloudinary
- **Deployment**: Vercel

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/aswaq.git
cd aswaq
```
## Install dependencies

```bash
npm install
```
## Create .env file
```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
## Generate Prisma client
```bash
npx prisma generate

```
## Run development server
```bash
npm run dev

```

📁 Folder Structure
```bash

/app           → Main application pages (App Router)
/components    → Reusable UI components
/lib           → Helper functions and utilities
/graphql       → Queries and mutations
/prisma        → Prisma schema and migrations
/public        → Static assets
/features      → Actions & Reducers For Redux
```

📌 About the Project
This project was created as part of a professional e-commerce solution tailored for local businesses dealing in steel and construction materials. It includes advanced role-based access, financial tracking, and modern UI/UX practices.

📧 Contact

## 🧑‍💻 Developer

**👤 Name:** Abdalla Yahia  
**💼 Role:** Frontend Web Developer  

**🌍 Location:** Beni Suef, Egypt  
**📞 Phone:** +20 12 111 00554  
**📧 Email:** [abdallayahia75@gmail.com](mailto:abdallayahia75@gmail.com)  
**🔗 LinkedIn:** [linkedin.com/in/abdalla-yahia](https://linkedin.com/in/abdalla-yahia)  
**💻 GitHub:** [github.com/abdalla-yahia](https://github.com/abdalla-yahia)

📜 License
This project is licensed under the MIT License.


####################################################################

# 🛒 أسواق - متجر تجارة إلكترونية

**أسواق** هو مشروع متجر إلكتروني متكامل مبني باستخدام أحدث تقنيات الويب، يهدف لتوفير تجربة تسوق سلسة للمستخدمين، ولوحة تحكم قوية للإدارة ومتابعة الطلبات والمخزون والمحاسبة.

🔗 [Live Demo](https://aswaq-bns.vercel.app)

---

## ✨ الميزات الرئيسية

### 👤 المستخدمين
- تسجيل وتسجيل دخول باستخدام JWT
- تعديل الملف الشخصي وإدارة العناوين
- عرض وتتبع الطلبات
- المفضلة والتقييمات
- المحفظة والكوبونات
- الإشعارات الفورية
- إعدادات الحساب وتسجيل الخروج

### 🛍️ المتجر
- عرض المنتجات والفئات
- نظام تصفية وفرز متقدم
- تفاصيل المنتج مع التقييمات
- عربة الشراء وسلة المفضلة
- الدفع وتتبع حالة الطلب

### 🚚 التوصيل (الدليفري)
- لوحة تحكم خاصة بالدليفري
- عرض الطلبات المرسلة وتحديث حالتها
- إشعارات بالحالة الجديدة

### 📦 أمين المخزن
- إدارة المنتجات والمخزون
- تقارير دورية
- تنبيهات نقص الكمية

### 🛠️ الأدمن
- إدارة المستخدمين والمنتجات والطلبات
- التحكم الكامل في المخزون والمحاسبة
- عرض تقارير المبيعات والمشتريات
- إدارة المصروفات، الخزينة، المرتجعات، الميزانية

---

## 🧰 التقنيات المستخدمة

- **Next.js 15** - App Router
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **PostgreSQL**
- **Cloudinary** (لرفع الصور)
- **Redux Toolkit**
- **Apollo Client** (للتواصل مع الـ API)
- **JWT Authentication**
- **GitHub Actions** (CI/CD)

---

## 🗂️ هيكل المشروع
```bash
/app
/(public pages)
/app/admins
/app/stockkeeper
/app/drivers
/app/(users)
/api
...
/lib
/components
/constants
/hooks
/queries
/types
```



## ⚙️ التثبيت والتشغيل محليًا


# Clone the repo
```bash
git clone https://github.com/[your-username]/aswaq.git
```
# Install dependencies
```bash
cd aswaq
npm install
```
# إعداد ملف البيئة
```bash
cp .env.example .env
```
# ثم ضع بيانات قاعدة البيانات و Cloudinary و JWT

# تشغيل المشروع
```bash
npm run dev
```
📌 الملاحظات
يدعم المشروع التصميم المتجاوب (Responsive Design)

النظام يحتوي على صلاحيات منفصلة لكل نوع مستخدم

قابلية للتوسع بسهولة مستقبلًا (modular structure)

🤝 المساهمة
أهلًا بأي مساهمات، اقتراحات أو إصلاحات!
قم بعمل Fork، ثم Pull Request مع شرح واضح للتعديل.

## 🧑‍💻 المطور

**👤 الاسم:** عبدالله يحيى 
**💼 المهنة:** Frontend Web Developer  

**🌍 العنوان:** بني سويف, مصر  
**📞 الهاتف:** +20 12 111 00554  
**📧 البريد الالكتروني:** [abdallayahia75@gmail.com](mailto:abdallayahia75@gmail.com)  
**🔗 لينكد إن:** [linkedin.com/in/abdalla-yahia](https://linkedin.com/in/abdalla-yahia)  
**💻 جيت هب:** [github.com/abdalla-yahia](https://github.com/abdalla-yahia)

📄 الرخصة
مشروع Aswaq مفتوح المصدر تحت رخصة MIT License
