# Multiply360 🕊️

**“Movements in every county so that everyone knows someone who truly follows Jesus.”**

Welcome to the source code for **Multiply360**, a purpose-built application designed to empower disciples, student leaders, and ministry workers for Life Ministry Kenya. This app is more than just a tool—it's a spiritual lifeline designed to help every believer become a multiplying disciple of Jesus.

It is localized, offline-ready, and spiritually intentional. Whether in Nairobi’s universities or the remotest rural village, this app is designed for one purpose: to help every believer become a multiplying disciple of Jesus.

## ✨ Key Features

Multiply360 is packed with features to help you stay spiritually connected, organized, and mission-focused:

*   **Dashboard:** Get a high-level overview of ministry growth, including discipleship stats, regional engagement, and recent activities.
*   **Activity Logging:** Easily log evangelism, discipleship, and training events with a mobile-first form.
*   **AI-Powered Summarizer:** Leverage Genkit and Google's Gemini models to summarize and translate field notes into local languages like Kiswahili, Luo, and more.
*   **Ministry Toolkit & Language Hub:** Access a centralized library of resources like PDFs, videos, and articles, available in multiple languages.
*   **Prayer Network:** Join a community of prayer warriors. Submit prayer requests, see praise reports, and stand with others in prayer.
*   **Faith Challenges & Mission Tracker:** Engage in spiritual growth campaigns, track personal goals, and celebrate milestones with badges.
*   **Leadership Academy:** Access courses on discipleship, leadership, and evangelism to equip you for ministry.
*   **Impact Stories:** Read and share powerful testimonies of transformation from across the country.
*   **Partner's Corner:** A dedicated space for ministry partners to see the impact of their giving and support specific projects.
*   **Light & Dark Mode:** A beautiful and accessible UI that adapts to your environment.

## 🚀 Tech Stack

This project is built with a modern, robust, and scalable tech stack, designed for a great developer and user experience.

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Generative AI:** [Genkit (Google)](https://firebase.google.com/docs/genkit)
*   **Authentication & Backend:** [Firebase](https://firebase.google.com/)

## ⚙️ Getting Started

To get the application running locally, follow these steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation & Running the App

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Firebase and Genkit API keys.
    ```
    # Firebase configuration (if you connect it to your own project)
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    # ... other Firebase config variables

    # Genkit/Google AI configuration
    GEMINI_API_KEY=...
    ```

4.  **Run the development server:**
    The app runs on two concurrent processes: one for the Next.js frontend and one for the Genkit AI flows.

    *   **Start the Next.js app:**
        ```bash
        npm run dev
        ```
        This will start the frontend on `http://localhost:9002`.

    *   **Start the Genkit server (in a separate terminal):**
        ```bash
        npm run genkit:watch
        ```
        This starts the Genkit development server and watches for changes in your AI flows.

## 📂 Project Structure

The project follows a standard Next.js App Router structure with some key directories:

```
/src
├── app/                  # Main application routes and pages
├── components/           # Shared React components (UI, layout, etc.)
│   ├── ui/               # ShadCN UI components
├── ai/                   # All Genkit-related code
│   ├── flows/            # Genkit flows (e.g., summarize-flow.ts)
│   └── genkit.ts         # Genkit configuration
├── lib/                  # Utility functions and data
├── hooks/                # Custom React hooks
└── styles/               # Global styles
```

## 🤖 AI & Genkit

This application uses **Genkit** to integrate powerful generative AI features. The core AI logic is located in `src/ai/flows`. Each flow is a self-contained module that defines an AI-powered task, such as summarizing text. These flows are then called from the frontend components to provide a seamless user experience.

---

Thank you for being part of this mission. May our work bring glory to God and advance His kingdom in Kenya and beyond.
