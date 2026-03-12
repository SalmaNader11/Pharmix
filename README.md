# Pharmix

Pharmix is a web application designed to help pharmacies manage their products and orders while providing customers with an easy way to browse and purchase medicines online.

The goal of the project is to build a simple but practical pharmacy management system that includes both a **customer interface** and an **admin dashboard**. The system allows administrators to manage medicines, track orders, and monitor basic statistics, while customers can explore available products and place orders.

---

## Project Features

### Customer Side

Customers can browse available medicines and pharmacy products through a simple and user-friendly interface.

Users can:

- Browse medicines through the **Shop page**
- View **product descriptions and detailed information**
- **Search products**
- **Filter products**
- **Sort products by price**
- Add products to the **shopping cart**
- Update product quantities in the cart
- Remove items from the cart
- View the **cart page**
- Continue to the **checkout page**
- Navigate between the **Home page** and **About page**
- Place orders easily

The website includes the following main pages:

- **Home Page** – The landing page of the website
- **Shop Page** – Displays all available pharmacy products with search, filtering, and price sorting options
- **Product Description Page** – Shows detailed information about a selected medicine or product
- **Cart Page** – Allows users to review and manage selected items before checkout
- **Checkout Page** – Allows users to confirm and place their orders
- **About Page** – Provides information about Pharmix and its purpose

The main goal of the customer interface is to keep the experience simple and intuitive.

---

### Admin Dashboard

The admin dashboard allows pharmacy staff to manage the system and monitor activity.

Through the dashboard administrators can:

- Add new medicines
- Edit existing products
- Delete medicines
- View all orders
- Update order status
- View customer information
- When an order status is updated to **Delivered**, an **email notification is automatically sent to the customer**

The dashboard also shows basic statistics such as:

- Total medicines
- Total stock
- Order status counts

---

## Technologies Used

### Frontend
- AngularJS  
- HTML  
- CSS  
- Bootstrap  

### Backend & Database
- Supabase (PostgreSQL REST API)

### Other Tools
- EmailJS (for sending order confirmation emails and delivery notifications)
- Git & GitHub (version control)
