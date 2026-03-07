#  Noor Al-Iman: Spiritual Companion Backend

Noor Al-Iman (Light of Faith) is a comprehensive spiritual platform designed to help users connect with Islamic teachings through technology. This repository contains the **Backend API**, built with a focus on speed, scalability, and real-time data synchronization using **Redis**.

**Live App:** [Noor Al-Iman Web Interface](https://noor-ai-iman-naat-app.netlify.app/)  

**API Base URL:** `https://noor-ai-iman.vercel.app`

---

##  About the App

Noor Al-Iman is more than just a tool; it's a digital space for the Ummah. The application is divided into several core modules that this API supports:

1.  **Naat Hub:** A curated collection of soulful Naats. Users can listen to their favorite reciters and manage a personalized "Favorites" list stored in Redis.
2.  **Hadith Hub:** A searchable database of authentic Prophetic wisdom sourced from Sahih Sitta (Bukhari, Muslim, etc.), categorized by topics like Character, Knowledge, and Family.
3.  **Deen Planner:** A persistent spiritual Todo list that allows users to set daily goals (e.g., "Read 5 pages of Quran", "Morning Adhkar") and tracks their progress.
4.  **Prayer Times & Reminders:** (Upcoming) Integration for location-based prayer timings.

---

##  Technical Architecture

This backend is architected as a **Serverless Node.js API** optimized for the **Vercel** ecosystem.

### **Core Technologies:**
- **Node.js & Express:** The backbone of the API handling routing and middleware.
- **Redis (Upstash):** Used as the primary data store for high-speed I/O. It handles Naat lists, user favorites (Sets), and Todo persistence (Strings/JSON).
- **CORS & Security:** Configured to allow secure communication with the Netlify frontend.
- **RESTful Design:** Clean and predictable API endpoints for seamless frontend integration.

---

## 🛠️ API Endpoints

### 🎵 Naat Management
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/naats` | Fetches the full list of Naats from Redis cache. |
| `POST` | `/api/favorites/toggle` | Toggles the favorite status of a Naat for a specific user. |
| `GET` | `/api/favorites/:userId` | Returns all Naats favorited by the user. |

### 📅 Deen Planner (Persistent Todo)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/todo/:userId` | Retrieves the user's saved spiritual goals. |
| `POST` | `/api/todo/save` | Updates and syncs the entire todo array to Redis. |

### 🔑 Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Secure user authentication logic. |
| `POST` | `/api/auth/register` | New user onboarding. |

---

## 💻 Local Development

### **Prerequisites**
- Node.js installed on your machine.
- A Redis instance (Local or Upstash Cloud).

### **Setup Steps**
1. **Clone the Project:**
   ```bash
   git clone [https://github.com/Malaika-programmer/NaatRedis-backend.git](https://github.com/Malaika-programmer/NaatRedis-backend.git)
